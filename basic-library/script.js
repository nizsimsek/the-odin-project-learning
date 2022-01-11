const modal = document.getElementById("add-book-modal");
const span = document.getElementsByClassName("close")[0];
const bookDiv = document.getElementById("book-list");

const bookList = [];

class Book {
    constructor(name, author, publisher, page) {
        this.name = name;
        this.author = author;
        this.publisher = publisher;
        this.page = page;
    }
}

function showModal() {
    modal.style.display = "block";
}

function closeModal() {
    modal.style.display = "none";
}

function addBook() {
    const bookName = document.getElementById("book-name").value;
    const bookAuthor = document.getElementById("book-author").value;
    const bookPublisher = document.getElementById("book-publisher").value;
    const bookPage = document.getElementById("book-page").value;
    const book = new Book(bookName, bookAuthor, bookPublisher, bookPage);
    bookList.push(book);
    closeModal();
    addTableHead();
    showBookList();
}

function addTableHead() {
    bookDiv.innerHTML = "<tr><td>Name</td><td>Author</td><td>Publisher</td><td>Page</td><td>Remove ?</td></tr>"
}

function showBookList() {
    addTableHead();
    for (let j = 0; j < bookList.length; j++) {
        bookDiv.style.display = "block";
        const bookRow = document.createElement("tr");
        bookDiv.appendChild(bookRow);
        const bookTitle = document.createElement("td");
        bookTitle.textContent = bookList[j].name;
        bookRow.appendChild(bookTitle);
        const bookAuthor = document.createElement("td");
        bookAuthor.textContent = bookList[j].author;
        bookRow.appendChild(bookAuthor);
        const bookPublisher = document.createElement("td");
        bookPublisher.textContent = bookList[j].publisher;
        bookRow.appendChild(bookPublisher);
        const bookPages = document.createElement("td");
        bookPages.textContent = bookList[j].page;
        bookRow.appendChild(bookPages);
        const bookRemove = document.createElement("td");
        bookRemove.innerHTML = "<i onclick='removeBook(this)' class='fas fa-trash-alt'></i>";
        bookRow.appendChild(bookRemove);
    }
}

function removeBook(indexNo) {
    bookList.splice(indexNo, 1);
    showBookList();
}



// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}