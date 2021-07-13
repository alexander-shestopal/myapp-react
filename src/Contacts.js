import React from 'react';
import './App.css';


class Contacts extends React.Component {
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
        its a Contacts
      </div>
      
    );
  }
}
export default Contacts;
