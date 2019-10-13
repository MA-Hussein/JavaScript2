'use strict';

const quotes = [
  
  {
    quote: "Honesty is the first chapter in the book of wisdom.",
    author: "Thomas Jefferson"
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    quote: "The best preparation for tomorrow is doing your best today.",
    author: "H. Jackson Brown, Jr."
  },
  {
    quote: "A new command I give you: Love one another. As I have loved you, so you must love one another.",
    author: "Jesus Christ"
  },
  {
    quote: "There are two ways of spreading light: to be the candle or the mirror that reflects it.",
    author: "Edith Wharton"
  },
  {
    quote: "Ever tried. Ever failed. No matter. Try Again. Fail again. Fail better.",
    author: "Samuel Beckett"
  },
  {
    quote: "God gave us the gift of life; it is up to us to give ourselves the gift of living well.",
    author: "Voltaire"
  }
	];
	  
const quote = document.querySelector('.quoteText');
const author = document.querySelector('.author-name');
function quoteGenerator(){
  const num = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[num].quote;
  author.textContent = quotes[num].author;
}
quoteGenerator();