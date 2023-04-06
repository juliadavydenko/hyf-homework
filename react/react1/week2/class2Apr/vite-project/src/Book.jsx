import React from "react";

export default function Book(props) {
  return (
    <div>
      <div>
        <h2>{props.title}</h2>
        <h2>{props.authors}</h2>
      </div>
      <div>
        <p>{props.publisher}</p>
        <p>{props.year}</p>
      </div>
    </div>
  );
}

