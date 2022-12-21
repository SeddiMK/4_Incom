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
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});
// ==================Переход к определенному слайду =====================


//swiper.slideTo(index, speed, runCallbacks)
//======== Переключение слайдеров 4 в 1 ================================
var menu_obj = ['Все', 'Последние']

// в переменной будут храниться все созданные слайдеры
const instanceNestedSlider = {}
// индекс активного вложенного слайдера
let activeNestedSlider = 0
// функция создания нового вложенного слайдера
const createNestedSlider = (el) => {
	return new Swiper(el, {
		loop: true,
		nested: true,

		observer: true,
		observeParents: true,
		// pagination: {
		// 	el: '.swiper-pagination-objects',
		// 	type: 'fraction',
		// },
		slidesPerView: 1,
		//spaceBetween: 30,
		// отключаем навигацию по умолчанию, так как у нас будет одна для всех
		// navigation: {
		//   nextEl: '.objects-button-right',
		//   prevEl: '.objects-button-left',
		// },
	})
}
// Пользовательский функционал навигации
// так как она общая для всех вложенных слайдеров
// берет активный слайдер и меняет слайды
const clickNavigate = function (i) {
	if (i > 0) {
		instanceNestedSlider[activeNestedSlider].slideNext()
	} else {
		instanceNestedSlider[activeNestedSlider].slidePrev()
	}
}

const ObjSlider = new Swiper('.objects-swiper', {
	pagination: {
		el: '.swiper-pagination-attached',
		clickable: true,
		observer: true,
		observeParents: true,
		renderBullet: function (index, className) {
			return (
				'<span class="' + className + '">' + menu_obj[index] + '</span>'
			)
		},
	},
	on: {
		init: function (swiper) {
			const nestedSlider =
				swiper.slides[swiper.activeIndex].querySelector(
					'.swiper-container'
				)
			// если есть вложенный контейнер слайдера
			if (nestedSlider) {
				// создаем слайдер
				instanceNestedSlider[swiper.activeIndex] =
					createNestedSlider(nestedSlider)
				// устанавливаем его активным
				activeNestedSlider = swiper.activeIndex
			}
		},
		slideChange: function (swiper) {
			// если среди созданных вложенных слайдеров нет с индексом текущего слайда
			if (!instanceNestedSlider[swiper.activeIndex]) {
				// если есть вложенный контейнер слайдера
				const nestedSlider =
					swiper.slides[swiper.activeIndex].querySelector(
						'.swiper-container'
					)
				// создаем слайдер
				instanceNestedSlider[swiper.activeIndex] =
					createNestedSlider(nestedSlider)
			} else {
				// иначе переходим к первому слайдеру в активном вложенном слайдере
				instanceNestedSlider[swiper.activeIndex].slideToLoop(
					0,
					1000,
					true
				)
				instanceNestedSlider[swiper.activeIndex].update()
				instanceNestedSlider[swiper.activeIndex].pagination.update()
			}
			// меняем индекс активного слайдера
			activeNestedSlider = swiper.activeIndex
		},
	},
})