import React from "react";

function SearchArea(props) {
  return (
    <div className="container">
      <div className="search">
        <form onSubmit={props.searchBook} id="form" action="">
          <input
            className="searchTerm"
            type="text"
            placeholder="¿Que libro estás buscando?"
            onChange={props.handleSearch}
          />
        </form>
        <button type="submit" className="searchButton" form="form">
          <i className="fa fa-search"></i>
        </button>
      </div>
    </div>
  );
}

export default SearchArea;
