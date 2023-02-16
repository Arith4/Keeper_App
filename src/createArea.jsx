import React, { useState } from "react";
import notes from "./notes";

function createArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleChange}
          value={notes.title}
          placeholder="Title"
        />
        <textarea
          name="content"
          onChange={handleChange}
          value={notes.content}
          placeholder="Take a Note ...."
          rows="3"
        ></textarea>
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default createArea;
