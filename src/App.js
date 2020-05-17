import React, { Component } from "react";
import "./App.css";
import { Chords } from "./component/Chords";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  render() {
    return (
      <div className="App" style={styles.base}>
        <Chords />
      </div>
    );
  }
}

export default App;

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
