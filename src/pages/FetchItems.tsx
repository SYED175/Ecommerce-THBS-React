import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemAction } from "../store/ItemSlice";
import { fetchStatusAction } from "../store/FetchStatusSlice";
import productService from "../services/product-service";
import { Product } from "../interfaces/Product";

const FetchItems = () => {
  const dispatch = useDispatch();
  const { page, pageSize } = useSelector((state: any) => state.items);
  useEffect(() => {
    productService
      .getByPagination<Product[]>(pageSize, page)
      .then((res) => {
        dispatch(itemAction.addItems(res.data));
        dispatch(fetchStatusAction.setFetchStatusDone(true));
        dispatch(itemAction.incrementPage());
      })
      .catch((err) => console.log(err.message));
    return () => {};
  }, []);
  return <></>;
};

export default FetchItems;
