"use strict";

const myLibrary = [
  {
    title: "The Bird King",
    author: "Willow Wilson",
    alreadyRead: false
  },
  {
    title: "The Lost Symbol",
    author: "Dan Brown",
    alreadyRead: true
  },
	{
    title: "Endless Night",
    author: "Agatha Christie",
    alreadyRead: true
  }
	
];
// books covers as per their order in the above array.
const books_covers = [
 
	"https://images-na.ssl-images-amazon.com/images/I/51y4bQIDZEL._SX322_BO1,204,203,200_.jpg",
	"https://s.s-bol.com/imgbase0/imagebase3/large/FC/1/2/5/3/1001004008503521.jpg",
	"https://s.s-bol.com/imgbase0/imagebase3/large/FC/9/9/8/0/1001004006240899.jpg"
	
];
const myFavoriteBook = document.createElement("ul");
myLibrary.forEach(element => {

  const book = document.createElement("li");

  const bookInfo = document.createElement("p");
  bookInfo.textContent = element.title + ": " + element.author;

  const bookCover = document.createElement("img");
  bookCover.src = books_covers[myLibrary.indexOf(element)];// books covers as per their order in the above array.
  book.alt = element.title;
  bookCover.height = 300;
  bookCover.width = 192;

  book.appendChild(bookInfo);
  book.appendChild(bookCover);
  myFavoriteBook.appendChild(book);
  bookInfo.style.color = element.alreadyRead ? "green" :"red";
  document.body.appendChild(myFavoriteBook );
});
