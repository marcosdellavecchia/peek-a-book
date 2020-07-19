import React from "react";
import SearchArea from "./search-area";
import BookList from "./booklist";

class Books extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }

  //Este metodo se encarga de setear el estado cada vez que se introduce algo en el campo de busqueda
  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };

  searchBook = (e) => {
    //API Request con los terminos incluidos en el estado searchField
    e.preventDefault();

    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=" + this.state.searchField
    )
      .then((response) => {
        return response.json();
      })
      //Agrega al estado books todos los items encontrados en data y posteriormente 'limpiados'
      .then((data) => {
        const cleanData = this.cleanData(data);
        this.setState({ books: cleanData });
      })

      //Catch de errores. En principio utilice event.preventDefault pero la documentacion de React recomienda utilizar persist para estos casos.
      .catch((err) => e.persist());
  };

  //Le da una propiedad default a los datos que no existan en el libro solicitado.

  cleanData = (data) => {
    const cleanedData = data.items.map((book) => {
      if (book.volumeInfo.hasOwnProperty("publishedDate") === false) {
        book.volumeInfo["publishedDate"] = "N/A";
      } else if (book.volumeInfo.hasOwnProperty("imageLinks") === false) {
        book.volumeInfo["imageLinks"] = {
          thumbnail:
            "https://www.brockport.edu/_resources/images/directory_default.png",
        };
      }
      return book;
    });
    return cleanedData;
  };

  render() {
    return (
      <div>
        <SearchArea
          handleSearch={this.handleSearch}
          searchBook={this.searchBook}
        />
        <BookList books={this.state.books} />
      </div>
    );
  }
}

export default Books;
