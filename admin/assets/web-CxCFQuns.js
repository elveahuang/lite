var t=(i,n,o)=>new Promise((r,w)=>{var a=s=>{try{e(o.next(s))}catch(l){w(l)}},c=s=>{try{e(o.throw(s))}catch(l){w(l)}},e=s=>s.done?r(s.value):Promise.resolve(s.value).then(a,c);e((o=o.apply(i,n)).next())});import{aL as d}from"./index-B93M4G1f.js";class u extends d{constructor(){super(),this._lastWindow=null}open(n){return t(this,null,function*(){this._lastWindow=window.open(n.url,n.windowName||"_blank")})}close(){return t(this,null,function*(){return new Promise((n,o)=>{this._lastWindow!=null?(this._lastWindow.close(),this._lastWindow=null,n()):o("No active window to close!")})})}}const h=new u;export{h as Browser,u as BrowserWeb};
