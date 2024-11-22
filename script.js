const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
};

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
}


function createTableRows (myLibrary) {
    const tableBody = document.querySelector('.table-body');

    myLibrary.forEach(book => {
        const tableRows = document.createElement('tr');

        for(let key in book) {
            const tableData = document.createElement('td');
            tableData.textContent = book[key];
            tableRows.appendChild(tableData);
        }

        tableBody.appendChild(tableRows);
   })
};

const newBookButton = document.createElement('button');
newBookButton.textContent = 'Add A New Book!';
const body = document.querySelector('body');
body.appendChild(newBookButton);


/*create a modal form*/
newBookButton.addEventListener('click', () => {
    const form = document.createElement('form')
   const inputs = [
    { label: 'Book Name', type: 'text', name: 'bookName', id: 'bookName'},
    { label: 'Author', type: 'text', name: 'author', id: 'author' },
    { label: 'Pages',  type: 'number', name: 'pages', id: 'pages'}
   ];
})


