import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { ArticleAPI } from "../Services/Api/ArticlesProvider";
import { ArticleContext } from "../Services/Context/ArticlesContext";
import ArticlesCard from "./ArticlesCard";

function Article() {
  require("./Article.css");
  const articleContext = useContext(ArticleContext);
  const [search, setSearch] = useState("");

  useEffect(() => {
    articleContext.setLoading(true);
    const timeOut = setTimeout(() => {
      ArticleAPI(search)
        .then((response) => {
          articleContext.setArticle(response.data.pages);
          articleContext.setLoading(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }, 500);

    return () => clearTimeout(timeOut);
  }, [search]);

  return (
    <div className="article">
      <div className="search-input">
        <label>Check here for a random article</label>
        <input
          type={"search"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      {articleContext.loading ? (
        <div className="spinner-box">
          <div className="circle-border">
            <div className="circle-core"></div>
          </div>
          <em>Loading ...</em>
        </div>
      ) : articleContext.article.length == 0 ? (
        <div className="data-not-found">Data Not Found</div>
      ) : (
        articleContext.article.map((article) => (
          <ArticlesCard key={article.id} data={article} />
        ))
      )}
    </div>
  );
}

export default Article;
