//let name = prompt('Как вас зовут ?');
let elements = document.getElementsByTagName('*');
//console.log(elements);
//alert('Приветствуем тебя ' + name + ' в твоем имени ' + name.length + ' символов' + ' а на странице ' + elements.length + ' элементов');
alert(`Количество элементов на странице:  ${elements.length}`);


const SaveInput = function () {
    let currentInput = document.getElementsByTagName('input')[0].value.toLowerCase();
    alert('Последний ввод: ' + this.lastInput /* равноценно window.lastInput, так как мы работаем в контексте браузера */
        + '\n' + 'Текущий ввод: ' + currentInput);
    this.lastInput = currentInput;
}