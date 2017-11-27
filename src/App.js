import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Chord } from 'tonal'

var cooleys = `
D2|:"Em"EB{c}BA B2 EB|~B2 AB dBAG|"D"FDAD BDAD|FDAD dAFD|
""EBBA B2 EB|B2 AB defg|"D"afe^c dBAF|1"Em"DEFD E2 D2:|2"Em"DEFD E2 gf|]
`;

class App extends Component {
  state = {chord: '', chords: []}
  onSubmit = (e) => {
    e.preventDefault()
    this.setState({
      chord: '',
      chords: [...this.state.chords, {
        name: this.state.chord,
        notes: Chord.notes(this.state.chord)
      }]
    })
  }
  render() {
    const {chord, chords} = this.state

    return (
      <div className="App" style={styles.base}>
        <h1>Chord Pocket</h1>
        <form onSubmit={this.onSubmit}>
          <input 
            placeholder="Type a chord here"
            value={chord} onChange={e => this.setState({chord: e.target.value})}/>
          <button>Add</button>
        </form>
        <ul style={styles.list}>
        {
          chords.map((chord, i) => {
            return <li key={i}>
              {chord.name}: {chord.notes.join(' ')}
            </li>
          })
        }
        </ul>
      </div>
    );
  }
}

export default App;

const styles = {
  base: {
    //paddingTop: 20
  },
  list: {
    listStyleType: 'none'
  }
}
