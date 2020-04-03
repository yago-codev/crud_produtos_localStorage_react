import React from "react";

function App() {
  return (
    <div className="alert alert-dismissible alert-warning">
      <button type="button" className="close" data-dismiss="alert">
        &times;
      </button>
      <h4 className="alert-heading">Warning!</h4>
      <p className="mb-0">
        Hello
        <a href="/" className="alert-link">
          &nbsp;Bootswatch
        </a>
      </p>
    </div>
  );
}

export default App;
