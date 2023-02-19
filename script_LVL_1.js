// Написать программу, которая формирует на основе массива строк
// множество параграфов и выводит их в интерфейс. При клике на параграф
// текст должен меняться на звездочки. На данном этапе делать процесс
// обратимым при повторном клике необязательно.

const bodyElement = document.body;
const arrElements = [];

//создание кнопок
for (let i = 0; i < 10; i++) {
    const paragraph = document.createElement("p");
    const button = document.createElement("button");
    const div = document.createElement("div");
    paragraph.innerHTML = "Котики";
    bodyElement.prepend(div);
    bodyElement.before(button);
    bodyElement.before(paragraph);
    arrElements.push(div);
    div.append(button);
    button.append(paragraph);
}
const button = document.querySelectorAll("button");
console.log(arrElements);

//класс кнопкам (для стиля)
for (let i = 0; i < button.length; i++) {
    // button[i].classList=`button${i+1}`;
    button[i].className = `butt`;
}
//стиль тела
bodyElement.style.backgroundColor = "#EAE6D6";
//стиль кнопок
let buttonAll = document.querySelectorAll(".butt");
for (let i = 0; i < buttonAll.length; i++) {
    buttonAll[i].style.backgroundColor = "#787568";
    buttonAll[i].style.width = "300px";
    buttonAll[i].style.color = "#EAE6D6";
    buttonAll[i].style.borderRadius = "10px";
    buttonAll[i].style.border = "0cm solid #787568";
    buttonAll[i].style.marginTop = "10px";
    buttonAll[i].style.fontWeight = "700";
    buttonAll[i].style.fontSize = "larger";
}

//событие paradraph
let paragraphs = document.querySelectorAll("p");
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].addEventListener("click", toggleMask);
}

//смена содержимого при смене класса
function toggleMask() {
    this.classList.toggle("mask");
    if (this.classList.contains("mask")) {
        this.innerHTML = "******";
    } else {
        this.innerHTML = "Котики";
    }
}

// Реализовать 10 карточек с числами от 0 до 9 и при нажатии
// на какую-либо карточку присвоить ей класс active. В классе active
// должны быть стили, которые меняют цвет текста и цвет заднего
// фона местами.
const task2 = document.createElement("div");
bodyElement.append(task2);
task2.classList.add("task2_div");
task2.style.display = "flex";
const task2_div = document.querySelector(".task2_div");
task2_div.style.justifyContent = "center";
for (let i = 0; i < 10; i++) {
    const divInTask2 = document.createElement("div");
    task2.append(divInTask2);
    divInTask2.innerHTML = `${9 - i}`;
    divInTask2.setAttribute("class", "active");
    divInTask2.style.width = "100px";
    divInTask2.style.height = "100px";
    divInTask2.style.borderRadius = "10px";
    divInTask2.style.display = "flex";
    divInTask2.style.justifyContent = "center";
    divInTask2.style.alignItems = "center";
    divInTask2.style.fontSize = "larger";
    divInTask2.style.fontWeight = "700";
    divInTask2.style.fontFamily = " Arial, sans-serif";
    //изменяемое
    divInTask2.style.backgroundColor = "#E8AFC6";
    divInTask2.style.color = "#580325";
}
let blocksTask2 = document.querySelectorAll(".active");
function colorBlocks() {
    this.style.backgroundColor = "#E8AFC6";
    this.style.color = "#580325";
}
function colorBlocksInver() {
    this.style.backgroundColor = "#580325";
    this.style.color = "#E8AFC6";
}
function action() {
    this.classList.toggle("activeInvers");
    if (this.classList.contains("activeInvers")) {
        colorBlocksInver.call(this);
    } else {
        colorBlocks.call(this);
        // Доработать прошлый скрипт таким образом, чтобы при повторном нажатии класс active удалялся.
        this.classList.toggle("active");
    }
}
for (let i = 0; i < 10; i++) {
    blocksTask2[i].addEventListener("click", action);
}

// В JS объявлен массив с ссылками на картинки. На основе этого массива
// формируется множество маленьких картинок в верхней части интерфейса. При
// нажатии на одну из картинок забирается ссылка на эту картинку и в нижней
// части интерфейса отображается в большем размере. Так, пользователь, нажимая
// на маленькие картинки видит их отображение
// в большем размере.

const arrImg = [
    "https://images.pexels.com/photos/14918365/pexels-photo-14918365.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/3826669/pexels-photo-3826669.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/4672712/pexels-photo-4672712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/5713390/pexels-photo-5713390.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13060249/pexels-photo-13060249.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
];
//создаю блок сверху
let divHeader = document.createElement("div");
document.body.prepend(divHeader);
divHeader.classList.add("divHeader");
divHeader.style.backgroundColor = "#6562627e";
divHeader.style.height = "100px";
divHeader.style.width = "80%";
divHeader.style.display = "flex";
divHeader.style.justifyContent = "space-evenly";
divHeader.style.margin = "0 auto";
// divHeader

for (let i = 0; i < arrImg.length; i++) {
    let img_head = document.createElement("img");
    img_head.setAttribute("src", arrImg[i]);
    divHeader.prepend(img_head);
}
//класс по клику+большие картинки
const img = document.querySelectorAll("img");
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener(
        "click",
        (funk_img_big = () => {
            img[i].classList.toggle("big__img");
            if (img[i].classList.contains("big__img")) {
                img[i].style.position = "absolute";
                img[i].style.bottom = "0";
                img[i].style.right = "40%";
            } else {
                img[i].style.position = "";
                img[i].style.top = "";
                img[i].style.right = "";
            }
        })
    );
}

// LEVEL 2

// Есть массив из объектов. Каждый объект имеет свойства en и ru. В свойстве en написано слово на английском, а в свойстве ru на русском. Необходимо реализовать карточки, при нажатии на которые слова с русского меняются на английский и обратно.
// Подсказка. В каждой карточке должно быть два параграфа. В одном написано на русском, а во втором на английском и при нажатии на карточку один параграф получает класс с display none а второй с display block.

// Добавить внизу кнопки RU и EN при нажатии на которые все карточки переключаются на русский или английский соответственно.

// Написать цикл, который создает множество div-ов c цветами от rgb(128, 128, 0) до rgb(128, 128, 255). У дивов цвет должен меняться с шагом 5.
