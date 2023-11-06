const showBooks = async() => {
    const booksJSON = await getBooks();
    const bookDiv = document.getElementById("book-container");

    if (booksJSON == "") {
        console.log("Invalid load of json");
        return;
    }
    booksJSON.forEach((book) => {
        const section = document.createElement("section");
        bookDiv.append(section);

        const h3 = document.createElement("h3");
        h3.innerHTML = book.title;
        section.append(h3);

        const img = document.createElement("img");
        img.src = book.img;
        section.append(img);

        const author = document.createElement("author");
        author.innerHTML = book.author;
        section.append(author);

        const genre = document.createElement("genre");
        genre.innerHTML = book.genre;
        section.append(genre);

        const rating = document.createElement("rating");
        rating.innerHTML = book.rating;
        section.append(rating);

        const para = document.createElement("para");
        para.innerHTML = book.author;
        section.append(para);

        const characters = document.createElement("characters");
        characters.textContent = `Main Characters: ${book.maincharacters.join(', ')}`;
        section.append(characters);

    });
}
const getBooks = async() => {
    try {
        return (await fetch("https://csce242-assignments.onrender.com")).json();
    } catch (error) {
        console.log("error retrieving json");
        return "";
    }
}
window.onload = () => showBooks();