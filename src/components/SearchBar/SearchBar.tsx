import { useRef } from "react";
import { useSelector } from "react-redux";
import { CiSearch } from "react-icons/ci";

interface Props {
  handleSubmit: (input: string) => void;
  handleClearResults: (textRef: any) => void;
}
const SearchBar = ({ handleSubmit, handleClearResults }: Props) => {
  const textRef = useRef<HTMLInputElement>(null);

  const { isActive } = useSelector((state: any) => state.search);
  // const searchHandler = () => {
  //   event?.preventDefault();
  //   onSearch(textRef.current!.value);
  //   setSearchActive(true);
  // };

  return (
    <form onSubmit={() => handleSubmit(textRef.current!.value)}>
      <div>
        <div className="input-group">
          <input
            type="text"
            ref={textRef}
            className=" form-control search-input"
            placeholder="Search item.."
          />
          <button className="btn btn-custom-search">
            <CiSearch style={{ fontSize: "22px", color: "gray" }} />
          </button>
        </div>
        {isActive && (
          <button
            className="btn btn-secondary mt-3"
            onClick={() => handleClearResults(textRef)}
          >
            clear results
          </button>
        )}{" "}
      </div>
    </form>
  );
};

export default SearchBar;
