import React from "react";
import styles from "./Categories.module.scss";

function Categories({ categories, loading }) {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.browse}>browse</div>
        <div className={styles.categories}>
          <div className={styles.active}>admissions</div>
          <div>tours</div>
          <div>events</div>
          <div>programmes</div>
        </div>
      </div>
    </>
  );
}

export default Categories;
