import React, { Component } from 'react';
import './stylesheet.css';
import QuoteBox from './QuoteBox.js';



class App extends Component {
  render() {
    return (
      <React.Fragment>
        <QuoteBox /> 
      </React.Fragment>
    );
  }
}

export default App;

