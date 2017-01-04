// button add book

var bookBtn = document.getElementById("bookBtn");

bookBtn.onclick = function() {
    window.location = 'addBook.html';
}

var submtBtn = document.getElementById("login_btn");

submtBtn.onclick = function() {
    window.location = 'profile.html';
}
// end button add book


/*Module window*/
// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}


// Get the modal

var hideShowDescription = function(_this) {
    var substrate = closest(_this, 'substrate');
    if(substrate.getElementsByClassName('book-description')[0].style.display == 'block') {
        substrate.getElementsByClassName('book-description')[0].style.display = 'none';

        substrate.classList.remove('hover');
        _this.getElementsByClassName('icon')[0].classList.remove('ion-chevron-up');
        _this.getElementsByClassName('icon')[0].classList.add('ion-chevron-down');
    } else {
        substrate.getElementsByClassName('book-description')[0].style.display = 'block';

        substrate.classList.add('hover');
        _this.getElementsByClassName('icon')[0].classList.remove('ion-chevron-down');
        _this.getElementsByClassName('icon')[0].classList.add('ion-chevron-up');
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function openForm(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontentlogin");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinkslogin");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";

}
document.getElementById("defaultOpen").click();
document.getElementById("defaultOpenContent").click();

/* start book tabs*/

function openGenres(evt, openGenres) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(openGenres).style.display = "block";
    evt.currentTarget.className += " active";
}

/* end book tabs*/

function closest(el, cl) {
    var elem = el;

    while(elem.className.indexOf(cl) < 0) {
        if(elem.tagName.toLowerCase() == 'html') return false;
        elem = elem.parentNode;
    }
    return elem;
}


var fillBlocks = function (){
    var books = JSON.parse(localStorage.getItem('books'));
    var categories = JSON.parse(localStorage.getItem('categories'));
    console.log(categories);
    console.log(books);

    var tabsContent = document.getElementsByClassName('container_all_books')[0].getElementsByClassName('tabcontent');
    for (var i = 0; i < tabsContent.length; i++) {
        var tabContent = tabsContent[i];
        var categoryId = parseInt(tabContent.getAttribute('data-id'));
        var section = document.createElement('section');
        section.className = 'book-wrapper table';
        books.forEach(function (book) {
            var category = categories.filter(function (category) {
                return category.id === book.category;
            })[0];
            if (isNaN(categoryId) || categoryId == category.id) {
                var article = document.createElement('article');

                var html = '<div class="substrate border-radius-8 box-shadow">' +
                    '<div class="book-container">' +
                    '<div class="book-img border-radius-8 box-shadow">' +
                    '<img src="' + book.img + '" alt="' + book.name + '">' +
                    '</div>' +
                    '<div class="book-content">' +
                    '<h2>' + book.name + '</h2>';


                html += '<p><strong>Category: </strong>' + category.name + '</p>' +
                    '<p><strong>Author: </strong>' + book.author + '</p>' +
                    '<p><strong>Conditions: </strong>' + book.conditions + '</p>' +
                    '<a href="" class="user">By ' + book.user + '</a>' +
                    '</div>' +
                    '</div>' +
                    '<div class="book-description clearfix">' +
                    '<p>' +
                    '<strong>Description: </strong>' + book.description +
                    '</p>' +
                    '</div>' +
                    '<div class="buttons-container table">' +
                    '<a href="" class="btn">Exchange</a>' +
                    '<a class="read-more" onclick="hideShowDescription(this)">Read more <i class="icon ion-chevron-down"></i></a>' +
                    '</div>' +

                    '</div>';
                article.innerHTML = html;

                section.appendChild(article);
            }

        });
        tabContent.appendChild(section);
    }
}
function ready() {
    initializeLocalStorage();
    fillBlocks();
}

document.addEventListener("DOMContentLoaded", ready);