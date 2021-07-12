import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'Hello',
      text2: 555,
    }
    this.showText = this.showText.bind(this);
    this.showText2 = this.showText2.bind(this);
    this.move = this.move.bind(this);
  }
  showText() {
    console.log('work');
    console.log(this)
    this.setState({text: 'hi'});
  }
  showText2(e){
    this.setState({text2:e.target.value});
    console.log(e.target.value);
  }
  move(e){
  
    console.log(e.target.textContent);

  }
  render() {
    return (
      <div>
        <button onClick={this.showText}>Push1</button>
        <input defaultValue={this.state.text} onInput={this.showText2}/>
        <div onMouseMove={this.move}>lorem</div>
        <p>{this.state.text}</p>
        <p>{this.state.text2}</p>
        <p>{this.state.text3}</p>
 
      </div>
    );
  }
}
export default App;
