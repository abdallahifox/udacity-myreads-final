// TODO: React Imports
import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router";

// TODO: Import API FILES

import * as BooksAPI from "./BooksAPI";
import { getAllBooks } from "./utilites/helpersAPI";

// TODO: All The Pages And The Component Import Here And CSS Files
import Layout from "./components/Layout";
import Main from "./pages/Main";
import Navigation from "./components/Navigation";
import Search from "./pages/Search";

import "./App.css";

function App() {
  const [books, setBooks] = useState([]);
  const [Loading, setLoading] = useState(false);

  const onUpdateHandelar = (book, status) => {
    const updateStatus = async () => {
      //TODO: Update the UI By Calling the The Backend Side
      await BooksAPI.update(book, status);
      getAllBooks().then((data) => setBooks([...data]));
    };
    updateStatus();
  };

  useEffect(() => {
    setLoading(true);
    getAllBooks().then((data) => {
      setLoading(false);
      setBooks(data);
    });
  }, []);
  return (
    <Layout>
      {/*  Navigation Bar */}
      <Navigation />

      {/*  All The Routes Will Find Here */}
      {/*  Container Is Helper Class To Make A Nice View In Every Screen Resuliotion */}
      <div className="container">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Main
                booksData={books}
                Loading={Loading}
                updateStatusHandelar={onUpdateHandelar}
              />
            }
          />
          <Route
            exact
            path="/search"
            element={
              <Search
                updateStatusHandelar={onUpdateHandelar}
                booksData={books}
              />
            }
          />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
