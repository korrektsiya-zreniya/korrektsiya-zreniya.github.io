document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementById('refractive-form');
    if (!form) return;

    // Shared elements
    var ageEl = document.getElementById('calc-age');
    var procEl = document.getElementById('calc-procedure');
    var platformEl = document.getElementById('calc-platform');

    // Per-eye element getters
    function getEyeEls(eye) {
        return {
            sph: document.getElementById('calc-sph-' + eye),
            cyl: document.getElementById('calc-cyl-' + eye),
            axis: document.getElementById('calc-axis-' + eye),
            pach: document.getElementById('calc-pach-' + eye),
            topo: document.getElementById('calc-topo-' + eye),
            oz: document.getElementById('calc-oz-' + eye),
            pupil: document.getElementById('calc-pupil-' + eye),
            flap: document.getElementById('calc-flap-' + eye),
            resMrse: document.getElementById('res-mrse-' + eye),
            resAd: document.getElementById('res-ad-' + eye),
            resRsb: document.getElementById('res-rsb-' + eye),
            resPta: document.getElementById('res-pta-' + eye),
            resScore: document.getElementById('res-score-' + eye),
            resRec: document.getElementById('res-rec-' + eye),
            barRsb: document.getElementById('bar-rsb-' + eye),
            barPta: document.getElementById('bar-pta-' + eye),
            canvas: document.getElementById('ablation-canvas-' + eye),
            legend: document.getElementById('legend-' + eye),
            legendMax: document.getElementById('legend-max-' + eye),
            warnPupil: document.getElementById('warn-pupil-' + eye)
        };
    }

    // Bind all inputs
    var allInputs = form.querySelectorAll('.calc-input, .calc-select');
    for (var i = 0; i < allInputs.length; i++) {
        allInputs[i].addEventListener('input', recalcAll);
        allInputs[i].addEventListener('change', recalcAll);
    }

    // Procedure change: update flap defaults
    procEl.addEventListener('change', function() {
        var v = this.value;
        ['od', 'os'].forEach(function(eye) {
            var flapEl = document.getElementById('calc-flap-' + eye);
            if (v === 'prk') flapEl.value = 50;
            else if (v === 'lasik') { if (flapEl.value < 90 || flapEl.value > 120) flapEl.value = 100; }
            else if (v === 'smile') { if (flapEl.value < 110 || flapEl.value > 140) flapEl.value = 120; }
        });
        recalcAll();
    });

    function recalcAll() {
        calcEye('od');
        calcEye('os');
    }

    function calcEye(eye) {
        var e = getEyeEls(eye);
        var age = parseInt(ageEl.value) || 0;
        var platformMult = parseFloat(platformEl.value) || 1.15;
        var sph = parseFloat(e.sph.value) || 0;
        var cyl = parseFloat(e.cyl.value) || 0;
        var axis = parseFloat(e.axis.value) || 0;
        var pach = parseFloat(e.pach.value) || 0;
        var oz = parseFloat(e.oz.value) || 0;
        var pupil = parseFloat(e.pupil.value) || 0;
        var flap = parseFloat(e.flap.value) || 0;
        var topo = parseInt(e.topo.value) || 0;

        // Warn if pupil > OZ
        if (pupil > 0 && oz > 0 && oz < pupil) {
            e.warnPupil.style.display = 'block';
        } else {
            e.warnPupil.style.display = 'none';
        }

        // MRSE (for ectasia risk scoring)
        var mrse = sph + (cyl / 2);
        e.resMrse.innerText = mrse.toFixed(2) + ' D';

        // Ablation depth by Munnerlyn formula
        // For toric ablation, max depth is determined by the steepest meridian
        var powerAtAxis = Math.abs(sph);        // power along cylinder axis
        var powerPerpAxis = Math.abs(sph + cyl); // power perpendicular to axis
        var maxPower = Math.max(powerAtAxis, powerPerpAxis);
        var ad = (Math.pow(oz, 2) * maxPower) / 3;
        ad = ad * platformMult; // platform-specific transition zone multiplier
        if (ad === 0) { e.resAd.innerText = '-'; }
        else {
            if (Math.abs(cyl) > 0.25) {
                var minPower = Math.min(powerAtAxis, powerPerpAxis);
                var minAd = ((Math.pow(oz, 2) * minPower) / 3) * platformMult;
                e.resAd.innerText = minAd.toFixed(1) + '–' + ad.toFixed(1) + ' мкм (Маннерлин)';
            } else {
                e.resAd.innerText = ad.toFixed(1) + ' мкм (Маннерлин)';
            }
        }

        if (ad === 0 || pach === 0) {
            e.resRsb.innerText = '-'; e.resPta.innerText = '-';
            e.resScore.innerText = '-'; e.resRec.innerText = '-';
            e.barRsb.style.width = '0%'; e.barPta.style.width = '0%';
            clearCanvas(e.canvas, e.legend, e.legendMax);
            return;
        }

        // RSB
        var rsb = pach - flap - ad;
        e.resRsb.innerText = rsb.toFixed(0) + ' мкм';

        // PTA
        var pta = ((flap + ad) / pach) * 100;
        e.resPta.innerText = pta.toFixed(1) + '%';

        // Ectasia Risk Score
        var score = 0;
        score += topo;
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

        e.resScore.innerText = score;

        // Bars
        e.barPta.style.width = Math.min(pta, 100) + '%';
        e.barPta.style.backgroundColor = pta < 40 ? '#4caf50' : pta <= 45 ? '#ff9800' : '#f44336';
        e.barRsb.style.width = Math.min((rsb / 500) * 100, 100) + '%';
        e.barRsb.style.backgroundColor = rsb > 300 ? '#4caf50' : rsb >= 280 ? '#ff9800' : '#f44336';

        // Recommendation
        var rec = '';
        if (rsb < 250) {
            rec = '<span class="risk-badge risk-high">Противопоказано (RSB < 250)</span>';
        } else if (score <= 2) {
            if (pta > 40) rec = '<span class="risk-badge risk-moderate">ФРК предпочтительнее (PTA > 40%)</span>';
            else rec = '<span class="risk-badge risk-low">Низкий риск (LASIK или ФРК)</span>';
        } else if (score === 3) {
            rec = '<span class="risk-badge risk-moderate">Умеренный риск (ФРК)</span>';
        } else {
            rec = '<span class="risk-badge risk-high">Высокий риск (LASIK запрещён)</span>';
        }
        e.resRec.innerHTML = rec;

        // Draw ablation profile
        drawAblation(e.canvas, e.legend, e.legendMax, sph, cyl, axis, oz, ad);
    }

    // ============ ABLATION PROFILE CANVAS ============

    // Jet-like colormap (blue -> green -> yellow -> red -> magenta)
    function depthToColor(t) {
        // t: 0..1, returns [r,g,b]
        if (t <= 0) return [0, 180, 0]; // green for zero
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
        // Clear legend
        var lctx = legendCanvas.getContext('2d');
        lctx.clearRect(0, 0, legendCanvas.width, legendCanvas.height);
        legendMax.innerText = '0 мкм';
    }

    function drawGrid(ctx, w, h, radiusMm) {
        var cx = w / 2, cy = h / 2;
        var scale = (w / 2 - 10) / radiusMm;
        ctx.strokeStyle = '#ccc';
        ctx.lineWidth = 0.5;
        // Concentric circles at 1mm intervals
        for (var r = 1; r <= radiusMm; r++) {
            ctx.beginPath();
            ctx.arc(cx, cy, r * scale, 0, Math.PI * 2);
            ctx.stroke();
        }
        // Cross
        ctx.beginPath();
        ctx.moveTo(10, cy); ctx.lineTo(w - 10, cy);
        ctx.moveTo(cx, 10); ctx.lineTo(cx, h - 10);
        ctx.stroke();
        // Labels
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
        var radiusMm = 4.0; // total visible radius in mm
        var scale = (w / 2 - 10) / radiusMm;
        var ozR = oz / 2; // optical zone radius in mm
        var tzBlend = 0.8; // transition zone blend width in mm (beyond OZ edge)

        // Precompute ablation at each pixel
        var imgData = ctx.createImageData(w, h);
        var data = imgData.data;
        var axisRad = (axis * Math.PI) / 180;
        // Bitoric Paraboloid Ablation Profile (True optical topography change)
        // Cornea reshaping removing a paraboloid representing the power difference.
        // P_x: power along cylinder axis (Sph)
        // P_y: power perpendicular to cylinder axis (Sph + Cyl)
        var P_x = sph; 
        var P_y = sph + cyl;

        // Determine min and max sag on normalized optical zone (rNorm <= 1)
        // Sag function: Sag(x_norm, y_norm) = P_x * x_norm² + P_y * y_norm²
        // To remove tissue, minimum depth must be 0. Shape = Sag - minSag.
        var minSag = Math.min(0, P_x, P_y);
        var maxSag = Math.max(0, P_x, P_y);
        var maxShape = maxSag - minSag; // Total amplitude of topography change

        for (var py = 0; py < h; py++) {
            for (var px = 0; px < w; px++) {
                var xMm = (px - cx) / scale;
                var yMm = (py - cy) / scale;
                var r = Math.sqrt(xMm * xMm + yMm * yMm);
                var angle = Math.atan2(-yMm, xMm); // Y is inverted in canvas vs mathematical standard TABO

                var depth = 0;
                var rNorm = r / ozR; // normalized radius (0=center, 1=OZ edge)

                if (rNorm <= 1) {
                    // Inside Optical Zone
                    var x_norm = rNorm * Math.cos(angle - axisRad);
                    var y_norm = rNorm * Math.sin(angle - axisRad);
                    
                    var sag = P_x * x_norm * x_norm + P_y * y_norm * y_norm;
                    var shape = sag - minSag;
                    
                    var normalizedDepth = maxShape !== 0 ? (shape / maxShape) : 0;
                    depth = normalizedDepth * maxAd;
                } else if (r <= ozR + tzBlend) {
                    // Transition Zone: smooth cubic falloff from edge
                    // Calculate depth exactly at the edge of the OZ for THIS angle
                    var x_edge = 1.0 * Math.cos(angle - axisRad);
                    var y_edge = 1.0 * Math.sin(angle - axisRad);
                    var edgeSag = P_x * x_edge * x_edge + P_y * y_edge * y_edge;
                    var edgeShape = edgeSag - minSag;
                    
                    var normalizedEdgeDepth = maxShape !== 0 ? (edgeShape / maxShape) : 0;
                    var edgeDepth = normalizedEdgeDepth * maxAd;
                    
                    var blendT = (r - ozR) / tzBlend;
                    var blend = (1 - blendT);
                    blend = blend * blend * blend; // cubic falloff
                    depth = edgeDepth * blend;
                }

                depth = Math.max(0, depth);

                // Color mapping
                var colorT = maxAd > 0 ? depth / maxAd : 0;
                var c = depthToColor(colorT);

                // Only color inside the cornea circle (radiusMm)
                if (r <= radiusMm) {
                    var idx = (py * w + px) * 4;
                    data[idx] = c[0];
                    data[idx + 1] = c[1];
                    data[idx + 2] = c[2];
                    data[idx + 3] = depth > 0.01 ? 220 : 40; // alpha: transparent outside zone
                } 
            }
        }

        ctx.putImageData(imgData, 0, 0);

        // Draw grid on top
        drawGrid(ctx, w, h, radiusMm);

        // Draw OZ circle (dashed)
        ctx.strokeStyle = '#fff';
        ctx.lineWidth = 1.5;
        ctx.setLineDash([4, 4]);
        ctx.beginPath();
        ctx.arc(cx, cy, ozR * scale, 0, Math.PI * 2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw axis indicator lines (show cylinder axis orientation)
        if (Math.abs(cyl) > 0.25) {
            ctx.strokeStyle = 'rgba(255,255,255,0.6)';
            ctx.lineWidth = 1;
            ctx.setLineDash([2, 3]);
            var axisLen = ozR * scale + 15;
            ctx.beginPath();
            ctx.moveTo(cx - Math.cos(axisRad) * axisLen, cy - Math.sin(axisRad) * axisLen);
            ctx.lineTo(cx + Math.cos(axisRad) * axisLen, cy + Math.sin(axisRad) * axisLen);
            ctx.stroke();
            ctx.setLineDash([]);
            // Label the axis
            ctx.fillStyle = 'rgba(255,255,255,0.8)';
            ctx.font = '9px sans-serif';
            ctx.textAlign = 'center';
            var labelR = ozR * scale + 22;
            ctx.fillText(axis + '°', cx + Math.cos(axisRad) * labelR, cy + Math.sin(axisRad) * labelR + 3);
        }

        // Center dot
        ctx.fillStyle = '#fff';
        ctx.beginPath();
        ctx.arc(cx, cy, 2, 0, Math.PI * 2);
        ctx.fill();

        // Draw legend bar
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

    // Initialize both eyes
    recalcAll();
});
