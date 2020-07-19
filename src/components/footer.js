import React from "react";

function Footer() {
  return (
    <React.Fragment>
      <div className="container">
        <hr />
        <p className="footer text-center">
          Copyright Peek-a-Book 2020 -{" "}
          <a
            href="https://github.com/marcosdellavecchia"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hecho con{" "}
            <span role="img" aria-label="Purple heart">
              💜
            </span>{" "}
            por Marcos DV
          </a>
        </p>
      </div>
    </React.Fragment>
  );
}

export default Footer;
