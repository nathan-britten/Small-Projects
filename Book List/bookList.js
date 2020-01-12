class Book {
  constructor(bookTitle, author, ISBN) {
    this.bookTitle = bookTitle;
    this.author = author;
    this.ISBN = ISBN;
  }
}

let nameOfBook = document.querySelector("#book-title");
let authorOfBook = document.querySelector("#book-author");
let codeOfBook = document.querySelector("#isbn");
let submitButton = document.querySelector("#submit-button");
let newBook;
let listOfBooks = document.querySelector(".book-heading");
let inputPrior =   document.querySelector(".input");
//gather necesssary values

nameOfBook.value = "";
authorOfBook.value = "";
codeOfBook.value = "";


nameOfBook.addEventListener("keyup", getName);
authorOfBook.addEventListener("keyup", getAuthor);
codeOfBook.addEventListener("keyup", getCode);
//  document.querySelector(".output").addEventListener("click", function(e){

//   Store.removeBook(e.target.parentElement.textContent);

//  })

function getName(e){
  nameOfBook = e.target.value;

}
function getAuthor(e){
  authorOfBook = e.target.value;
}
function getCode(e){
  codeOfBook = e.target.value;

}

//create a new book using the values form the inputs 
//creates the submit button
submitButton.addEventListener("click", createNewBook);

function createNewBook(){
newBook = new Book(`${nameOfBook}`, `${authorOfBook}`, `${codeOfBook}`)

if(nameOfBook.value === "" || nameOfBook === "" ||authorOfBook.value === "" || authorOfBook === ""|| codeOfBook.value === "" || codeOfBook === "" ){
  bookErrorMessage()
}else {
  createUlForNewBook();
  bookAddedMessage();
  clearInputs();
}

}



function createUlForNewBook(){
  //create a new child li

let liName = document.createElement("li");
let liAuthor = document.createElement("li");
let liCode= document.createElement("li");
let deleteBookButton = document.createElement("i");


//assign class to the new li

liName.classList.add("bl-item");
liAuthor.classList.add("bl-item");
liCode.classList.add("bl-item");
deleteBookButton.classList.add("far");
deleteBookButton.classList.add("fa-times-circle");

//assign values of newBook to the li

liName.innerText = (`${newBook.bookTitle}`)
liAuthor.innerText = (`${newBook.author}`)
liCode.innerText = (`${newBook.ISBN} `)
liCode.appendChild(deleteBookButton)


console.log(liName, liAuthor, liCode)

//create a new ul to house of all the Li
let bookDetails = document.createElement("ul");
bookDetails.classList.add("book-heading");

bookDetails.appendChild(liName);
bookDetails.appendChild(liAuthor);
bookDetails.appendChild(liCode);


document.querySelector(".output").appendChild(bookDetails);

// add to LS
Store.addBook(newBook);
}

// delete buttons deletes  
document.body.addEventListener("click", deleteABook);


function deleteABook(e){


  if(e.target.classList.contains("far")){
e.target.parentElement.parentElement.remove();
Store.removeBook(e.target.parentElement.textContent);
  }
  
}



// create negative and positive error messages

function bookAddedMessage(){

  if(document.querySelector(".successful-message") === null){
    let addMessage = document.createElement("div");
    addMessage.classList.add("successful-message");
    addMessage.innerText = "Book Saved";
  
    
    inputPrior.insertBefore(addMessage, inputPrior.childNodes[1])


    // document.querySelector("#main-heading").append(addMessage)
  
    setTimeout(function(){
      addMessage.classList.add("no-display")
     addMessage.classList.remove("successful-message");
    },3000)
  }
  }

  function bookErrorMessage(){
    if(document.querySelector(".error-message") === null){

    let errorMessage = document.createElement("div");
    errorMessage.classList.add("error-message");
    errorMessage.innerText = "Enter all details";


    inputPrior.insertBefore(errorMessage, inputPrior.childNodes[1])
  
    // document.querySelector("#main-heading").append(errorMessage)
  
    setTimeout(function(){
      errorMessage.classList.add("no-display")
      errorMessage.classList.remove("error-message");
    },3000)
  }
  }

// clear input after success

function clearInputs(){
  document.querySelector("#book-title.input-item").value = ""
  document.querySelector("#book-author.input-item").value = ""
  document.querySelector("#isbn.input-item").value = ""


nameOfBook = "";
authorOfBook = "";
codeOfBook = "";
}


  class Store{

    static getBooks(){
      let books;
      if(localStorage.getItem("books") === null){
         books = [];
      } else {
        books = JSON.parse(localStorage.getItem("books"));
      }
      return books;
    }

    static displayBooks(){
      const books = Store.getBooks();
      books.forEach(function(el){
         //create a new child li

let liName = document.createElement("li");
let liAuthor = document.createElement("li");
let liCode= document.createElement("li");
let deleteBookButton = document.createElement("i");


//assign class to the new li

liName.classList.add("bl-item");
liAuthor.classList.add("bl-item");
liCode.classList.add("bl-item");
deleteBookButton.classList.add("far");
deleteBookButton.classList.add("fa-times-circle");

//assign values of newBook to the li

liName.innerText = el.bookTitle;
liAuthor.innerText = el.author;
liCode.innerText = el.ISBN;
liCode.appendChild(deleteBookButton)



//create a new ul to house of all the Li
let bookDetails = document.createElement("ul");
bookDetails.classList.add("book-heading");

bookDetails.appendChild(liName);
bookDetails.appendChild(liAuthor);
bookDetails.appendChild(liCode);


document.querySelector(".output").appendChild(bookDetails)
      })
      localStorage.setItem("books", JSON.stringify(books))

    }

    static addBook(book){
      const books = Store.getBooks();
      books.push(book)
      localStorage.setItem("books", JSON.stringify(books))
      localStorage.setItem("books", JSON.stringify(books))

      console.log(books)
    }

    static removeBook(isbn) {

      const books = Store.getBooks();
      console.log(books)

      books.forEach(function(bk, index){
        if(bk.ISBN = isbn){
          console.log("hello");
          books.splice(index, 1);
        } 
      });

      console.log(books)
      localStorage.setItem("books", JSON.stringify(books))

    }

  }

  // on DOM Load Event
  document.addEventListener("DOMContentLoaded", Store.displayBooks)











