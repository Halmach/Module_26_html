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