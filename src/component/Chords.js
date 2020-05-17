import React, { Component, Fragment } from "react";
import { Chord } from "tonal";

export class Chords extends Component {
  state = { chord: "", chords: [] };
  onSubmit = (e) => {
    e.preventDefault();
    this.setState({
      chord: "",
      chords: [
        ...this.state.chords,
        {
          name: this.state.chord,
          notes: Chord.notes(this.state.chord),
        },
      ],
    });
  };
  remove(i) {
    this.setState({
      chords: [
        ...this.state.chords.slice(0, i),
        ...this.state.chords.slice(i + 1),
      ],
    });
  }
  render() {
    const { chord, chords } = this.state;

    return (
      <Fragment>
        <h1>Chord Pocket</h1>
        <form onSubmit={this.onSubmit}>
          <div className="input-group">
            <input
              className="form-control"
              autoFocus
              placeholder="Type a chord here"
              value={chord}
              onChange={(e) => this.setState({ chord: e.target.value })}
            />
            <span className="input-group-btn">
              <button className="btn btn-secondary">Add</button>
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
                  onClick={() => this.remove(i)}
                >
                  &#10006;
                </button>
              </li>
            );
          })}
        </ul>
      </Fragment>
    );
  }
}

const styles = {
  base: {
    //paddingTop: 20
    padding: 20,
  },
  list: {
    marginTop: 20,
  },
  removeBtn: {
    float: "right",
  },
};
