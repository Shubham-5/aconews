import NewsFeed from "./components/NewsFeed";
import Pagination from "./components/Pagination";

function App() {
  return (
    <div className="container mx-auto p-4">
      <NewsFeed />
      <Pagination currentPage={1} totalPages={10} />
    </div>
  );
}

export default App;
