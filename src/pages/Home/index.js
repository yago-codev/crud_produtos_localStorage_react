import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="container">
      <div className="jumbotron mt-5">
        <div className="container">
          <h1 className="display-5">Bem, vindo!</h1>
          <p className="lead">
            Este é seu sistema, utilize a barra de navegação para acessar as
            páginas
          </p>
          <hr className="my-4" />
          <p className="lead">
            <Link
              className="btn btn-primary btn-md"
              to="/register"
              role="button"
            >
              Cadastrar
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
