import { CUSTOM_CATEGORY_ID } from "./constants";

export function waitForElement(selector = null, getElemFn = null) {
    return new Promise((resolve) => {
        const getElem = selector ? () => document.querySelector(selector) : getElemFn

        const elem = getElem();
        if (elem) {
            return resolve(elem);
        }

        const observer = new MutationObserver(() => {
            const elem = getElem();
            if (elem) {
                observer.disconnect();
                resolve(elem);
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

export function isCustom(product) {
    const partUid = product?.dataset.productPartUid;
    return partUid === CUSTOM_CATEGORY_ID;
}

export const saveLocalStorage = () => localStorage.setItem('tcart', JSON.stringify(window.tcart));
