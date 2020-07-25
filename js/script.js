
let owl = $('.slider');

$(document).ready(function(){
	$('.slider').owlCarousel({
		items: 1,
		loop: true,
		autoplay: true,
		autoplayTimeout: 5000,
		autoHeight: false,
		nav : true,
		navText : ["",""],
		pagination : true,
  		smartSpeed: 1300,
  		mouseDrag : false,
  		dotsData : false,
  		dotsContainer: '#carousel-custom-dots',
  		dotsEach : 2,
  		touchDrag: true
	});
});

//попытки отключить пассивный обработчик событий(реализщвал через css)
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
	const lockPaddingValue = window.innerWidth - document.querySelector('.wraper').offsetWidth + 'px';

	if (lockPadding.length > 0) {
		for (let index = 0; index < lockPadding.length; index++) {
			const el = lockPadding[index];
			el.style.paddingRight = lockPaddingValue;
		}
	}
	body.style.paddingRight = lockPaddingValue;
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
		body.style.paddingRight = '0px';
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
	let menuClik = document.querySelector(".header__btn");
	let body = document.querySelector(".page");
	let heder__wrap_right = document.querySelector(".heder__wrap_right");
	let pageAct = document.querySelector(".page.active");
	let wr =  document.querySelector(".wr");
	let header =  document.querySelector(".header");
	

		menuClik.onclick = function() {
				heder__wrap_right.classList.toggle("drop");
				body.classList.toggle("active");
				header.classList.toggle("act");

				//попытки убрать скролл
		/*		let heder__wrap_rightAct = document.querySelector(".drop");
				if(heder__wrap_rightAct) {
					heder__wrap_rightAct.style.height = document.documentElement.clientHeight + "px";
		}*/
			}

}

dropNav();

/*let drop__menu = document.querySelector(".drop__menu");
let dropdown__content = document.querySelector(".dropdown__content");

drop__menu.addEventListener("click", function() {
	dropdown__content.classList.toggle("drop__menu-open");
});*/
	
