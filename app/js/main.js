
//Переключение светлой/тёмной темы

// function changeTheme(isChecked) {
//     if (isChecked) {
//       document.body.setAttribute('dark', '');
//     } else {
//       document.body.removeAttribute('dark');
//     }
// }

//Уточнить город
const city_choice = document.querySelector('.change-city .dart-btn-icon-list');
const modal_city = document.querySelector('.change-city');
const citiСhoiceСlose = document.querySelector(".change-city__close")
if(city_choice && modal_city){
    city_choice.addEventListener('click', () => {
        modal_city.classList.toggle('show')
    })
}

if(citiСhoiceСlose && modal_city){
	citiСhoiceСlose.addEventListener('click', () => {
        modal_city.classList.remove('show')
    })
}
//Свайпер Акции большой
let swiper = new Swiper(".promoSwiper", {
    parallax: true,
    speed: 600,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    loop: true,
    autoplay: {
        delay: 10000,
        disableOnInteraction: false
    },
	breakpoints: {
		0: {
			slidesPerView: 1.05,
			spaceBetween: 8
		},
		430: {
			slidesPerView: 1.05,
			spaceBetween: 8
		},
		600: {
			slidesPerView: 1.1,
			spaceBetween: 8
		},
		768: {
			slidesPerView: 1.2,
			spaceBetween: 8
		},
		991: {
			slidesPerView: 1.3,
			spaceBetween: 8
		},
		1200: {
			slidesPerView: 1,
			spaceBetween: 8
		}
	}
});

// Свайпер Акции БРЕНД
// let swiperBrand = new Swiper(".brandPromoSwiper", {
//     parallax: true,
//     speed: 600,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     loop: true,
//     autoplay: {
//         delay: 10000,
//         disableOnInteraction: false
//     },
// 	breakpoints: {
// 		0: {
// 			slidesPerView: 1.05,
// 			spaceBetween: 8
// 		},
// 		430: {
// 			slidesPerView: 1.05,
// 			spaceBetween: 8
// 		},
// 		600: {
// 			slidesPerView: 1.1,
// 			spaceBetween: 8
// 		},
// 		768: {
// 			slidesPerView: 1.2,
// 			spaceBetween: 8
// 		},
// 		991: {
// 			slidesPerView: 1.3,
// 			spaceBetween: 8
// 		},
// 		1200: {
// 			slidesPerView: 1,
// 			spaceBetween: 8
// 		}
// 	}
// });


//Свайпер акции сбоку

//Свайпер акции сбоку
var swipertwo = new Swiper(".promoSwiperMini", {
    on: {
		init: function () {
		  const dColPromoSwiper = document.querySelector('.d-col-promoSwiperMini');
		  if(dColPromoSwiper){
			dColPromoSwiper.classList.remove('loadSwiper')
		  }
		},
	},
    slidesPerView: 2,
    spaceBetween: 8,
    navigation: {
      nextEl: ".swiper-mini-next",
      prevEl: ".swiper-mini-prev",
    },
	breakpoints: {
		0: {
			slidesPerView: 1.2,
		},
		430: {
			slidesPerView: 1.4,
		},
		600: {
			slidesPerView: 2.5,
		},
		768: {
			slidesPerView: 3.8,
		},
		993: {
			slidesPerView: 3.5,
		},
		1000: {
			slidesPerView: 4.5,
		},
		1201: {
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 3.5,
		},
		1601: {
			slidesPerView: 4,
		},
		1901:{
			slidesPerView: 3.5,
		}
	}
});


//Свайпер готовимся к сезону
var swipertree = new Swiper(".dartSwiperSezon", {
    slidesPerView: 5,
    spaceBetween: 8,
    navigation: {
        nextEl: ".swiper-sezon-next",
        prevEl: ".swiper-sezon-prev",
    },
	on: {
		init: function () {
		  const dColPromoSwiper = document.querySelector('.dartSwiperSezon');
		  if(dColPromoSwiper){
			dColPromoSwiper.classList.remove('loadSwiper')
		  }
		},
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		430: {
			slidesPerView: 2.8,
		},
		600: {
			slidesPerView: 3.6,
		},
		768: {
			slidesPerView: 4,
		},
		991: {
			slidesPerView: 5,
		},
		1201: {
			slidesPerView: 4.5,
		},
		1400: {
			slidesPerView: 5,
		},
		1600: {
			slidesPerView: 5.5,
		},
		1901: {
			slidesPerView: 5,
		}
	}
});

//Идеи для подарков
var swipertree = new Swiper(".dartSwiperIdea", {
    slidesPerView: 5,
    spaceBetween: 8,
    navigation: {
        nextEl: ".swiper-idea-next",
        prevEl: ".swiper-idea-prev",
    },
	on: {
		init: function () {
		  const dColPromoSwiper = document.querySelector('.dartSwiperIdea');
		  if(dColPromoSwiper){
			dColPromoSwiper.classList.remove('loadSwiper')
		  }
		},
	},
	breakpoints: {
		0: {
			slidesPerView: 1.9,
		},
		430: {
			slidesPerView: 2.8,
		},
		600: {
			slidesPerView: 3.6,
		},
		768: {
			slidesPerView: 4.6,
		},
		991: {
			slidesPerView: 5.6,
		},
		1201: {
			slidesPerView: 5,
		},
		1400: {
			slidesPerView: 6,
		},
		1600: {
			slidesPerView: 6.5,
		},
		1901: {
			slidesPerView: 5.5,
		}
	}
});

//На каждый день
var swipertree = new Swiper(".dartSwiperEveryDay", {
    slidesPerView: 5,
    spaceBetween: 8,
    navigation: {
        nextEl: ".swiper-every-next",
        prevEl: ".swiper-every-prev",
    },
	on: {
		init: function () {
		  const dColPromoSwiper = document.querySelector('.dartSwiperEveryDay');
		  if(dColPromoSwiper){
			dColPromoSwiper.classList.remove('loadSwiper')
		  }
		},
	},
	breakpoints: {
		0: {
			slidesPerView: 1.5,
		},
		430: {
			slidesPerView: 2.2,
		},
		600: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 3.6,
		},
		991: {
			slidesPerView: 4,
		},
		1201: {
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 3.5,
		},
		1800: {
			slidesPerView: 4,
		}
	}
});
const menuCatalogButton = document.querySelector('.menu-catalog-button');

if(menuCatalogButton){
	menuCatalogButton.addEventListener('click', () => {
		menuCatalogButton.parentElement.classList.toggle('menuShow');
	})
}

var swipertwo = new Swiper(".brandPromoSwiperMini", {
    spaceBetween: 8,
    loop: true,
    navigation: {
      nextEl: ".swiper-mini-next",
      prevEl: ".swiper-mini-prev",
    },
	breakpoints: {
		0: {
			slidesPerView: 1.3,
		},
		430: {
			slidesPerView: 2,
		},
		600: {
			slidesPerView: 3,
		},
		768: {
			slidesPerView: 4,
		},
		1000: {
			slidesPerView: 3.5,
		},
		1200: {
			slidesPerView: 3.5,
		},
		1400: {
			slidesPerView: 4,
		}
	}
});


//Свайпер новинки
var swipertree = new Swiper(".dartSwiperNew", {
    slidesPerView: 5,
    spaceBetween: 8,
    navigation: {
        nextEl: ".swiper-new-next",
        prevEl: ".swiper-new-prev",
    },
	on: {
		init: function () {
		  const dColPromoSwiper = document.querySelector('.dartSwiperNew');
		  if(dColPromoSwiper){
			dColPromoSwiper.classList.remove('loadSwiper')
		  }
		},
	},
	breakpoints: {
		0: {
			slidesPerView: 1.9,
		},
		430: {
			slidesPerView: 2.8,
		},
		600: {
			slidesPerView: 3.6,
		},
		768: {
			slidesPerView: 4.6,
		},
		991: {
			slidesPerView: 5.6,
		},
		1201: {
			slidesPerView: 5,
		},
		1400: {
			slidesPerView: 6,
		},
		1600: {
			slidesPerView: 6.5,
		},
		1901: {
			slidesPerView: 5.5,
		}
	}
});

//Свайпер производители
var swipertree = new Swiper(".dartSwiperManufacturer", {
    slidesPerView: 6,
    spaceBetween: 8,
    navigation: {
        nextEl: ".swiper-manufacturer-next",
        prevEl: ".swiper-manufacturer-prev",
    },
	breakpoints: {
		0: {
			slidesPerView: 2.5,
		},
		430: {
			slidesPerView: 3,
		},
		600: {
			slidesPerView: 4.5,
		},
		768: {
			slidesPerView: 5.5,
		},
		991: {
			slidesPerView: 6,
		}
	}
});

//Свайпер в комментариях

var swipertree = new Swiper(".swiperImageChangeShop", {
    slidesPerView: 4.5,
    spaceBetween: 8,
    navigation: {
        nextEl: ".swiper-image-next",
        prevEl: ".swiper-image-prev",
    }
});

//Свайпер комментариев
const swiperFeedbackProduct = document.querySelectorAll('.swiperFeedbackProduct');

if(swiperFeedbackProduct){
	for (let i = 0; i < swiperFeedbackProduct.length; i++) {

       //Свайпер новинки
		var swipertree = new Swiper(swiperFeedbackProduct[i], {
			slidesPerView: 12,
			spaceBetween: 8,
			navigation: {
				nextEl: ".swiper-feedback-next-" + (i+1),
				prevEl: ".swiper-feedback-prev-"+ (i+1),
			},
			breakpoints: {
				0: {
					slidesPerView: 5.2,
				},
				430: {
					slidesPerView: 6,
				},
				600: {
					slidesPerView: 6.5,
				},
				768: {
					slidesPerView: 8,
				},
				991: {
					slidesPerView: 9,
				}
			}

		});
    }
}


//Текстовая страница (Фото)
const dartPhotoGalery = document.querySelectorAll('.dartPhotoGalery');
const dartVideoGalery = document.querySelectorAll('.dartVideoGalery');

if(dartPhotoGalery){
	for (let i = 0; i < dartPhotoGalery.length; i++) {
       //Свайпер новинки
		var swipertree = new Swiper(dartPhotoGalery[i], {
			slidesPerView: 3,
			spaceBetween: 12,
			navigation: {
				nextEl: ".swiper-photo-next-" + (i+1),
				prevEl: ".swiper-photo-prev-"+ (i+1),
			},
			breakpoints: {
				0: {
					slidesPerView: 1.2,
				},
				600: {
					slidesPerView: 2.5,
				},
				991: {
					slidesPerView: 3,
				}
			}

		});
    }
}

if(dartVideoGalery){
	for (let i = 0; i < dartVideoGalery.length; i++) {
       //Свайпер новинки
		var swipertree = new Swiper(dartVideoGalery[i], {
			slidesPerView: 3,
			spaceBetween: 12,
			navigation: {
				nextEl: ".swiper-video-next-" + (i+1),
				prevEl: ".swiper-video-prev-"+ (i+1),
			},
			breakpoints: {
				0: {
					slidesPerView: 1.2,
				},
				600: {
					slidesPerView: 2,
				},
				991: {
					slidesPerView: 3,
				}
			}

		});
    }
}

// Свайпер в профиле
const swiperProfileComments = document.querySelectorAll('.swiperProfileComments');

if(swiperProfileComments){
	for (let i = 0; i < swiperProfileComments.length; i++) {

       //Свайпер новинки
		var swipertree = new Swiper(swiperProfileComments[i], {
			slidesPerView: 6,
			spaceBetween: 8,
			navigation: {
				nextEl: ".swiper-mycomment-next-" + (i+1),
				prevEl: ".swiper-mycomment-prev-"+ (i+1),
			},
			breakpoints: {
				0: {
					slidesPerView: 4,
				},
				601: {
					slidesPerView: 6,
				}
			}
		});
    }
}


// Карточка товара
var mySwiperProduct = new Swiper(".mySwiperProduct", {
	loop: true,
	spaceBetween: 8,
	slidesPerView: 5,
	freeMode: true,
	watchSlidesProgress: true,
  });
  var mySwiperProductTwo = new Swiper(".mySwiperProductTwo", {
	loop: true,
	spaceBetween: 8,
	navigation: {
	  nextEl: ".swiper-product-next",
	  prevEl: ".swiper-product-prev",
	},
	thumbs: {
	  swiper: mySwiperProduct,
	},
  });

// Карточка товара (Мобилка)
var mySwiperProductMobile = new Swiper(".mySwiperProductMobile", {
	loop: true,
	spaceBetween: 8,
	slidesPerView: 1,
	pagination: {
        el: ".swiper-pagination",
    },
	watchSlidesProgress: true,
});

const swiperDateOrder = document.querySelectorAll('.swiperDateOrder');
if(swiperDateOrder){
	for (let i = 0; i < swiperDateOrder.length; i++) {

       //Свайпер новинки
		var swipertree = new Swiper(swiperDateOrder[i], {
			slidesPerView: 8,
			spaceBetween: 8,
			navigation: {
				nextEl: ".swiper-date-next-"+ (i+1),
				prevEl: ".swiper-date-prev-"+ (i+1),
			},
		});
    }
}


//Левое меню каталог
const menu_items = document.querySelectorAll('.dart-catalog-menu__el');
if(menu_items){
    for (let i = 0; i < menu_items.length; i++) {
        menu_items[i].addEventListener("click", function() {
            menu_items[i].parentElement.classList.toggle("active");
			const el = menu_items[i].parentElement.querySelector('.dart-catalog-menu__list');

			if (el.style.maxHeight) {
				el.style.maxHeight = null;
			} else {
				el.style.maxHeight =  el.scrollHeight + "px";
			}
        });
    }
}

//link-no-link

const LinkNoLink = document.querySelectorAll('.link-no-link');

if(LinkNoLink){
	for(let i = 0; i< LinkNoLink.length; i++){
		LinkNoLink[i].addEventListener('click', (e) => {
			e.preventDefault();
		})
	}
}

//Левое меню с подкаталогами
const menuItems = document.querySelectorAll('.dart-menu-category__el');
if(menuItems){
    for (let i = 0; i < menuItems.length; i++) {
        menuItems[i].addEventListener("click", function() {
            menuItems[i].parentElement.classList.toggle("active");
        });
    }
}

/* //Карта
let stores_map = {

	options: {
		wrapper: '.dart-menu-left__map',
		map: 'dart-menu-left__map',
		mapModal: 'changeshop__map',
		stores_list: '.modal-stores-map__items',
		search_form: '.modal-stores-map__form',
		toggler: '.dart-menu-left__map .toggler a',
		toggle_class: 'display_map_or_list',
		center: [55.903302, 37.420365], // Координаты пользователя
	},

	init: function(){
		let mainMap = new ymaps.Map(stores_map.options.map, {
			center: stores_map.options.center,
			zoom: 9,
			controls: ['zoomControl']
		});

		let mainMapModal = new ymaps.Map(stores_map.options.mapModal, {
			center: stores_map.options.center,
			zoom: 9,
			controls: ['zoomControl']
		});


		mainMap.geoObjects
			.add(new ymaps.Placemark(stores_map.options.center, {
				balloonContent: "Вы тут",
				hintContent: "Вы тут",
			}, {
				iconLayout: 'default#image',
				iconImageHref: '/img/icons/here.png',
				iconImageSize: [40, 40],
				iconImageOffset: [-20, -20]
		}));

		mainMapModal.geoObjects
			.add(new ymaps.Placemark(stores_map.options.center, {
				balloonContent: "Вы тут",
				hintContent: "Вы тут",
			}, {
				iconLayout: 'default#image',
				iconImageHref: '/img/icons/here.png',
				iconImageSize: [40, 40],
				iconImageOffset: [-20, -20]
		}));
		
		let stores = [
			{
				name: "Самоделкин",
				coordinats: [58.007903, 56.236651],
				address: "ул. Советская улица, 89с1",
				image: "/img/favicon.jpg",
				rating: 3
			},
			{
				name: "Самоделкин 2",
				coordinats: [54.007903, 51.236651],
				address: "ул. Советская улица, 89с1",
				image: "/img/favicon.jpg",
				rating: 5
			},
		]

		stores.forEach((element, index, array) => {

			const circleLayout = ymaps.templateLayoutFactory.createClass('<div class="map-circle-image"><img class="shop-map__icon shop-map__icon-map" src="'+ element['image'] +'" alt=""></div>');

			var myPlacemark = new ymaps.Placemark(element['coordinats'], {
				balloonContentBody: 
				'<div>' +
					'<div class="dart-row">' +
						'<div class="d-col-7">' +
						'<h4>' + element['name'] + '</h4>' +
						'<div class="dart-rating" data-rating='+ element['rating'] + '>' +
							'<i class="d_icon d_icon-star"></i>' +
							'<i class="d_icon d_icon-star"></i>' +
							'<i class="d_icon d_icon-star"></i>' +
							'<i class="d_icon d_icon-star"></i>' +
							'<i class="d_icon d_icon-star"></i>' +
						'</div>' +
						'</div>' + 
						'<div class="d-col-2">' +
						'<img class="shop-map__icon" src="'+ element['image'] +'" alt="">' +
						'</div>' +
					'</div>' +
					'<p class="mt-2 mb-1">'+ element['address'] +'</p>' +
					'<span class="shop-map__light-text">12 км</span>' +
					'<p class="shop-map__timing mt-3">Открыто до 20:00</p>' +
					'<a href="#" class="dart-btn dart-btn-primary-mini mt-2">Выбрать</a>' +
				'</div>'
			}, {
				iconLayout: circleLayout,
				// Описываем фигуру активной области "Круг".
				iconShape: {
					type: 'Circle',
					// Круг описывается в виде центра и радиуса
					
					coordinates: [0, 0],
					radius: 20
				}
			});
			mainMap.geoObjects.add(myPlacemark);
			mainMapModal.geoObjects.add(myPlacemark);
		});
	}
	

}

ymaps.ready(stores_map.init); */

//Слайдер на странице поиска
const alldartSwiperSearch = document.querySelectorAll('.dartSwiperSearch');
if(alldartSwiperSearch){
	for (let i = 0; i < alldartSwiperSearch.length; i++) {

       //Свайпер новинки
		var swipertree = new Swiper(alldartSwiperSearch[i], {
			slidesPerView: 5,
			spaceBetween: 8,
			navigation: {
				nextEl: ".swiper-search-next-"+ (i+1),
				prevEl: ".swiper-search-prev-"+ (i+1),
			},
			breakpoints: {
				0: {
					slidesPerView: 1.5,
				},
				300: {
					slidesPerView: 1.5,
				},
				410: {
					slidesPerView: 2.3,
				},
				600: {
					slidesPerView: 3,
				},
				800: {
					slidesPerView: 4,
				},
				1000: {
					slidesPerView: 5,
				},
				1201: {
					slidesPerView: 4,
				},
				1350: {
					slidesPerView: 4.5,
				},
				1450: {
					slidesPerView: 5,
				},
				1700: {
					slidesPerView: 6,
				},
				1780: {
					slidesPerView: 7,
				},
				1901: {
					slidesPerView: 5,
				}
			}
		});
    }
}

// Слайдер сравнения

var swiperContrast = new Swiper(".dartSwiperContrast", {
	slidesPerView: 4,
	watchSlidesProgress: true,
	spaceBetween: 8,
	navigation: {
		nextEl: ".dart-contast-next",
		prevEl: ".dart-contast-prev",
	},
	breakpoints: {
		0: {
			slidesPerView: 2,
		},
		500: {
			slidesPerView: 3,
		},
		800: {
			slidesPerView: 4,
		},
		1201: {
			slidesPerView: 3,
		},
		1400: {
			slidesPerView: 4,
		}
	}
});

//Открытие менюшки

const menu_toggler = document.querySelector('.nav-dart-menu');
const sidebar = document.querySelector('.sidebar');
const body = document.querySelector('body');

if(menu_toggler && sidebar){
	menu_toggler.addEventListener('click', () => {
		sidebar.classList.toggle('show');
		body.style.overflow = "hidden"
		
	})
}

//Закрытие менюшки

// function closeSidebar(){
	if(sidebar){
		sidebar.addEventListener('click', () => {
			sidebar.classList.remove('show');
			body.style.overflow = "auto"
		})
		
	}
// }

// Выбор По алфавиту/По региону в выборе города

const toggleFilterCity = document.querySelectorAll('.toggleFilterCity');

if(toggleFilterCity){
	for(let i = 0; i < toggleFilterCity.length; i++){
		toggleFilterCity[i].addEventListener('click', () => {

			//Получаем индекс нажатой кнопки
			let cheackFilter = document.getElementsByName("city_filter_id");

			if(cheackFilter[0].checked){
				document.getElementById("choice_city").classList.add("filter_city")
			}else{
				document.getElementById("choice_city").classList.remove("filter_city")
			}
		})
	}
}

//Карта desctop

// const showCardButton = document.querySelectorAll('.showMap');
// const changeshop = document.querySelector('.changeshop')

// if(showCardButton && changeshop){
// 	for(let i = 0; i < showCardButton.length; i++){
// 		showCardButton[i].addEventListener('click', () => {
// 			changeshop.classList.toggle('show');
// 			body.style.overflow = "hidden"
// 		})
// 	}
// }

// const closeChangeShop = document.querySelectorAll('.closeChangeShop');

// if(closeChangeShop){
// 	for(let i = 0; i < closeChangeShop.length; i++){
// 		closeChangeShop[i].addEventListener('click', () => {

// 			changeshop.classList.remove('show');
// 			body.style.overflow = "auto"
// 		})
// 	}
// }

// const changeshopToggler = document.querySelectorAll('.changeshop-toggler');

// if(changeshopToggler){
// 	for (let i = 0; i < changeshopToggler.length; i++) {
// 		changeshopToggler[i].addEventListener('click', () => {
// 			changeshop.classList.toggle('showList')
// 		})
// 	}
	
// }

// //changeshop переход в отзывам
// const btnToggleRating = document.querySelectorAll('.btnToggleRating')

// if(btnToggleRating){
// 	for(let i = 0; i < btnToggleRating.length; i++){
// 		btnToggleRating[i].addEventListener('click', () => {
// 			changeshop.classList.toggle('showList')
// 		})
// 	}
// }

const changeshop = document.querySelector('.changeshop') //Модалка
if(changeshop){
	const btnActiveChangeshopOn = document.querySelectorAll('.btnActiveChangeshopOn'); //Открывает модалку
	const btnActiveChangeshopOff = document.querySelectorAll('.btnActiveChangeshopOff'); //Закрывает модалку
	const btnMapOn = document.querySelectorAll('.btnMapOn'); //Открываем карту на мобильных устройствах
	const btnListOn = document.querySelectorAll('.btnListOn'); //Открываем список на мобильных устройствах
	const btnRatingOn = document.querySelectorAll('.btnRatingOn') //Открываем рейтинг
	const btnRatingOff = document.querySelectorAll('.btnRatingOff') //Закрываем рейтинг

	function clearAllChangeshop(){
		changeshop.classList.remove('showList')
		changeshop.classList.remove('showRating')
	}

	if(btnActiveChangeshopOn){
		for(let i = 0; i < btnActiveChangeshopOn.length; i++){
			btnActiveChangeshopOn[i].addEventListener('click', () => {
				clearAllChangeshop()
				changeshop.classList.add('show')
				body.style.overflow = "hidden"
			})
		}
	}

	if(btnActiveChangeshopOff){
		for(let i = 0; i < btnActiveChangeshopOff.length; i++){
			btnActiveChangeshopOff[i].addEventListener('click', () => {
				changeshop.classList.remove('show')
				body.style.overflow = "auto"
			})
		}
	}

	
	if(btnListOn){
		for(let i = 0; i < btnListOn.length; i++) {
			btnListOn[i].addEventListener('click', () => {
				clearAllChangeshop()
				changeshop.classList.add('showList')
			})
		}
	}

	if(btnRatingOn){
		for(let i = 0; i < btnRatingOn.length; i++) {
			btnRatingOn[i].addEventListener('click', () => {
				clearAllChangeshop()
				changeshop.classList.add('showRating')
			})
		}
	}


	if(btnRatingOn){
		for(let i = 0; i < btnRatingOn.length; i++) {
			btnRatingOn[i].addEventListener('click', () => {
				clearAllChangeshop()
				changeshop.classList.add('showRating')
			})
		}
	}

	if(btnRatingOff){
		for(let i = 0; i < btnRatingOff.length; i++) {
			btnRatingOff[i].addEventListener('click', () => {
				changeshop.classList.remove('showRating')
				changeshop.classList.add('showList')
			})
		}
	}
}

//Ползунок

// const polzunok = document.querySelectorAll('.polzunok-slider');
// if(polzunok){
// 	for(let i = 0; i < polzunok.length; i++){
// 		polzunok[i].slider({
// 			min: 0,
// 			max: 100000,
// 			values: [0, 100000],
// 			range: true,
// 			animate: "fast",
// 			slide : function(event, ui) {    
// 				$(".polzunok-input-5-left").val(ui.values[ 0 ]);   
// 				$(".polzunok-input-5-right").val(ui.values[ 1 ]);  
// 			}    
// 		});
// 		$(".polzunok-input-5-left").val($(".polzunok-5").slider("values", 0));
// 		$(".polzunok-input-5-right").val($(".polzunok-5").slider("values", 1));
// 		$(".polzunok-container-5 input").change(function() {
// 			var input_left = $(".polzunok-input-5-left").val().replace(/[^0-9]/g, ''),    
// 			opt_left = $(".polzunok-5").slider("option", "min"),
// 			where_right = $(".polzunok-5").slider("values", 1),
// 			input_right = $(".polzunok-input-5-right").val().replace(/[^0-9]/g, ''),    
// 			opt_right = $(".polzunok-5").slider("option", "max"),
// 			where_left = $(".polzunok-5").slider("values", 0); 
// 			if (input_left > where_right) { 
// 				input_left = where_right; 
// 			}
// 			if (input_left < opt_left) {
// 				input_left = opt_left; 
// 			}
// 			if (input_left == "") {
// 			input_left = 0;    
// 			}        
// 			if (input_right < where_left) { 
// 				input_right = where_left; 
// 			}
// 			if (input_right > opt_right) {
// 				input_right = opt_right; 
// 			}
// 			if (input_right == "") {
// 			input_right = 0;    
// 			}    
// 			$(".polzunok-input-5-left").val(input_left); 
// 			$(".polzunok-input-5-right").val(input_right); 
// 			if (input_left != where_left) {
// 				$(".polzunok-5").slider("values", 0, input_left);
// 			}
// 			if (input_right != where_right) {
// 				$(".polzunok-5").slider("values", 1, input_right);
// 			}
// 		});
// 	}
// }


/* $(".sliderui-min input").val($(".sliderui .polzunok-5").slider("values", 0));
$(".sliderui-max input").val($(".sliderui .polzunok-5").slider("values", 1));
$(".sliderui input").change(function() {
    var input_left = $(".sliderui-min input").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".sliderui .polzunok-5").slider("option", "min"),
    where_right = $(".sliderui .polzunok-5").slider("values", 1),
    input_right = $(".sliderui-max input").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".sliderui .polzunok-5").slider("option", "max"),
    where_left = $(".sliderui .polzunok-5").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
		input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $(".sliderui-min input").val(input_left); 
    $(".sliderui-max input").val(input_right); 
    if (input_left != where_left) {
        $(".sliderui .polzunok-5").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".sliderui .polzunok-5").slider("values", 1, input_right);
    }
}); */

//Модальное окно фильтров
const showModalFiltrs = document.querySelectorAll('.showModalFiltrs');
const allFiltrsModal = document.querySelector('.allFiltrsModal');
let isModalFiltrs = false;

if(showModalFiltrs && allFiltrsModal){
	for(let i = 0; i < showModalFiltrs.length; i++){
		showModalFiltrs[i].addEventListener('click', () => {
			if(isModalFiltrs){
				allFiltrsModal.classList.remove('show')
				body.style.overflow = "auto"
				isModalFiltrs = false
			}else{
				allFiltrsModal.classList.add('show')
				body.style.overflow = "hidden"
				isModalFiltrs = true
			}	
		})
	}
}

//Фильтры раскрытие пунктов
const widget_filter = document.querySelectorAll('.widget-filter__title');
if(widget_filter){
    for (let i = 0; i < widget_filter.length; i++) {
        widget_filter[i].addEventListener("click", function() {
            widget_filter[i].parentElement.classList.toggle("active");

			const widgetFiltr = widget_filter[i].parentElement.querySelector('.widget-content');

			if (widgetFiltr.style.maxHeight) {
				widgetFiltr.style.maxHeight = null;
			} else {
				widgetFiltr.style.maxHeight = widgetFiltr.scrollHeight + "px";
			}
        });

    }
}

// Модальное окно поиска

const headerSearchToggle = document.querySelectorAll('.headerSearchToggle');
const headerSearch = document.querySelector('.dart-header__search');
const headerSearchAdd = document.querySelector('.dart-header__search input')

if(headerSearchToggle){
	for(let i = 0; i < headerSearchToggle.length; i++){
		headerSearchToggle[i].addEventListener('click', () => {
			headerSearch.classList.toggle('show');
			document.querySelector('.searchModal__content').classList.remove('show')
			body.style.overflow = "auto"
		})
	}
}

if(headerSearchAdd){
	headerSearchAdd.addEventListener('click', () => {
		headerSearch.classList.add('show');
		body.style.overflow = "hidden"
	})

	// Временно!
	headerSearchAdd.addEventListener('input', () => {
		if(headerSearchAdd.value.length > 4){
			document.querySelector('.searchModal__content').classList.add('show')
		}else{
			document.querySelector('.searchModal__content').classList.remove('show')
		}
	})
}

//Комментарии показать/скрыть ответ
const answerChangeShow = document.querySelectorAll('.answerChangeShow');
if(answerChangeShow){
    for (let i = 0; i < answerChangeShow.length; i++) {
        answerChangeShow[i].addEventListener("click", function() {
            answerChangeShow[i].parentElement.classList.toggle("show");
			answerChangeShow[i].parentElement.classList.remove("reply");

			const AnswerReplySend = answerChangeShow[i].parentElement.querySelector('.reply-send');
			if(AnswerReplySend){
				AnswerReplySend.style.maxHeight = null;
			}

			const AnswerShow = answerChangeShow[i].parentElement.querySelector('.changeShopRating__answer-info');
			if (AnswerShow.style.maxHeight) {
				AnswerShow.style.maxHeight = null;
			} else {
				AnswerShow.style.maxHeight = AnswerShow.scrollHeight + "px";
			}
        });
    }
}


//Свои модалки

const dartModal = document.querySelectorAll('.dart-modal');
const dartModalTogglers = document.querySelectorAll('.dart-modal-toggler');

if(dartModalTogglers){
	for(let i = 0; i < dartModalTogglers.length; i++){
		const dartModallAttribute = dartModalTogglers[i].getAttribute('data-dart-modal');
		if(dartModallAttribute && dartModal){
			dartModalTogglers[i].addEventListener('click', () => {
				const getModal = document.getElementById(dartModallAttribute);
				if(getModal){
					if(!getModal.classList.contains('show')){
						getModal.classList.add('show')
						body.style.overflow = "hidden"
					}
				}
			})
		}
	}
}

function closeModalDmRating(){
	if(document.getElementById("dm-rating")){
		document.getElementById("dm-rating").classList.remove('show');
	}
}

//Закрытие модалок

const closeDartModal = document.querySelectorAll('.dart-modal');
if(closeDartModal){
	for(let i = 0; i<closeDartModal.length; i++){
		closeDartModal[i].addEventListener('click', () => {
			closeDartModal[i].classList.remove('show')
			body.style.overflow = "auto"
		})
	}
}

const closeDartModalBtn = document.querySelectorAll('.dart-modal-close');
if(closeDartModalBtn){
    for (let i = 0; i < closeDartModalBtn.length; i++) {
        closeDartModalBtn[i].addEventListener("click", function() {
            closeDartModalBtn[i].parentElement.parentElement.classList.remove("show");
			body.style.overflow = "auto"
        });
    }
}


/* if(dartModalTogglers){
	for (let i = 0; i < dartModalTogglers.length; i++) {
        dartModalTogglers[i].addEventListener("click", function() {
            dartModalTogglers[i].closest('.dart-modal').classList.remove("show");
        });
    }
} */

//Каталог в шапке

const dartHeaderCatalogToggler = document.querySelectorAll('.dartHeaderCatalogToggler');
const dartHeaderCatalog = document.querySelector('.dart-header__catalog')

if(dartHeaderCatalogToggler && dartHeaderCatalog){
	for(let i = 0; i < dartHeaderCatalogToggler.length; i++){
		dartHeaderCatalogToggler[i].addEventListener('click', () => {
			dartHeaderCatalog.classList.toggle('show')
		})
	}
}

//Фейковые чекбоксы

const fake = document.querySelectorAll('.fake');

if(fake){
	for(let i = 0; i < fake.length; i++){
		fake[i].addEventListener('click', () => {
			fake[i].classList.toggle('active')
		})
	}
}

//Промокод

const promocode = document.querySelector('input[name="promocode"]');
const promocodeContainer = document.querySelector('.dart-order__promo')
const savePromo = document.querySelector('.savePromo'); // Применить / Удалить промокод
let isPromo = false;

if(promocode){
	promocode.addEventListener('input', () => {
		if(promocode.value.length > 0){
			promocodeContainer.classList.add('active');
		}else{
			promocodeContainer.classList.remove('active');
		}
	})
}

if(savePromo){
	savePromo.addEventListener('click', () => {
		if(!isPromo){
			promocodeContainer.classList.add('apply');
			savePromo.innerHTML = "Удалить"
			promocode.disabled = true;
			isPromo = true;
		}else{
			promocodeContainer.classList.remove('apply')
			savePromo.innerHTML = "Применить"
			promocodeContainer.classList.remove('active');
			isPromo = false;
			promocode.disabled = false;
			promocode.value = ""
		}
	})
}

//Методы доставки

const deliveryMethods = document.querySelectorAll('input[name=delivery-method]');
const deliveryInputsContainer = document.querySelector('.dart-order__inputs-container')

function setNullDelivery(){
	deliveryInputsContainer.classList.remove('express')
	deliveryInputsContainer.classList.remove('courier')
	deliveryInputsContainer.classList.remove('receivingPoint')
	deliveryInputsContainer.classList.remove('store')
}

if(deliveryMethods){
	for(let i = 0; i < deliveryMethods.length; i++){
		deliveryMethods[i].addEventListener('change', () => {
			setNullDelivery()
			deliveryInputsContainer.classList.add(deliveryMethods[i].value)
		})
	}
}


//Модалка "Выберите пункт выдачи"

/* const changePointToggleModal = document.querySelectorAll('.changePointToggleModal');
const changeAddresPoint = document.querySelector('.changeAddresPoint');

if(changePointToggleModal){
	for(let i = 0; i<changePointToggleModal.length; i++){
		changePointToggleModal[i].addEventListener('click', () => {
			if(changeAddresPoint.classList.contains('show')){
				changeAddresPoint.classList.remove('show')
				body.style.overflow = "auto"
			}else{
				changeAddresPoint.classList.add('show')
				body.style.overflow = "hidden"
			}
		})
	}
} */

//Изменить кнопочка на модалке мои адреса
const changeAddresBtn = document.querySelectorAll('.change-addres-btn');

if(changeAddresBtn){
	document.querySelector('.dart-modal__content').addEventListener('click', () => {
		for(let i = 0; i<changeAddresBtn.length; i++){
			changeAddresBtn[i].classList.remove('show')
		}
	})

	for(let i = 0; i<changeAddresBtn.length; i++){
		changeAddresBtn[i].addEventListener('click', () => {
			changeAddresBtn[i].classList.toggle('show')
		})
	}
}

const kenostDropzone = document.querySelectorAll('.kenost-dropzone');
// DREPZONE
if(kenostDropzone){
	for(let i = 0; i < kenostDropzone.length; i++){
		//kenostDropzone[i].id
		
		

		let myDropzone = new Dropzone(`#${kenostDropzone[i].id}`,
			{
				maxFiles: 8,
				autoProcessQueue: true,
				parallelUploads: 1,
				//   uploadMultiple: true,
				paramName: "file", // имя параметра, который будет использоваться сервером для получения файла
				url: "/files/upload-file.php", // URL-адрес, на который отправляются данные
				method: "post", // метод отправки данных (например, post или get)
				maxFilesize: 20, // максимальный размер файла в мегабайтах
				addRemoveLinks: true, // добавление ссылок для удаления загруженных файлов
				acceptedFiles: "image/*,.mp4",
				init: function(){
					var myDropzone = this;
					this.on("success", function(file, response) {
						$(file.previewElement).append( $('<input type="hidden" name="media-ids[]" id="media-ids[]" class="media-ids dz-media-id" value="' + response +'">') );
					});
				}
			}
		);
}}

function convert(str) {
    var arrayOfStrings = str.split("-");

	for(let i = 0; i < arrayOfStrings.length; i++){
		arrayOfStrings[i] = arrayOfStrings[i].charAt(0).toUpperCase() + arrayOfStrings[i].slice(1)
	}

	return arrayOfStrings.join('')
}




//Иконка пользователя в навигации (Открытие / Закрытие менюшки)
const dartHeaderUserMenu = document.querySelector('.dart-header__user-ava')
const dartHeaderUserMenuToggler = document.querySelectorAll('.dartHeaderUserMenuToggler');
const dartHeaderUserMenuClose = document.querySelector('.dartHeaderUserMenuClose');

//Закрытие при клике на пустую область
if(dartHeaderUserMenuClose){
	dartHeaderUserMenuClose.addEventListener('click', () => {
		dartHeaderUserMenu.classList.remove('show');
	})
}

//Открытие
if(dartHeaderUserMenuToggler){
	for(let i = 0; i < dartHeaderUserMenuToggler.length; i++){
		dartHeaderUserMenuToggler[i].addEventListener('click', () => {
			dartHeaderUserMenu.classList.toggle('show');
		})
	}
}

//Корзина в навигации

const dartBasket = document.querySelector('.dart-header__basket');
const dartBasketToggler = document.querySelectorAll('.dartBasketToggler')
const dartBasketClose = document.querySelector('.dartBasketClose')

//Открытие
if(dartBasketToggler){
	for(let i = 0; i < dartBasketToggler.length; i++){
		dartBasketToggler[i].addEventListener('click', () => {
			dartBasket.classList.toggle('show');
		})
	}
}

//Закрытие при клике на пустую область
if(dartBasketClose){
	dartBasketClose.addEventListener('click', () => {
		dartBasket.classList.remove('show');
	})
}

//Мои отзывы (кнопка действия)

const dartMyFeadbacksClose = document.querySelectorAll('.dartMyFeadbacksClose');
const dartMyFeadbacks = document.querySelectorAll('.profile-my-comment__action');

if(dartMyFeadbacks){
	for(let i = 0; i < dartMyFeadbacks.length; i++){
		dartMyFeadbacks[i].addEventListener('click', () => {
			dartMyFeadbacks[i].classList.toggle('show');
		})
	}
}

if(dartMyFeadbacksClose){
	for(let i = 0; i < dartMyFeadbacksClose.length; i++){
		dartMyFeadbacksClose[i].addEventListener('click', () => {
			for(let j = 0; j < dartMyFeadbacks.length; j++){
				dartMyFeadbacks[j].classList.remove('show');
			}
		})
	}
}

// Кнопка ответить в профиле

const profileMyCommentReply = document.querySelectorAll('.profile-my-comment__reply');
const replyClose = document.querySelectorAll('.replyClose');

if(replyClose){
	for(let i = 0; i < replyClose.length; i++){
		replyClose[i].addEventListener('click', () => {
			replyClose[i].parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove('reply')
		})
	}
}

if(profileMyCommentReply){
	for(let i = 0; i < profileMyCommentReply.length; i++){
		profileMyCommentReply[i].addEventListener('click', () => {
			profileMyCommentReply[i].parentElement.parentElement.parentElement.classList.add('reply')
		})
	}
}

// Модальное окно Наличие в магазинах (На карточке товара)

const productModalPresenceToggle = document.querySelectorAll('.productModalPresenceToggle');
const productModalPresence = document.querySelector('.productModalPresence');

const productModalPresenceListToggle = document.querySelectorAll('.productModalPresenceListToggle');
const productModalPresenceList = document.querySelector('.productModalPresenceList');

if(productModalPresenceToggle){
	for(let i = 0; i < productModalPresenceToggle.length; i++){
		productModalPresenceToggle[i].addEventListener('click', () => {
			productModalPresenceList.classList.remove('show');
			productModalPresence.classList.toggle('show');
		})
	}
}

if(productModalPresenceListToggle){
	for(let i = 0; i < productModalPresenceListToggle.length; i++){
		productModalPresenceListToggle[i].addEventListener('click', () => {
			productModalPresence.classList.remove('show');
			productModalPresenceList.classList.toggle('show');
		})
	}
}

// Спасибо за заказ

const rightMenuOrderToggleSuccess = document.querySelectorAll('.rightMenuOrderToggleSuccess')
const rightMenuOrderSuccess = document.querySelector('.rightMenuOrderSuccess')

const rightMenuOrderToggleError = document.querySelectorAll('.rightMenuOrderToggleError')
const rightMenuOrderError = document.querySelector('.rightMenuOrderError')

if(rightMenuOrderToggleSuccess){
	for(let i = 0; i < rightMenuOrderToggleSuccess.length; i++){
		rightMenuOrderToggleSuccess[i].addEventListener('click', () => {
			rightMenuOrderSuccess.classList.toggle('show');
		})
	}
}

if(rightMenuOrderToggleError){
	for(let i = 0; i < rightMenuOrderToggleError.length; i++){
		rightMenuOrderToggleError[i].addEventListener('click', () => {
			rightMenuOrderError.classList.toggle('show');
		})
	}
}

// Сравнение товаров (изменение данных)

const swiperSlideVisible = document.querySelectorAll('.swiper-slide-visible')

if(swiperSlideVisible){
	for(let i = 0; i< swiperSlideVisible.length; i++){
		const dataProductId = swiperSlideVisible[i].getAttribute('data-product-id');
		if(dataProductId != null){
			const contrastValue = document.querySelectorAll('.contrast__value[data-product-id="'+dataProductId+'"]');
			for(let j = 0; j<contrastValue.length; j++){
				contrastValue[j].classList.add('active');
			}
		}
	}
}

swiperContrast.on('transitionEnd', (sw) => {

	const contrastValueAll = document.querySelectorAll('.contrast__value');
	if(contrastValueAll){
		for(let i = 0; i<contrastValueAll.length; i++){
			contrastValueAll[i].classList.remove('active')
		}
	}
	
	const swiperSlideVisible = document.querySelectorAll('.swiper-slide-visible')
	if(swiperSlideVisible){
		for(let i = 0; i< swiperSlideVisible.length; i++){
			const dataProductId = swiperSlideVisible[i].getAttribute('data-product-id');
			if(dataProductId != null){
				const contrastValue = document.querySelectorAll('.contrast__value[data-product-id="'+dataProductId+'"]');
				for(let j = 0; j<contrastValue.length; j++){
					contrastValue[j].classList.add('active');
				}
			}
		}
	}
});

// Сравнение товаров (Кнопка только различающиеся)

const contrastToggler = document.getElementById('contrast-toggler');
if(contrastToggler){
	contrastToggler.addEventListener('change', () => {
		if(contrastToggler.checked){
			const contrastDifferent = document.querySelectorAll('.contrast__row.different');

			for(let i = 0; i< contrastDifferent.length; i++){
				contrastDifferent[i].classList.add('hide');
			}
		}else{
			const contrastDifferent = document.querySelectorAll('.contrast__row.different');

			for(let i = 0; i< contrastDifferent.length; i++){
				contrastDifferent[i].classList.remove('hide');
			}
		}
	})
}

//Блок вопрос-ответ

const faqQuest = document.querySelectorAll('.faq__quest');

if(faqQuest){
	for(let i = 0; i < faqQuest.length; i++){
		faqQuest[i].addEventListener('click', function() {
			this.parentElement.classList.toggle('active');

			var panel = this.nextElementSibling;
			if (panel.style.maxHeight) {
				panel.style.maxHeight = null;
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		})
	}
}

//Продукт (характеристики) на мобилке

const propertyMobile = document.querySelector('.property-mobile');
const productProperty = document.querySelector('.product-property');
let isPropertyActive = false;

if(productProperty && propertyMobile){
	propertyMobile.addEventListener('click', () => {

		if (isPropertyActive) {
			productProperty.style.maxHeight = "120px";
			propertyMobile.innerHTML = `Полные характеристики <i class="d_icon d_icon-right-arrow"></i>`
			isPropertyActive = false;
		}else {
			productProperty.style.maxHeight = productProperty.scrollHeight + "px";
			propertyMobile.innerHTML = `Скрыть полные характеристики <i class="d_icon d_icon-right-arrow"></i>`
			isPropertyActive = true;
		}
	})
}


// Забыли пароль?

const passwordForgot = document.querySelector('.dm-login__forgot');
const dmLogin = document.querySelector('.dm-login');
let isFogot = false;

if(passwordForgot){
	passwordForgot.addEventListener('click', () => {
		if(dmLogin){
			if(!isFogot){
				dmLogin.classList.add('forgot')
				dmLogin.querySelector('span.h3').innerText = "Востановить пароль"
				dmLogin.querySelectorAll('.dart-input-text')[1].style.display = 'none'
				passwordForgot.innerText = "Вернуться ко входу"
				dmLogin.querySelector('.dart-btn').innerText = "Востановить"
				isFogot = true;
			}else{
				dmLogin.classList.remove('forgot')
				dmLogin.querySelector('span.h3').innerText = "Добро пожаловать!"
				dmLogin.querySelectorAll('.dart-input-text')[1].style.display = 'block'
				passwordForgot.innerText = "Забыли пароль?"
				dmLogin.querySelector('.dart-btn').innerText = "Войти"
				isFogot = false;
			}
			
		}
	})
}

//Сортировка в товарах

const modalSort = document.querySelectorAll('.modalSortToggle');
const modalSortClose = document.querySelectorAll('.modal-sort__close')

if(modalSort){
	for(let i = 0; i < modalSort.length; i++){
		modalSort[i].addEventListener('click', () => {
			modalSort[i].parentNode.classList.toggle('show');
		})
	}
}

if(modalSortClose){
	for(let i = 0; i < modalSortClose.length; i++){
		modalSortClose[i].addEventListener('click', () => {
			modalSortClose[i].parentNode.classList.remove('show');
		})
	}
}


let isVissible = true;
const contrastSwiper = document.querySelector('.contrastSwiper');

const callback = () => {
	if(contrastSwiper){
		if(isVissible){
			contrastSwiper.classList.remove('sticky')
			isVissible = false;
		}else{
			contrastSwiper.classList.add('sticky')
			isVissible = true;
		}
	}
}

const options = {
  threshold: 0.5 // 1 – полная видимость элемента, 0.5 – половина и т.д.
}
const observer = new IntersectionObserver(callback, options);

const target = document.querySelector('.contrast__nav h3')

if(target){
	observer.observe(target)
}


const mobileBasketToggle = document.querySelectorAll('.mobileBasketToggle')
const mobileBasket = document.querySelector('.mobile-basket')
let isModalBasket = false;

if(mobileBasketToggle && mobileBasket){
	for(let i = 0; i < mobileBasketToggle.length; i++){
		mobileBasketToggle[i].addEventListener('click', () => {
			if(!isModalBasket){
				mobileBasket.classList.add('show')
				body.style.overflow = "hidden"
				isModalBasket = true
			}	
		})
	}
}

document.onclick = function (e) {
	if(isModalBasket){
		let listClass = e.target.classList;
		for(let i = 0; i < listClass.length; i++){
			if(listClass[i] == "mobileBasketToggleClose"){
				mobileBasket.classList.remove('show')
				body.style.overflow = "auto"
				isModalBasket = false
				break;
			}
		}
	}
};

//Модальное окно каталога
const showModalCatalog = document.querySelectorAll('.showModalCatalog');
const CatalogModal = document.querySelector('.CatalogModal');
let isModalCatalog = false;

if(showModalCatalog && CatalogModal){
	for(let i = 0; i < showModalCatalog.length; i++){
		showModalCatalog[i].addEventListener('click', () => {
			if(isModalCatalog){
				CatalogModal.classList.remove('show')
				body.style.overflow = "auto"
				isModalCatalog = false
			}else{
				CatalogModal.classList.add('show')
				body.style.overflow = "hidden"
				isModalCatalog = true
			}	
		})
	}
}


const deleteList = document.querySelectorAll('.deleteList'); // извлекаем элемент формы

if(deleteList){
	for(let i = 0; i<deleteList.length; i++){
		deleteList[i].addEventListener('submit', (e) => {
			e.preventDefault();
			const formData = new FormData(deleteList[i]); // создаём объект FormData, передаём в него элемент формы
			// теперь можно извлечь данные
			const list = formData.get('list');

			$.ajax({
				type: "POST",
				url: "/",
				dataType: 'json',
				data: {
					cmp_action: 'remove-list',
					list: list
				},
				success:  function(data) {
					document.location.href = window.location.href
				}
			});
		})
	}
}

const deleteAllList = document.querySelector('.deleteAllList');
if(deleteAllList){
	deleteAllList.addEventListener('click', (e) => {
		e.preventDefault();
		$.ajax({
			type: "POST",
			url: "/",
			dataType: 'json',
			data: {
				cmp_action: 'remove-all-list',
			},
			success:  function(data) {
				location.reload();
			}
		});
	})
}


const reloadJs = document.querySelectorAll('.reload-js')

if(reloadJs){
	for(let i = 0; i<reloadJs.length; i++){
		reloadJs[i].addEventListener('click', (e) => {
			setTimeout(() => location.reload(), 500);
		})
	}
}


// фильтры



const toggleAllFilters = document.querySelectorAll('.search-filtrs_all-filter');

if(toggleAllFilters){
	for(let i = 0; i<toggleAllFilters.length; i++){
		toggleAllFilters[i].addEventListener('click', () => {
			toggleAllFilters[i].parentElement.classList.toggle('show');
			if(toggleAllFilters[i].parentElement.classList.contains('show')){
				toggleAllFilters[i].innerText = "Свернуть"
			}else{
				toggleAllFilters[i].innerText = "Показать все"
				
			}

		})
	}
}

const allShop = document.querySelector('.all-shops');
const allShopToggle = document.querySelectorAll('.all-shop__togle');

if(allShop && allShopToggle){
	for(let i = 0; i < allShopToggle.length; i++){
		allShopToggle[i].addEventListener('click', () => {
			allShop.classList.toggle("show")
		})
	}
}



const linkGenerate = document.querySelectorAll('.js-link-generate-products-id');
const productsIdInput = document.getElementById('id-products-return');
const hrefProductId = document.getElementById('href-product-id')
let productsId = [];


if(linkGenerate && productsIdInput && hrefProductId){
	for(let i = 0; i < linkGenerate.length; i++){
		linkGenerate[i].addEventListener('change', () => {
			if(linkGenerate[i].checked){
				productsId.push(linkGenerate[i].value)
			}else{
				productsId = productsId.filter((number) => number !== linkGenerate[i].value);
			}

			let ids = ""

			for(let j = 0; j < productsId.length; j++){
				if(j != 0){
					ids += ","+productsId[j]
				}else{
					ids += productsId[j]
				}
			}

			hrefProductId.href = productsIdInput.value + ids
		})
	}
}

const mstReturnProducts = document.getElementById("mst-return-products");

if(mstReturnProducts){
	mstReturnProducts.addEventListener('click', () => {
		
		let data = [];
		
		let params = (new URL(document.location)).searchParams; 
		let ids = params.get("products")
		
		let isErr = false;
		
		if(params){
			let idsArr = ids.split(",");
			
			for(let i = 0; i < idsArr.length; i++){
				let productInfo = {}
				//Причина возврата
				const reason = document.querySelectorAll(`input[name="reason-${idsArr[i]}"]`)
				for (const r of reason) {
				  if (r.checked) {
					productInfo['reason'] = r.value
				  }
				}
				
				if(!productInfo['reason']){
					let errReason = document.querySelector(`.kenost-err-reason-${idsArr[i]}`);
					if(errReason){
						errReason.innerText = "Пожалуйста, укажите причину возврата";
						isErr = true;
					}else{
						errReason.innerText = "";
					}
					//return alert("Пожалуйста, укажите причину возврата");
				}
				
				//Требование
				const requirement = document.querySelectorAll(`input[name="requirement-${idsArr[i]}"]`)
				for (const r of requirement) {
				  if (r.checked) {
					productInfo['requirement'] = r.value
				  }
				}
				
				if(!productInfo['requirement']){
					let errRequirement = document.querySelector(`.kenost-err-requirement-${idsArr[i]}`);
					if(errRequirement){
						errRequirement.innerText = "Пожалуйста, укажите требование"
						isErr = true;
					}else{
						errRequirement.innerText = "";
					}
					//return alert("Пожалуйста, укажите требование");
				}
				
				//Комментарии
				const comment = document.querySelector(`textarea[name="comment-${idsArr[i]}"]`);
				productInfo['comment'] = comment.value
				
				//id товара
				
				
				const idProductEl = document.querySelector(`.id-product-return-${idsArr[i]}`);
				if(idProductEl){
					const idProduct = idProductEl.dataset.idProduct;
					productInfo['id_product'] = idProduct;
				}
				
				
				const files = document.querySelectorAll(`.kenost-dropzone-${idsArr[i]} input.media-ids`);
				
				if(files.length == 0){
					let errFile = document.querySelector(`.kenost-err-file-${idsArr[i]}`);
					if(errFile){
						errFile.innerText = "Пожалуйста, прикрепите хотя-бы 1 фото или видео"
						isErr = true;
					}else{
						errFile.innerText = "";
					}
					//return alert("Пожалуйста, прикрепите хотя-бы 1 фото или видео");
				}
				
				let file = []
				
				for(let j = 0; j < files.length; j++){
					file.push(files[j].value);
				}
				
				productInfo['files'] = file;
				
				
				data.push(productInfo)
			}
		}
	
		
		const full_name = document.querySelector('input[name="full_name"]')
		const bank_name = document.querySelector('input[name="bank_name"]')
		const bank_bik = document.querySelector('input[name="bank_bik"]')
		const corr_account = document.querySelector('input[name="corr_account"]')
		const pay_account = document.querySelector('input[name="pay_account"]')
		const order_id = document.querySelector('input[name="order_id"]')
		
		if(full_name.value == ""){
			document.querySelector('.kenost-err-full_name').innerText = "Пожалуйста, заполните ФИО"
			isErr = true;
		}else{
			document.querySelector('.kenost-err-full_name').innerText = ""
		}
		
		if(bank_name.value == ""){
			document.querySelector('.kenost-err-bank_name').innerText = "Пожалуйста, заполните наименование банка"
			isErr = true;
		}else{
			document.querySelector('.kenost-err-bank_name').innerText = ""
		}
		
		if(bank_bik.value == ""){
			document.querySelector('.kenost-err-bank_bik').innerText = "Пожалуйста, заполните БИК банка"
			isErr = true;
		}else{
			document.querySelector('.kenost-err-bank_bik').innerText = ""
		}
		
		if(corr_account.value == ""){
			document.querySelector('.kenost-err-corr_account').innerText = "Пожалуйста, заполните корреспондентский счет"
			isErr = true;
		}else{
			document.querySelector('.kenost-err-corr_account').innerText = ""
		}
		
		if(pay_account.value == ""){
			document.querySelector('.kenost-err-pay_account').innerText = "Пожалуйста, заполните расчетный счет"
			isErr = true;
		}else{
			document.querySelector('.kenost-err-pay_account').innerText = ""
		}
		
		
		
		if(isErr){
			return null
		}
		
		let info = {
			full_name: full_name.value,
			bank_name: bank_name.value,
			bank_bik: bank_bik.value,
			corr_account: corr_account.value,
			pay_account: pay_account.value,
			order_id: order_id.value
		}
		
		
		$.ajax({
			url: shoplogisticConfig['actionUrl'],         /* Куда отправить запрос */
			method: 'post',             /* Метод запроса (post или get) */
			dataType: 'json',          /* Тип данных в ответе (xml, json, script, html). */
			data: {sl_action: 'product/return', data: data, info: info},     /* Данные передаваемые в массиве */
			success: function(data){   /* функция которая будет выполнена после успешного запроса.  */
				if(data.success){
					window.location.href = "https://mst.tools/profile/vozvrat-oformlen.html"
				}
			}
		});
	})
}

const all_bonuses = document.getElementById('all-bonuses');
const all_bonuses_btn = document.querySelector('.bonus-history-all')
const profile_bonuses_container = document.querySelector('.profile-bonus-container-info__months')

if(all_bonuses && profile_bonuses_container){
	all_bonuses.addEventListener('click', () => {
		profile_bonuses_container.classList.add('all')
		all_bonuses_btn.classList.add('hidden')
	})
}

const all_history = document.querySelectorAll('.profile-bonus-card');
const bonus_filter_btn = document.querySelectorAll('input[type="radio"][name="bonus-filter"]')
const profile_bonus_container = document.querySelectorAll('.profile-bonus-container-info__month');

if(all_history && bonus_filter_btn && profile_bonus_container){
	bonus_filter_btn.forEach(radio => {
		radio.addEventListener('change', () => {
			if(radio.value == '1'){
				for(let i = 0; i < all_history.length; i++){
					all_history[i].classList.remove('hidden');
				}
			}else if(radio.value == '2'){
				for(let i = 0; i < all_history.length; i++){
					all_history[i].classList.add('hidden');

					if(all_history[i].classList.contains('plus')){
						all_history[i].classList.remove('hidden');
					}
				}
			}else if(radio.value == '3'){
				for(let i = 0; i < all_history.length; i++){
					all_history[i].classList.add('hidden');
					if(all_history[i].classList.contains('minus')){
						all_history[i].classList.remove('hidden');
					}
				}
			}

			for(let i = 0; i < profile_bonus_container.length; i++){
				const elems = profile_bonus_container[i].querySelectorAll('.profile-bonus-card');
				isHiddenAll = true;
				if(elems){
					for(let j = 0; j < elems.length; j++){
						if(!elems[j].classList.contains('hidden')){
							isHiddenAll = false;
						}
					}
				}

				if(isHiddenAll){
					profile_bonus_container[i].classList.add('hidden')
				}else{
					profile_bonus_container[i].classList.remove('hidden')
				}
			}
		});
	});
}

const debitingBonus = document.getElementById('debiting-bonus');

if(debitingBonus){
	debitingBonus.addEventListener('change', () => {
		debitingBonus.value = debitingBonus.checked
	})
}

// if (el.style.maxHeight) {
// 	el.style.maxHeight = null;
// } else {
// 	el.style.maxHeight =  el.scrollHeight + "px";
// }

const blockTextInfo = document.querySelectorAll('.block-text-info');
if(blockTextInfo){
	for(let i = 0; i < blockTextInfo.length; i++){
		if(blockTextInfo[i].scrollHeight > 333){
			blockTextInfo[i].classList.add("block-text-info__button");
		}
	}
}

const blockTextInfoMore = document.querySelectorAll('.block-text-info__more');

if(blockTextInfoMore){
	for(let i = 0; i < blockTextInfoMore.length; i++){
		blockTextInfoMore[i].addEventListener('click', () => {
			if (blockTextInfoMore[i].parentNode.parentNode.style.maxHeight != '333px') {
				blockTextInfoMore[i].parentNode.parentNode.style.maxHeight = '333px';
				blockTextInfoMore[i].innerText = "Читать далее"
				blockTextInfoMore[i].parentNode.parentNode.classList.remove('show')
			} else {
				blockTextInfoMore[i].parentNode.parentNode.style.maxHeight =  blockTextInfoMore[i].parentNode.parentNode.scrollHeight + 60 + "px";
				blockTextInfoMore[i].innerText = "Скрыть"
				blockTextInfoMore[i].parentNode.parentNode.classList.add('show')
			}
		})
	}
}