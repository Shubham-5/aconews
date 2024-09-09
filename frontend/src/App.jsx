import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

import Filter from "./components/Filter";
import Navbar from "./components/Navbar";
import NewsFeed from "./components/NewsFeed";
import Pagination from "./components/Pagination";

function fetchNews({ queryKey }) {
  const [_, query, currentPage, filter] = queryKey;
  return axios
    .get("https://aconews.onrender.com/news", {
      params: { q: query, page: currentPage, ...filter },
    })
    .then((res) => res.data);
}

export default function App() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filter, setFilter] = useState({});

  const { data, isLoading, isError } = useQuery({
    queryKey: ["news", query, currentPage, filter],
    queryFn: fetchNews,
    keepPreviousData: true,
  });

  return (
    <div className="container mx-auto p-4 space-y-8">
      <Navbar onSearch={(newQuery) => setQuery(newQuery)} />
      <Filter onFilter={(newFilter) => setFilter(newFilter)} />

      {isLoading && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="h-80 w-full animate-pulse bg-gray-200 rounded-lg"></div>
          <div className="h-80 w-full animate-pulse bg-gray-200 rounded-lg"></div>
          <div className="h-80 w-full animate-pulse bg-gray-200 rounded-lg"></div>
        </div>
      )}

      {isError && <p>Something went wrong while fetching the news.</p>}

      {!isLoading && !isError && (
        <>
          <NewsFeed articles={data.articles} />
          <Pagination
            currentPage={currentPage}
            totalPages={data?.totalArticles || 10}
            onPageChange={setCurrentPage}
          />
        </>
      )}
    </div>
  );
}
