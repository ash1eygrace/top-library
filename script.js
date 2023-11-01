// Book constructor
function Book(title, author, pages, read=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}
 
// Array to store books
function addBookToLibrary(title, author, pages, read=false) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    return newBook; 
}

// Reference to the book grid element
const bookGrid = document.querySelector('.book-grid');

function displayBook(book, index) {
    const bookCard = document.createElement('div');
    bookCard.className = 'book-card';

    const title = document.createElement('h2');
    title.textContent = book.title;

    const bookDetails = document.createElement('div');
    bookDetails.className = 'book-details';

    const author = document.createElement('p');
    author.textContent = `Author: ${book.author}`;

    const pages = document.createElement('p');
    pages.textContent = `Pages: ${book.pages}`;

    bookDetails.appendChild(author);
    bookDetails.appendChild(pages);

    // Create div for action buttons (delete/read and unread)
    const actionsDiv = document.createElement('div');
    actionsDiv.className = 'book-card-actions';

    const deleteButton = document.createElement('button');
    deleteButton.className = 'action-btn delete-btn';
    deleteButton.textContent = 'Delete';

    deleteButton.addEventListener('click', function() {
        myLibrary.splice(index, 1);
        displayLibrary();
    });

    const readButton = document.createElement('button');
    if(book.read) {
        readButton.className = 'action-btn read-btn';
        readButton.textContent = 'Read';
    } else {
        readButton.className = 'action-btn unread-btn';
        readButton.textContent = 'Unread';
    }

    readButton.addEventListener('click', function() {
        book.read = !book.read;
        displayLibrary();
    });

    actionsDiv.appendChild(deleteButton);
    actionsDiv.appendChild(readButton);

    bookCard.appendChild(title);
    bookCard.appendChild(bookDetails);

    bookCard.appendChild(actionsDiv);
    
    bookGrid.appendChild(bookCard);
}

// Iterating over the books array and displaying each one
myLibrary.forEach((book, index) => displayBook(book, index));

// Reference to the add book button
const addBookBtn = document.getElementById('add-book-btn');

// Reference to the modal and its elements
const modal = document.getElementById('add-book-modal');
const closeBtn = document.querySelector('.close-btn');
const addBookForm = document.getElementById('add-book-form');

// Event listener to open the modal
addBookBtn.addEventListener('click', function() {
    modal.style.display = 'block';
    document.getElementById('book-read').checked = false;
});

// Event listener to close the modal
closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

// Event listener to add book
addBookForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('book-title').value;
    const author = document.getElementById('book-author').value;
    const pages = document.getElementById('book-pages').value;
    const read = document.getElementById('book-read').checked;

    const newBook = addBookToLibrary(title, author, pages, read);
    displayBook(newBook, myLibrary.length - 1);
    
    // Clear form and close modal
    addBookForm.reset();
    modal.style.display = 'none';
});

function displayLibrary() {
    bookGrid.innerHTML = '';
    myLibrary.forEach((book, index) => {
        displayBook(book, index);
    });
}