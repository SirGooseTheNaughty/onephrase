import { waitForElement } from '../utils/waitForElement';
import { drawCustomProducts } from './elements';

import './style.scss';

export function useCart() {
    const cartObserver = new MutationObserver(onOpenProductPopup);
    const productListObserver = new MutationObserver(onProductListChange);

    waitForElement('.t706__cartwin').then((cartElem) => {
        window.cart = cartElem;
        const productsList = cartElem.querySelector('.t706__cartwin-products');
        // cartObserver.observe(cartElem, { attributes: true });
        productListObserver.observe(productsList, { childList: true });
    });

    function onOpenProductPopup(mutations) {
        for (const mutation of mutations) {
            if (mutation.attributeName === 'class' && mutation.target.classList.contains('t706__cartwin_showed')) {
                return setTimeout(drawCustomProducts, 250);
            }
        }
    }

    function onProductListChange() {
        setTimeout(drawCustomProducts, 50);
    }
};
