import React from "react";
import styles from "./Post.module.css";

const names = ["Maximilian", "Manuel"];

export default function Post(props) {
  return (
    <div className={styles.post}>
      <p className={styles.author}>{props.author}</p>
      <p className={styles.text}>{props.body}</p>
    </div>
  );
}
