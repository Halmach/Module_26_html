function filterByVideoName(filter) {
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
        if (videoDescription.innerText.toLowerCase().includes(filter)) { videoDescription.parentNode.style.display = 'inline-block'; }
        else { videoDescription.parentNode.style.display = 'none'; }
    }
}

function checkClientAge() {
    alert("Приветствуем на LifeSpot! " +
        new Date().toLocaleString());
    let userData = new Map();
    userData.set('browserData', window.navigator.userAgent);
    userData.set('dateTime', new Date().toLocaleString());
    let age = prompt('Введите возраст:');
    userData.set('userAge', age);
    if (age >= 18) alert('Добро пожаловать!');
    else {
        alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
        window.location.href = "http://www.google.com";
    }

    console.log('browserData:' + userData.get('browserData'));
    console.log('dateTime:' + userData.get('dateTime'));
    console.log('userAge:' + userData.get('userAge'));
}