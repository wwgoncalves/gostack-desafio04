import React from "react";

function Comment({ data }) {
  return (
    <div className="comment">
      <img className="author-avatar" src={data.author.avatar} />
      <div className="content">
        <span className="author-name">{data.author.name}</span>&nbsp;
        <span>{data.content}</span>
      </div>
    </div>
  );
}

export default Comment;
