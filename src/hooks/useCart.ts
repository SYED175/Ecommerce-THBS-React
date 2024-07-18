import useData from "./useData";

interface CartStrings{
    shoppingCart:string;
    emptyCart:string;
    totalPrice:string;
    alerts:string;
    proceedToPayBtn:string;
}
const useCart = ()=>useData<CartStrings>('/cart-page');

export default useCart;