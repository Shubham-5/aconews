import { useState } from "react";

const Filter = ({ onFilter }) => {
  const [category, setCategory] = useState("all");
  const [country, setCountry] = useState("us");
  const [language, setLanguage] = useState("en");

  const applyFilter = () => {
    onFilter({ category, country, language });
  };

  return (
    <div className="flex space-x-4 my-4 justify-center">
      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="p-2 rounded-lg hover:border-gray-300 border text-gray-700 sm:text-sm"
      >
        <option value="all">All Categories</option>
        <option value="technology">Technology</option>
        <option value="entertainment">Entertainment</option>
        <option value="sports">Sports</option>
      </select>
      <select
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        className="p-2 rounded-lg hover:border-gray-300 border text-gray-700 sm:text-sm"
      >
        <option value="us">USA</option>
        <option value="in">India</option>
      </select>
      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="p-2 rounded-lg hover:border-gray-300 border text-gray-700 sm:text-sm"
      >
        <option value="en">English</option>
        <option value="hi">Hindi</option>
      </select>
      <button
        onClick={applyFilter}
        className="bg-blue-500 text-white py-2 rounded-lg px-4 focus:outline-none focus:ring active:bg-indigo-500 sm:text-sm hover:bg-indigo-500"
      >
        Apply
      </button>
    </div>
  );
};

export default Filter;
