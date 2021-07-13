import React from 'react';
import './App.css';


class Error extends React.Component {
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
        its a 404
      </div>
      
    );
  }
}
export default Error;
