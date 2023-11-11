import { waitForElement } from '../utils/waitForElement';

export function useCart() {
    let cart;
    const cartObserver = new MutationObserver(onOpenProductPopup);

    waitForElement('.t706__cartwin').then((cartElem) => {
        cart = cartElem;
        cartObserver.observe(cartElem, { attributes: true });
    });

    function onOpenProductPopup(mutations) {
        for (const mutation of mutations) {
            if (mutation.attributeName === 'class' && mutation.target.classList.contains('t706__cartwin_showed')) {
                return setTimeout(drawTexts, 250);
            }
        }
    }

    function drawTexts() {
        const products = cart.querySelectorAll('.t706__product');
        products.forEach((productElem) => {
            const textOptions = window.tcart.products?.[productElem?.dataset?.cartProductI]?.textOptions;
            if (!textOptions?.length) {
                return;
            }
            const container = productElem.querySelector('.t706__product-title');
            if (!container) {
                return;
            }
            textOptions.forEach(({ text }) => {
                container.appendChild(createTextElem(text));
            });
        });
    }

    function createTextElem(text) {
        const elem = document.createElement('div');
        elem.classList.add('t706__product-title__option');
        elem.textContent = text;
        return elem;
    }
};
