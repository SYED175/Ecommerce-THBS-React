import { useDispatch } from "react-redux";
import { CartProduct } from "../../interfaces/CartProduct";
import { cartAction } from "../../store/CartSlice";
import { QUANTITY } from "../../utils/constants";
import { useState } from "react";
import { toast, Toaster } from "sonner";

interface Props {
  cartItem: CartProduct;
}

const CartItem = ({ cartItem }: Props) => {
  const dispatch = useDispatch();
  const [quantityLargerThan10, setQuantityLargerThan10] = useState(false);
  const handleCartItem = () => {
    dispatch(cartAction.removeItemFromCart(cartItem.id));
  };
  const itemQuantityHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const totalQuantity = Number(event.target.value);
    if (totalQuantity === 10) {
      setQuantityLargerThan10(true);
      return;
    }
    dispatch(
      cartAction.setItemQuantity({
        id: cartItem.id,
        quantity: totalQuantity,
      })
    );
  };
  const itemQuantityHandlerInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const totalQuantity = Number(event.target.value);
    if (totalQuantity > cartItem.count) {
      toast(`This seller has only ${cartItem.count} of these available 😢`, {
        duration: 10000,
        position: "top-left",
        icon: <span>⚠️</span>,
      });
      return;
    }
    dispatch(
      cartAction.setItemQuantity({
        id: cartItem.id,
        quantity: totalQuantity,
      })
    );
  };
  return (
    <div className="card my-3">
      <div className="row align-items-center">
        <div className="col-md-3">
          <img src={cartItem.image} className="card-img" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h4>{cartItem.title}</h4>
            <p className="stock">In Stock</p>
            <div className="row">
              <div className="col-auto">
                {cartItem.quantity > 9 || quantityLargerThan10 ? (
                  <div className="container d-flex flex-row justify-content-center">
                    <Toaster closeButton />
                    <input
                      type="text"
                      className="sd-qty-input"
                      onChange={itemQuantityHandlerInput}
                      maxLength={4}
                      placeholder="qty"
                      value={
                        cartItem.quantity > cartItem.count
                          ? cartItem.count
                          : cartItem.quantity
                      }
                    />
                  </div>
                ) : (
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={itemQuantityHandler}
                    value={cartItem.quantity || ""}
                  >
                    {QUANTITY.map((value) => (
                      <option key={value} value={value}>
                        {value}
                      </option>
                    ))}
                    <option className="text-success" value="10">
                      10+
                    </option>
                  </select>
                )}
              </div>
              <div className="col-auto">
                <span>|</span>
              </div>
              <div className="col-auto">
                <a href="#" className="link-cart" onClick={handleCartItem}>
                  Delete
                </a>
              </div>
              <div className="col-auto">
                <span>|</span>
              </div>
              <div className="col-auto">
                <a href="#" className="link-cart">
                  See more like this
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <p className="price">₹ {cartItem.price}</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
