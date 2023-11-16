import { plusText, minusText, removeText } from './products';
import { createElement } from '../utils/functions';

const formatPrice = (x) => {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    return parts.join(".");
}

const createRowText = (textOption) => {
    const textElement = createElement('div', 't706__product-title__option text-controls__row-title t-descr t-descr_sm');
    textElement.textContent = `надпись: ${textOption.text}`;
    return textElement;
};

const createRowPlusMinus = (textOption, productIndex, row) => {
    const { text, amount } = textOption;
    const wrapper = createElement('div', 't706__product-plusminus text-controls__row-plus-minus t-descr t-descr_sm');
    const minusSpan = createElement('span', 't706__product-minus text-controls__row-minus');
    minusSpan.innerHTML = '<img src="https://static.tildacdn.com/lib/linea/c8eecd27-9482-6c4f-7896-3eb09f6a1091/arrows_circle_minus.svg" style="width:16px;height:16px;border:0;">';
    minusSpan.addEventListener('click', () => minusText(text, productIndex, row));

    const plusSpan = createElement('span', 't706__product-plus text-controls__row-plus');
    plusSpan.innerHTML = '<img src="https://static.tildacdn.com/lib/linea/c47d1e0c-6880-dc39-ae34-521197f7fba7/arrows_circle_plus.svg" style="width:16px;height:16px;border:0;">';
    plusSpan.addEventListener('click', () => plusText(text, productIndex));

    const quantitySpan = createElement('span', 't706__product-quantity text-controls__row-quantity');
    quantitySpan.textContent = amount;

    wrapper.appendChild(minusSpan);
    wrapper.appendChild(quantitySpan);
    wrapper.appendChild(plusSpan);

    return wrapper;
};

const createRowTotal = (productData, textOption) => {
    const textElement = createElement('div', 't706__product-amount text-controls__row-total t-descr t-descr_sm');
    const priceElement = createElement('div', 't706__cartwin-prodamount-price text-controls__row-total-price');
    priceElement.textContent = formatPrice(productData.price * textOption.amount);
    const currencyElement = createElement('div', 't706__cartwin-prodamount-currency text-controls__row-total-currency');
    currencyElement.textContent = window.tcart.currency;

    textElement.appendChild(priceElement);
    textElement.appendChild(currencyElement);

    return textElement;
};

const createRowDeleteButton = (textOption, productIndex, row) => {
    const wrapper = createElement('div', 't706__product-del-wrapper text-controls__row-delete');
    wrapper.innerHTML = `
        <span class="t706__product-del">
            <img src="https://static.tildacdn.com/lib/linea/1bec3cd7-e9d1-2879-5880-19b597ef9f1a/arrows_circle_remove.svg" style="width:20px;height:20px;border:0;">
        </span>
    `;
    wrapper.addEventListener('click', () => removeText(textOption.text, productIndex, row));

    return wrapper;
};

const createRow = (productData, textOption, productIndex) => {
    const row = createElement('div', 'text-controls__row');
    const textElement = createRowText(textOption);
    const plusMinusElement = createRowPlusMinus(textOption, productIndex, row);
    const priceElement = createRowTotal(productData, textOption);
    const deleteElement = createRowDeleteButton(textOption, productIndex, row);

    row.appendChild(textElement);
    row.appendChild(plusMinusElement);
    row.appendChild(priceElement);
    row.appendChild(deleteElement);

    return row;
};

export const addControls = (productElem, productIndex) => {
    const productData = window.tcart.products[productIndex];
    const textOptions = productData?.textOptions;
    if (!textOptions) {
        return;
    }

    productElem.classList.add('custom-cart-product');

    const controlsElement = createElement('div', 'text-controls');
    textOptions.forEach((textOption) => {
        controlsElement.appendChild(createRow(productData, textOption, productIndex));
    });

    const existingControlsElement = productElem.querySelector('.text-controls');
    if (existingControlsElement) {
        productElem.replaceChild(controlsElement, existingControlsElement);
    } else {
        productElem.appendChild(controlsElement);
    }

};

export function drawCustomProducts() {
    const products = cart.querySelectorAll('.t706__product');
    products.forEach((productElem, index) => {
        const productIndex = productElem?.dataset?.cartProductI || index;
        addControls(productElem, productIndex);
    });
}
