import"./assets/modulepreload-polyfill-ec808ebb.js";/* empty css                      */import{f as p,i as f}from"./assets/vendor-651d7991.js";const o=document.querySelector("#datetime-picker"),e=document.querySelector("[data-start]"),y=document.querySelector("[data-days]"),S=document.querySelector("[data-hours]"),b=document.querySelector("[data-minutes]"),v=document.querySelector("[data-seconds]");e.setAttribute("disabled","true");let d,i;const D={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){d=t[0]}};p(o,D);function q(t){const c=Math.floor(t/864e5),l=Math.floor(t%864e5/36e5),m=Math.floor(t%864e5%36e5/6e4),h=Math.floor(t%864e5%36e5%6e4/1e3);return{days:c,hours:l,minutes:m,seconds:h}}function n(t){return t.toString().padStart(2,"0")}o.addEventListener("change",()=>{new Date(o.value)<new Date?(f.error({message:"Please choose a date in the future",timeout:3e3,resetOnHover:!0,transitionIn:"flipInX",transitionOut:"flipOutX",position:"topCenter"}),e.setAttribute("disabled","true")):e.removeAttribute("disabled")});e.addEventListener("click",()=>{e.setAttribute("disabled","true"),o.setAttribute("disabled","true"),i=setInterval(()=>{const t=d-new Date,{days:r,hours:a,minutes:s,seconds:u}=q(t);if(t<=0){clearInterval(i);return}y.textContent=n(r),S.textContent=n(a),b.textContent=n(s),v.textContent=n(u)},1e3)});
//# sourceMappingURL=commonHelpers.js.map
