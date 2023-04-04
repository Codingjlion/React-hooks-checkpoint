import React from "react";

const Filter = ({
  titleFilter,
  rateFilter,
  onTitleFilterChange,
  onRateFilterChange,
}) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search movies by title..."
        value={titleFilter}
        onChange={onTitleFilterChange}
      />
      <select value={rateFilter} onChange={onRateFilterChange}>
        <option value="0">Select rating</option>
        <option value="9">9+</option>
        <option value="8">8+</option>
        <option value="7">7+</option>
        <option value="6">6+</option>
        <option value="5">5+</option>
      </select>
    </div>
  );
};

export default Filter;
