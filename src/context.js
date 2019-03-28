import React, {Component} from 'react';

const QuoteContext = React.createContext();

class QuoteProvider extends Component {
  state = {
    quote = "",
    author = "",
  };
  render() {
    return (
      <QuoteContext.Provider
        value={{
          state = ...this.state
        }}>
        {this.props.children}
      </QuoteContext.Provider>
    )
  }
}

export {QuoteProvider, QuoteConsumer};