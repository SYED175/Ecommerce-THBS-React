import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import TotalPrice from "./TotalPrice";
import { CartProduct } from "../../interfaces/CartProduct";
import emptyCart from "../../assets/empty-cart.png";

const Cart = () => {
  const cartList: CartProduct[] = useSelector((state: any) => state.cart);
  if (cartList.length === 0)
    return (
      <div className="container d-flex flex-column align-items-center">
        <h2 className="my-3">Your Shopping cart is Empty</h2>
        <img className="empty-cart-img" src={emptyCart} alt="" />
      </div>
    );
  return (
    <div className="container my-3">
      <h2 className="cart-title">Shopping Cart</h2>
      <div className="row">
        <div className="col-md-8">
          {cartList.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="col-md-4">
          <TotalPrice />
        </div>
      </div>
    </div>
  );
};

export default Cart;
