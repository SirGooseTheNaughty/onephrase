import { useProductCard } from "./src/productCard/script";
import { useCart } from "./src/cart/script";
import { usePreCheckout } from "./src/checkout/script";

document.addEventListener('DOMContentLoaded', () => {
    useProductCard();
    useCart();
    usePreCheckout();
});
