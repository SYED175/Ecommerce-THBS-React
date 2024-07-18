import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { NavLink, Link } from "react-router-dom";
import { Product } from "../../interfaces/Product";
import { useState } from "react";
import useNavBar from "../../hooks/useNavBar";
import logo from "../../assets/logo-removebg-preview.png";
import { FaBars } from "react-icons/fa";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../Admin/LogoutButton";
import LoginButton from "../Admin/LoginButton";

const Header = () => {
  const { data, error, isLoading } = useNavBar();
  const { isAuthenticated } = useAuth0();

  const cartList: Product[] = useSelector((state: any) => state.cart);
  const [titleSelected, setTitleSelected] = useState(data?.links[0].label);
  const linkHandler = (title: string) => {
    setTitleSelected(title);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <img src={logo} className="logo-nav" />
        <button
          className="navbar-toggler bar-toggle"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <FaBars />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            {data?.links.map((link) => (
              <li key={link.id} className="nav-item">
                <NavLink
                  to={link.link!}
                  onClick={() => linkHandler(link.label)}
                  className={({ isActive }) => {
                    return isActive ? "text-primary" : "text-white";
                  }}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-item">
              <Link to="cart" className={`nav-item active`}>
                <button
                  className="btn sd-cart-btn custom-link"
                  onClick={() => {
                    setTitleSelected("");
                  }}
                >
                  <CiShoppingCart size="27px" />
                  <div className="sd-div">{cartList.length}</div>
                </button>
              </Link>
            </li>

            <li className="nav-item">
              {isAuthenticated ? <LogoutButton /> : <LoginButton />}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
