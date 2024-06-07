document.addEventListener('DOMContentLoaded', () => {
    fetch('/books')
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById('book-list');
            data.forEach(book => {
                const li = document.createElement('li');
                li.textContent = `${book.title} by ${book.author}`;

                const statusButton = document.createElement('button');
                statusButton.textContent = book.status;
                statusButton.className = book.status === 'disponible' ? 'disponible' : 'en-espera';

                statusButton.addEventListener('click', () => {
                    alert(`El libro "${book.title}" está ${book.status}.`);
                });

                li.appendChild(statusButton);
                bookList.appendChild(li);
            });
        });
});
