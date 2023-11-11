import { MAX_LENGTH, MIN_LENGTH, TOO_LONG_MSG, TOO_SHORT_MSG } from "../utils/constants";

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
        const wrapper = document.createElement('div');
        wrapper.classList.add('prod-text-input');
        const input = document.createElement('input');
        input.setAttribute('type', 'text');
        input.classList.add('prod-text-input__input');
        const title = document.createElement('div');
        title.classList.add('t-product__option-title', 'prod-text-input__title');
        title.textContent = 'надпись для нанесения (до 29 симв)';
        const label = document.createElement('div');
        label.classList.add('prod-text-input__label');

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
