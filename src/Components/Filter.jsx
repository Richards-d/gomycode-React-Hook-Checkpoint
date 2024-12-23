// This component allows users to filter movies by title and rating.

import React from "react";

const Filter = ({ setFilter }) => {
  const handleTitleChange = (e) => {
    setFilter((prevFilter) => ({ ...prevFilter, title: e.target.value }));
  };

  const handleRatingChange = (e) => {
    setFilter((prevFilter) => ({ ...prevFilter, rating: Number(e.target.value) }));
  };

  return (
    <div className="filter">
      <input
        type="text"
        placeholder="Search by title"
        onChange={handleTitleChange}
      />
      <input
        type="number"
        placeholder="Minimum rating"
        onChange={handleRatingChange}
        min="0"
        max="5"
      />
    </div>
  );
};

export default Filter;