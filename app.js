const btn = document.querySelector(".btn");
const bookList = document.querySelector(".book-list");

let myLibrary = ["Book Name: The Hating Game, BOOK AUTHOR: Sally Thorne"];

function Book(author, book) {
  this.author = author;
  this.book = book;
  this.read = false;
  this.pages = 245;
}

function printBooks() {
  return myLibrary.map((book) => {
    return book;
  });
}
btn.addEventListener("click", function (e) {
  const forms = document.querySelector(".forms");
  console.log(forms)
  e.preventDefault();
});
