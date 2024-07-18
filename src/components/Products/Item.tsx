import { useDispatch, useSelector } from "react-redux";
import { Product } from "../../interfaces/Product";
import { FaShoppingCart } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { cartAction } from "../../store/CartSlice";
import { CartProduct } from "../../interfaces/CartProduct";
import useItem from "../../hooks/useItem";
import ExpandableText from "../ExpandableText/ExpandableText";
interface Props {
  item: Product;
}
const Item = ({ item }: Props) => {
  const dispatch = useDispatch();
  const cartList: CartProduct[] = useSelector((state: any) => state.cart);
  const insideCart = cartList.find((val) => val.id === item.id);

  const { data, error, isLoading } = useItem();

  return (
    <div className="col">
      <div className="card" style={{ width: "250px", margin: "12px" }}>
        <div className="mt-3">
          <img src={item.image} className="sd-image" alt="..." />
        </div>
        <div className="mb-3">
          {item.rating}⭐ | {item.count}
        </div>
        <div className="card-body">
          <ExpandableText elementType="h5" maxChars={19}>
            {item.title}
          </ExpandableText>
          <ExpandableText elementType="p" maxChars={50}>
            {item.description}
          </ExpandableText>
          <div className="mb-3">
            <span style={{ fontWeight: "bold", color: "gray" }}>Price</span> ₹
            {item.price}
          </div>
          {insideCart ? (
            <a
              className="btn btn-danger"
              onClick={() => dispatch(cartAction.removeItemFromCart(item.id))}
            >
              {data?.removeFromCartBtn} <MdDelete />
            </a>
          ) : (
            <a
              className="btn btn-success"
              onClick={() =>
                dispatch(
                  cartAction.addItemToCart({
                    ...item,
                    quantity: 1,
                  })
                )
              }
            >
              {data?.addToCartBtn} <FaShoppingCart />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Item;
