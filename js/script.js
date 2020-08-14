
let owl = $('.slider');

$(document).ready(function(){
	$('.slider').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoHeight: true,
		nav : true,
		navText : ["",""],
		pagination : true,
  		smartSpeed: 1300,
  		mouseDrag : false,
  		dotsData : false,
  		dotsContainer: '#carousel-custom-dots',
  		dotsEach : 2,
		touchDrag: true,
		responsiveClass:true,
		responsive:{
			 680:{
				
				
			 } 
		}
	});
});

//попытки отключить пассивный обработчик событий(реализовал через css)
/*let owll = document.querySelector(".slider");
window.addEventListener('touchstart', e => e.preventDefault(), { passive: false });*/

$('.owl-dot').click(function () {
    owl.trigger('to.owl.carousel', [$(this).index(), 300]);
});

let owl1 = $('.description');

	$('.description').owlCarousel({
		items: 1,
		loop: false,
		autoHeight: false,
		autoplay: false,
		autoHeight: false,
		mouseDrag : false,
		dotsData : false,
		pagination : true,
		dotsContainer: '#carousel-custom-dots1',
		touchDrag: true
			});
$('.owl-dot1').click(function () {
    owl1.trigger('to.owl.carousel', [$(this).index(), 300]);
});

function readMore() {

let elm = document.getElementById("content1");
let styl = window.getComputedStyle(elm,"");
elm.style.overflow = (styl.overflow == 'hidden')?'hidden':'visible';


let content1 = document.getElementById('content1');
let btn = document.getElementById('btn_more');
let wrap = document.getElementById('wrap_id');
let descrip = document.getElementById('descrip');
let styleElem = document.head.appendChild(document.createElement("style"));

	if(content1.style.overflow === "hidden") {
	btn.innerHTML="Скрыть ↑";
	content1.style.overflow = "visible";
	content1.style.height = "auto";
	styleElem.innerHTML = ".content1:before {display: none;}";
	descrip.style.height = "auto";
		} else {
			btn.innerHTML="Показать больше ↓";
			content1.style.overflow = "hidden";
			content1.style.height = "119px";
			styleElem.innerHTML = ".content1:before {display: block;}";
			descrip.style.height = "177px";
		}

}


function disabled(){
	let activ = document.querySelector(".owl-dot active")
let observer = new MutationObserver (mutationRecord => {
	if (!basket.hasAttribute("disabled") &&  (three.getAttribute("class") === "owl-dot active")) 
	 {basket.setAttribute("disabled","disabled");
	}else if (basket.hasAttribute("disabled") &&  !(three.getAttribute("class") === "owl-dot active"))
	{basket.removeAttribute("disabled");}
	
});

observer.observe(three, {
	attributes: true
});

}
disabled();


const popupLinks = document.querySelectorAll(".popup-link");
const wraper = document.querySelector(".wraper");
const body = document.querySelector("body");
const lockPadding = document.querySelectorAll(".lock-padding");

let unlock = true;
const timeout = 0;

if(popupLinks.length > 0) {
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener("click", function(e) {
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}
const popupCloseIcon = document.querySelectorAll('.close-popup');
if (popupCloseIcon.length > 0) {
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function (e) {
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}
function popupOpen(curentPopup) {
	if(curentPopup && unlock) {
		const popupActive = document.querySelector('.popup.open');
		if(popupActive) {
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		curentPopup.classList.add('open');
		curentPopup.addEventListener("click", function(e) {
			if (!e.target.closest('.popup__content')) {
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}
function popupClose(popupActive, doUnlock = true) {
	if (unlock) {
		popupActive.classList.remove('open');
		if(doUnlock) {
			bodyUnLock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.page').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	wraper.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

function bodyUnLock() {
	setTimeout(function () {
		if (lockPadding.length > 0) {
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}
		wraper.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function () {
		unlock = true;
	}, timeout);
}

document.addEventListener('keydown', function (e) {
	if (e.which === 27) {
		const popupActive = document.querySelector('.popup.open');
		popupClose(popupActive);
	}
});

(function () {
	//проверяем поддержку
	if (!Element.prototype.closest) {
		//реализуем
		Element.prototype.closest = function (css) {
			var node = this;
			while (node) {
				if (node.matches(css)) return node;
				else node = node.parentElement;
			}
			return null
		}
	}
})();
(function () {
	//провверям поддержку
	if (!Element.prototype.matches) {
		//определяем свойство
		Element.prototype.matches = Element.prototype.matchesSelector ||
			Element.prototype.webkitMatchesSelector ||
			Element.prototype.mozMatchesSelector ||
			Element.prototype.msMatchesSelector;
	}
})();

//КОД ПЕРЕМЕЩЕНИЯ ЭЛЕМЕНТОВ ПРИ АДАПТИВЕ

/* (function () {
	let original_position = [];
	let da_elements = document.querySelectorAll('[data-da]');
	let da_elements_array = [];
	let da_match_media = [];
	//Заполняем массивы
	if (da_elements.length > 0) {
		let number = 0;
		for (let index = 0; index < da_elements.length; index++) {
			const da_element = da_elements[index];
			const da_move = da_element.getAttribute('data-da');
			const da_array = da_move.split(',');
			if (da_array.length == 3) {
				da_element.setAttribute('data-da-index', number);
				//заполняем массив первоначальных позиций
				original_positions[number] = {
					"parent": da_element.parentNode,
					"index": index_in_parent(da_element)
				};
				//заполняем массив элементов
				da_elements_array[numder] = {
					"element": da_element,
					"destination": document.querySelector('.' + da_array[0].trim()),
					"place": da_array[1].trim(),
					"breakpoint": da_array[2].trim()
				}
				number++;
			}
		}
		dynamic_adapt_sort(da_elements_array);

		//создаем событие в точке брэкпоинта
		for (let index = 0; index < da_elements_array.length; index++) {
			const el = da_elements_array[index];
			const da_breakpoint = el.breakpoint;
			const da_type = "max"; //для MobileFirst поменять на min

			da_match_media.push(window.matchMedia("("+ da_type + "-width: " + da_breakpoint + "px)"));
			da_match_media[index].addListenet(dynamic_adapt);


		}
	}
	//основная функция
	function dynamic_adapt(e) {
		for(let index = 0; index < da_elements_array.length; index++) {
			const el = da_elements_array[index];
			const da_element = el.element;
			const da_destination = el.destination;
			const da_place = el.place;
			const da_breakpoint = el.breakpoint;
			const da_classname = "_dynamic_adapt_" + da_breakpoint;

			if (da_match_media[index].matches) {
				//Перебрасывает элементы
				if (!da_element.classList.contains(da_classname)) {
					let actual_index;
					if(da_place == 'first') {
						actual_index = index_of_elements(da_destination)[0];
					} else if (da_place == 'last') {
						actual_index = index_of_elements(da_destination)[index_of_elements(da_destination).length];
					} else {
						actual_index = index_of_elements(da_destination)[da_place];
					}
					da_destination.insertBefore(da_element, da_destination.children[actual_index]);
					da_element.classList.add(da_classname);
				}
			} else {
				//возвращаем на место
				if(da_element.classList.contains(da_classname)) {
					dynamic_adapt_back(da_element);
					da_element.classList.remove(da_classname);
				}
			}
		}
		custom_adapt();
	}

	//Вызов основной функции
	dynamic_adapt();

	//Функция возврата на место
	function dynamic_adapt_back(el) {
		const da_index = el.getAttribute('data-da-index');
		const original_place = original_positions[da_index];
		const parent_place = original_place['parent'];
		const index_place = original_place['index'];
		const actual_index = index_of_elements(parent_place, true)[index_place];
		parent_place.insertBefore(el, parent_place.children[actual_index]);
	}
	//функция получения индекса внутри родителя
	function index_in_parent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//функция получения массива индексов элементов внутри родителя
	function index_of_elements(parent, back) {
		const children = parent.children;
		const children_array = [];
		for (let i = 0; i < children.length; i++) {
			const children_element = children[i];
			if (back) {
				children_array.push(i);
			} else {
				//исключая перенесенный элемент
				if (children_element.getAttribute('data-da') == null) {
					children_array.push(i);
				}
			}
		}
		return children_array;
	}
	//Сортировка обьекта
	function dynamic_adapt_sort(arr) {
		arr.sort(function (a, b) { 
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 } //Для MobileFirst поменять
		});
		arr.sort(function (a, b){
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function custom_adapt() {
	/* 	const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0); *//* } */

	//Слушаем изменения размера экрана
/* 	window.addEventListener('resize', function (event) {

	}); */
/* }()); */ 

//КОД ПЕРЕМЕЩЕНИЯ ЭЛЕМЕНТОВ ПРИ АДАПТИВЕ рабочая версия
(function () {
	let originalPositions = [];
	let daElements = document.querySelectorAll('[data-da]');
	let daElementsArray = [];
	let daMatchMedia = [];
	//Заполняем массивы
	if (daElements.length > 0) {
		let number = 0;
		for (let index = 0; index < daElements.length; index++) {
			const daElement = daElements[index];
			const daMove = daElement.getAttribute('data-da');
			if (daMove != '') {
				const daArray = daMove.split(',');
				const daPlace = daArray[1] ? daArray[1].trim() : 'last';
				const daBreakpoint = daArray[2] ? daArray[2].trim() : '767';
				const daType = daArray[3] === 'min' ? daArray[3].trim() : 'max';
				const daDestination = document.querySelector('.' + daArray[0].trim())
				if (daArray.length > 0 && daDestination) {
					daElement.setAttribute('data-da-index', number);
					//Заполняем массив первоначальных позиций
					originalPositions[number] = {
						"parent": daElement.parentNode,
						"index": indexInParent(daElement)
					};
					//Заполняем массив элементов 
					daElementsArray[number] = {
						"element": daElement,
						"destination": document.querySelector('.' + daArray[0].trim()),
						"place": daPlace,
						"breakpoint": daBreakpoint,
						"type": daType
					}
					number++;
				}
			}
		}
		dynamicAdaptSort(daElementsArray);

		//Создаем события в точке брейкпоинта
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daBreakpoint = el.breakpoint;
			const daType = el.type;

			daMatchMedia.push(window.matchMedia("(" + daType + "-width: " + daBreakpoint + "px)"));
			daMatchMedia[index].addListener(dynamicAdapt);
		}
	}
	//Основная функция
	function dynamicAdapt(e) {
		for (let index = 0; index < daElementsArray.length; index++) {
			const el = daElementsArray[index];
			const daElement = el.element;
			const daDestination = el.destination;
			const daPlace = el.place;
			const daBreakpoint = el.breakpoint;
			const daClassname = "_dynamic_adapt_" + daBreakpoint;

			if (daMatchMedia[index].matches) {
				//Перебрасываем элементы
				if (!daElement.classList.contains(daClassname)) {
					let actualIndex = indexOfElements(daDestination)[daPlace];
					if (daPlace === 'first') {
						actualIndex = indexOfElements(daDestination)[0];
					} else if (daPlace === 'last') {
						actualIndex = indexOfElements(daDestination)[indexOfElements(daDestination).length];
					}
					daDestination.insertBefore(daElement, daDestination.children[actualIndex]);
					daElement.classList.add(daClassname);
				}
			} else {
				//Возвращаем на место
				if (daElement.classList.contains(daClassname)) {
					dynamicAdaptBack(daElement);
					daElement.classList.remove(daClassname);
				}
			}
		}
		customAdapt();
	}

	//Вызов основной функции
	dynamicAdapt();

	//Функция возврата на место
	function dynamicAdaptBack(el) {
		const daIndex = el.getAttribute('data-da-index');
		const originalPlace = originalPositions[daIndex];
		const parentPlace = originalPlace['parent'];
		const indexPlace = originalPlace['index'];
		const actualIndex = indexOfElements(parentPlace, true)[indexPlace];
		parentPlace.insertBefore(el, parentPlace.children[actualIndex]);
	}
	//Функция получения индекса внутри родителя
	function indexInParent(el) {
		var children = Array.prototype.slice.call(el.parentNode.children);
		return children.indexOf(el);
	}
	//Функция получения массива индексов элементов внутри родителя 
	function indexOfElements(parent, back) {
		const children = parent.children;
		const childrenArray = [];
		for (let i = 0; i < children.length; i++) {
			const childrenElement = children[i];
			if (back) {
				childrenArray.push(i);
			} else {
				//Исключая перенесенный элемент
				if (childrenElement.getAttribute('data-da') == null) {
					childrenArray.push(i);
				}
			}
		}
		return childrenArray;
	}
	//Сортировка объекта
	function dynamicAdaptSort(arr) {
		arr.sort(function (a, b) {
			if (a.breakpoint > b.breakpoint) { return -1 } else { return 1 }
		});
		arr.sort(function (a, b) {
			if (a.place > b.place) { return 1 } else { return -1 }
		});
	}
	//Дополнительные сценарии адаптации
	function customAdapt() {
		//const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
	}
}());


//попытки сделать popup

/*
function showModalWin() {
 	
 	let ok = document.getElementById('ok');

	let btn = document.getElementById('hi');
 
	btn.onclick = function () { 

	let darkLayer = document.createElement('div'); 
	darkLayer.id = 'shadow'; 
	document.body.appendChild(darkLayer); 
	
	let modalWin = document.getElementById('c-s-d'); 
	modalWin.style.display = 'block';

	ok.onclick = function () {  
		darkLayer.parentNode.removeChild(darkLayer); 
		modalWin.style.display = 'none';
 		return false;
    };
}
}
showModalWin();


function showModalWin1() {

	let ok = document.getElementById('ok');
 	
 	let btn1 = document.getElementById('hi1');

    btn1.onclick = function () { 

	let darkLayer = document.createElement('div'); 
	darkLayer.id = 'shadow'; 
	document.body.appendChild(darkLayer); 
	
	let modalWin = document.getElementById('c-s-d'); 
	modalWin.style.display = 'block';

	ok.onclick = function () {  
		darkLayer.parentNode.removeChild(darkLayer); 
		modalWin.style.display = 'none';
 		return false;
    };
}
}
showModalWin1();*/

function dropNav() {
	let header__nav = document.querySelector(".header__nav"); 
	let header__btn = document.querySelector(".header__btn"); 
	let body = document.querySelector(".page"); 
	let header = document.querySelector(".header"); 
	header__btn.onclick = function() {
		header__nav.classList.toggle("drop");
		header__btn.classList.toggle("drop");
		header.classList.toggle("border");
		if(header__btn.classList.contains("drop")) {
			body.classList.add("lock__drop");
		}else{
			body.classList.remove("lock__drop");
		}
	}

}

dropNav();

/*let drop__menu = document.querySelector(".drop__menu");
let dropdown__content = document.querySelector(".dropdown__content");

drop__menu.addEventListener("click", function() {
	dropdown__content.classList.toggle("drop__menu-open");
});*/

/* let owlStage = document.querySelector(".owl-stage");
owlStage.style.height = "300px"; */
	
