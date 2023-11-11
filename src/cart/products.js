import { drawCustomProducts } from "./elements";
import { saveLocalStorage } from "../utils/functions";

const redrawCart = () => {
    tcart__reDrawProducts();
    drawCustomProducts();
    tcart__updateTotalProductsinCartObj();
    tcart__reDrawTotal();
    saveLocalStorage();
};

const getProduct = (index) => window.tcart.products[index];

const changeProductsAmount = (product, change, element) => {
    const newQuantity = product.quantity + change;
    if (newQuantity < 1) {
        return window.tcart__product__del?.(element);
    }
    product.quantity += change;
    product.amount = product.quantity * product.price;

    redrawCart();
}; 

export const plusText = (textValue, index) => {
    const product = getProduct(index);
    const option = product.textOptions.find(({ text }) => text === textValue);
    option.amount += 1;
    changeProductsAmount(product, 1);
};

export const minusText = (textValue, index, rowElement) => {
    const product = getProduct(index);
    const productTextOptions = product.textOptions;
    const option = productTextOptions.find(({ text }) => text === textValue);
    const newAmount = option.amount - 1;
    option.amount = newAmount;
    product.textOptions = product.textOptions.filter(({ amount }) => amount > 0);
    changeProductsAmount(product, -1, rowElement);
};

export const removeText = (textValue, index, rowElement) => {
    const product = getProduct(index);
    console.log(product)
    const amountToDelete = product.textOptions.find(({ text }) => text === textValue).amount;
    const newTextOptions = product.textOptions.filter(({ text }) => text !== textValue);
    if (newTextOptions.length === 0) {
        return window.tcart__product__del?.(rowElement);
    }
    product.textOptions = newTextOptions;
    changeProductsAmount(product, -amountToDelete, rowElement);
};