import React from "react";

interface CardProps {
  title?: string;
  imgSrc?: string;
  children?: React.ReactNode;
}

const CardComponent: React.FC<CardProps> = ({ title, imgSrc, children }) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {imgSrc && <img src={imgSrc} className="card-img-top" alt="Card image" />}
      <div className="card-body">
        {title && <h5 className="card-title">{title}</h5>}
        <p className="card-text">{children}</p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default CardComponent;