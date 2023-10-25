const myLibrary = [
    {
        title: "Dune",
        author: "Frank Herbert",
        pages: 412,
        read: true
    },
    {
        title: "Foundation",
        author: "Isaac Asimov",
        pages: 255,
        read: true
    },
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        pages: 310,
        read: true
    },
    {
        title: "Neuromancer",
        author: "William Gibson",
        pages: 271,
        read: false
    },
    {
        title: "A Wizard of Earthsea",
        author: "Ursula K. Le Guin",
        pages: 183,
        read: false
    },
    {
        title: "The Left Hand of Darkness",
        author: "Ursula K. Le Guin",
        pages: 304,
        read: false
    },
    {
        title: "Ender's Game",
        author: "Orson Scott Card",
        pages: 324,
        read: true
    },
    {
        title: "The Way of Kings",
        author: "Brandon Sanderson",
        pages: 1007,
        read: true
    },
    {
        title: "Mistborn: The Final Empire",
        author: "Brandon Sanderson",
        pages: 541,
        read: false
    },
    {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        pages: 662,
        read: true
    },
    {
        title: "The Wise Man's Fear",
        author: "Patrick Rothfuss",
        pages: 994,
        read: true
    },
    {
        title: "1984",
        author: "George Orwell",
        pages: 328,
        read: true
    },
    {
        title: "Brave New World",
        author: "Aldous Huxley",
        pages: 268,
        read: true
    },
    {
        title: "Snow Crash",
        author: "Neal Stephenson",
        pages: 468,
        read: false
    },
    {
        title: "Hyperion",
        author: "Dan Simmons",
        pages: 482,
        read: false
    },
    {
        title: "Ringworld",
        author: "Larry Niven",
        pages: 342,
        read: false
    },
    {
        title: "The Stars My Destination",
        author: "Alfred Bester",
        pages: 258,
        read: false
    },
    {
        title: "Fahrenheit 451",
        author: "Ray Bradbury",
        pages: 227,
        read: true
    },
    {
        title: "Stranger in a Strange Land",
        author: "Robert A. Heinlein",
        pages: 438,
        read: false
    },
    {
        title: "The Lies of Locke Lamora",
        author: "Scott Lynch",
        pages: 722,
        read: false
    }
];

function Book() {
    // the constructor...
  }
  
  function addBookToLibrary() {
    // do stuff here
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

    const readBtn = document.createElement('button');
    readBtn.className = 'btn ' + (book.read ? 'read-btn' : 'unread-btn');
    readBtn.textContent = book.read ? 'Read' : 'Unread';

    readBtn.addEventListener('click', function() {
        // Toggle book's read status
        book.read = !book.read;

        // Update button text and class
        readBtn.textContent = book.read ? 'Read' : 'Unread';
        readBtn.classList.toggle('read-btn');
        readBtn.classList.toggle('unread-btn');
    });

    bookCard.appendChild(title);
    bookCard.appendChild(bookDetails);
    bookCard.appendChild(readBtn);
    
    bookGrid.appendChild(bookCard);
}

// Iterating over the books array and displaying each one
myLibrary.forEach((book, index) => displayBook(book, index));
