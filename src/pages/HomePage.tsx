import { useEffect } from "react";
import ItemList from "../components/Products/ItemList";
import SearchBar from "../components/SearchBar/SearchBar";
import { Product } from "../interfaces/Product";
import Filter from "../components/Filter/Filter";
import { useDispatch, useSelector } from "react-redux";
import { TOTAL_ITEMS_LENGTH } from "../utils/constants";
import { searchAction } from "../store/SearchSlice";
import productService from "../services/product-service";
import { itemAction } from "../store/ItemSlice";
import Banner from "../components/Banner/Banner";

const HomePage = () => {
  const itemsObject = useSelector((state: any) => state.items);
  const items: Product[] = itemsObject.items;
  const page: number = itemsObject.page;
  const pageSize: number = itemsObject.pageSize;
  const { results } = useSelector((state: any) => state.search);
  const searchResults = results;
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      // console.log(
      //   Math.ceil(window.innerHeight + document.documentElement.scrollTop),
      //   "am beign called",
      //   document.documentElement.offsetHeight
      // );
      if (
        Math.ceil(window.innerHeight + document.documentElement.scrollTop) >=
        document.documentElement.offsetHeight
      ) {
        console.log("user scrolled to bottom , load next items !!!!!!!!");
        productService
          .getByPagination(pageSize, page)
          .then((res) => {
            dispatch(itemAction.addItems(res.data));
            dispatch(itemAction.incrementPage());
          })
          .catch((err) => console.log(err.message));
      }
    };

    if (items.length < TOTAL_ITEMS_LENGTH) {
      window.addEventListener("scroll", handleScroll);
    } else {
      console.log("programmed reached end length");
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [items]);

  const handleSearch = (queryString: string) => {
    const query = queryString.toLowerCase();
    if (query.trim() === "") {
      dispatch(searchAction.setSearchResults([]));
    } else {
      const filteredItems = items.filter(
        (item) =>
          item.title.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      );
      if (filteredItems.length != 0)
        dispatch(searchAction.setSearchResults(filteredItems));
    }
  };

  const onSearchSubmit = (input: string) => {
    event?.preventDefault();
    handleSearch(input);
    dispatch(searchAction.setIsActive(true));
  };

  const onClearResults = (textRef: any) => {
    dispatch(searchAction.setSearchResults([]));
    textRef.current!.value = "";
    dispatch(searchAction.setIsActive(false));
  };
  return (
    <>
      <Banner />

      <div className="container mt-3 mb-3">
        <div className="row">
          <div className="col">
            <SearchBar
              handleSubmit={onSearchSubmit}
              handleClearResults={onClearResults}
            />
            <p>
              {searchResults.length > 0 &&
                `${searchResults.length} items found`}
            </p>
          </div>
          <div className="col-auto">
            <Filter />
          </div>
        </div>
      </div>
      <ItemList items={searchResults.length ? searchResults : items} />
    </>
  );
};

export default HomePage;
