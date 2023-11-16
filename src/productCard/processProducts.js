import { saveLocalStorage } from "../utils/functions";

const getOptions = (product) => {
    const options = product.querySelectorAll('.t-product__option-variants');
    return [...options].reduce((acc, option) => {
        const checked = option.querySelector('.t-product__option-item_active input');
        if (!checked) {
            return acc;
        }
        acc[checked.name] = checked.value;
        return acc;
    }, {});
};

const compareProducts = (product, uid, selectedOptions) => {
    const { options, gen_uid } = product;
    if (gen_uid !== uid) {
        return false;
    }
    for (const option of options) {
        if (selectedOptions[option.option] !== option.variant) {
            return false;
        }
    }
    return true;
};

const updateProducts = (textValue, uid, selectedOptions, amount) => {
    window.tcart.products = window.tcart.products.map((product) => {
        const isThatProduct = compareProducts(product, uid, selectedOptions);
        if (!isThatProduct) {
            return product;
        }

        if (!product.textOptions) {
            return {
                ...product,
                textOptions: [
                    { text: textValue, amount },
                ]
            }
        }
        const sameOption = product.textOptions.find(({ text }) => text === textValue);
        if (!sameOption) {
            return {
                ...product,
                textOptions: [
                    ...product.textOptions,
                    { text: textValue, amount },
                ]
            }
        }
        const updatedOptions = product.textOptions.map((option) => {
            if (option.text === textValue) {
                return { ...option, amount: option.amount + amount };
            }
            return option;
        });
        return {
            ...product,
            textOptions: updatedOptions,
        }
    });
};

const getProductAmount = (productElement) => {
    const stringAmount = productElement.querySelector('.t-store__prod__quantity-input')?.value;
    if (stringAmount && !isNaN(stringAmount)) {
        return parseInt(stringAmount, 10);
    }
    return 1;
};

export const processProducts = (textValue, productElement) => {
    if (!window.tcart?.products) {
        return;
    }
    const uid = productElement?.dataset?.productGenUid || null;
    if (!uid) {
        return console.error('Нет uid для продукта', productElement);
    }
    const amount = getProductAmount(productElement);
    const selectedOptions = getOptions(productElement);

    setTimeout(() => {
        updateProducts(textValue, uid, selectedOptions, amount);
        saveLocalStorage();
    }, 150);
}