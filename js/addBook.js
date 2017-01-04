var categorySelectOptions = function() {
    var categories = JSON.parse(localStorage.getItem('categories'));
    var html = '';
    categories.forEach(function(category, i) {
        html += '<option value="' + category.id + '">' + category.name + '</option>';
    });
    return html;
}

function ready() {
    initializeLocalStorage();

    document.getElementById('category').innerHTML = categorySelectOptions();
}
var addNewBook = function () {
    var books = JSON.parse(localStorage.getItem('books'));

    var form = document.getElementById('add-book-form');

    if (
        form.elements.name.value &&
        form.elements.img.value &&
        form.elements.author.value &&
        form.elements.conditions.value &&
        form.elements.user.value &&
        form.elements.description.value
    ) {
        var newBook = {
            id: books.length + 1,
            name: form.elements.name.value,
            img: form.elements.img.value,
            category: parseInt(form.elements.category.value),
            author: form.elements.author.value,
            conditions: form.elements.conditions.value,
            user: form.elements.user.value,
            description: form.elements.description.value
        };

        form.elements.name.value = '';
        form.elements.img.value = '';
        form.elements.author.value = '';
        form.elements.conditions.value = '';
        form.elements.user.value = '';
        form.elements.description.value = '';

        books.push(newBook);
        localStorage.setItem('books', JSON.stringify(books));
        window.location = 'main.html';
    } else {
        alert('Fill all fields!');
    }

    return false;
}

document.addEventListener("DOMContentLoaded", ready);