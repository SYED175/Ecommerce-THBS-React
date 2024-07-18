import { CiFilter } from "react-icons/ci";
import { useDispatch } from "react-redux";
import { itemAction } from "../../store/ItemSlice";
import { FILTER_OPTIONS } from "../../utils/constants";
// import strings from "./Filter.json";
import useFilter from "../../hooks/useFilter";

/*
{
    "data": {
        "id": 1,
        "attributes": {
            "createdAt": "2024-06-14T17:03:09.949Z",
            "updatedAt": "2024-06-18T09:56:47.354Z",
            "publishedAt": "2024-06-14T17:03:11.027Z",
            "filterBtn": "Filter"
        }
    },
    "meta": {}
}
*/
const Filter = () => {
  const dispatch = useDispatch();

  const { data, error, isLoading } = useFilter();

  return (
    <>
      <div className="dropdown">
        <button
          className="btn btn-secondary dropdown-toggle dropdown"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {data?.filterBtn}
          <CiFilter />
        </button>
        <ul className="dropdown-menu">
          {FILTER_OPTIONS.map((filterValue, index) => (
            <li key={index}>
              <a
                href="#"
                className="dropdown-item"
                onClick={() => {
                  dispatch(itemAction.filterItems(filterValue.value));
                }}
              >
                {filterValue.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Filter;
