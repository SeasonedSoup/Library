const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
    this.info = function () {
        let readStatus = this.read ? "already read" : "not read yet"
        return `${this.title} by ${this.author}, ${this.pages} pages, ${readStatus}`
    }

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
            tableData.textContent = book[key]
            tableRows.appendChild(tableData)
        }

        tableBody.appendChild(tableRows)
   })
   

}



