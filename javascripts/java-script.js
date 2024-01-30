
// 1 часть кода для слайдера

document.addEventListener("DOMContentLoaded", function() {
    const sliders = document.querySelectorAll('.slider');   // Получаем все элементы с классом "slider"

    sliders.forEach(slider => {   // Итерируем по каждому слайдеру
    const thumb = slider.querySelector('.thumb');  // Получаем элемент "thumb" (ползунок) из текущего слайдера
    let shiftX;   // Объявляем переменную для хранения сдвига

    function onThumbDown(event) {  // Функция, вызываемая при нажатии на "thumb"
        event.preventDefault(); // Предотвращаем стандартное поведение браузера (выделение текста)
        shiftX = event.clientX - thumb.getBoundingClientRect().left;  // Вычисляем сдвиг между координатой клика мыши и левым краем "thumb"

        thumb.setPointerCapture(event.pointerId); // Устанавливаем захват указателя для отслеживания движения даже за пределами "thumb"
        thumb.onpointermove = onThumbMove;  // Устанавливаем обработчик события движения мыши
    }

    function onThumbMove(event) {   // Функция, вызываемая при движении мыши после нажатия на "thumb"
        let newLeft = event.clientX - shiftX - slider.getBoundingClientRect().left;  // Вычисляем новое значение left для "thumb" на основе координаты мыши и сдвига
        if (newLeft < 0) { // Проверяем, находится ли "thumb" в пределах слайдера, и корректируем его позицию, если нет
        newLeft = 0;}

        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) { newLeft = rightEdge;}
        thumb.style.left = newLeft + 'px';  // Устанавливаем новое значение left для "thumb"
    }

    thumb.onpointerdown = onThumbDown; // Устанавливаем обработчик события нажатия указателя на "thumb"
    thumb.ondragstart = () => false;  // Отключаем стандартное поведение браузера во время перетаскивания
    });
});


// 2 часть кода для добавления звука

document.addEventListener("DOMContentLoaded", function() {
    let clickSound = document.getElementById("clickSound");  // Получаем ссылку на аудиоэлемент
    let myDivs = document.querySelectorAll(".myDiv");  // Получаем все элементы с классом "myDiv"

    myDivs.forEach(function(myDiv) {  // Добавляем обработчик события клика для каждого элемента
    myDiv.addEventListener("click", function() {
        clickSound.play(); // Воспроизводим звук
    });
    });
});

