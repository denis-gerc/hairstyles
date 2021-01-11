$(document).ready(function () {

	// Burger menu

	// $(document).ready(function () {
	// 	$('.burger-line').click(function (event) {
	// 		$('#burger-icon').toggleClass('change');
	// 		$('.mobile-menu__list').toggleClass('open');
	// 		$('body').toggleClass('lock');
	// 	});
	// });

	// Mobile menu and sub-menu and sub-sub-menu
	//===============================================
	let isMobile = {

		Android: function () {
			return navigator.userAgent.match(/Android/i);
		},
		BlackBerry: function () {
			return navigator.userAgent.match(/BlackBerry/i);
		},
		iOS: function () {
			return navigator.userAgent.match(/iPhone|iPad|iPod/i);
		},
		Opera: function () {
			return navigator.userAgent.match(/Opera Mini/i);
		},
		Windows: function () {
			return navigator.userAgent.match(/IEMobile/i);
		},
		any: function () {
			return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
		}
	};

	let body = document.querySelector('body');

	if (isMobile.any()) {
		body.classList.add('touch');
		let arrow = document.querySelectorAll('.arrow');
		for (i = 0; i < arrow.length; i++) {
			let thisLink = arrow[i].previousElementSibling;
			let subMenu = arrow[i].nextElementSibling;
			let thisArrow = arrow[i];

			thisLink.classList.add('parent');
			arrow[i].addEventListener('click', function () {
				subMenu.classList.toggle('open');
				thisArrow.classList.toggle('active');
			});
		}
	} else {
		body.classList.add('mouse');
	}

	//==========================
	//Slick Slider

	// $('.slider').slick({
	// 		arrows: false,
	// 		dots: false,
	// 		slidesToShow: 1,
	// 		autoplay: false,
	// 		speed: 1500,
	// 		autoplaySpeed: 800,
	// 		adaptiveHeight: true,
	// 		pauseOnFocus: true,

	// 		responsive: [
	// 				{
	// 						breakpoint: 1024,
	// 						settings: {
	// 								slidesToShow: 1
	// 						}
	// 				},
	// 				{
	// 						breakpoint: 768,
	// 						settings: {
	// 								slidesToShow: 1
	// 						}
	// 				}
	// 		]
	// });

	//===============================
	//Animates the header upon scroll

	// $(function () {
	// 	let header = $(".header"),
	// 		yOffset = 0,
	// 		triggerPoint = 150;
	// 	$(window).scroll(function () {
	// 		yOffset = $(window).scrollTop();

	// 		if (yOffset >= triggerPoint) {
	// 			header.addClass("minimized");
	// 		} else {
	// 			header.removeClass("minimized");
	// 		}

	// 	});
	// });
	//==========================================
	// Swiper slide

	// Инициализируем Swiper
	var galleryThumbs = new Swiper('.gallery-thumbs', {
		spaceBetween: 5,
		slidesPerView: 3,
		freeMode: true,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
	});

	var galleryTop = new Swiper('.gallery-top', {
		spaceBetween: 100,
		slidesPerView: 1,
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});

	var galleryRight = new Swiper('.gallery-right', {
		spaceBetween: 100,
		slidesPerView: 1,
		// navigation: {
		// 	nextEl: '.swiper-button-next',
		// 	prevEl: '.swiper-button-prev',
		// },
		// thumbs: {
		// 	swiper: galleryThumbs
		// }
	});

	// Передача управления
	galleryTop.controller.control = galleryRight;
	galleryRight.controller.control = galleryTop;

}); // end document