import React from "react";

function ArticlesCard(props) {
  require("./ArticlesCard.css");
  return (
    <>
      <div className="article-card">
        <div className="article-label">{props.data.title}</div>
        <div className="article-description">{props.data.description}</div>
      </div>
    </>
  );
}

export default ArticlesCard;
