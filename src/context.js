import React, {Component} from 'react';
import Axios from 'axios';
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
    const instance = Axios.create({
      headers: {
        'Content-type': 'application/json',
      }    
    });
    instance.get('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
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