$(document).ready(function(){
	$('#fullpage').fullpage({
		autoScrolling: true,
     	scrollHorizontally: true,
		sectionsColor: ['#c5e3f6', '#acdbdf', '#9692af', '#69779b'],
		scrollingSpeed: 1000,
		lazyLoad: true,
		navigation: true,
		navigationPosition: 'right',
		responsiveHeight: 400,
	})

	// $('#fullpage').fullpage({
	// 	//Navegación
	// 	menu: '#menu',
	// 	lockAnchors: false,
	// 	anchors:['firstPage', 'secondPage'],
	// 	navigation: false,
	// 	navigationPosition: 'right',
	// 	navigationTooltips: ['firstSlide', 'secondSlide'],
	// 	showActiveTooltip: false,
	// 	slidesNavigation: true,
	// 	slidesNavPosition: 'bottom',

	// 	//Desplazamiento
	// 	css3: true,
	// 	scrollingSpeed: 900,
	// 	autoScrolling: true,
	// 	fitToSection: true,
	// 	fitToSectionDelay: 1000,
	// 	scrollBar: false,
	// 	easing: 'easeInOutCubic',
	// 	easingcss3: 'ease',
	// 	loopBottom: false,
	// 	loopTop: false,
	// 	loopHorizontal: true,
	// 	continuousVertical: false,
	// 	continuousHorizontal: false,
	// 	scrollHorizontally: false,
	// 	interlockedSlides: false,
	// 	dragAndMove: false,
	// 	offsetSections: false,
	// 	resetSliders: false,
	// 	fadingEffect: false,
	// 	normalScrollElements: '#element1, .element2',
	// 	scrollOverflow: false,
	// 	scrollOverflowReset: false,
	// 	scrollOverflowOptions: null,
	// 	touchSensitivity: 15,
	// 	bigSectionsDestination: null,

	// 	//Accesibilidad
	// 	keyboardScrolling: true,
	// 	animateAnchor: true,
	// 	recordHistory: true,

	// 	//Diseno
	// 	controlArrows: true,
	// 	verticalCentered: true,
	// 	sectionsColor : ['#ccc', '#fff'],
	// 	paddingTop: '3em',
	// 	paddingBottom: '10px',
	// 	fixedElements: '#header, .footer',
	// 	responsiveWidth: 0,
	// 	responsiveHeight: 0,
	// 	responsiveSlides: false,
	// 	parallax: false,
	// 	parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
	// 	cards: false,
	// 	cardsOptions: {perspective:ç 100, fadeContent: true, fadeBackground: true},

	// 	//Selectores personalizados
	// 	sectionSelector: '.section',
	// 	slideSelector: '.slide',

	// 	//Eventos
	// 	onLeave: function(origin, destination, direction){},
	// 	afterLoad: function(origin, destination, direction){},
	// 	afterRender: function(){},
	// 	afterResize: function(width, height){},
	// 	afterReBuild: function(){},
	// 	afterResponsive: function(isResponsive){},
	// 	afterSlideLoad: function(section, origin, destination, direction){},
	// 	onSlideLeave: function(section, origin, destination, direction){}
	// })
})