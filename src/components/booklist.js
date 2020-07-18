import React from "react";
import BookCard from "./bookcard";

{
  /* Itera el componente books y pasa los props a BookCard de cada cada objeto que encuentra. */
}

const BookList = (props) => {
  return (
    <div className="container booklist">
      {props.books.map((book, i) => {
        return (
          <BookCard
            key={i}
            image={book.volumeInfo.imageLinks.thumbnail}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors}
            published={book.volumeInfo.publishedDate}
          />
        );
      })}
    </div>
  );
};

export default BookList;