(()=>{"use strict";const t=window.CUSTOM_CATEGORY_ID||"710715095531",e=window.MAX_LENGTH||29,n=window.MIN_LENGTH||1,o=window.TOO_SHORT_MSG||"Надпись не может быть пустой",r=window.TOO_LONG_MSG||"Надпись не может быть длиннее 29 символов";function c(e){const n=e?.dataset.productPartUid;return n===t}const i=()=>localStorage.setItem("tcart",JSON.stringify(window.tcart)),s=(t="div",e="",n=null)=>{const o=document.createElement(t);if(e?.length&&(o.className=e),n&&Object.keys(n).length)for(const[t,e]of Object.entries(n))o.setAttribute(t,e);return o};function d(t=null,e=null){return new Promise((n=>{const o=t?()=>document.querySelector(t):e,r=o();if(r)return n(r);const c=new MutationObserver((()=>{const t=o();t&&(c.disconnect(),n(t))}));c.observe(document.body,{childList:!0,subtree:!0})}))}const a=t=>window.tcart.products[t],u=(t,e,n)=>{if(t.quantity+e<1)return window.tcart__product__del?.(n);t.quantity+=e,t.amount=t.quantity*t.price,tcart__reDrawProducts(),_(),tcart__updateTotalProductsinCartObj(),tcart__reDrawTotal(),tcart__reDrawCartIcon(),i()},p=(t,e,n)=>{const o=s("div","text-controls__row"),r=(t=>{const e=s("div","t706__product-title__option text-controls__row-title t-descr t-descr_sm");return e.textContent=`надпись: ${t.text}`,e})(e),c=((t,e,n)=>{const{text:o,amount:r}=t,c=s("div","t706__product-plusminus text-controls__row-plus-minus t-descr t-descr_sm"),i=s("span","t706__product-minus text-controls__row-minus");i.innerHTML='<img src="https://static.tildacdn.com/lib/linea/c8eecd27-9482-6c4f-7896-3eb09f6a1091/arrows_circle_minus.svg" style="width:16px;height:16px;border:0;">',i.addEventListener("click",(()=>((t,e,n)=>{const o=a(e),r=o.textOptions.find((({text:e})=>e===t)),c=r.amount-1;r.amount=c,o.textOptions=o.textOptions.filter((({amount:t})=>t>0)),u(o,-1,n)})(o,e,n)));const d=s("span","t706__product-plus text-controls__row-plus");d.innerHTML='<img src="https://static.tildacdn.com/lib/linea/c47d1e0c-6880-dc39-ae34-521197f7fba7/arrows_circle_plus.svg" style="width:16px;height:16px;border:0;">',d.addEventListener("click",(()=>((t,e)=>{const n=a(e);n.textOptions.find((({text:e})=>e===t)).amount+=1,u(n,1)})(o,e)));const p=s("span","t706__product-quantity text-controls__row-quantity");return p.textContent=r,c.appendChild(i),c.appendChild(p),c.appendChild(d),c})(e,n,o),i=((t,e)=>{const n=s("div","t706__product-amount text-controls__row-total t-descr t-descr_sm"),o=s("div","t706__cartwin-prodamount-price text-controls__row-total-price");var r;o.textContent=((r=(t.price*e.amount).toString().split("."))[0]=r[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),r.join("."));const c=s("div","t706__cartwin-prodamount-currency text-controls__row-total-currency");return c.textContent=window.tcart.currency,n.appendChild(o),n.appendChild(c),n})(t,e),d=((t,e,n)=>{const o=s("div","t706__product-del-wrapper text-controls__row-delete");return o.innerHTML='\n        <span class="t706__product-del">\n            <img src="https://static.tildacdn.com/lib/linea/1bec3cd7-e9d1-2879-5880-19b597ef9f1a/arrows_circle_remove.svg" style="width:20px;height:20px;border:0;">\n        </span>\n    ',o.addEventListener("click",(()=>((t,e,n)=>{const o=a(e),r=o.textOptions.find((({text:e})=>e===t)).amount,c=o.textOptions.filter((({text:e})=>e!==t));if(0===c.length)return window.tcart__product__del?.(n);o.textOptions=c,u(o,-r,n)})(t.text,e,n))),o})(e,n,o);return o.appendChild(r),o.appendChild(c),o.appendChild(i),o.appendChild(d),o},l=(t,e)=>{const n=window.tcart.products[e],o=n?.textOptions;if(!o)return;t.classList.add("custom-cart-product");const r=s("div","text-controls");o.forEach((t=>{r.appendChild(p(n,t,e))}));const c=t.querySelector(".text-controls");c?t.replaceChild(r,c):t.appendChild(r)};function _(){cart.querySelectorAll(".t706__product").forEach(((t,e)=>{l(t,t?.dataset?.cartProductI||e)}))}const w={PROD:"prod",DEV:"dev",LOCAL:"local"};(()=>{const t=localStorage.getItem("mode")||w.PROD;for(const e of Object.values(w))e!==t&&document.querySelectorAll(`script[data-mode="${e}"], style[data-mode="${e}"]`).forEach((t=>t.remove()))})(),function(){let t,d,a;const u=new MutationObserver((function(e){for(const n of e)if("class"===n.attributeName&&n.target.classList.contains("t-popup_show"))return void(c(t)?p():((t=>{const e=t.querySelector(".prod-text-input");e&&e.remove()})(t),l(!0),_()))}));function p(){d=((t,c=(()=>{}))=>{const i=t.querySelector(".prod-text-input");if(i)return i;const{wrapper:d,input:a,label:u}=function(){const t=s("div","prod-text-input t-product__option"),e=s("input","prod-text-input__input t-descr");e.setAttribute("type","text"),e.setAttribute("placeholder","введите текст");const n=s("div","t-product__option-title t-typography__options t-descr t-descr_xxs prod-text-input__title");n.textContent="Надпись для нанесения (до 29 симв)";const o=s("div","prod-text-input__label t-descr");return t.appendChild(n),t.appendChild(e),t.appendChild(o),{wrapper:t,input:e,label:o}}();function p(t="",i=!0){const s=t.length<n,a=t.length>e,p=!s&&!a;p?(d.classList.remove("invalid"),u.textContent=""):i&&(u.textContent=s?o:r,d.classList.add("invalid")),c(p)}return t.querySelector(".js-product-controls-wrapper").appendChild(d),p(a?.value,!1),a.addEventListener("input",(t=>p(t?.target?.value))),a})(t,l),_(),a.addEventListener("click",w)}function l(t){t?a.classList.remove("disabled"):a.classList.add("disabled")}function _(){a.removeEventListener("click",w)}function w(){((t,e)=>{if(!window.tcart?.products)return;const n=e?.dataset?.productGenUid||null;if(!n)return console.error("Нет uid для продукта",e);const o=(t=>{const e=t.querySelector(".t-store__prod__quantity-input")?.value;return e&&!isNaN(e)?parseInt(e,10):1})(e),r=[...e.querySelectorAll(".t-product__option-variants")].reduce(((t,e)=>{const n=e.querySelector(".t-product__option-item_active input");return n?(t[n.name]=n.value,t):t}),{});setTimeout((()=>{((t,e,n,o)=>{window.tcart.products=window.tcart.products.map((r=>{const c=((t,e,n)=>{const{options:o,gen_uid:r}=t;if(r!==e)return!1;for(const t of o)if(n[t.option]!==t.variant)return!1;return!0})(r,e,n);if(!c)return r;if(!r.textOptions)return{...r,textOptions:[{text:t,amount:o}]};if(!r.textOptions.find((({text:e})=>e===t)))return{...r,textOptions:[...r.textOptions,{text:t,amount:o}]};const i=r.textOptions.map((e=>e.text===t?{...e,amount:e.amount+o}:e));return{...r,textOptions:i}}))})(t,n,r,o),i()}),150)})(d.value,t)}window.addEventListener("load",(()=>{(function(t=null,e=null){return new Promise((n=>{const o=t?()=>document.querySelector(t):e,r=o();if(r)return n(r);const c=new MutationObserver((()=>{const t=o();t&&(c.disconnect(),n(t))}));c.observe(document.body,{childList:!0,subtree:!0})}))})(".js-store-product").then((e=>{t=e,a=t.querySelector('[href="#order"]');const n=e.closest(".t-popup");n?u.observe(n,{attributes:!0}):c(t)&&p()}))}))}(),function(){new MutationObserver((function(t){for(const e of t)if("class"===e.attributeName&&e.target.classList.contains("t706__cartwin_showed"))return setTimeout(_,250)}));const t=new MutationObserver((function(){setTimeout(_,50)}));d(".t706__cartwin").then((e=>{window.cart=e;const n=e.querySelector(".t706__cartwin-products");t.observe(n,{childList:!0})}))}(),(()=>{const t="custom-texts-unput";let e;function n(){const n=e.querySelector(`.${t}`);if(n)return o(n);const r=e.querySelector(".t-input-group:last-of-type"),c=s("textarea",t,{name:"custom-texts",autocomplete:"off","data-tilda-req":"0"});o(c),r.after(c)}function o(t){const e=window.tcart.products.reduce(((t,e)=>{if(!e.textOptions)return t;const{name:n,options:o,textOptions:r}=e,c=o.map((({variant:t})=>t)).join(", ");return r.forEach((({text:e,amount:o})=>{t.push(`${n} (${c}): надпись "${e}", ${o} шт.`)})),t}),[]);t.value=e.join("\n")}d(".t706__orderform").then((t=>{e=t,t.querySelector('button[type="submit"]').addEventListener("click",n)}))})()})();