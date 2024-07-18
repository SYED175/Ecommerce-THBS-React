import useData from "./useData";
interface Filter {
    filterBtn:string;
}
const useFilter = ()=> useData<Filter>('/filter');

export default useFilter;