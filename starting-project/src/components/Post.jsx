import React from "react";
import styles from "./Post.module.css";
import { Link } from "react-router-dom";

const names = ["Maximilian", "Manuel"];

export default function Post(props) {
  return (
    <div className={styles.post}>
      <Link to={props.id}>
        <p className={styles.author}>{props.author}</p>
        <p className={styles.text}>{props.body}</p>
      </Link>
    </div>
  );
}
