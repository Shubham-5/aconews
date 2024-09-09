import { useState, useCallback } from "react";

const Navbar = ({ onSearch }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  const debouncedSearch = useCallback(() => {
    const timeoutId = setTimeout(() => {
      onSearch(query);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, [query, onSearch]);

  const handleSearchChange = (e) => {
    setQuery(e.target.value);
    debouncedSearch();
  };

  return (
    <header>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-gray-800 first-letter:text-blue-600">
          <a href="/">Aco News</a>
        </div>

        <div className="hidden md:block">
          <input
            type="text"
            value={query}
            placeholder="Search news..."
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-600"
            onChange={handleSearchChange}
            aria-label="Search News"
          />
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-gray-700 focus:outline-none"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle mobile menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="flex justify-center">
            <input
              type="text"
              value={query}
              placeholder="Search news..."
              className="border border-gray-300 rounded-md px-3 py-1 mt-2 focus:outline-none focus:border-blue-600 w-full"
              onChange={handleSearchChange}
              aria-label="Search News"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
