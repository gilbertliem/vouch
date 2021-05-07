import React, { useState } from "react";
import styles from "./Cart.module.scss";
import ItemImage from "../../Assets/Images/image1.png";

function Cart() {
  const [quantity, setQuantity] = useState(1);

  const addQuantity = () => {
    let total = quantity + 1;
    // console.log(total);
    setQuantity(total);
    // console.log(quantity);
  };

  const minusQuantity = () => {
    let total = quantity - 1;
    // console.log(total);
    if (quantity === 0 || quantity < 0) {
      setQuantity(0);
    } else {
      setQuantity(total);
    }
    // console.log(quantity);
  };

  return (
    <>
      <div className={styles.cart}>
        <div className={styles.admissions}>admissions</div>
        <div className={styles.item}>
          <img src={ItemImage} alt="title" className={styles.ItemImage} />
          <div className={styles.detail}>
            <div className={styles.title}>item title</div>
            <div className={styles.category}>category</div>
            <div className={styles.date}>Date of Visit 30/05/2021</div>
          </div>
          <div className={styles.right}>
            <div className={styles.quantity}>
              <button className={styles.button} onClick={minusQuantity}>
                -
              </button>
              <div className={styles.number}>{quantity}</div>
              <button className={styles.button} onClick={addQuantity}>
                +
              </button>
            </div>
            <div className={styles.price}>$0.00</div>
          </div>
        </div>
        <div className={styles.item}>
          <img src={ItemImage} alt="title" className={styles.ItemImage} />
          <div className={styles.detail}>
            <div className={styles.title}>item title</div>
            <div className={styles.category}>category</div>
            <div className={styles.date}>Date of Visit 30/05/2021</div>
          </div>
          <div className={styles.right}>
            <div className={styles.quantity}>
              <button className={styles.button} onClick={minusQuantity}>
                -
              </button>
              <div className={styles.number}>{quantity}</div>
              <button className={styles.button} onClick={addQuantity}>
                +
              </button>
            </div>
            <div className={styles.price}>$0.00</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
