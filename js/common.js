// $(document).ready(function() {
    

    $(".header__toggle").click(function() {
        $(".nav").slideToggle();
    });



//owl2row plugin
;(function ($, window, document, undefined) {
    Owl2row = function (scope) {
        this.owl = scope;
        this.owl.options = $.extend({}, Owl2row.Defaults, this.owl.options);
//link callback events with owl carousel here

        this.handlers = {
            'initialize.owl.carousel': $.proxy(function (e) {
                if (this.owl.settings.owl2row) {
                    this.build2row(this);
                }
            }, this)
        };

        this.owl.$element.on(this.handlers);
    };

    Owl2row.Defaults = {
        owl2row: false,
        owl2rowTarget: 'item',
        owl2rowContainer: 'owl2row-item',
        owl2rowDirection: 'utd' // ltr
    };

//mehtods:
    Owl2row.prototype.build2row = function(thisScope){
    
        var carousel = $(thisScope.owl.$element);
        var carouselItems = carousel.find('.' + thisScope.owl.options.owl2rowTarget);

        var aEvenElements = [];
        var aOddElements = [];

        $.each(carouselItems, function (index, item) {
            if ( index % 2 === 0 ) {
                aEvenElements.push(item);
            } else {
                aOddElements.push(item);
            }
        });

        carousel.empty();

        switch (thisScope.owl.options.owl2rowDirection) {
            case 'ltr':
                thisScope.leftToright(thisScope, carousel, carouselItems);
                break;

            default :
                thisScope.upTodown(thisScope, aEvenElements, aOddElements, carousel);
        }

    };

    Owl2row.prototype.leftToright = function(thisScope, carousel, carouselItems){

        var o2wContainerClass = thisScope.owl.options.owl2rowContainer;
        var owlMargin = thisScope.owl.options.margin;

        var carouselItemsLength = carouselItems.length;

        var firsArr = [];
        var secondArr = [];

//console.log(carouselItemsLength);

        if (carouselItemsLength %2 === 1) {
            carouselItemsLength = ((carouselItemsLength - 1)/2) + 1;
        } else {
            carouselItemsLength = carouselItemsLength/2;
        }

//console.log(carouselItemsLength);

        $.each(carouselItems, function (index, item) {


            if (index < carouselItemsLength) {
                firsArr.push(item);
            } else {
                secondArr.push(item);
            }
        });

        $.each(firsArr, function (index, item) {
            var rowContainer = $('<div class="' + o2wContainerClass + '"/>');

            var firstRowElement = firsArr[index];
                firstRowElement.style.marginBottom = owlMargin + 'px';

            rowContainer
                .append(firstRowElement)
                .append(secondArr[index]);

            carousel.append(rowContainer);
        });

    };

    Owl2row.prototype.upTodown = function(thisScope, aEvenElements, aOddElements, carousel){

        var o2wContainerClass = thisScope.owl.options.owl2rowContainer;
        var owlMargin = thisScope.owl.options.margin;

        $.each(aEvenElements, function (index, item) {

            var rowContainer = $('<div class="' + o2wContainerClass + '"/>');
            var evenElement = aEvenElements[index];

            evenElement.style.marginBottom = owlMargin + 'px';

            rowContainer
                .append(evenElement)
                .append(aOddElements[index]);

            carousel.append(rowContainer);
        });
    };

/**
 * Destroys the plugin.
 */
    Owl2row.prototype.destroy = function() {
        var handler, property;

        for (handler in this.handlers) {
            this.owl.dom.$el.off(handler, this.handlers[handler]);
        }
        for (property in Object.getOwnPropertyNames(this)) {
            typeof this[property] !== 'function' && (this[property] = null);
        }
    };

    $.fn.owlCarousel.Constructor.Plugins['owl2row'] = Owl2row;
})( window.Zepto || window.jQuery, window,  document );
//end of owl2row plugin




    var owl = $(".slider-1");
	owl.owlCarousel({
		items : 1,
		loop: true,
		nav: false,
		dots: false,
	});
    
    var owl_1 = $(".slider-2");
	owl_1.owlCarousel({
		items : 4,
		loop: true,
		margin: 15,
		nav: false,
		dots: false,
		responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1
            },
            768:{
                items:2
            },
            1200:{
                items:4
            }
        }
	});

	var owl_2 = $(".slider-3");
	owl_2.owlCarousel({
		items : 1,
		loop: true,
		owl2row: true,
		margin: 20,
		nav: false,
		dots: false,
		responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1,
				
            },
            768:{
                items:2
            },
            1200:{
                items:3
            }
        }
	});

    var owl_3 = $(".slider-4");
	owl_3.owlCarousel({
		items : 1,
		loop: true,
		nav: false,
		dots: false,
	});

    var owl_4 = $(".slider-5");
	owl_4.owlCarousel({
		items : 4,
		loop: true,
		nav: false,
        dots: false,
        responsive:{ //Адаптация в зависимости от разрешения экрана
            0:{
                items:1,
			},
            768:{
                items:2
            },
            1200:{
                items:4
            }
        }
	});

    $('.slider-6').slick({
      infinite: true,
      arrows: true,
      vertical: true,
      verticalSwiping: true,
    
      autoplay: true,
      prevArrow: $('.mini-prev'),
      nextArrow: $('.mini-next'),
    //   nav: true,
    //   dots: true,
      
      slidesToShow: 3,
      slidesToScroll: 1
    
    });

    $('.slider-7').slick({
      infinite: true,
      arrows: true,
      autoplay: true,
      prevArrow: $('.slick-prev'),
      nextArrow: $('.slick-next'),
      slidesToShow: 1,
      slidesToScroll: 1
    });

   


    $(".next").click(function(){
		owl.trigger("next.owl.carousel");
	});
    $(".prev").click(function(){
		owl.trigger("prev.owl.carousel");
	});


    $(".next-button").click(function(){
		owl_1.trigger("next.owl.carousel");
	});
    $(".prev-button").click(function(){
		owl_1.trigger("prev.owl.carousel");
	});


    $(".catalog-next").click(function(){
		owl_2.trigger("next.owl.carousel");
	});
    $(".catalog-prev").click(function(){
		owl_2.trigger("prev.owl.carousel");
	});


    $(".slider-4-next").click(function(){
		owl_3.trigger("next.owl.carousel");
	});
    $(".slider-4-prev").click(function(){
		owl_3.trigger("prev.owl.carousel");
	});

    $(".clients-next").click(function(){
		owl_4.trigger("next.owl.carousel");
	});
    $(".clients-prev").click(function(){
		owl_4.trigger("prev.owl.carousel");
	});


    //Аякс отправка форм
	//Документация: http://api.jquery.com/jquery.ajax/
	$("#form-main").submit(function() {
		$.ajax({
			type: "GET",
			url: "mail.php",
			data: $("#form-main").serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				$.fancybox.close();
			}, 1000);
		});
		return false;
	});

// Карта    
    function initMap() {
        var myMap = new google.maps.Map(document.getElementById('map'), {
         
          center: {lat: 54.732548, lng: 55.982277},
          zoom: 18,
          panBy: (200, 250),
          styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "elementType": "labels.icon",
    "stylers": [
      {
        "visibility": "off"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#f5f5f5"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#bdbdbd"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#757575"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dadada"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#616161"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e5e5e5"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#eeeeee"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#c9c9c9"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#9e9e9e"
      }
    ]
  }
]
});

 
    var marker = new google.maps.Marker ({
        position: {lat: 54.732548, lng: 55.982277},
        map: myMap,
        animation: google.maps.Animation.BOUNCE,
        icon: "../img/marker.png"
    });  

    
    }

//     function initMap() {
//     var coordinates = {lat: 54.732548, lng: 55.982277},

//         map = new google.maps.Map(document.getElementById('map'), {
//             center: coordinates
//         }),
    
//         marker = new google.maps.Marker({
//             position: coordinates,
//             map: map
//         });
// }

// lat: 54.732548, lng: 55.982277





// });