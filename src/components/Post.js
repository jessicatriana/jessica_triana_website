import React from "react";

function Post(props) {
  return (
    <div className="posts">
      <h4>{props.post.title}</h4>
      <p style={{ fontStyle: "italic" }}>"{props.post.description}</p>
      <a href={props.post.canonical_url}>
        <img
          src={props.post.cover_image}
          alt={props.post.title}
          style={{ width: "60%" }}
        />
      </a>
      <p>Positive Reactions: {props.post.public_reactions_count}</p>
      <hr></hr>
    </div>
  );
}

export default Post;
