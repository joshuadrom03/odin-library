
const myLibrary = [];
         
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.toggleRead = function(){
    this.read = !this.read;
}

function toggleRead(index){
    myLibrary[index].toggleRead();
    render();
}

function render(){
    let libraryEl = document.querySelector(".library");
    libraryEl.innerHTML = "";
    for (let i = 0; i < myLibrary.length; i++){
        let book = myLibrary[i];
        let bookEl = document.createElement("div");
        bookEl.innerHTML = `
        <p class="title">Title: ${book.title}</p>
        <p class="author">By: ${book.author}</p>
        <p class="pages">Pages: ${book.pages}</p>
        <p class=read-status">Status: ${book.read ? "Read" : "Not Read Yet"}</p>
        <button class="delete-book" onclick="removeBook(${i})">Delete</button>
        <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
        `
        libraryEl.appendChild(bookEl);
    }
}

function removeBook(index){
    myLibrary.splice(index, 1);
    render();
}


function addBookToLibrary(){
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#page_numbers").value;
    let read = document.querySelector("#read_or_not").value;
    let newBook = new Book(title, author,pages, read);
    console.log(newBook);
    myLibrary.push(newBook);
    render();
}

const newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function(){
    const newBookForm = document.querySelector("#new-book-form")
    newBookForm.style.display = "flex";
})

document.querySelector("#new-book-form").addEventListener("submit",function(event){
    event.preventDefault();
    alert("hello world");
    addBookToLibrary();
})