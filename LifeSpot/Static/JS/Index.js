function filterByVideoName() {
    //let userText = document.getElementsByTagName('input');
    //let filter = userText[0].value.toLowerCase();
    let elements = document.getElementsByClassName('video-container');
    // Пробежимся в цикле по контейнерам
    for (let i = 0; i <= elements.length; i++) {

        // Получим всё что внутри контейнера
        let childElements = elements[i];
        // Получим элемент, содержащий описание видео
        // Он у нас единственный с тегом h3, снова воспользуемся поиском по тегу,
        let videoDescription = childElements.getElementsByTagName('h3')[0];
        // Выведем его текст на консоль
        //console.log(videoDescription.innerText);
        if (videoDescription.innerText.toLowerCase().includes(inputParseFunction())) { videoDescription.parentNode.style.display = 'inline-block'; }
        else { videoDescription.parentNode.style.display = 'none'; }
    }
}

let userData = {};

function checkAge() {


}

function handleSession() {

}

function printSession() {
    console.log('browserData:' + sessionStorage.getItem('browserData'));
    console.log('dateTime:' + sessionStorage.getItem('dateTime'));
    console.log('userAge:' + sessionStorage.getItem('userAge'));
}

function checkSession() {

    let age = sessionStorage.getItem('userAge');

    if (age == null) {
        age = prompt('Введите возраст:');

        if (age >= 18) {
            sessionStorage.setItem('userAge', age);

            alert('Добро пожаловать!');

            alert("Приветствуем на LifeSpot!");

            sessionStorage.setItem('browserData', window.navigator.userAgent);
            sessionStorage.setItem('dateTime', new Date().toLocaleString());
            setTimeout(function () { alert('Подписывайтесь на наш инстаграмм'); }, 60000)
        }
        else {
            alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
            window.location.href = "http://www.google.com";
        }
    }

    printSession();
}


checkSession();


const inputParseFunction = function () {
    return document.getElementsByTagName('input')[0].value.toLowerCase();
}