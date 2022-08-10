// TODO: React Imports
import React from "react";

// TODO: All The Component Import Here And CSS Files
import BooksView from "../components/BooksView";
import SearchButton from "../components/SearchButton";
import LoadingSpinner from "./../components/LoadingSpinner";

function Main({ booksData, Loading, updateStatusHandelar }) {
  const updateNow = (book, update) => {
    //TODO: update the status of the book
    updateStatusHandelar(book, update);
  };

  let CurrentRead = booksData.filter(
    //TODO: get all the Current Read Books
    (book) => book.status === "currentlyReading"
  );

  let WantToRead = booksData.filter((book) => book.status === "wantToRead"); //TODO: get all the Want To Read Books

  let Read = booksData.filter((book) => book.status === "read"); //TODO: get all the Read Books

  return (
    <>
      {/* TODO: LoadingSpinner For The Application */}

      {Loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {CurrentRead.length > 0 && (
            <BooksView
              title="Currently Reading"
              booksData={CurrentRead}
              onUpdatStatus={updateNow}
            />
          )}
          {WantToRead.length > 0 && (
            <BooksView
              title="Want To Read"
              booksData={WantToRead}
              onUpdatStatus={updateNow}
            />
          )}

          {Read.length > 0 && (
            <BooksView
              title="Read"
              booksData={Read}
              onUpdatStatus={updateNow}
            />
          )}
          <SearchButton />
        </>
      )}
    </>
  );
}

export default Main;
