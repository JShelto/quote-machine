import React, {Component} from 'react';
// import axios from 'axios';

const QuoteContext = React.createContext();


class QuoteProvider extends Component {
  state = {
    quote: "Test",
    author: "Test Author",
    color: "orange"
  };

  render() {
    return (
      <QuoteContext.Provider
        value={{
          ...this.state
        }}>
        {this.props.children}
      </QuoteContext.Provider>
    )
  }
}

const QuoteConsumer = QuoteContext.Consumer;

export {QuoteProvider, QuoteConsumer};