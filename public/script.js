const showBooks = async () => {
    try {
        const booksJSON = await getBooks();
        const bookDiv = document.getElementById("bookContainer");

        if (booksJSON && booksJSON.length > 0) {
            booksJSON.forEach((book) => {
                const section = document.createElement("div");
                section.classList.add("book");

                const img = document.createElement("img");
                img.src = book.img;
                img.classList.add("book-image");
                section.appendChild(img);

                const bookInfo = document.createElement("div");
                bookInfo.classList.add("book-info");
                section.appendChild(bookInfo);

                const h2 = document.createElement("h2");
                h2.textContent = book.title;
                bookInfo.appendChild(h2);

                const author = document.createElement("p");
                author.textContent = `Author: ${book.author}`;
                bookInfo.appendChild(author);

                const genre = document.createElement("p");
                genre.textContent = `Genre: ${book.genre}`;
                bookInfo.appendChild(genre);

                const rating = document.createElement("p");
                rating.textContent = `Rating: ${book.rating}`;
                bookInfo.appendChild(rating);

                const characters = document.createElement("p");
                characters.textContent = `Main Characters: ${book.maincharacters.join(', ')}`;
                bookInfo.appendChild(characters);

                bookDiv.appendChild(section);
            });
        } else {
            console.log("No books found");
        }
    } catch (error) {
        console.log("Error retrieving or displaying books:", error);
    }
};

const getBooks = async () => {
    try {
        const response = await fetch("http://localhost:3000/api/books");
        return response.json();
    } catch (error) {
        console.log("Error retrieving JSON:", error);
        return [];
    }
};

window.onload = showBooks;