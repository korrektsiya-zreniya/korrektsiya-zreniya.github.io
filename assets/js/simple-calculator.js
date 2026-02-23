document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('simple-calc-form');
    if (!form) return;

    // Elements
    var sphEl = document.getElementById('sc-sph');
    var cylEl = document.getElementById('sc-cyl');
    var axisEl = document.getElementById('sc-axis');
    var pachEl = document.getElementById('sc-pach');
    var ageEl = document.getElementById('sc-age');
    var canvasEl = document.getElementById('sc-ablation-canvas');
    var legendEl = document.getElementById('sc-legend');
    var legendMaxEl = document.getElementById('sc-legend-max');

    // Fixed constants
    var OZ = 6.5; // mm
    var PLATFORM_MULT = 1.15;
    var FLAP_VALUES = { lasik: 100, smile: 120, prk: 50 };

    // Method result elements
    var methods = ['lasik', 'smile', 'prk'];

    function getMethodEls(method) {
        return {
            ad: document.getElementById('sc-ad-' + method),
            flap: document.getElementById('sc-flap-' + method),
            rsb: document.getElementById('sc-rsb-' + method),
            pta: document.getElementById('sc-pta-' + method),
            score: document.getElementById('sc-score-' + method),
            verdict: document.getElementById('sc-verdict-' + method)
        };
    }

    // Bind inputs
    var allInputs = form.querySelectorAll('input');
    for (var i = 0; i < allInputs.length; i++) {
        allInputs[i].addEventListener('input', recalc);
        allInputs[i].addEventListener('change', recalc);
    }

    // Lock axis when cyl=0
    function updateAxisLock() {
        var cyl = parseFloat(cylEl.value) || 0;
        if (Math.abs(cyl) < 0.25) {
            axisEl.disabled = true;
            axisEl.style.opacity = '0.4';
        } else {
            axisEl.disabled = false;
            axisEl.style.opacity = '1';
        }
    }
    cylEl.addEventListener('input', updateAxisLock);
    cylEl.addEventListener('change', updateAxisLock);

    function recalc() {
        updateAxisLock();

        var sph = parseFloat(sphEl.value) || 0;
        var cyl = parseFloat(cylEl.value) || 0;
        var axis = parseFloat(axisEl.value) || 0;
        var pach = parseFloat(pachEl.value) || 0;
        var age = parseInt(ageEl.value) || 0;

        // Ablation depth (same for all methods — only tissue removal by laser)
        var powerAtAxis = Math.abs(sph);
        var powerPerpAxis = Math.abs(sph + cyl);
        var maxPower = Math.max(powerAtAxis, powerPerpAxis);
        var ad = (Math.pow(OZ, 2) * maxPower) / 3;
        ad = ad * PLATFORM_MULT;

        var adText = '-';
        if (ad > 0) {
            if (Math.abs(cyl) > 0.25) {
                var minPower = Math.min(powerAtAxis, powerPerpAxis);
                var minAd = ((Math.pow(OZ, 2) * minPower) / 3) * PLATFORM_MULT;
                adText = minAd.toFixed(1) + '–' + ad.toFixed(1) + ' мкм';
            } else {
                adText = ad.toFixed(1) + ' мкм';
            }
        }

        // MRSE
        var mrse = sph + (cyl / 2);

        // Calculate for each method
        for (var m = 0; m < methods.length; m++) {
            var method = methods[m];
            var els = getMethodEls(method);
            var flap = FLAP_VALUES[method];

            els.ad.innerText = adText;
            els.flap.innerText = flap + ' мкм';

            if (ad === 0 || pach === 0) {
                els.rsb.innerText = '-';
                els.pta.innerText = '-';
                els.score.innerText = '-';
                els.verdict.innerHTML = '-';
                continue;
            }

            // RSB
            var rsb = pach - flap - ad;
            els.rsb.innerText = rsb.toFixed(0) + ' мкм';
            els.rsb.style.color = rsb >= 300 ? '#2e7d32' : rsb >= 280 ? '#e65100' : '#c62828';
            els.rsb.style.fontWeight = 'bold';

            // PTA
            var pta = ((flap + ad) / pach) * 100;
            els.pta.innerText = pta.toFixed(1) + '%';
            els.pta.style.color = pta < 40 ? '#2e7d32' : pta <= 45 ? '#e65100' : '#c62828';
            els.pta.style.fontWeight = 'bold';

            // Score (Randleman)
            var score = 0;
            // topo=0 (assumed normal)
            // RSB
            if (rsb > 300) score += 0;
            else if (rsb >= 280) score += 1;
            else if (rsb >= 260) score += 2;
            else if (rsb >= 240) score += 3;
            else score += 4;
            // Age
            if (age >= 30) score += 0;
            else if (age >= 26) score += 1;
            else if (age >= 22) score += 2;
            else if (age >= 18) score += 3;
            else score += 4;
            // Pachymetry
            if (pach > 510) score += 0;
            else if (pach >= 496) score += 1;
            else if (pach >= 481) score += 2;
            else if (pach >= 466) score += 3;
            else score += 4;
            // MRSE
            if (mrse > -8) score += 0;
            else if (mrse >= -10) score += 1;
            else if (mrse >= -12) score += 2;
            else if (mrse >= -14) score += 3;
            else score += 4;

            els.score.innerText = score;

            // Verdict
            var verdict = '';
            if (rsb < 250) {
                verdict = '<span style="color:#c62828; font-weight:bold;">⛔ Противопоказано</span>';
            } else if (score <= 2) {
                if (pta > 40) {
                    verdict = '<span style="color:#e65100; font-weight:bold;">⚠️ Опасно (PTA>' + pta.toFixed(0) + '%)</span>';
                } else {
                    verdict = '<span style="color:#2e7d32; font-weight:bold;">✅ Допустимо</span>';
                }
            } else if (score === 3) {
                verdict = '<span style="color:#e65100; font-weight:bold;">⚠️ Сомнительно</span>';
            } else {
                verdict = '<span style="color:#c62828; font-weight:bold;">⛔ Противопоказано</span>';
            }
            els.verdict.innerHTML = verdict;
        }

        // Draw ablation profile
        if (sph === 0 && cyl === 0) {
            clearCanvas(canvasEl, legendEl, legendMaxEl);
        } else {
            drawAblation(canvasEl, legendEl, legendMaxEl, sph, cyl, axis, OZ, ad);
        }
    }

    // ============ ABLATION PROFILE CANVAS ============

    function depthToColor(t) {
        if (t <= 0) return [0, 180, 0];
        if (t < 0.15) return lerpC([0, 180, 0], [255, 255, 0], t / 0.15);
        if (t < 0.35) return lerpC([255, 255, 0], [255, 165, 0], (t - 0.15) / 0.2);
        if (t < 0.55) return lerpC([255, 165, 0], [255, 50, 0], (t - 0.35) / 0.2);
        if (t < 0.75) return lerpC([255, 50, 0], [200, 0, 50], (t - 0.55) / 0.2);
        if (t < 0.9) return lerpC([200, 0, 50], [150, 0, 150], (t - 0.75) / 0.15);
        return lerpC([150, 0, 150], [100, 0, 200], (t - 0.9) / 0.1);
    }

    function lerpC(a, b, t) {
        t = Math.max(0, Math.min(1, t));
        return [
            Math.round(a[0] + (b[0] - a[0]) * t),
            Math.round(a[1] + (b[1] - a[1]) * t),
            Math.round(a[2] + (b[2] - a[2]) * t)
        ];
    }

    function clearCanvas(canvas, legendCanvas, legendMax) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = '#f5f5f5';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        drawGrid(ctx, canvas.width, canvas.height, 4.0);
        var lctx = legendCanvas.getContext('2d');
        lctx.clearRect(0, 0, legendCanvas.width, legendCanvas.height);
        legendMax.innerText = '0 мкм';
    }

    function drawGrid(ctx, w, h, radiusMm) {
        var cx = w / 2, cy = h / 2;
        var scale = (w / 2 - 10) / radiusMm;
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 0.5;
        for (var r = 1; r <= radiusMm; r++) {
            ctx.beginPath();
            ctx.arc(cx, cy, r * scale, 0, Math.PI * 2);
            ctx.stroke();
        }
        ctx.beginPath();
        ctx.moveTo(10, cy); ctx.lineTo(w - 10, cy);
        ctx.moveTo(cx, 10); ctx.lineTo(cx, h - 10);
        ctx.stroke();
        ctx.fillStyle = '#999';
        ctx.font = '9px sans-serif';
        ctx.textAlign = 'center';
        for (var r = 1; r <= radiusMm; r++) {
            ctx.fillText(r.toFixed(0), cx + r * scale, cy + 12);
            ctx.fillText(r.toFixed(0), cx - r * scale, cy + 12);
        }
    }

    function drawAblation(canvas, legendCanvas, legendMaxEl, sph, cyl, axis, oz, maxAd) {
        var ctx = canvas.getContext('2d');
        var w = canvas.width, h = canvas.height;
        var cx = w / 2, cy = h / 2;
        var radiusMm = 4.0;
        var scale = (w / 2 - 10) / radiusMm;
        var ozR = oz / 2;
        var tzBlend = 0.8;

        var imgData = ctx.createImageData(w, h);
        var data = imgData.data;
        var axisRad = (axis * Math.PI) / 180;

        // Bitoric Paraboloid Ablation Profile
        var P_x = sph;
        var P_y = sph + cyl;
        var minSag = Math.min(0, P_x, P_y);
        var maxSag = Math.max(0, P_x, P_y);
        var maxShape = maxSag - minSag;

        for (var py = 0; py < h; py++) {
            for (var px = 0; px < w; px++) {
                var xMm = (px - cx) / scale;
                var yMm = (py - cy) / scale;
                var r = Math.sqrt(xMm * xMm + yMm * yMm);
                var angle = Math.atan2(-yMm, xMm);

                var depth = 0;
                var rNorm = r / ozR;

                if (rNorm <= 1) {
                    var x_norm = rNorm * Math.cos(angle - axisRad);
                    var y_norm = rNorm * Math.sin(angle - axisRad);
                    var sag = P_x * x_norm * x_norm + P_y * y_norm * y_norm;
                    var shape = sag - minSag;
                    var normalizedDepth = maxShape !== 0 ? (shape / maxShape) : 0;
                    depth = normalizedDepth * maxAd;
                } else if (r <= ozR + tzBlend) {
                    var x_edge = 1.0 * Math.cos(angle - axisRad);
                    var y_edge = 1.0 * Math.sin(angle - axisRad);
                    var edgeSag = P_x * x_edge * x_edge + P_y * y_edge * y_edge;
                    var edgeShape = edgeSag - minSag;
                    var normalizedEdgeDepth = maxShape !== 0 ? (edgeShape / maxShape) : 0;
                    var edgeDepth = normalizedEdgeDepth * maxAd;
                    var blendT = (r - ozR) / tzBlend;
                    var blend = (1 - blendT);
                    blend = blend * blend * blend;
                    depth = edgeDepth * blend;
                }

                depth = Math.max(0, depth);

                var colorT = maxAd > 0 ? depth / maxAd : 0;
                var c = depthToColor(colorT);

                if (r <= radiusMm) {
                    var idx = (py * w + px) * 4;
                    data[idx] = c[0];
                    data[idx + 1] = c[1];
                    data[idx + 2] = c[2];
                    data[idx + 3] = depth > 0.01 ? 220 : 40;
                }
            }
        }

        ctx.putImageData(imgData, 0, 0);
        drawGrid(ctx, w, h, radiusMm);

        // OZ circle
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(cx, cy, ozR * scale, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Axis line
        if (Math.abs(cyl) > 0.25) {
            ctx.strokeStyle = 'rgba(255,255,255,0.6)';
            ctx.lineWidth = 1;
            ctx.setLineDash([2, 3]);
            var axisLen = ozR * scale + 15;
            ctx.beginPath();
            ctx.moveTo(cx - Math.cos(axisRad) * axisLen, cy + Math.sin(axisRad) * axisLen);
            ctx.lineTo(cx + Math.cos(axisRad) * axisLen, cy - Math.sin(axisRad) * axisLen);
            ctx.stroke();
            ctx.setLineDash([]);
            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.font = '9px sans-serif';
            ctx.textAlign = 'center';
            var labelR = ozR * scale + 22;
            ctx.fillText(axis + '°', cx + Math.cos(axisRad) * labelR, cy - Math.sin(axisRad) * labelR + 3);
        }

        // Center dot
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(cx, cy, 2, 0, Math.PI * 2);
        ctx.fill();

        // Legend
        var lctx = legendCanvas.getContext('2d');
        var lw = legendCanvas.width, lh = legendCanvas.height;
        for (var x = 0; x < lw; x++) {
            var tt = x / lw;
            var cc = depthToColor(tt);
            lctx.fillStyle = 'rgb(' + cc[0] + ',' + cc[1] + ',' + cc[2] + ')';
            lctx.fillRect(x, 0, 1, lh);
        }
        legendMaxEl.innerText = maxAd.toFixed(1) + ' мкм';
    }

    // Initial
    updateAxisLock();
    recalc();
});
