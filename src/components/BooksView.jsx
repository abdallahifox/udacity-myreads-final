// TODO: React Imports
import React from "react";

// TODO: All And The Component Import Here And CSS Files
import BookItem from "./BookItem";

function BooksView({ title, booksData, onUpdatStatus }) {
  const updateStatus = (book, updated) => {
    onUpdatStatus(book, updated);
  };

  return (
    <div className="books-view">
      <div className="list-books-content">
        <h1 style={{ marginBottom: "30px" }}>{title && title}</h1>
        <div className="bookshelf">
          <ul className="books-grid">
            {booksData.map((book) => {
              return (
                <li key={book.id}>
                  <BookItem bookInfo={book} onUpdatedStatus={updateStatus} />;
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BooksView;
