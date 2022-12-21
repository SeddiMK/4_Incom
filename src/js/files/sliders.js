/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
//Полный набор стилей из scss/libs/swiper.scss
//import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
//import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
	// Перечень слайдеров
	// Проверяем, есть ли слайдер на стронице
	if (document.querySelector('.swiper')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
		new Swiper('.swiper', { // Указываем скласс нужного слайдера
			// Подключаем модули слайдера
			// для конкретного случая
			modules: [Navigation],
			observer: true,
			observeParents: true,
			slidesPerView: 1,
			spaceBetween: 0,
			//autoHeight: true,
			//speed: 800,

			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				prevEl: '.swiper-button-prev',
				nextEl: '.swiper-button-next',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {

			}
		});
	}
}

// ==================Переход к определенному слайду =====================
//filterSelection("all") // Execute the function and show all columns
//Выполнить функцию и показать все столбцы
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("swiper-slide");// column
	if (c == "all") c = "";
	// Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
	// Добавьте класс «show» (display: block) к отфильтрованным элементам и удалите класс «show» из элементов, которые не выбраны.
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

// Add active class to the current button (highlight it)
// Добавить активный класс наблюдения (выделить ее)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("button"); //btn
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		var current = document.getElementsByClassName("active");
		current[0].className = current[0].className.replace(" active", "");
		this.className += " active";
	});
}

//swiper.slideTo(index, speed, runCallbacks)
//======== Переключение слайдеров 4 в 1 ================================
// var menu_obj = ['Все', 'Последние']

// // в переменной будут храниться все созданные слайдеры
// const instanceNestedSlider = {}
// // индекс активного вложенного слайдера
// let activeNestedSlider = 0
// // функция создания нового вложенного слайдера
// const createNestedSlider = (el) => {
// 	return new Swiper(el, {
// 		loop: true,
// 		nested: true,

// 		observer: true,
// 		observeParents: true,
// 		// pagination: {
// 		// 	el: '.swiper-pagination-objects',
// 		// 	type: 'fraction',
// 		// },
// 		slidesPerView: 1,
// 		//spaceBetween: 30,
// 		// отключаем навигацию по умолчанию, так как у нас будет одна для всех
// 		// navigation: {
// 		//   nextEl: '.objects-button-right',
// 		//   prevEl: '.objects-button-left',
// 		// },
// 	})
// }
// // Пользовательский функционал навигации
// // так как она общая для всех вложенных слайдеров
// // берет активный слайдер и меняет слайды
// const clickNavigate = function (i) {
// 	if (i > 0) {
// 		instanceNestedSlider[activeNestedSlider].slideNext()
// 	} else {
// 		instanceNestedSlider[activeNestedSlider].slidePrev()
// 	}
// }

// const ObjSlider = new Swiper('.objects-swiper', {
// 	pagination: {
// 		el: '.swiper-pagination-attached',
// 		clickable: true,
// 		observer: true,
// 		observeParents: true,
// 		renderBullet: function (index, className) {
// 			return (
// 				'<span class="' + className + '">' + menu_obj[index] + '</span>'
// 			)
// 		},
// 	},
// 	on: {
// 		init: function (swiper) {
// 			const nestedSlider =
// 				swiper.slides[swiper.activeIndex].querySelector(
// 					'.swiper-container'
// 				)
// 			// если есть вложенный контейнер слайдера
// 			if (nestedSlider) {
// 				// создаем слайдер
// 				instanceNestedSlider[swiper.activeIndex] =
// 					createNestedSlider(nestedSlider)
// 				// устанавливаем его активным
// 				activeNestedSlider = swiper.activeIndex
// 			}
// 		},
// 		slideChange: function (swiper) {
// 			// если среди созданных вложенных слайдеров нет с индексом текущего слайда
// 			if (!instanceNestedSlider[swiper.activeIndex]) {
// 				// если есть вложенный контейнер слайдера
// 				const nestedSlider =
// 					swiper.slides[swiper.activeIndex].querySelector(
// 						'.swiper-container'
// 					)
// 				// создаем слайдер
// 				instanceNestedSlider[swiper.activeIndex] =
// 					createNestedSlider(nestedSlider)
// 			} else {
// 				// иначе переходим к первому слайдеру в активном вложенном слайдере
// 				instanceNestedSlider[swiper.activeIndex].slideToLoop(
// 					0,
// 					1000,
// 					true
// 				)
// 				instanceNestedSlider[swiper.activeIndex].update()
// 				instanceNestedSlider[swiper.activeIndex].pagination.update()
// 			}
// 			// меняем индекс активного слайдера
// 			activeNestedSlider = swiper.activeIndex
// 		},
// 	},
// })