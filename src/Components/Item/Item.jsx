import React from "react";
import styles from "./Item.module.scss";
import ItemImage from "../../Assets/Images/image1.png";
import { Link } from "react-router-dom";

function Item({ itemDetails, loading }) {
  return (
    <>
      <Link to="/detail" className={styles.link}>
        <div className={styles.card}>
          <img src={ItemImage} alt="title" className={styles.image} />
          <div className={styles.info}>
            <div className={styles.row}>
              <div className={styles.title}>regular / child</div>
              <div className={styles.price}>free</div>
            </div>
            <div className={styles.category}>category</div>
            <div className={styles.detail}>Lorem ipsum dolor sit amet.</div>
          </div>
        </div>
      </Link>
      <div className={styles.card}>
        <img src={ItemImage} alt="title" className={styles.image} />
        <div className={styles.info}>
          <div className={styles.row}>
            <div className={styles.title}>regular / child</div>
            <div className={styles.price}>$ 6.00</div>
          </div>
          <div className={styles.category}>category</div>
          <div className={styles.detail}>Lorem ipsum dolor sit amet.</div>
        </div>
      </div>
    </>
  );
}

export default Item;
