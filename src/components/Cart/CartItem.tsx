import { useDispatch } from "react-redux";
import { CartProduct } from "../../interfaces/CartProduct";
import { cartAction } from "../../store/CartSlice";

interface Props {
  cartItem: CartProduct;
}

const CartItem = ({ cartItem }: Props) => {
  const dispatch = useDispatch();
  const handleCartItem = () => {
    dispatch(cartAction.removeItemFromCart(cartItem.id));
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
                <div className="dropdown">
                  <button
                    className="btn btn-sm btn-secondary dropdown-toggle btn-toggle-sd"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Qty: {cartItem.quantity}
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item">1</a>
                    </li>
                    <li>
                      <a className="dropdown-item">2</a>
                    </li>
                    <li>
                      <a className="dropdown-item">3</a>
                    </li>
                  </ul>
                </div>
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
