import React, { Component } from 'react';
import { FaTumblrSquare, FaTwitterSquare,FaQuoteLeft } from 'react-icons/fa';
import { IconContext } from "react-icons";


const QuoteText = ({quote}) => {
  return <div id="text" class="quote-text"><FaQuoteLeft />{`${quote}`}</div>
};

const AuthorText = ({author}) => {
  return <div id="author" class="quote-author">{`- ${author}`}</div>
};

const RetweetButton = ({quote,color}) => {
  return (
    <a href={`https://twitter.com/intent/tweet?text=${quote}`} id="tweet-quote" target="_blank" rel="noopener noreferrer">
      <IconContext.Provider value={{ color: color, className: "global-class-name" }}>
        <div>
        <FaTwitterSquare />
        </div>
      </IconContext.Provider>
    </a>
  )
}

const TumblrButton = ({quote,color}) => {
  return (
    <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&caption=${quote}`} id="tumble-quote" target="_blank" rel="noopener noreferrer">
      <IconContext.Provider value={{ color: color, className: "global-class-name" }}>
        <div>
        <FaTumblrSquare />
        </div>
      </IconContext.Provider>
    </a>
  )
}

const FetchNewQuoteButton = ({url}) => {
  return <button id="new-quote"></button>
}

export default class QuoteBox extends Component {
  render() {
    return (
      <div id="quote-box" className="quote-box">
        <QuoteText quote="When I let go of what I am, I become what I might be." />
        <AuthorText quoteText author="Lao Tzu" />
        <div className="button-container">
          <RetweetButton quote="When I let go of what I am, I become what I might be."  color="orange"/>
          <TumblrButton quote="When I let go of what I am, I become what I might be." color="orange"/>
        </div>
      </div>
    )
  }
}
