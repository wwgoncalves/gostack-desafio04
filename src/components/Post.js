import React from "react";

import Comment from "./Comment";

function Post({ data }) {
  return (
    <div className="post">
      <div className="meta">
        <img className="author-avatar" src={data.author.avatar} />
        <div className="details">
          <div className="author-name">{data.author.name}</div>
          <div className="date">{data.date}</div>
        </div>
      </div>
      <div className="content">{data.content}</div>
      {data.comments.map(comment => (
        <Comment key={comment.id} data={comment} />
      ))}
    </div>
  );
}

export default Post;
