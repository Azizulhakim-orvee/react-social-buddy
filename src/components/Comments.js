import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import CommentsReal from "./CommentsReal";

const Comments = () => {
  const { id } = useParams();
  const [post, setPost] = useState([]);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data))
      .catch((err) => console.error(err));
  }, [id]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [id]);

  console.log(comments);

  const { title, body } = post;
  const history = useHistory();

  return (
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
      {comments.map((comment) => (
        <CommentsReal comment={comment}></CommentsReal>
      ))}
      <button onClick={history.goBack}>Go Back</button>
    </div>
  );
};

export default Comments;
