import React from "react";

function BookItem({ bookInfo, onUpdatedStatus }) {
  const statusUpdate = (e) => {
    let update = e.target.value.replace(/\s+/g, "");
    onUpdatedStatus(bookInfo, update);
  };
  let status = [
    "Move to..",
    "want To Read",
    "read",
    "currently Reading",
    "None",
  ];
  return (
    <div className="book">
      <div className="book-top">
        <img className="book-cover" src={bookInfo.url} alt={bookInfo.title} />
        <button className="book-shelf-changer">
          <select onChange={statusUpdate}>
            {status.map((item, index) => {
              return (
                <option key={index}>
                  {item}
                  {item.replace(/\s+/g, "") === bookInfo.status ? "✅" : ""}
                </option>
              );
            })}
          </select>
        </button>
      </div>
      <div className="book-cover-title">
        <h2 className="book-title">{bookInfo.title}</h2>
        <p className="book-authors">{bookInfo.author[0] || bookInfo.author}</p>
      </div>
    </div>
  );
}

export default BookItem;
