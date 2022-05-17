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

function addLike(Id) {

    let button = document.getElementById(Id);

    let array = button.innerText.split(' ');

    let rate = parseInt(array[array.length - 1], 10);

    array[array.length - 1] = ++rate;

    button.innerText = array.join(' ');
}

let InsertReviewIntoReviewsContaiver = review => {
    let elem = document.getElementsByClassName('reviews-container')[0];

    elem.innerHTML += '<div class="review-text">';

    if (review.hasOwnProperty('rate')) {
        elem.innerHTML += '<p>';
        elem.innerHTML += 'Рейтинг: ' + '<button id="' + Math.random() + '" onclick =' + "addLike(this.id)" + '>' + '❤️ ' + review['rate'] + '</button>' + '<br>';
        
    }
    
    elem.innerHTML += 'Дата: ' + review['date'] + '<br>';
    elem.innerHTML += 'Пользователь: ' + review['name'] + '<br>';
    elem.innerHTML += 'Комментарий: ' + review['review'] + '<br>';
    elem.innerHTML += '</p>';
    elem.innerHTML += '</div>';
}

// Код слайдера

let offset = 0; // смещение от левого края
const sliderLine = document.querySelector('.slider-items');

function nextSlide() {
    sliderLine.style.transition = "all ease 1s";
    offset += 1000;
    console.log('nextInc');
    if (offset > 2000) offset = 2000;
    sliderLine.style.left = -offset + 'px';
}

function prevSlide() {
    sliderLine.style.transition = "all ease 1s";
    offset -= 1000;
    console.log('prevDec');
    if (offset < 0) offset = 0;
    sliderLine.style.left = -offset + 'px';
}

document.querySelector('.slider-next').addEventListener('click', nextSlide);

document.querySelector('.slider-prev').addEventListener('click', prevSlide);


//document.querySelector('.slider-items').addEventListener('mousemove', function (event) {
//    console.log(event.which);
//});
let dx = 0;
let x1_temp = 0;
let x2_temp = 0;
function sliderSlick(event) {
    let checklimitValue = 0;
    sliderLine.style.transition = "all ease 0.01s";
    if (event.which == 1) {
        if (x1_temp - offset > event.pageX) {
            this.x2 = event.pageX;


            //      if (this.offsetFlag) {
            checklimitValue = (this.x2) - (x1_temp);
            if (Math.abs(checklimitValue) < (offset + 500)) dx = (checklimitValue);
            //     x2_temp = this.x2;
            console.log('x2 = ' + this.x2);
            console.log('x1 = ' + x1_temp);
            sliderLine.style.left = dx + 'px';
            console.log('sliderLine = ' + sliderLine.style.left);
            //    }

            //   this.offsetFlag = true;

            //    this.x1 = event.pageX;
            //debugger;
        }
        else if (x1_temp - offset < event.pageX) {
            this.x2 = event.pageX + offset;


            //      if (this.offsetFlag) {
            checklimitValue = (this.x2) - (x1_temp - offset);
            if (Math.abs(checklimitValue) < (offset + 500)) dx = (checklimitValue);
            //     x2_temp = this.x2;
            console.log('x2 = ' + this.x2);
            console.log('x1 = ' + x1_temp);
            sliderLine.style.left = dx + 'px';
            console.log('sliderLineREv = ' + sliderLine.style.left);
            console.log('slideOffset = ' + offset);
        }
    }
}


sliderLine.onmousemove = sliderSlick;



sliderLine.addEventListener('mouseup', function (event) {
    console.log('mouseup');
    this.x1 = 0;
    this.x2 = 0;
    this.offsetFlag = false;
    dx = 0;
    
    sliderLine.style.left = -offset + 'px';
    let dx_temp = event.pageX - x1_temp;
    if (dx_temp <= -50) nextSlide();
    else if (dx_temp >= 50) prevSlide();
    console.log('UpOffset = ' + offset);
    sliderLine.removeEventListener("mousemove", sliderSlick);
});

sliderLine.addEventListener('mousedown', function (event) {
    console.log('DownOffset = ' + offset);
    x1_temp = event.pageX + offset;
    sliderLine.onmousemove = sliderSlick;
});




document.querySelector('.slider-items').ondragstart = function () {
    return false;
};

