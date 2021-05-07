import React from "react";
import { Link } from "react-router-dom";
import styles from "./NavbarHome.module.scss";
import cart from "../../Assets/Icons/cart.png";

const NavbarHome = () => {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.title}>
          <div className={styles.head}>ticketing</div>
          <div className={styles.subhead}>national museum wakanda</div>
        </div>
        <Link to="/cart">
          <img src={cart} alt="cart" className={styles.icon} />
          <div className={styles.notif}>2</div>
        </Link>
      </nav>
    </>
  );
};

export default NavbarHome;
