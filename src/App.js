import React from 'react';
import logo from './styles/img/e-com.png';
import RouterDef from './routes/routes';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
class MainClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      role:
        (localStorage.getItem('loginResponse') ?
        JSON.parse(localStorage.getItem('loginResponse')).role : null)
    };
  }

  // componentDidMount() {
  //   const userRole =
  //     (localStorage.getItem('loginResponse') ?
  //     JSON.parse(localStorage.getItem('loginResponse')).role : null);
  //   if(userRole === "customer") {

  //   }
  // }

  render() {
    const userRole = (localStorage.getItem('loginResponse') ?
      JSON.parse(localStorage.getItem('loginResponse')).role : null);

    return (
      <RouterDef/>
    )
  }
}

export default MainClass;
