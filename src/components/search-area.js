import React from "react";

function SearchArea(props) {
  return (
    <div className="container search-area">
      <form onSubmit={props.searchBook} action="">
        <input
          className="search-input"
          type="text"
          onChange={props.handleSearch}
        />
        <button type="submit" className="search-button">
          Buscar
        </button>
      </form>
    </div>
  );
}

export default SearchArea;
