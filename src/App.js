import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/header";
import Books from "./components/books";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Books />
      <Footer />
    </div>
  );
}

export default App;
