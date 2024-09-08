import { useCallback, useEffect, useState } from "react";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";
import Pagination from "./components/Pagination";
import axios from "axios";

function App() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({});

  const fetchNews = useCallback(
    (query = "", page = 1) => {
      axios
        .get("http://localhost:5000/news", {
          params: { q: query, page, ...filter },
        })
        .then((res) => setArticles(res.data.articles))
        .catch((err) => console.log(err));
    },
    [filter]
  );

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Navbar onSearch={(query) => fetchNews(query)} />
      <Filter onFilter={(filter) => setFilter(filter)} />
      <NewsFeed articles={articles} />
      <Pagination
        currentPage={currentPage}
        totalPages={articles?.totalArticles || 10}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default App;
