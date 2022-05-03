function CreateComment(name, review) {
    this.name = name,
    this.review = review,
    this.date = new Date().toLocaleString()
}

let GetReviewFromUser = function () {

    let name = prompt('Введите ваше имя:');
    //comment['name'] =  name;

    let review = prompt('Введите текст комментария:');
    //comment['review'] = review;

    let comment = new CreateComment(name, review);

    result = confirm('Хотите чтобы ваш комментарий оценили другие пользователи ?');

    if (result) {
        let review = Object.create(comment);
        review.rate = 0;

        return review;
    }
    else return comment;
}

let InsertReviewIntoReviewsContaiver = review => {
    let elem = document.getElementsByClassName('reviews-container')[0];

    elem.innerHTML += '<div class="review-text">';

    if (review.hasOwnProperty('rate')) {
        elem.innerHTML += '<p>';
        elem.innerHTML += 'Рейтинг: ' + review['rate'] + '<br>';
    }
    
    elem.innerHTML += 'Дата: ' + review['date'] + '<br>';
    elem.innerHTML += 'Пользователь: ' + review['name'] + '<br>';
    elem.innerHTML += 'Комментарий: ' + review['review'] + '<br>';
    elem.innerHTML += '</p>';
    elem.innerHTML += '</div>';
}