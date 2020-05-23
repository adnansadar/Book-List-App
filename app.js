//Book class: Represents a Book
class Book {
  constructor(title,author,isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//UI class: Handle UI Tasks
class UI {
  static displayBooks(){
    const StoredBooks = [
      {
        title: 'Book One',
        author: 'John Doe',
        isbn: '343434'
      },
      {
        title: 'Book Two',
        author: 'Jane Doe',
        isbn: '343545'
      }
    ];

  }
}


//Store Class: Handles Storage

//Event: Display Books

//Event: Add a book

//Event: Remove a book
