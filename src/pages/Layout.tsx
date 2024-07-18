import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import FetchItems from "./FetchItems";
import { useSelector } from "react-redux";
import Spinner from "../components/Spinner/Spinner";

const Layout = () => {
  const fetchingDone = useSelector((state: any) => state.fetchStatus);

  console.log(fetchingDone);
  return (
    <>
      <Header />
      <FetchItems />
      {fetchingDone.fetchStatus ? <Outlet /> : <Spinner />}
    </>
  );
};

export default Layout;
