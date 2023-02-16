import "./styles.css";
import { useState } from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "./notes";
import createArea from "./createArea";

function createNote(notes) {
  return (
    <Note key={notes.key} title={notes.title} content={notes.content}></Note>
  );
}

export default function App() {
  const [notes, setNotes] = useState([]);
  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  }

  return (
    <div className="container">
      <Header />
      <createArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={1}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}
