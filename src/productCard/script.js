import { waitForElement, isCustom } from '../utils/functions';
import { addInput, removeInput } from './addInput';
import { processProducts } from './processProducts';

import './style.scss';

export function useProductCard() {
    let productElement, input, button;
    const popupObserver = new MutationObserver(onOpenProductPopup);

    window.addEventListener('load', () => {
        waitForElement('.js-store-product').then((card) => {
            productElement = card;
            button = productElement.querySelector('[href="#order"]');
            const popup = card.closest('.t-popup');
            if (popup) {
                popupObserver.observe(popup, { attributes: true });
            } else {
                if (isCustom(productElement)) {
                    initCustomProduct();
                }
            }
        });
    });

    function onOpenProductPopup(mutations) {
        for (const mutation of mutations) {
            if (mutation.attributeName === 'class' && mutation.target.classList.contains('t-popup_show')) {
                if (isCustom(productElement)) {
                    initCustomProduct();
                } else {
                    clearCustomProduct();
                }
                return;
            }
        }
    }

    function initCustomProduct() {
        input = addInput(productElement, onValid);
        addButtonListener();
    }

    function clearCustomProduct() {
        removeInput(productElement);
        onValid(true);
        removeButtonListener();
    }

    function onValid(isValid) {
        if (isValid) {
            button.classList.remove('disabled');
        } else {
            button.classList.add('disabled');
        }
    }

    function removeButtonListener() {
        button.removeEventListener('click', onCheckout);
    }

    function addButtonListener() {
        removeButtonListener();
        button.addEventListener('click', onCheckout);
    }
    
    function onCheckout() {
        const textValue = input.value;

        processProducts(textValue, productElement);
    }
};
