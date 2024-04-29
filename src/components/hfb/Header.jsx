import { useState } from "react";
import logo from "../../assets/Designer.png";
import styles from "../hfb/Header.module.css";
import { ImCart } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { useSelector } from "react-redux";
const Header = () => {
  const { loginState, logout } = useLogin();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <>
      <div className={styles.navBar}>
        <div className={`${styles.navLogo}`}>
          <Link to={"/home"}>
            <img src={logo} alt="logo" width={"65px"} height={"65px"} />
          </Link>
        </div>
        <div className={styles.navbarItems}>
          <ul>
            <li>
              <Link to={"/home"}>Home</Link>
            </li>
            <li>
              <Link to={"/home/about"}>About</Link>
            </li>
            <li>
              <Link to={"/home/contact"}>Contact</Link>
            </li>
            <li>
              <a href="#">
                {" "}
                <ImCart size={"30px"} />
              </a>
              <span>{cartItems.length}</span>
            </li>
          </ul>
          {loginState ? (
            <button
              onClick={() => setIsloggedIN(true)}
              className={`${styles.loggedINOUT}`}
            >
              Logged In
            </button>
          ) : (
            <button
              onClick={() => {
                logout();
                navigate("/");
              }}
              className={`${styles.loggedINOUT} hover:bg-slate-400`}
            >
              Logged Out
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
