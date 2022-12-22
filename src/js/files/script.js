// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
//======================= Меню бургер ===============================
const menu = document.querySelector(".menu__body");
const menuBtn = document.querySelector(".icon-menu"); //menu__icon

const body = document.body;

if (menu && menuBtn) {
	menuBtn.addEventListener("click", (e) => {
		menu.classList.toggle("active");
		menuBtn.classList.toggle("active");
		body.classList.toggle("lock");
	});

	menu.addEventListener("click", (e) => {
		if (e.target.classList.contains("menu__body")) {
			menu.classList.remove("active");
			menuBtn.classList.remove("active");
			body.classList.remove("lock");
		}
	});

	menu.querySelectorAll(".menu__link").forEach((link) => {
		link.addEventListener("click", () => {
			menu.classList.remove("active");
			menuBtn.classList.remove("active");
			body.classList.remove("lock");
		});
	});
}

/*===========================================*/

const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((anchor) => {
	anchor.addEventListener("click", (event) => {
		event.preventDefault();

		const blockID = anchor.getAttribute("href").substring(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: "smooth",
			block: "start",
		});
	});
});

/*============= Пподключаем сладер ==============================*/
/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
document.getElementById("buttonPrev").onclick = previousSlide;
document.getElementById("buttonNext").onclick = nextSlide;
function nextSlide() {
	showSlides(slideIndex += 1);
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
	showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
	showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
	/* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
	let slides = document.getElementsByClassName("catalog__sld");

	/* Проверяем количество слайдов: */
	if (n > slides.length) {
		slideIndex = 1
	}
	if (n < 1) {
		slideIndex = slides.length
	}

	/* Проходим по каждому слайду в цикле for: */
	for (let slide of slides) {
		slide.style.display = "none";
	}
	/* Делаем элемент блочным: */
	slides[slideIndex - 1].style.display = "block";
}
//=====================================================
// ==================Переход к определенному слайду =====================

//var el = document.getElementById("clickSecondary");
// if (el.addEventListener)
// 	el.addEventListener("click", filterSelection, false);
// else if (el.attachEvent)
// 	el.attachEvent('onclick', filterSelection);
// document.getElementById("clickSecondary").onclick = filterSelection;
// document.getElementById("clickNewBuildings").onclick = filterSelection;
// const catalogWrp = document.getElementById("catalogWrp");
// catalogWrp.getElementsByClassName("secondary").onclick = filterSelection;
// catalogWrp.getElementsByClassName("new-buildings").onclick = filterSelection;
//catalogWrp.getElementsByClassName("catalog__sld").onclick = filterSelection;
//catalogWrp.getElementsByClassName("catalog__sld").onclick = filterSelection;
//filterSelection('secondary') // Execute the function and show all columns
//Выполнить функцию и показать все столбцы
filterSelection("all")
function filterSelection(c) {

	var x, i;
	x = document.getElementsByClassName("catalog__sld");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {

		w3RemoveClass(x[i], "show");

		if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");

	}
}
// Show filtered elements
// Показать отфильтрованные элементы
function w3AddClass(element, name) {

	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {
			element.className += " " + arr2[i];

		}
	}
}
// Hide elements that are not selected
// Скрыть невыбранные элементы
function w3RemoveClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");

	arr2 = name.split(" ");

	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Добавьте активный класс к текущей кнопке (выделите его)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("button"); //btn
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active-btn");
		current[0].className = current[0].className.replace(" active-btn", "");
		this.className += " active-btn";
	});
}

/*============= Переключаем сладеры ==============================*/
// const btnSecondary = document.querySelector('.catalog__btn-secondary');
// const btnNewBuildings = document.querySelector('.catalog__btn-new-buildings');
// const wrpSecondary = document.querySelector('.catalog__wrapper-secondary');
// const wrpNewBuildings = document.querySelector('.catalog__wrapper-new-buildings');

// if (btnSecondary && wrpSecondary) {

// 	btnSecondary.addEventListener("click", (e) => {
// 		wrpSecondary.classList.toggle("active-wrp");
// 	});
// 	//if (wrpSecondary.classList.contains("active-wrp")) { }
// }

// if (btnNewBuildings && wrpNewBuildings) {

// 	btnNewBuildings.addEventListener("click", (e) => {
// 		wrpNewBuildings.classList.toggle("active-wrp");
// 	});
// 	if (wrpNewBuildings.classList.contains("active-wrp")) {
// 		btnNewBuildings.addEventListener("click", (e) => {
// 			wrpNewBuildings.classList.remove("active-wrp");
// 		});
// 	}
// }


// document.querySelector('button').addEventListener('click', function () {
// 	var elementOne = document.getElementById('one');
// 	var elementTwo = document.getElementById('two');

// 	if (elementOne.classList.contains("hidden")) {
// 		elementOne.classList.remove("hidden");
// 		elementTwo.classList.add("hidden");
// 	} else {
// 		elementOne.classList.add("hidden");
// 		elementTwo.classList.remove("hidden");
// 	}
// })



