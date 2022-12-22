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

/*============= Переключаем сладеры ==============================*/
const btnSecondary = document.querySelector('.catalog__btn-secondary');
const btnNewBuildings = document.querySelector('.catalog__btn-new-buildings');
const wrpSecondary = document.querySelector('.catalog__wrapper-secondary');
const wrpNewBuildings = document.querySelector('.catalog__wrapper-new-buildings');

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




//=================== UTM метки ========================
// Добавьте UTM-метку utm_replace к ссылке в рекламной кампании, например
//site.ru/?utm_campaign=name&utm_replace=moscow

// moscow, это краткий код заголовка, которому соответствует длинный заголовок, например
// moscow, это  «Заказать эвакуатор в Москве!»
var content = {
	moscow: 'Заказать эвакуатор в Москве!',
	kazan: 'Заказать эвакуатор в Казани!',
	spb: 'Заказать эвакуатор в Санкт-Петербурге!',
};

//  Здесь нужно между одинарными кавычками вставить селектор http://joxi.ru/GrqZodptNMNlWm
var selector = '#manager > div > div.title > div';


// Далее ничего не меняйте, это исполняющий замену скрипт
// function replacer(content) {
// 	var utm = /utm_replace=([^&]*)/g.exec(document.URL)[1];
// 	if (utm in content) {
// 		document.querySelector(selector).innerHTML = content[utm];
// 	} else {
// 		console.log('Каталог контента не имеет такой utm метки');
// 	};
// };

// replacer(content);