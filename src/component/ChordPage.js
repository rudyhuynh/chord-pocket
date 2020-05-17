import React from "react";
import { Chord } from "tonal";

window.Chord = Chord;

export const ChordPage = () => {
  const [chord, setChord] = React.useState("");
  const [chords, setChords] = React.useState([]);

  const onSubmit = (e) => {
    e.preventDefault();
    setChord("");
    setChords([
      ...chords,
      {
        name: chord,
        notes: Chord.notes(chord),
      },
    ]);
  };
  const remove = (i) => {
    setChords([...chords.slice(0, i), ...chords.slice(i + 1)]);
  };

  return (
    <div style={{ ...styles.wrapper }}>
      <h1>Chords</h1>
      <form onSubmit={onSubmit} className="form-input">
        <div className="input-group">
          <input
            name="chord"
            tabIndex="1"
            className="form-control"
            autoFocus
            placeholder="Type a chord here"
            value={chord}
            onChange={(e) => setChord(e.target.value)}
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary" tabIndex="2">
              Add
            </button>
          </span>
        </div>
      </form>
      <ul className="list-group" style={styles.list}>
        {chords.map((chord, i) => {
          return (
            <li className="list-group-item" key={i}>
              {chord.name}: {chord.notes.join(" ")}{" "}
              <button
                type="button"
                style={styles.removeBtn}
                className="btn btn-sm btn-outline-dark"
                onClick={() => remove(i)}
              >
                &#10006;
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

const styles = {
  wrapper: {
    overflow: "scroll",
    paddingTop: 20,
    paddingLeft: 4,
    paddingRight: 10,
  },
};
