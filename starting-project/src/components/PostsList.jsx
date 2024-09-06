import Post from "./Post";
import classes from "./PostsList.module.css";
import NewPost from "./NewPost";
import { useEffect, useState } from "react";
import Modal from "./Modal";

export default function PostsList({ ModalVisibility, hideModalHandler }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPost() {
      const response = await fetch("http://localhost:8080/posts");
      const resData = await response.json();
      setPosts(resData.posts);
    }

    fetchPost();
  }, []);

  function addPostHandler(postData) {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(postData),
    });

    setPosts((existingPosts) => [postData, ...existingPosts]);
  }
  return (
    <>
      {ModalVisibility && (
        <Modal onModalClick={hideModalHandler}>
          <NewPost onCancel={hideModalHandler} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post, index) => (
            <Post author={post.author} body={post.body} key={index} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "white" }}>
          <h2>There are no posts</h2>
          <p>start adding some</p>
        </div>
      )}
    </>
  );
}
