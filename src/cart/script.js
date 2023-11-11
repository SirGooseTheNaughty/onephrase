import { waitForElement } from '../utils/waitForElement';
import { drawCustomProducts } from './elements';

import './style.scss';

export function useCart() {
    const cartObserver = new MutationObserver(onOpenProductPopup);

    waitForElement('.t706__cartwin').then((cartElem) => {
        window.cart = cartElem;
        cartObserver.observe(cartElem, { attributes: true });
    });

    function onOpenProductPopup(mutations) {
        for (const mutation of mutations) {
            if (mutation.attributeName === 'class' && mutation.target.classList.contains('t706__cartwin_showed')) {
                return setTimeout(drawCustomProducts, 250);
            }
        }
    }
};
