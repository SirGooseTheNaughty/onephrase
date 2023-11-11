import { useProductCard } from "./src/productCard/script";
import { useCart } from "./src/cart/script";
import { useMode } from "./src/utils/modes";

useMode();

useProductCard();
useCart();