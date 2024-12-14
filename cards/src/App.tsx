import React from "react";
import CardComponent from "./components/CardComponent";

function App() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <CardComponent
            title="Card title"
            imgSrc="https://via.placeholder.com/286x180"
          >
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </CardComponent>
        </div>
        <div className="col-md-4">
          <CardComponent title="Special title treatment">
            With supporting text below as a natural lead-in to additional
            content.
          </CardComponent>
        </div>
      </div>
    </div>
  );
}

export default App;
