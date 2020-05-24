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
    const StoredBooks = [ //Array of localStorage books
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
    const books = StoredBooks;
    books.forEach((book) => {UI.addBookToList(book)

    });
    }
    static addBookToList(book){
      const list = document.querySelector('#book-list');//Using DOM grabbing the list
      const row = document.createElement('tr');//table row element
      row.innerHTML = `
        <td> ${book.title}</td>
        <td> ${book.author}</td>
        <td> ${book.isbn}</td>
        <td><a href = "#" class = "btn btn-danger btn-sm delete">X</a></td>
      `;
      //Appending Row to List
      list.appendChild(row);
  }

  static deleteBook(el){
    if(el.classList.contains('delete')){
      el.parentElement.parentElement.remove();//2 times used cause we dont want to just remove td of the button delete we want the whole row which is tr(parent of parent of delete button)
    }
  }
  //<div class="alert alert-success"></div>
  //Creating a div from scratch
  static showAlert(message, className){
    const div = document.createElement('div');
    div.className = 'alert alert-${className}';
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div,form);//we want our div before the form
  }

  static clearFields(){//clears fields on submission
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}


//Store Class: Handles Storage

//Event: Display Books
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Add a book
document.querySelector('#book-form').addEventListener('submit',(e)=>
{
  //Prevent actual submit
  e.preventDefault();

  //Get form values
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;

  //Validate
  if(title === '' || author === '' || isbn === ''){
    alert('Please enter all fields!');
  }
  else {
    //Instatiate book
    const book = new Book(title,author, isbn);//Gets displayed in the console

  //Add Book to UI
  UI.addBookToList(book);//Shows the book added in the UI

  //clearFields
  UI.clearFields();
}
});


//Event: Remove a book
document.querySelector('#book-list').addEventListener('click',(e)=>
{
  UI.deleteBook(e.target);
});
