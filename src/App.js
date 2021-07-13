import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      "go": "gogogo",
    }

  }
  test(){
    return 111;
  }
  render() {
    let a = 44;
    let b ={ name:'Ivan', lastname:'Ivanov'};
    let c = ['hello', 'Ivanov', 'Ivan','Ivanovich'];
   return (
      <div className="ty">
        <h1>{this.state.go}</h1>
        <div>{Math.random()}</div>
        <h2>{2+3}</h2>
        <ul>
          {c.map( elem => { return <li key={elem}>{elem}</li>})}
        </ul>
        <div>{this.test()/5}</div>
        <div>{a}</div>
        <div {...b}></div>
        <hr/>
        <p>{false}</p>
        <hr/>
        <input defaultValue="222"/>
      </div>
    );
  }
}
export default App;
