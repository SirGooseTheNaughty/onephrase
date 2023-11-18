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
    return partUid?.includes?.(CUSTOM_CATEGORY_ID);
}

export const saveLocalStorage = () => localStorage.setItem('tcart', JSON.stringify(window.tcart));

export const createElement = (tag = 'div', classNames = '', attributes = null) => {
    const element = document.createElement(tag);
    if (classNames?.length) {
        element.className = classNames;
    }
    if (attributes && Object.keys(attributes).length) {
        for (const [key, value] of Object.entries(attributes)) {
            element.setAttribute(key, value);
        }
    }
    return element;
};
