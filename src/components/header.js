import React from "react";

class Header extends React.Component {
  render() {
    return (
      <a href="/">
        <div className="container-fluid header">
          <i className="fas fa-book fa-2x"></i>
          <h1>Peek-a-book</h1>
        </div>
      </a>
    );
  }
}

export default Header;
