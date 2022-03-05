import React, { useState, createContext } from "react";

const ArticleContext = createContext();

function ArticleProvider(props) {
  const [article, setArticle] = useState([]);
  const [loading, setLoading] = useState(true);

  return (
    <ArticleContext.Provider
      value={{ article, setArticle, loading, setLoading }}
    >
      {props.children}
    </ArticleContext.Provider>
  );
}

export { ArticleContext, ArticleProvider };
