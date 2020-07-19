import React from "react";
import logo from "../logo-pab.png";

class Header extends React.Component {
  render() {
    return (
      <a href="/">
        <div className="container-fluid header">
          <img className="logo" src={logo} alt="" />
        </div>
      </a>
    );
  }
}

export default Header;
