
const myLibrary = ["The Way Of The Superior Man", 
                    "Harry Potter And The Philosophers Stone",
                    "The Millionare Fast Lane"];
                    
const library = document.querySelector(".library")
const newBook = document.getElementById("new-book")

function Book(name,author,pages,){
    //the constructor
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.info - function(){
        console.log(this.title + "by" + this.author + ", " + this.pages + " pages, ");
    }

}


function addBookToLibrary(book){
    this.book = book;
    myLibrary.push(book);

}

//create the new book button and act



function displayBook(){
    for (i = 0; i < myLibrary.length; i++){
        const books = document.createElement("div")
        books.className = 'book-selection';
        books.textContent = myLibrary[i];
        const deleteBook = document.createElement("button")
        deleteBook.textContent = "Delete Book";
        deleteBook.className = 'delete-book';
        deleteBook.addEventListener("click", function(e){
            myLibrary.slice(myLibrary[i]);
        });
        library.append(books);
        books.append(deleteBook);

        //add the read status button
    }

}

displayBook();



