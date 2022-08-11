// TODO: React Imports
import React, { useState, useEffect } from "react";

//TODO: Import Search From API Helper
import { getAllSearch } from "../utilites/helpersAPI";

// TODO: All And The Component Import Here And CSS Files
import SearchInput from "../components/SearchInput";
import BooksView from "../components/BooksView";

function Search({ updateStatusHandelar }) {
  const [query, setQuery] = useState("");
  const [booksQuery, setBooksQuery] = useState([]);
  const onSearchHandelar = (newQuery) => setQuery(newQuery);

  const onUpdated = (book, updated) => updateStatusHandelar(book, updated);

  useEffect(() => {
    if (query.length === 0) {
      setBooksQuery([]);
      return;
    }
    let id = setTimeout(async () => {
      try {
        getAllSearch(query).then((data) => setBooksQuery(data));
      } catch (error) {
        setBooksQuery([]);
      }
    }, 1000);

    return () => {
      clearTimeout(id);
    };
  }, [query]);

  return (
    <>
      <SearchInput Query={query} queryChangeHandelar={onSearchHandelar} />
      <div className="search-result">
        <BooksView booksData={booksQuery} onUpdatStatus={onUpdated} />
      </div>
    </>
  );
}

export default Search;
