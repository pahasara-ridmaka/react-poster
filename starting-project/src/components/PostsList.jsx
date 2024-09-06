import Post from "./Post";
import classes from "./PostsList.module.css";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function PostsList() {
  const posts = useLoaderData();

  //get data from the server
  // useEffect(() => {
  //   async function fetchPost() {
  //     const response = await fetch("http://localhost:8080/posts");
  //     const resData = await response.json();
  //     setPosts(resData.posts);
  //   }

  //   fetchPost();
  // }, []);

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post
              id={post.id}
              author={post.author}
              body={post.body}
              key={post.id}
            />
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
