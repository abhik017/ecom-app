import React from 'react';
import logo from './styles/img/e-com.png';
import RouterDef from './routes/routes';
class MainClass extends React.Component {
  
  render() {
    const userRole = (localStorage.getItem('loginResponse') ?
      JSON.parse(localStorage.getItem('loginResponse')).role : null);

    return (
      <RouterDef/>
    )
  }
}

export default (MainClass);
