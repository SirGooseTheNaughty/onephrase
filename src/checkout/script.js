import { createElement } from "../utils/functions";
import { waitForElement } from "../utils/waitForElement";

import './style.scss';

export const usePreCheckout = () => {
    const INPUT_CLASS_NAME = 'custom-texts-unput';
    let form;

    waitForElement('.t706__orderform').then((formElement) => {
        form = formElement;
        const button = formElement.querySelector('button[type="submit"]');
        button.addEventListener('click', handleCheckout);
    });

    function handleCheckout() {
        const existingInput = form.querySelector(`.${INPUT_CLASS_NAME}`);
        if (existingInput) {
            return fillData(existingInput);
        }
        const lastInputGroup = form.querySelector('.t-input-group:last-of-type');
        const input = createElement('textarea', INPUT_CLASS_NAME, {
            name: 'custom-texts',
            autocomplete: 'off',
            'data-tilda-req': '0',
        });
        fillData(input);
        lastInputGroup.after(input);
    }

    function fillData(input) {
        const entries = window.tcart.products.reduce((acc, product) => {
            if (!product.textOptions) {
                return acc;
            }
            const { name, options, textOptions } = product;
            const optionsString = options.map(({ variant }) => variant).join(', ');
            textOptions.forEach(({ text, amount }) => {
                acc.push(`${name} (${optionsString}): надпись "${text}", ${amount} шт.`);
            });
            return acc;
        }, []);
        input.value = entries.join('\n');
    }
};
