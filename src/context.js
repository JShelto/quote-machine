import React, {Component} from 'react';
// import axios from 'axios';

const QuoteContext = React.createContext();


class QuoteProvider extends Component {
  state = {
    quote: "",
    author: "",
    color: "orange"
  };

  fetchQuote() {
    console.log("quote fetched");
  }

  render() {
    return (
      <QuoteContext.Provider
        value={{
          ...this.state,
          fetchQuote: this.fetchQuote
        }}>
        {this.props.children}
      </QuoteContext.Provider>
    )
  }
}

const QuoteConsumer = QuoteContext.Consumer;

export {QuoteProvider, QuoteConsumer};