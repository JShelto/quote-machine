import React, { Component } from 'react';
import { QuoteConsumer } from './context';
import { FaTumblrSquare, FaTwitterSquare,FaQuoteLeft } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const QuoteText = ({quote}) => {
  return <div id='text' className='quote-text'><FaQuoteLeft />{` ${quote}`}</div>
};

const AuthorText = ({author}) => {
  return <div id='author' className='quote-author'>{`- ${author}`}</div>
};

const RetweetButton = ({value}) => {
  return (
    <a href={`https://twitter.com/intent/tweet?text=${value.quote}`} id='tweet-quote' target='_blank' rel='noopener noreferrer'>
      <IconContext.Provider value={{ color: value.color, className: 'social-button', size: '1.5em' }}>
        <FaTwitterSquare />
      </IconContext.Provider>
    </a>
  )
}

const TumblrButton = ({value}) => {
  return (
    <a href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption==${value.author}&content=${value.quote}&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`} id='tumble-quote' target='_blank' rel='noopener noreferrer'>
      <IconContext.Provider value={{ color: value.color, className: 'social-button', size: '1.5em' }}>
        <FaTumblrSquare />
      </IconContext.Provider>
    </a>
  )
}


export default class QuoteBox extends Component {
  render() {
    return (
      <div id='quote-box' className='quote-box'>
        <QuoteConsumer>
          {(value) => {
            return (
              <React.Fragment>
                <QuoteText quote={value.quote}/>
                <AuthorText author={value.author}/>
                <div className='button-container'>
                  <div className='social-button-container'>
                    <RetweetButton value={value}/>
                    <TumblrButton value={value}/>
                  </div>
                  <button id='new-quote' className='button' onClick={()=>{value.fetchQuote()}}>New Quote</button>
                </div>
              </React.Fragment>
            )
          }}
        </QuoteConsumer>
      </div>
    )
  }
}
