const $tableBody = document.querySelector(".book-table-body");
const $author = document.querySelector(".author");
const $title = document.querySelector(".title");
const $pages = document.querySelector(".pages");
const $status = document.querySelector("#status");
const $table = document.querySelector("table");
const forms = document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const book = newBookList();
  printBooks([book]);
});

let DEFAULT_DATA = [
  {
    author: "Alan Hlad",
    title:
      "Churchill's Secret Messenger: A WW2 Novel of Spies & the French Resistance",
    pages: 234,
    status: "Not-Read",
  },
  {
    author: "Paulo Coelho",
    title:
      "The Alchemist, 25th Anniversary: A Fable About Following Your Dream",
    pages: 56,
    status: "Not-read",
  },
];

class Book {
  constructor(author, title, status, pages) {
    this.author = author;
    this.title = title;
    this.status = status;
    this.pages = pages;
  }
}
function newBookList() {
  const newBook = new Book(
    $author.value,
    $title.value,
    $status.value,
    $pages.value
  );

  DEFAULT_DATA.push(newBook);
  return newBook;
  // updateLocalStorage();
}

function printBooks(books) {
  // checkLocalStorage();
  return books.map((book) => {
    const htmlBook = `
    <tr>
    <td>${book.author}</td>
    <td>${book.title}</td>
    <td>${book.pages}</td>
    <td><option>${book.status}</option></td>
    <td><button class="delete">delete</button></td>
    </tr>
    `;
    $tableBody.insertAdjacentHTML("afterbegin", htmlBook);
  });
}
printBooks(DEFAULT_DATA);
// function updateLocalStorage() {
//   localStorage.setItem("library", JSON.stringify(library));
//   //library = JSON.parse(localStorage.getItem("library"));
// }
// function checkLocalStorage() {
//   if (localStorage.getItem("library")) {
//     library = JSON.parse(localStorage.getItem("library"));
//   } else {
//     library = DEFAULT_DATA;
//   }
// }
