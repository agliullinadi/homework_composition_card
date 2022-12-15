import React from "react";

function Card(props) {
  return (
    <div className="card">
      {props.children}
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a href={props.link} className="btn btn-primary">
          {props.linkTitle}
        </a>
      </div>
    </div>
  );
}

export default Card;