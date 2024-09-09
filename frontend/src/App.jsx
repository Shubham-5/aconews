import axios from "axios";
import { useCallback, useEffect, useState } from "react";

import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";
import Pagination from "./components/Pagination";

function App() {
  const [articles, setArticles] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchNews = useCallback(
    (query) => {
      axios
        .get("http://localhost:5000/news", {
          params: { q: query, page: currentPage, ...filter },
        })
        .then((res) => setArticles(res.data.articles))
        .catch((err) => console.log(err));
    },
    [filter, currentPage]
  );

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="h-40 w-40 pulse bg-gray-50"></div>
        <div className="h-40 w-40 pulse bg-gray-50"></div>
        <div className="h-40 w-40 pulse bg-gray-50"></div>
      </div>
    );
  }

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
