var l=(m,n,e)=>new Promise((c,a)=>{var r=o=>{try{d(e.next(o))}catch(i){a(i)}},t=o=>{try{d(e.throw(o))}catch(i){a(i)}},d=o=>o.done?c(o.value):Promise.resolve(o.value).then(r,t);d((e=e.apply(m,n)).next())});import{W as b,C as S,H as p}from"./index-D3C-bcFx.js";class h extends b{stopAndHideScanner(){return l(this,null,function*(){console.log(window.OSBarcodeWebScanner),window.OSBarcodeWebScanner&&(yield window.OSBarcodeWebScanner.stop(),window.OSBarcodeWebScanner=null),document.getElementById("cap-os-barcode-scanner-container-dialog").style.display="none"})}buildScannerElement(){if(document.getElementById("cap-os-barcode-scanner-container")){document.getElementById("cap-os-barcode-scanner-container").className="scanner-container-display";return}const n=document.body.appendChild(document.createElement("div"));n.id="cap-os-barcode-scanner-container";const e=document.createElement("div");e.id="cap-os-barcode-scanner-container-dialog",e.className="scanner-dialog";const c=document.createElement("div");c.className="scanner-dialog-inner";const a=document.createElement("span");a.className="close-button",a.innerHTML="&times;",c.appendChild(a);const r=document.createElement("p");r.innerHTML="&nbsp;",c.appendChild(r);const t=document.createElement("div");t.className="scanner-container-full-width",t.id="cap-os-barcode-scanner-container-scanner",c.appendChild(t),e.appendChild(c),n.appendChild(e),a.onclick=this.stopAndHideScanner}scanBarcode(n){return l(this,null,function*(){return this.buildScannerElement(),document.getElementById("cap-os-barcode-scanner-container-dialog").style.display="block",new Promise((e,c)=>{var a,r;const t={facingMode:n.cameraDirection===1?"environment":"user",hasScannerButton:!1,scanButton:n.scanButton===void 0?!1:n.scanButton,showScanLine:!1,scanInstructions:n.scanInstructions?n.scanInstructions:"",orientation:n.scanOrientation?n.scanOrientation:S.PORTRAIT,showCameraSelection:!((a=n.web)===null||a===void 0)&&a.showCameraSelection?n.web.showCameraSelection:!1,typeHint:n.hint===17?void 0:n.hint,scannerFPS:!((r=n.web)===null||r===void 0)&&r.scannerFPS?n.web.scannerFPS:50},d=document.getElementById("cap-os-barcode-scanner-container-scanner");if(!d)throw new Error("Scanner Element is required for web");window.OSBarcodeWebScanner=new p(d.id);const o={fps:t.scannerFPS,qrbox:d.getBoundingClientRect().width*(9/16)-10,aspectRatio:16/9,videoConstraints:{focusMode:"continuous",height:{min:576,ideal:1920},deviceId:void 0,facingMode:void 0}},i=(s,w)=>{this.stopAndHideScanner(),e({ScanResult:s})},u=s=>{s.indexOf("NotFoundException")===-1&&(this.stopAndHideScanner(),console.error(`[Scanner Web Error] ${s}`),c(s))};window.OSBarcodeWebScanner.start({facingMode:t.facingMode},o,i,u)})})}}export{h as CapacitorBarcodeScannerWeb};