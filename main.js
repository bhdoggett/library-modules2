// Description
// Create an object called 'library' that keeps track of books.
// Each book should have a title, author, and number of pages.
// The object should have the following methods:
// 1. `addBook(title, author, pages)` – Adds a new book to the library.
// 2. `findBooksByAuthor(author)` – Returns an array of books by a specific author.
// 3. `getTotalPages()` – Returns the total number of pages of all books in the library.

// Hints: Make use of array helper methods like `map`, `filter`, and `reduce`.
// Expected functionality example:
const library = {
  books: [],
  addBook: (title, author, pages) =>
    library.books.push({ title, author, pages }),
  findBooksByAuthor: (author) => {
    const book = library.books.filter((book) => book.author === author);
    return book;
  },
  getTotalPages: () => {
    return library.books.reduce((acc, book) => {
      acc += book.pages;
      return acc;
    }, 0);
  },
  findLongestBook: () => {
    return library.books.reduce((acc, currentValue) => {
      if (acc.pages < currentValue.pages) {
        acc = currentValue;
      }
      return acc;
    });
  },
};

library.addBook("The Great Gatsby", "F. Scott Fitzgerald", 180);
library.addBook("To Kill a Mockingbird", "Harper Lee", 281);
library.addBook("The Catcher in the Rye", "J.D. Salinger", 214);

console.log(library.findBooksByAuthor("Harper Lee")); // [{ title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 }]
console.log(library.getTotalPages()); // 675

// BONUS
// Add a new method called `findLongestBook()` that returns the book with the most pages.
console.log(library.findLongestBook()); // { title: "To Kill a Mockingbird", author: "Harper Lee", pages: 281 }
