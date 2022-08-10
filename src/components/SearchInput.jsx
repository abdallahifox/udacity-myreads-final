import React from "react";
import { Link } from "react-router-dom";

function SearchInput({ Query, queryChangeHandelar }) {
  const onQueryChange = (e) => {
    queryChangeHandelar(e.target.value);
  };
  return (
    <>
      <div className="search-books-bar">
        <Link className="close-search" to="/"></Link>

        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="what you search for ?"
            value={Query}
            onChange={onQueryChange}
          />
        </div>
      </div>
    </>
  );
}

export default SearchInput;
