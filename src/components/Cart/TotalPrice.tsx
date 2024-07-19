import { useSelector } from "react-redux";
import { CartProduct } from "../../interfaces/CartProduct";

const TotalPrice = () => {
  const cartList: CartProduct[] = useSelector((state: any) => state.cart);
  const totalCartPrice = cartList.reduce(
    (acc, cartItem) => acc + cartItem.price * cartItem.quantity,
    0
  );
  const totalItems = cartList.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  );
  return (
    <div className="container my-3 place-order py-3">
      <h5>
        Total ({totalItems} items): ₹ {totalCartPrice.toFixed(2)}
      </h5>
      <button className="btn btn-warning btn-input">Proceed to Buy</button>
    </div>
  );
};

export default TotalPrice;
