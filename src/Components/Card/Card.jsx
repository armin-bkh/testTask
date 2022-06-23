import React from "react";
import { useNavigate } from "react-router-dom";

function Card(props) {
  const { post } = props;
  const navigate = useNavigate();

  return (
    <article
      className="p-5 cursor-pointer"
      onClick={() => navigate("/upload", { state: { post } })}
    >
      <p className="text-3xl mb-5">{post.title}</p>
      <p className="text-gray-400">{post.body.slice(0, 240)} ...</p>
    </article>
  );
}

export default Card;
