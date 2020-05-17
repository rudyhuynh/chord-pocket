import React from "react";
import { Scale } from "tonal";

window.Scale = Scale;

export const ScalePage = () => {
  const [scale, setScale] = React.useState("");
  const [scales, setScales] = React.useState([]);
  // state = { chord: "", chords: [] };

  const onSubmit = (e) => {
    e.preventDefault();
    setScale("");
    setScales([
      ...scales,
      {
        name: scale,
        notes: Scale.notes(scale),
      },
    ]);
  };
  const remove = (i) => {
    setScales([...scales.slice(0, i), ...scales.slice(i + 1)]);
  };

  return (
    <div style={{ ...styles.wrapper }}>
      <h1>Scales</h1>
      <form onSubmit={onSubmit} className="form-input">
        <div className="input-group">
          <input
            name="scale"
            tabIndex="3"
            className="form-control"
            placeholder="Type a chord here"
            value={scale}
            onChange={(e) => setScale(e.target.value)}
          />
          <span className="input-group-btn">
            <button className="btn btn-secondary" tabIndex="4">
              Add
            </button>
          </span>
        </div>
      </form>
      <ul className="list-group" style={styles.list}>
        {scales.map((chord, i) => {
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
    paddingLeft: 10,
    paddingRight: 10,
  },
};
