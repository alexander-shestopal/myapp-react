import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav';


class App extends React.Component {
  render() {
    let nav = this.props.nav;
    let a = 'My new sites';
   return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>{a}</h1>
          <h2>{this.props.title}</h2>
          <p>
           Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Nav nav={nav}/>
      </div>
    );
  }
}
export default App;
