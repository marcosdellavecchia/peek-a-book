import React from "react";

const BookCard = (props) => {
  return (
    <div className="card">
      <div className="card-container">
        <img src={props.image} alt="" />
        <div className="card-info">
          <h2 className="book-title">{props.title}</h2>
          <p className="book-author">Autor: {props.author}</p>
          <p className="book-year">Año: {props.published.substring(0, 4)}</p>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
