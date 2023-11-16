import { useProductCard } from "./src/productCard/script";
import { useCart } from "./src/cart/script";
import { useMode } from "./src/utils/modes";
import { usePreCheckout } from "./src/checkout/script";

useMode();

useProductCard();
useCart();
usePreCheckout();