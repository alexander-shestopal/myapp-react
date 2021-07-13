import React from 'react';
import { BrowserRouter  as Router, Switch, Route, Link} from 'react-router-dom';
import './App.css';

import Home from './Home';
import About from './About';
import Contacts from './Contacts';
import Error from './Error';


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
     <Router>
      <div className="ty">
      <ul>
            <li><a href='/'>Main page</a></li>
        <li><a href='/about'>About</a></li>
            <li><a href='/contacts'>Contacts</a></li>
      </ul> 
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/about' component={About}></Route>
        <Route exact path='/contacts' component={Contacts}></Route>
        <Route component={Error}></Route>
      </Switch>
      </div>
      </Router>
    );
  }
}
export default App;
