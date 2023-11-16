import { MAX_LENGTH, MIN_LENGTH, TOO_LONG_MSG, TOO_SHORT_MSG } from "../utils/constants";
import { createElement } from '../utils/functions';

export const addInput = (productElement, onValid = () => {}) => {
    const existingInput = productElement.querySelector('.prod-text-input');
    if (existingInput) {
        return existingInput;
    }

    const { wrapper, input, label } = createInput();
    const container = productElement.querySelector('.js-product-controls-wrapper');
    container.appendChild(wrapper);
    onChange(input?.value, false);
    input.addEventListener('input', (event) => onChange(event?.target?.value));

    function onChange(value = '', showError = true) {
        const isShort = value.length < MIN_LENGTH;
        const isLong = value.length > MAX_LENGTH;
        const isValid = !isShort && !isLong;
        if (isValid) {
            wrapper.classList.remove('invalid');
            label.textContent = '';
        } else if (showError) {
            const msg = isShort ? TOO_SHORT_MSG : TOO_LONG_MSG;
            label.textContent = isShort ? TOO_SHORT_MSG : TOO_LONG_MSG;
            wrapper.classList.add('invalid');
        }
        onValid(isValid);
    }

    function createInput() {
        const wrapper = createElement('div', 'prod-text-input t-product__option');
        const input = createElement('input', 'prod-text-input__input t-descr');
        input.setAttribute('type', 'text');
        input.setAttribute('placeholder', 'введите текст');
        const title = createElement('div', 't-product__option-title t-typography__options t-descr t-descr_xxs prod-text-input__title');
        title.textContent = 'Надпись для нанесения (до 29 симв)';
        const label = createElement('div', 'prod-text-input__label t-descr');

        wrapper.appendChild(title);
        wrapper.appendChild(input);
        wrapper.appendChild(label);

        return { wrapper, input, label };
    }

    return input;
};

export const removeInput = (productElement) => {
    const existingInput = productElement.querySelector('.prod-text-input');
    if (existingInput) {
        existingInput.remove();
    }
};
