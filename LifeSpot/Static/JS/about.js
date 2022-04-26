

let GetReviewFromUser = function () {
    let reviews = new Map();

    let name = prompt('Введите ваше имя:');
    reviews.set('name', name);

    let review = prompt('Введите текст комментария:');
    reviews.set('review', review);

    reviews.set('date', new Date().toLocaleString());

    return reviews;
}

let InsertReviewIntoReviewsContaiver = reviews => {
    let elem = document.getElementsByClassName('reviews-container')[0];
    elem.innerHTML += '<div class="review-text">';
    elem.innerHTML += '<p>';
    elem.innerHTML += 'Дата: ' + reviews.get('date') + '<br>';
    elem.innerHTML += 'Пользователь: ' + reviews.get('name') + '<br>';
    elem.innerHTML += 'Комментарий: ' + reviews.get('review') + '<br>';
    elem.innerHTML += '</p>';
    elem.innerHTML += '</div>';
}