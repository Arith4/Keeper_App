import React from "react";
import notes from "./notes";

function Note(props) {
  return (
    <div className="box">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
    </div>
  );
}

export default Note;
