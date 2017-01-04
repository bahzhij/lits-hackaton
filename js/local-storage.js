var initializeLocalStorage = function () {
    var books = [
        {
            id: 1,
            name: "Reconstructing Amelia",
            img: "images/books/1.png",
            category: 1,
            author: "Angelika Glow",
            conditions: "Two weeks",
            user: "Jon Dou",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 2,
            name: "Rosemary’s Baby",
            img: "images/books/2.png",
            category: 1,
            author: "Ira Levin",
            conditions: "Two weeks",
            user: "Jon Dou",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 3,
            name: "Eleanor & Park",
            img: "images/books/3.png",
            category: 1,
            author: "Rainbow Rowell",
            conditions: "Two weeks",
            user: "Jon Dou",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 4,
            name: "The Definitive Visual...",
            img: "images/books/4.png",
            category: 2,
            author: "Author",
            conditions: "Two weeks",
            user: "Jon Dou",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 5,
            name: "Oxygen",
            img: "images/books/5.png",
            category: 2,
            author: "Donald E. Canfifld",
            conditions: "Two weeks",
            user: "Jon Dou",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: 6,
            name: "Origins",
            img: "images/books/6.png",
            category: 2,
            author: "Donald E. Canfifld",
            conditions: "Two weeks",
            user: "Jon Dou",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        }
    ];
    var categories = [
        {
            id: 1,
            name: "Fiction"
        },
        {
            id: 2,
            name: "Science"
        },
        {
            id: 3,
            name: "Business"
        },
        {
            id: 4,
            name: "Philosophy"
        },
        {
            id: 5,
            name: "Biography"
        }
    ];

    if (!JSON.parse(localStorage.getItem('books')))
        localStorage.setItem('books', JSON.stringify(books));
    if (!JSON.parse(localStorage.getItem('categories')))
        localStorage.setItem('categories', JSON.stringify(categories));
}