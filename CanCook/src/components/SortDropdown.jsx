import React from "react";

const SortDropdown = ({ onSort }) => {
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <select onChange={handleSortChange} className="sort-dropdown">
      <option value="">Sort by</option>
      <option value="name">Alphabetically</option>
      <option value="calories">By Calories</option>
      <option value="status">By Status</option>
    </select>
  );
};

export default SortDropdown;
