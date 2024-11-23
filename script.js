const myLibrary = [];

createTableRows (myLibrary);
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    
};

function addBookToLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    myLibrary.push(book);
};


function createTableRows (myLibrary) {
    const tableBody = document.querySelector('.table-body');
    tableBody.innerHTML= '';
    
    myLibrary.forEach((book, index) => {
        const tableRows = document.createElement('tr');

        for(let key in book) {
            const tableData = document.createElement('td');
            tableData.textContent = book[key];
            tableRows.appendChild(tableData);
        };

        const removeBookButton = document.createElement('button');
        removeBookButton.textContent = 'Remove';

        removeBookButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            createTableRows(myLibrary);
        })
        
        const toggleReadButton = document.createElement('button');
        toggleReadButton.textContent = 'Toggle-Read';
       
        
        toggleReadButton.addEventListener('click', () => {
            book.read = (book.read === 'read') ? 'unread' : 'read';
            createTableRows(myLibrary);
        })

        const actionCell = document.createElement('td');
        actionCell.appendChild(toggleReadButton);
        actionCell.appendChild(removeBookButton);

        tableRows.appendChild(actionCell);
        tableBody.appendChild(tableRows);
   });
};

const newBookButton = document.createElement('button');
newBookButton.textContent = 'Add A New Book!';
const body = document.querySelector('body');
body.appendChild(newBookButton);


/*create a modal form*/
newBookButton.addEventListener('click', () => {
    const existingForm = document.querySelector('.info-form');

    if (existingForm) {
        console.log("There is currently a form pls fill it up before making another one");
        return;
    }
    const form = document.createElement('form')
    form.classList.add('info-form');

    const inputs = [
        { label: 'Book Name', type: 'text', name: 'bookName', id: 'bookName'},
        { label: 'Author', type: 'text', name: 'author', id: 'author' },
        { label: 'Pages',  type: 'number', name: 'pages', id: 'pages'}
    ];

    inputs.forEach((inputData) =>  {
        const label = document.createElement('label');
        label.textContent = inputData.label;
        label.setAttribute('for', inputData.id);

        const input = document.createElement('input');
        input.type = inputData.type;
        input.name = inputData.name;
        input.id = inputData.id;

        input.required = true;

        form.appendChild(label);
        form.appendChild(input);
        form.appendChild(document.createElement('br')); 
    })

    const readLabel = document.createElement('label');
    readLabel.textContent = "Read?";
    readLabel.setAttribute('for', 'readStatus')
    
    const dropdown = document.createElement('select');
    dropdown.name = 'readStatus';
    dropdown.id = 'readStatus';

    const option = ['read', 'unread'];

    option.forEach((optionText) => {
        const dropdownOption = document.createElement('option');
        dropdownOption.value = optionText.toLowerCase();
        dropdownOption.textContent = optionText;

        dropdown.appendChild(dropdownOption);
    });

    form.appendChild(readLabel);
    form.appendChild(dropdown);
    form.appendChild(document.createElement('br'));

    const submitButton = document.createElement('button');
    submitButton.type = 'submit'
    submitButton.textContent = 'Add Book';
    
    form.appendChild(submitButton);
    document.body.appendChild(form);
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    
        const title = document.querySelector('#bookName').value;
        const author = document.querySelector('#author').value;
        const pages = document.querySelector('#pages').value;
        const read = document.querySelector('#readStatus').value;
    
        addBookToLibrary(title, author, pages, read);
        createTableRows(myLibrary);
        form.reset();
    });

});

