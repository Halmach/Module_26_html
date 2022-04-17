alert("Приветствуем на LifeSpot! " +
    new Date().toLocaleString());

let age = prompt('Введите возраст:');
if (age >= 18) alert('Добро пожаловать!');
else {
    alert("Наши трансляции не предназначены для лиц моложе 18 лет. Вы будете перенаправлены");
    window.location.href = "http://www.google.com";
}