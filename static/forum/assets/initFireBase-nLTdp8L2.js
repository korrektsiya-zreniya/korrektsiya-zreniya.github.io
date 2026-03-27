import{r as i,i as o,h as r,j as n,k as a}from"./index-Bt42T8Kd.js";import{getAuth as p,onAuthStateChanged as g}from"./index.esm-BrdPzmht.js";var d="firebase",m="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */i(d,m,"app");const c={apiKey:"AIzaSyBt4skmGtebN0Hq_kTRfBBQRT1UQYWY7mE",appId:"1:314869050980:web:4d85c677a29ed6e1da3971",authDomain:"korrektsiya-zreniya.firebaseapp.com",measurementId:"G-QW4CF9TPEZ",messagingSenderId:"314869050980",projectId:"korrektsiya-zreniya",storageBucket:"korrektsiya-zreniya.firebasestorage.app"},s=o(c),h=r(s);n.set({app:s,db:h});const t=p();g(t,async e=>{e?(console.log("onAuthStateChanged signed in:",e.email),a.set({auth:t,user:e})):(console.log("onAuthStateChanged signed out"),a.set(null))});
