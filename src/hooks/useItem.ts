import useData from "./useData";
interface ItemStrings{
    addToCartBtn:string;
    removeFromCartBtn:string;
}
const useItem = ()=>useData<ItemStrings>('/item');


export default useItem;