import React, { Component } from 'react';
import { QuoteConsumer } from './context';
import { FaTumblrSquare, FaTwitterSquare,FaQuoteLeft } from 'react-icons/fa';
import { IconContext } from "react-icons";

const QuoteText = ({quote}) => {
  return <div id="text" className="quote-text"><FaQuoteLeft />{`${quote}`}</div>
};

const AuthorText = ({author}) => {
  return <div id="author" className="quote-author">{`- ${author}`}</div>
};

const RetweetButton = ({quote,color}) => {
  return (
    <a href={`https://twitter.com/intent/tweet?text=${quote}`} id="tweet-quote" target="_blank" rel="noopener noreferrer">
      <IconContext.Provider value={{ color: color, className: "social-button", size: "1.5em" }}>
        <FaTwitterSquare />
      </IconContext.Provider>
    </a>
  )
}

const TumblrButton = ({quote,color}) => {
  return (
    <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&caption=${quote}`} id="tumble-quote" target="_blank" rel="noopener noreferrer">
      <IconContext.Provider value={{ color: color, className: "social-button", size: "1.5em" }}>
        <FaTumblrSquare />
      </IconContext.Provider>
    </a>
  )
}

export default class QuoteBox extends Component {
  render() {
    return (
      <div id="quote-box" className="quote-box">
        <QuoteConsumer>
          {(value) => {
            return (
              <React.Fragment>
                <QuoteText quote={value.quote}/>
                <AuthorText author={value.author}/>
                <div className="button-container">
                  <RetweetButton color={value.color}/>
                  <TumblrButton color={value.color}/>
                  <button id="new-quote" onClick={()=>{value.fetchQuote()}}>New Quote</button>
                </div>
              </React.Fragment>
            )
          }}
        </QuoteConsumer>
      </div>
    )
  }
}
