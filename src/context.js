import React, {Component} from 'react';
import axios from 'axios';
// import axios from 'axios';

const QuoteContext = React.createContext();


class QuoteProvider extends Component {
  state = {
    quote: '',
    author: '',
    color: 'orange'
  };

  componentDidMount() {
    this.fetchQuote();
  }

  fetchQuote = () => {
    axios.get(`https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&timestamp=${new Date().getTime()}`)
      .then((res) => {
        let data = res.data;
        let quote = data[0].content.replace('<p>', '').replace('</p>','');
        this.setState({
          quote: quote,
          author: data[0].title
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  setColor = () => {
    this.setState({
      color: this.generateRandomHexColor()
    })
  }

  generateRandomHexColor = () => {
    const color = '#'+Math.floor(Math.random()*16777215).toString(16);
    return color
  }

  render() {
    return (
      <QuoteContext.Provider
        value={{
          ...this.state,
          fetchQuote: this.fetchQuote,
          setColor: this.setColor
        }}>
        {this.props.children}
      </QuoteContext.Provider>
    )
  }
}

const QuoteConsumer = QuoteContext.Consumer;

export {QuoteProvider, QuoteConsumer};