import { useState } from "react";
import logo from "../assets/Designer.png";
import styles from "./Header.module.css";
import { ImCart } from "react-icons/im";
import { Link } from "react-router-dom";
const Header = () => {
  const [isloggedIN, setIsloggedIN] = useState(false);
  //   return true
  // }
  return (
    <>
      <div className={styles.navBar}>
        <div className={`${styles.navLogo}`}>
          <Link to={"/"}><img src={logo} alt="logo" width={"65px"} height={"65px"} /></Link>
        </div>
        <div className={styles.navbarItems}>
          <ul>
            <li>
            <Link to={"/"}>Home</Link>
            </li>
            <li>
            <Link to={"/about"}>About</Link>
            </li>
            <li>
            <Link to={"/contact"}>Contact</Link>
            </li>
            <li>
              <a href="#">
                {" "}
                <ImCart size={"30px"} />
              </a>
            </li>
          </ul>
          {!isloggedIN ? (
            <button
              onClick={() => setIsloggedIN(true)}
              className={`${styles.loggedINOUT}`}
            >
              Logged In
            </button>
          ) : (
            <button
              onClick={() => setIsloggedIN(false)}
              className={`${styles.loggedINOUT}`}
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
