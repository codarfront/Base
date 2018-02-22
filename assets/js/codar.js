/*
	## Funções construtoras
*/
// Calcula a largura de um elemento.
function width (width) {return width.innerWidth || width.clientWidth || document.documentElement.clientWidth;}
// Calcula a altura de um elemento.
function height (height) {return height.innerHeight || height.clientHeight || document.documentElement.clientHeight;}
// Pega a distância do topo ao fazer scroll.
function scrollTopPosition (scrollTopPosition) {return scrollTopPosition.scrollTop || document.documentElement.scrollTop;}
// Pega a distância de um elemento para o topo.
function distTop (distTop) {return distTop.offsetTop;}
// Pega elemento
function elObj (elObj) {return document.querySelector(elObj);}
// Pega vários elementoss
function elObjAll (elObjAll) {return document.querySelectorAll(elObjAll);}	
// Função para limitar o tamanho do container.
// Para limitar basta adiciona no elemento data-limit="VALOR";
(function limitContentCalc (){
	let allTag, dataLimit, widthBody;

	allTag 		= document.querySelectorAll("div, section, article, main, header, footer, aside, span, nav");
	widthBody 	= width(document.body || document.documentElement);

	for(var i = 0; i < allTag.length; i++){
		dataLimit 	= allTag[i].getAttribute("data-limit");
		if(dataLimit) {
			(widthBody <= dataLimit) ? (
				allTag[i].style.maxWidth = "100%",  
				allTag[i].style.padding = "0 1.5rem"
			) : (
				allTag[i].style.maxWidth = dataLimit + "px",
				allTag[i].style.padding = "0",
				allTag[i].style.width = "100vw",
				allTag[i].style.margin = "0 auto"				
			)			
			window.onresize = function () {	
				widthBody = width(document.body || document.documentElement);
				for(var i = 0; i < allTag.length; i++){
					dataLimit 	= allTag[i].getAttribute("data-limit");
					if(dataLimit) {
						(widthBody <= dataLimit) ? (
							allTag[i].style.maxWidth = "100%",
							allTag[i].style.padding = "0 1.5rem"						
						) : (
							allTag[i].style.maxWidth = dataLimit + "px",
							allTag[i].style.padding = "0",
							allTag[i].style.width = "100vw",
							allTag[i].style.margin = "0 auto"
						)
					}
				}
			}
		}
	}
}());
// Background Parallax
// Função criada para determinar efeito parallax com evento scroll
(function bgParallax(){
	var blocoBg, distTopBody, distancia, searchDataFrame, dataFrame;

	searchDataFrame = document.querySelectorAll("div, section, article, main, header, footer, aside, span, nav");

	for(var i = 0; i < searchDataFrame.length; i++){
		dataFrame = searchDataFrame[i].getAttribute("data-frame");

		if (dataFrame) {	
			window.onscroll = function(){
				for(var i = 0; i < searchDataFrame.length; i++){						
					dataFrame = searchDataFrame[i].getAttribute("data-frame");
					distTopBody = parseInt(scrollTopPosition(document.body || document.documentElement));
					distTopBody > 0 ?
						searchDataFrame[i].style.backgroundPosition = "0px " + "-" + (parseInt(distTopBody / dataFrame)) + "px":
						searchDataFrame[i].style.backgroundPosition = "0px " + distTopBody + "px"				
				}					
			}
		}	
	}
}());
// Galeria
// Para funcionar deve adicionar essas duas classes abaixo
//  ## owl-carousel owl-theme
// Banner pode ser usado para galeria principal da home
$('.banner-full-width').owlCarousel({
	autoplay: true,
    loop:true,
    items: 1,
    nav: false,
    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    animateIn: "fadeIn",
    animateOut: "fadeOut"
});
// Banner usado para background de módulos
$('.banner-bg').owlCarousel({
	autoplay: true,
    loop:true,
    items: 1,
    dots: false,
    nav: false,
    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    animateIn: "fadeIn",
    animateOut: "fadeOut"
});
// Banner usado para publicidade
$('.banner-pub').owlCarousel({
	autoplay: true,
    loop:true,
    items: 1,
    dots: false,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    animateIn: "fadeIn",
    animateOut: "fadeOut"
});
// Banner pode ser usado para lista de clientes por ícones
$('.banner-dvs-itens').owlCarousel({
	autoplay: true,
    loop:true,
    items: 5,
    lazyLoad:true,
    margin:10,
    dots: true,
    nav: false,
    navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    animateIn: "fadeIn",
    animateOut: "fadeOut",
    responsive : {
	    0 	: {
	    	items: 1,
	    	margin:10
	    },
	    480 : {items: 2},
	    768 : {itens: 4}
	}
});

