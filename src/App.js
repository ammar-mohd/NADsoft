import "./App.css";
import Article from "./Module/Article";
import { ArticleProvider } from "./Services/Context/ArticlesContext";

function App() {
  require("./App.css");
  return (
    <div className="app-body">
      <ArticleProvider>
        <Article />
      </ArticleProvider>
    </div>
  );
}

export default App;
