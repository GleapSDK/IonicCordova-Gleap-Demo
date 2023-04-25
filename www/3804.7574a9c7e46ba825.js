"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3804],{3804:(oe,K,u)=>{u.r(K),u.d(K,{ion_popover:()=>Q});var I=u(5861),f=u(9816),R=u(6406),j=u(6782),w=u(3577),F=u(1178),O=u(1397),v=u(2854),m=u(2998),c=u(9613);u(3457);const W=(t,e,r)=>{const o=e.getBoundingClientRect(),i=o.height;let n=o.width;return"cover"===t&&r&&(n=r.getBoundingClientRect().width),{contentWidth:n,contentHeight:i}},ne=(t,e,r)=>{let o=[];switch(e){case"hover":let i;o=[{eventName:"mouseenter",callback:(n=(0,I.Z)(function*(s){s.stopPropagation(),i&&clearTimeout(i),i=setTimeout(()=>{(0,w.r)(()=>{r.presentFromTrigger(s),i=void 0})},100)}),function(a){return n.apply(this,arguments)})},{eventName:"mouseleave",callback:n=>{i&&clearTimeout(i);const s=n.relatedTarget;s&&s.closest("ion-popover")!==r&&r.dismiss(void 0,void 0,!1)}},{eventName:"click",callback:n=>n.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:n=>r.presentFromTrigger(n,!0)}];break;case"context-menu":o=[{eventName:"contextmenu",callback:n=>{n.preventDefault(),r.presentFromTrigger(n)}},{eventName:"click",callback:n=>n.stopPropagation()},{eventName:"ionPopoverActivateTrigger",callback:n=>r.presentFromTrigger(n,!0)}];break;default:o=[{eventName:"click",callback:n=>r.presentFromTrigger(n)},{eventName:"ionPopoverActivateTrigger",callback:n=>r.presentFromTrigger(n,!0)}]}var n;return o.forEach(({eventName:i,callback:n})=>t.addEventListener(i,n)),t.setAttribute("data-ion-popover-trigger","true"),()=>{o.forEach(({eventName:i,callback:n})=>t.removeEventListener(i,n)),t.removeAttribute("data-ion-popover-trigger")}},B=(t,e)=>e&&"ION-ITEM"===e.tagName?t.findIndex(r=>r===e):-1,U=t=>{const r=(0,w.g)(t).querySelector("button");r&&(0,w.r)(()=>r.focus())},pe=t=>{const e=function(){var r=(0,I.Z)(function*(o){var i;const n=document.activeElement;let s=[];const a=null===(i=o.target)||void 0===i?void 0:i.tagName;if("ION-POPOVER"===a||"ION-ITEM"===a){try{s=Array.from(t.querySelectorAll("ion-item:not(ion-popover ion-popover *):not([disabled])"))}catch{}switch(o.key){case"ArrowLeft":(yield t.getParentPopover())&&t.dismiss(void 0,void 0,!1);break;case"ArrowDown":o.preventDefault();const l=((t,e)=>t[B(t,e)+1])(s,n);void 0!==l&&U(l);break;case"ArrowUp":o.preventDefault();const y=((t,e)=>t[B(t,e)-1])(s,n);void 0!==y&&U(y);break;case"Home":o.preventDefault();const h=s[0];void 0!==h&&U(h);break;case"End":o.preventDefault();const g=s[s.length-1];void 0!==g&&U(g);break;case"ArrowRight":case" ":case"Enter":if(n&&(t=>t.hasAttribute("data-ion-popover-trigger"))(n)){const b=new CustomEvent("ionPopoverActivateTrigger");n.dispatchEvent(b)}}}});return function(i){return r.apply(this,arguments)}}();return t.addEventListener("keydown",e),()=>t.removeEventListener("keydown",e)},G=(t,e,r,o,i,n,s,a,p,l,y)=>{var h;let g={top:0,left:0,width:0,height:0};if("event"===n){if(!y)return p;g={top:y.clientY,left:y.clientX,width:1,height:1}}else{const L=l||(null===(h=null==y?void 0:y.detail)||void 0===h?void 0:h.ionShadowTarget)||(null==y?void 0:y.target);if(!L)return p;const D=L.getBoundingClientRect();g={top:D.top,left:D.left,width:D.width,height:D.height}}const b=le(s,g,e,r,o,i,t),P=fe(a,s,g,e,r),k=b.top+P.top,A=b.left+P.left,{arrowTop:x,arrowLeft:T}=de(s,o,i,k,A,e,r,t),{originX:_,originY:E}=ce(s,a,t);return{top:k,left:A,referenceCoordinates:g,arrowTop:x,arrowLeft:T,originX:_,originY:E}},ce=(t,e,r)=>{switch(t){case"top":return{originX:H(e),originY:"bottom"};case"bottom":return{originX:H(e),originY:"top"};case"left":return{originX:"right",originY:X(e)};case"right":return{originX:"left",originY:X(e)};case"start":return{originX:r?"left":"right",originY:X(e)};case"end":return{originX:r?"right":"left",originY:X(e)}}},H=t=>{switch(t){case"start":return"left";case"center":return"center";case"end":return"right"}},X=t=>{switch(t){case"start":return"top";case"center":return"center";case"end":return"bottom"}},de=(t,e,r,o,i,n,s,a)=>{const p={arrowTop:o+s/2-e/2,arrowLeft:i+n-e/2},l={arrowTop:o+s/2-e/2,arrowLeft:i-1.5*e};switch(t){case"top":return{arrowTop:o+s,arrowLeft:i+n/2-e/2};case"bottom":return{arrowTop:o-r,arrowLeft:i+n/2-e/2};case"left":return p;case"right":return l;case"start":return a?l:p;case"end":return a?p:l;default:return{arrowTop:0,arrowLeft:0}}},le=(t,e,r,o,i,n,s)=>{const a={top:e.top,left:e.left-r-i},p={top:e.top,left:e.left+e.width+i};switch(t){case"top":return{top:e.top-o-n,left:e.left};case"right":return p;case"bottom":return{top:e.top+e.height+n,left:e.left};case"left":return a;case"start":return s?p:a;case"end":return s?a:p}},fe=(t,e,r,o,i)=>{switch(t){case"center":return ue(e,r,o,i);case"end":return he(e,r,o,i);default:return{top:0,left:0}}},he=(t,e,r,o)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(o-e.height),left:0};default:return{top:0,left:-(r-e.width)}}},ue=(t,e,r,o)=>{switch(t){case"start":case"end":case"left":case"right":return{top:-(o/2-e.height/2),left:0};default:return{top:0,left:-(r/2-e.width/2)}}},J=(t,e,r,o,i,n,s,a,p,l,y,h,g=0,b=0,P=0)=>{let k=g;const A=b;let _,x=r,T=e,E=l,C=y,d=!1,L=!1;const D=h?h.top+h.height:n/2-a/2,S=h?h.height:0;let $=!1;return x<o+p?(x=o,d=!0,E="left"):s+o+x+p>i&&(L=!0,x=i-s-o,E="right"),D+S+a>n&&("top"===t||"bottom"===t)&&(D-a>0?(T=Math.max(12,D-a-S-(P-1)),k=T+a,C="bottom",$=!0):_=o),{top:T,left:x,bottom:_,originX:E,originY:C,checkSafeAreaLeft:d,checkSafeAreaRight:L,arrowTop:k,arrowLeft:A,addPopoverBottomClass:$}},ge=(t,e)=>{var r;const{event:o,size:i,trigger:n,reference:s,side:a,align:p}=e,l=t.ownerDocument,y="rtl"===l.dir,h=l.defaultView.innerWidth,g=l.defaultView.innerHeight,b=(0,w.g)(t),P=b.querySelector(".popover-content"),k=b.querySelector(".popover-arrow"),A=n||(null===(r=null==o?void 0:o.detail)||void 0===r?void 0:r.ionShadowTarget)||(null==o?void 0:o.target),{contentWidth:x,contentHeight:T}=W(i,P,A),{arrowWidth:_,arrowHeight:E}=(t=>{if(!t)return{arrowWidth:0,arrowHeight:0};const{width:e,height:r}=t.getBoundingClientRect();return{arrowWidth:e,arrowHeight:r}})(k),d=G(y,x,T,_,E,s,a,p,{top:g/2-T/2,left:h/2-x/2,originX:y?"right":"left",originY:"top"},n,o),L="cover"===i?0:5,D="cover"===i?0:25,{originX:S,originY:$,top:N,left:M,bottom:Y,checkSafeAreaLeft:V,checkSafeAreaRight:Ae,arrowTop:Te,arrowLeft:Ee,addPopoverBottomClass:Ie}=J(a,d.top,d.left,L,h,g,x,T,D,d.originX,d.originY,d.referenceCoordinates,d.arrowTop,d.arrowLeft,E),Oe=(0,c.c)(),ee=(0,c.c)(),te=(0,c.c)();return ee.addElement(b.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),te.addElement(b.querySelector(".popover-wrapper")).fromTo("opacity",.01,1),Oe.easing("ease").duration(100).beforeAddWrite(()=>{"cover"===i&&t.style.setProperty("--width",`${x}px`),Ie&&t.classList.add("popover-bottom"),void 0!==Y&&P.style.setProperty("bottom",`${Y}px`);let q=`${M}px`;V&&(q=`${M}px + var(--ion-safe-area-left, 0)`),Ae&&(q=`${M}px - var(--ion-safe-area-right, 0)`),P.style.setProperty("top",`calc(${N}px + var(--offset-y, 0))`),P.style.setProperty("left",`calc(${q} + var(--offset-x, 0))`),P.style.setProperty("transform-origin",`${$} ${S}`),null!==k&&(((t,e=!1,r,o)=>!(!r&&!o||"top"!==t&&"bottom"!==t&&e))(a,d.top!==N||d.left!==M,o,n)?(k.style.setProperty("top",`calc(${Te}px + var(--offset-y, 0))`),k.style.setProperty("left",`calc(${Ee}px + var(--offset-x, 0))`)):k.style.setProperty("display","none"))}).addAnimation([ee,te])},be=t=>{const e=(0,w.g)(t),r=e.querySelector(".popover-content"),o=e.querySelector(".popover-arrow"),i=(0,c.c)(),n=(0,c.c)(),s=(0,c.c)();return n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),s.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),i.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin"),o&&(o.style.removeProperty("top"),o.style.removeProperty("left"),o.style.removeProperty("display"))}).duration(300).addAnimation([n,s])},we=(t,e)=>{var r;const{event:o,size:i,trigger:n,reference:s,side:a,align:p}=e,l=t.ownerDocument,y="rtl"===l.dir,h=l.defaultView.innerWidth,g=l.defaultView.innerHeight,b=(0,w.g)(t),P=b.querySelector(".popover-content"),k=n||(null===(r=null==o?void 0:o.detail)||void 0===r?void 0:r.ionShadowTarget)||(null==o?void 0:o.target),{contentWidth:A,contentHeight:x}=W(i,P,k),_=G(y,A,x,0,0,s,a,p,{top:g/2-x/2,left:h/2-A/2,originX:y?"right":"left",originY:"top"},n,o),E="cover"===i?0:12,{originX:C,originY:d,top:L,left:D,bottom:S}=J(a,_.top,_.left,E,h,g,A,x,0,_.originX,_.originY,_.referenceCoordinates),$=(0,c.c)(),N=(0,c.c)(),M=(0,c.c)(),Y=(0,c.c)(),V=(0,c.c)();return N.addElement(b.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),M.addElement(b.querySelector(".popover-wrapper")).duration(150).fromTo("opacity",.01,1),Y.addElement(P).beforeStyles({top:`calc(${L}px + var(--offset-y, 0px))`,left:`calc(${D}px + var(--offset-x, 0px))`,"transform-origin":`${d} ${C}`}).beforeAddWrite(()=>{void 0!==S&&P.style.setProperty("bottom",`${S}px`)}).fromTo("transform","scale(0.8)","scale(1)"),V.addElement(b.querySelector(".popover-viewport")).fromTo("opacity",.01,1),$.easing("cubic-bezier(0.36,0.66,0.04,1)").duration(300).beforeAddWrite(()=>{"cover"===i&&t.style.setProperty("--width",`${A}px`),"bottom"===d&&t.classList.add("popover-bottom")}).addAnimation([N,M,Y,V])},ye=t=>{const e=(0,w.g)(t),r=e.querySelector(".popover-content"),o=(0,c.c)(),i=(0,c.c)(),n=(0,c.c)();return i.addElement(e.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),n.addElement(e.querySelector(".popover-wrapper")).fromTo("opacity",.99,0),o.easing("ease").afterAddWrite(()=>{t.style.removeProperty("--width"),t.classList.remove("popover-bottom"),r.style.removeProperty("top"),r.style.removeProperty("left"),r.style.removeProperty("bottom"),r.style.removeProperty("transform-origin")}).duration(150).addAnimation([i,n])},Q=class{constructor(t){(0,f.r)(this,t),this.didPresent=(0,f.d)(this,"ionPopoverDidPresent",7),this.willPresent=(0,f.d)(this,"ionPopoverWillPresent",7),this.willDismiss=(0,f.d)(this,"ionPopoverWillDismiss",7),this.didDismiss=(0,f.d)(this,"ionPopoverDidDismiss",7),this.didPresentShorthand=(0,f.d)(this,"didPresent",7),this.willPresentShorthand=(0,f.d)(this,"willPresent",7),this.willDismissShorthand=(0,f.d)(this,"willDismiss",7),this.didDismissShorthand=(0,f.d)(this,"didDismiss",7),this.ionMount=(0,f.d)(this,"ionMount",7),this.parentPopover=null,this.popoverIndex=De++,this.coreDelegate=(0,j.C)(),this.inline=!1,this.focusDescendantOnPresent=!1,this.onBackdropTap=()=>{this.dismiss(void 0,O.B)},this.onLifecycle=e=>{const r=this.usersElement,o=_e[e.type];if(r&&o){const i=new CustomEvent(o,{bubbles:!1,cancelable:!1,detail:e.detail});r.dispatchEvent(i)}},this.configureTriggerInteraction=()=>{const{trigger:e,triggerAction:r,el:o,destroyTriggerInteraction:i}=this;if(i&&i(),void 0===e)return;const n=this.triggerEl=void 0!==e?document.getElementById(e):null;n?this.destroyTriggerInteraction=ne(n,r,o):(0,F.p)(`A trigger element with the ID "${e}" was not found in the DOM. The trigger element must be in the DOM when the "trigger" property is set on ion-popover.`,this.el)},this.configureKeyboardInteraction=()=>{const{destroyKeyboardInteraction:e,el:r}=this;e&&e(),this.destroyKeyboardInteraction=pe(r)},this.configureDismissInteraction=()=>{const{destroyDismissInteraction:e,parentPopover:r,triggerAction:o,triggerEl:i,el:n}=this;!r||!i||(e&&e(),this.destroyDismissInteraction=((t,e,r,o)=>{let i=[];const s=(0,w.g)(o).querySelector(".popover-content");return i="hover"===e?[{eventName:"mouseenter",callback:a=>{document.elementFromPoint(a.clientX,a.clientY)!==t&&r.dismiss(void 0,void 0,!1)}}]:[{eventName:"click",callback:a=>{a.target.closest("[data-ion-popover-trigger]")!==t?r.dismiss(void 0,void 0,!1):a.stopPropagation()}}],i.forEach(({eventName:a,callback:p})=>s.addEventListener(a,p)),()=>{i.forEach(({eventName:a,callback:p})=>s.removeEventListener(a,p))}})(i,o,n,r))},this.presented=!1,this.hasController=!1,this.delegate=void 0,this.overlayIndex=void 0,this.enterAnimation=void 0,this.leaveAnimation=void 0,this.component=void 0,this.componentProps=void 0,this.keyboardClose=!0,this.cssClass=void 0,this.backdropDismiss=!0,this.event=void 0,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.htmlAttributes=void 0,this.triggerAction="click",this.trigger=void 0,this.size="auto",this.dismissOnSelect=!1,this.reference="trigger",this.side="bottom",this.alignment=void 0,this.arrow=!0,this.isOpen=!1,this.keyboardEvents=!1,this.keepContentsMounted=!1}onTriggerChange(){this.configureTriggerInteraction()}onIsOpenChange(t,e){!0===t&&!1===e?this.present():!1===t&&!0===e&&this.dismiss()}connectedCallback(){const{configureTriggerInteraction:t,el:e}=this;(0,O.j)(e),t()}disconnectedCallback(){const{destroyTriggerInteraction:t}=this;t&&t()}componentWillLoad(){this.popoverId=this.el.hasAttribute("id")?this.el.getAttribute("id"):`ion-popover-${this.popoverIndex}`,this.parentPopover=this.el.closest(`ion-popover:not(#${this.popoverId})`),void 0===this.alignment&&(this.alignment="ios"===(0,R.b)(this)?"center":"start")}componentDidLoad(){const{parentPopover:t,isOpen:e}=this;!0===e&&(0,w.r)(()=>this.present()),t&&(0,w.a)(t,"ionPopoverWillDismiss",()=>{this.dismiss(void 0,void 0,!1)})}presentFromTrigger(t,e=!1){var r=this;return(0,I.Z)(function*(){r.focusDescendantOnPresent=e,yield r.present(t),r.focusDescendantOnPresent=!1})()}getDelegate(t=!1){if(this.workingDelegate&&!t)return{delegate:this.workingDelegate,inline:this.inline};const r=this.inline=null!==this.el.parentNode&&!this.hasController;return{inline:r,delegate:this.workingDelegate=r?this.delegate||this.coreDelegate:this.delegate}}present(t){var e=this;return(0,I.Z)(function*(){if(e.presented)return;void 0!==e.currentTransition&&(yield e.currentTransition);const{el:r}=e,{inline:o,delegate:i}=e.getDelegate(!0);return e.usersElement=yield(0,j.a)(i,r,e.component,["popover-viewport"],e.componentProps,o),(0,w.m)(r)&&(yield(0,m.e)(e.usersElement)),e.keyboardEvents||e.configureKeyboardInteraction(),e.configureDismissInteraction(),e.ionMount.emit(),new Promise(n=>{(0,w.r)(()=>{(0,w.r)((0,I.Z)(function*(){e.currentTransition=(0,O.f)(e,"popoverEnter",ge,we,{event:t||e.event,size:e.size,trigger:e.triggerEl,reference:e.reference,side:e.side,align:e.alignment}),yield e.currentTransition,e.currentTransition=void 0,e.focusDescendantOnPresent&&(0,O.n)(e.el,e.el),n()}))})})})()}dismiss(t,e,r=!0){var o=this;return(0,I.Z)(function*(){void 0!==o.currentTransition&&(yield o.currentTransition);const{destroyKeyboardInteraction:i,destroyDismissInteraction:n}=o;r&&o.parentPopover&&o.parentPopover.dismiss(t,e,r),o.currentTransition=(0,O.g)(o,t,e,"popoverLeave",be,ye,o.event);const s=yield o.currentTransition;if(s){i&&(i(),o.destroyKeyboardInteraction=void 0),n&&(n(),o.destroyDismissInteraction=void 0);const{delegate:a}=o.getDelegate();yield(0,j.d)(a,o.usersElement)}return o.currentTransition=void 0,s})()}getParentPopover(){var t=this;return(0,I.Z)(function*(){return t.parentPopover})()}onDidDismiss(){return(0,O.h)(this.el,"ionPopoverDidDismiss")}onWillDismiss(){return(0,O.h)(this.el,"ionPopoverWillDismiss")}render(){const t=(0,R.b)(this),{onLifecycle:e,popoverId:r,parentPopover:o,dismissOnSelect:i,side:n,arrow:s,htmlAttributes:a}=this,p=(0,R.a)("desktop"),l=s&&!o;return(0,f.h)(f.H,Object.assign({"aria-modal":"true","no-router":!0,tabindex:"-1"},a,{style:{zIndex:`${2e4+this.overlayIndex}`},id:r,class:Object.assign(Object.assign({},(0,v.g)(this.cssClass)),{[t]:!0,"popover-translucent":this.translucent,"overlay-hidden":!0,"popover-desktop":p,[`popover-side-${n}`]:!0,"popover-nested":!!o}),onIonPopoverDidPresent:e,onIonPopoverWillPresent:e,onIonPopoverWillDismiss:e,onIonPopoverDidDismiss:e,onIonBackdropTap:this.onBackdropTap}),!o&&(0,f.h)("ion-backdrop",{tappable:this.backdropDismiss,visible:this.showBackdrop,part:"backdrop"}),(0,f.h)("div",{class:"popover-wrapper ion-overlay-wrapper",onClick:i?()=>this.dismiss():void 0},l&&(0,f.h)("div",{class:"popover-arrow",part:"arrow"}),(0,f.h)("div",{class:"popover-content",part:"content"},(0,f.h)("slot",null))))}get el(){return(0,f.f)(this)}static get watchers(){return{trigger:["onTriggerChange"],triggerAction:["onTriggerChange"],isOpen:["onIsOpenChange"]}}},_e={ionPopoverDidPresent:"ionViewDidEnter",ionPopoverWillPresent:"ionViewWillEnter",ionPopoverWillDismiss:"ionViewWillLeave",ionPopoverDidDismiss:"ionViewDidLeave"};let De=0;Q.style={ios:':host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:200px;--max-height:90%;--box-shadow:none;--backdrop-opacity:var(--ion-backdrop-opacity, 0.08)}:host(.popover-desktop){--box-shadow:0px 4px 16px 0px rgba(0, 0, 0, 0.12)}.popover-content{border-radius:10px}:host(.popover-desktop) .popover-content{border:0.5px solid var(--ion-color-step-100, #e6e6e6)}.popover-arrow{display:block;position:absolute;width:20px;height:10px;overflow:hidden}.popover-arrow::after{top:3px;border-radius:3px;position:absolute;width:14px;height:14px;-webkit-transform:rotate(45deg);transform:rotate(45deg);background:var(--background);content:"";z-index:10}@supports (inset-inline-start: 0){.popover-arrow::after{inset-inline-start:3px}}@supports not (inset-inline-start: 0){.popover-arrow::after{left:3px}[dir=rtl] .popover-arrow::after,:host-context([dir=rtl]) .popover-arrow::after{left:unset;right:unset;right:3px}}:host(.popover-bottom) .popover-arrow{top:auto;bottom:-10px}:host(.popover-bottom) .popover-arrow::after{top:-6px}:host(.popover-side-left) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host(.popover-side-right) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-top) .popover-arrow{-webkit-transform:rotate(180deg);transform:rotate(180deg)}:host(.popover-side-start) .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}:host-context([dir=rtl]):host(.popover-side-start) .popover-arrow,:host-context([dir=rtl]).popover-side-start .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host(.popover-side-end) .popover-arrow{-webkit-transform:rotate(-90deg);transform:rotate(-90deg)}:host-context([dir=rtl]):host(.popover-side-end) .popover-arrow,:host-context([dir=rtl]).popover-side-end .popover-arrow{-webkit-transform:rotate(90deg);transform:rotate(90deg)}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){:host(.popover-translucent) .popover-content,:host(.popover-translucent) .popover-arrow::after{background:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}',md:":host{--background:var(--ion-background-color, #fff);--min-width:0;--min-height:0;--max-width:auto;--height:auto;--offset-x:0px;--offset-y:0px;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;color:var(--ion-text-color, #000);z-index:1001}:host(.popover-nested){pointer-events:none}:host(.popover-nested) .popover-wrapper{pointer-events:auto}:host(.overlay-hidden){display:none}.popover-wrapper{opacity:0;z-index:10}.popover-content{display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:column;flex-direction:column;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:auto;z-index:10}.popover-viewport{--ion-safe-area-top:0px;--ion-safe-area-right:0px;--ion-safe-area-bottom:0px;--ion-safe-area-left:0px;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;overflow:hidden}:host(.popover-nested.popover-side-left){--offset-x:5px}:host(.popover-nested.popover-side-right){--offset-x:-5px}:host(.popover-nested.popover-side-start){--offset-x:5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-start),:host-context([dir=rtl]).popover-nested.popover-side-start{--offset-x:-5px}:host(.popover-nested.popover-side-end){--offset-x:-5px}:host-context([dir=rtl]):host(.popover-nested.popover-side-end),:host-context([dir=rtl]).popover-nested.popover-side-end{--offset-x:5px}:host{--width:250px;--max-height:90%;--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32)}.popover-content{border-radius:4px;-webkit-transform-origin:left top;transform-origin:left top}[dir=rtl] .popover-content,:host-context([dir=rtl]) .popover-content{-webkit-transform-origin:right top;transform-origin:right top}.popover-viewport{-webkit-transition-delay:100ms;transition-delay:100ms}"}},2854:(oe,K,u)=>{u.d(K,{c:()=>R,g:()=>w,h:()=>f,o:()=>O});var I=u(5861);const f=(v,m)=>null!==m.closest(v),R=(v,m)=>"string"==typeof v&&v.length>0?Object.assign({"ion-color":!0,[`ion-color-${v}`]:!0},m):m,w=v=>{const m={};return(v=>void 0!==v?(Array.isArray(v)?v:v.split(" ")).filter(c=>null!=c).map(c=>c.trim()).filter(c=>""!==c):[])(v).forEach(c=>m[c]=!0),m},F=/^[a-z][a-z0-9+\-.]*:/,O=function(){var v=(0,I.Z)(function*(m,c,Z,z){if(null!=m&&"#"!==m[0]&&!F.test(m)){const W=document.querySelector("ion-router");if(W)return null!=c&&c.preventDefault(),W.push(m,Z,z)}return!1});return function(c,Z,z,W){return v.apply(this,arguments)}}()}}]);