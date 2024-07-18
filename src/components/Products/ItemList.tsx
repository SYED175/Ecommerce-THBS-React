import { Product } from "../../interfaces/Product";
import Item from "./Item";
interface Props {
  items: Product[];
}

const ItemList = ({ items }: Props) => {
  if (items.length === 0) return null;
  return (
    <div className="container text-center">
      <div className="row">
        {items.map((item) => (
          <Item key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
