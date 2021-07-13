import React from 'react';
import './App.css';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: 'Hello',
    }
  }
  // props -> state
  // static getDerivedStateFromProps (props, state) {
  //   return {text: props.text }

  // }
  componentDidMount(){
    setTimeout( ()=>{this.setState({text: 'Component did mount'})},3000)
  }
  render() {
    return (
      <div>
        <p>{this.state.text}</p>
       </div>
    );
  }
}
export default App;
