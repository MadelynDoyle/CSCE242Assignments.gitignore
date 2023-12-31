const express = require("express");
const server = express();
server.use(express.static("public"));

server.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

server.get("/api/books", (req, res) => {
    const books = [];
    books[0] = {
        title: "Heir Of Fire",
        author: "Sarah J Maas",
        genre: "Fantasy",
        img: "images/heiroffire.jpg",
        rating: "9/10",
        maincharacters: ["Aelin","Rowan", "Manon", "Dorian"]
    };
    books[1] = {
        title: "Queen Of Shadows",
        author: "Sarah J Maas",
        genre: "Fantasy",
        img: "images/queenofshadows.jpg",
        rating: "6/10",
        maincharacters: ["Aelin","Rowan", "Manon", "Dorian"]
    };
    books[2] = {
        title: "Empire Of Storms",
        author: "Sarah J Maas",
        genre: "Fantasy",
        img: "images/empireofstorms.jpg",
        rating: "7/10",
        maincharacters: ["Aelin","Rowan", "Manon", "Dorian"]
    };
    books[3] = {
        title: "Kingdom of Ash",
        author: "Sarah J Maas",
        genre: "Fantasy",
        img: "images/kingdomofash.jpg",
        rating: "8/10",
        maincharacters: ["Aelin","Rowan", "Manon", "Dorian"]
    };
    books[4] = {
        title: "Fourth Wing",
        author: "Rebecca Yarros",
        genre: "Fantasy",
        img: "images/fourthwing.jpg",
        rating: "9/10",
        maincharacters: ["Violet","Xaden", "Tairn", "Liam"]
    };

    res.json(books);
});

server.listen(3000, () => {
    console.log("listening");
});
