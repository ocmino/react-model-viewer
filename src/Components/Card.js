//create card component with children

import React from "react";
import styles from "./Card.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>{props.children}</div>
    </div>
  );
}

export default Card;