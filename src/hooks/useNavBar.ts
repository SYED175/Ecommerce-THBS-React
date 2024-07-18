import useData from "./useData";



export interface Link {
    id:number;
    label:string;
    link?:string;
}

interface NavBar{
 links:Link[]   
}

const useNavBar = ()=>useData<NavBar>('/navbar?populate[0]=links.label');

export default useNavBar;