import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Detail.module.scss";
import image from "../../Assets/Images/image1.png";
import back from "../../Assets/Icons/back.png";

function Detail({ setLoading }) {
  const [itemDetail, setItemDetail] = useState([]);

  useEffect(() => {
    showDetail();
  }, []);

  const showDetail = () => {
    setLoading(true);
    fetch(`https://app-stg.vouch.sg/json-mock/ticketing/tickets/1`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setItemDetail([...itemDetail, result]);
        // console.log(productDetail);
        setLoading(false);
      })
      .catch(() => {
        alert("Please Refresh the Website.");
        setLoading(false);
      });
  };

  return (
    <>
      <div className={styles.imageRow}>
        <Link to="/" className={styles.link}>
          <img src={back} alt="" className={styles.back} />
        </Link>
        <img src={image} alt="" className={styles.image} />
      </div>
      <div className={styles.detail}>
        <div className={styles.title}>title</div>
        <div className={styles.price}>$ 6.00</div>
        <div className={styles.description}>description</div>
        <div className={styles.para}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum
          mollitia totam, ex repellendus, numquam ab facere officiis cumque
          tempora et officia eum quos hic, deserunt assumenda dolorum nulla
          accusantium distinctio.
        </div>
        <div className={styles.buttonRow}>
          <button className={styles.addButton}>Add to Cart</button>
        </div>
      </div>
    </>
  );
}

export default Detail;
