let libraryContainer = document.querySelector(".library-container");
let popUp = document.querySelector(".popup-form");
let formTitle = document.querySelector('[name*="title"]');
let formAuthor = document.querySelector('[name*="author"]');
let formPages = document.querySelector('[name*="pages"]');
let formIsRead = document.querySelector("#isRead");
let submit = document.querySelector(".new-book-button");
let library = [];
let deleteAdjuster = 0;

class book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = read;
    this.isDisplayed = false;
    this.info = function () {
      return ` Title is ${this.title} by ${this.author} , is ${this.pages} pages long, and ${this.isRead}`;
    };
  }

  toggleRead() {
    return (this.isRead = !this.isRead);
  }
}

Hobbit = new book("The Hobbit", "JRR Tolkien", "295", "True", false);
HarryPotter = new book("Harry Potter", "JK Rowling", "400", "False", false);
library.push(Hobbit);
library.push(HarryPotter);

addNewBook = function (
  inputTitle,
  inputAuthor,
  inputPages,
  inputRead,
  isDisplayed
) {
  library.push(
    new book(inputTitle, inputAuthor, inputPages, inputRead, isDisplayed)
  );
};

addNewBook("Atomic Habits", "Matt D'avella", "420", "False");

console.log(library);

submit.addEventListener("click", function (e) {
  e.preventDefault();
  submitNewBook();
  hidePopUp();
  render();
  addDeleteFunctionality();
});

function render() {
  for (let i = 0; i < library.length; i++) {
    // console.log(library[i].isDisplayed);
    if (!library[i].isDisplayed) {
      library[i].isDisplayed = true;
      let bookCard = document.createElement("div");
      bookCard.classList.add("book-card");

      //creating the elements within the card
      let bookTitle = document.createElement("h3");
      let bookAuthor = document.createElement("p");
      let bookLength = document.createElement("p");
      let bookIsRead = document.createElement("p");
      let deleteButton = document.createElement("button");
      let statusButton = document.createElement("button");
      bookCard.setAttribute("data-cardNumber", `${i}`);
      bookCard.setAttribute("data-name", `${library[i].title}`);

      //adding classes and text
      bookTitle.classList.add("book-title");
      bookTitle.textContent = `Title:  ${library[i].title}`;
      bookAuthor.classList.add("book-Author");
      bookAuthor.textContent = `Author: ${library[i].author}`;
      bookLength.classList.add("book-Length");
      bookLength.textContent = `Number of pages:  ${library[i].pages}`;
      statusButton.classList.add("status-button");
      statusButton.textContent = "Toggle read status";

      bookIsRead.classList.add("book-isRead");
      bookIsRead.textContent = `Read :  ${library[i].isRead}`;
      deleteButton.classList.add("delete");
      deleteButton.textContent = "Delete";

      statusButton.addEventListener("click", () => {
        console.log(library[i].isRead);
        library[i].toggleRead();
        console.log(library[i].isRead);
        bookIsRead.textContent = `Read :  ${library[i].isRead}`;
      });

      //appending to the DOM
      bookCard.appendChild(bookTitle);
      bookCard.appendChild(bookAuthor);
      bookCard.appendChild(bookLength);
      bookCard.appendChild(bookIsRead);
      bookCard.appendChild(statusButton);
      bookCard.appendChild(deleteButton);
      libraryContainer.appendChild(bookCard);
    }
  }
}
render();

function showPopUp() {
  popUp.classList.add("visible");
}

function hidePopUp() {
  popUp.classList.remove("visible");
}

function submitNewBook() {
  titleContent = formTitle.value;
  authorContent = formAuthor.value;
  LengthContent = formPages.value;
  isRead = formIsRead.checked;
  // console.log(titleContent, authorContent, LengthContent, isRead);
  addNewBook(titleContent, authorContent, LengthContent, isRead, false);
}

function addDeleteFunctionality() {
  cardArray = document.querySelectorAll(`div[data-cardNumber]`);
  cardArray.forEach((card) => {
    const button = card.getElementsByClassName("delete")[0];
    const localCardTitle = card.getAttribute("data-name");
    console.log(card, localCardTitle);

    if (!card.getAttribute("activated")) {
      button.addEventListener("click", () => {
        for (let j = 0; j < library.length; j++) {
          console.log(library[j].title, localCardTitle);
          if (library[j].title == localCardTitle) {
            library.splice(j, 1);
          }
        }
        card.remove();
        console.log(library);
      });
    }
    card.setAttribute("activated", true);
  });
}
addDeleteFunctionality();
