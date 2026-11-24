(function ($) {
    'use strict';

     //Header Search
    if($('.search-box-outer').length) {
        $('.search-box-outer').on('click', function() {
            $('body').addClass('search-active');
        });
        $('.close-search').on('click', function() {
            $('body').removeClass('search-active');
        });
    }

   

    // Mobile Menu
    $('.mobile-menu nav').meanmenu({
        meanScreenWidth: "991",
        meanMenuContainer: ".mobile-menu",
        meanMenuOpen: "<span></span> <span></span> <span></span>",
        onePage: false,
    });

    // sticky
    var wind = $(window);
    var sticky = $('#sticky-header');
    wind.on('scroll', function () {
        var scroll = wind.scrollTop();
        if (scroll < 100) {
            sticky.removeClass('sticky');
        } else {
            sticky.addClass('sticky');
        }
    });


   

    // Case Study Active
    $('.client-slider').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1500,
        autoplayTimeout: 1500,
        dots: true,
        nav: false,
        margin:30,
        center: false,
        navText: ["<i class='bi bi-chevron-left'></i>", "<i class='bi bi-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            },
            1200: {
                items: 2
            },
            1920: {
                items: 2
            }
        }
    })


    // brand Active
    $('.brand-slider').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 10000,
        dots: false,
        nav: false,
        margin: 28,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 5
            },
            1920: {
                items: 5
            }
        }
    })


    // Barnd Active

    $('.brand-slder').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 700,
        autoplayTimeout: 1500,
        dots: false,
        nav: false,
        center: false,
        margin: 15,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            },
            1920: {
                items: 6
            }
        }
    }) 
    
    
    
    // Barnd Active

    $('.brand-slider2').owlCarousel({
        loop: true,
        autoplay: true,
        smartSpeed: 1000,
        autoplayTimeout: 1500,
        dots: false,
        nav: false,
        center: false,
        margin: 30,
        navText: ["<i class='bi bi-arrow-left''></i>", "<i class='bi bi-arrow-right''></i>"],
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            600: {
                items: 3
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            },
            1200: {
                items: 4
            },
            1920: {
                items: 4
            }
        }
    });

    
    

    /*---------------------
    WOW active js 
    --------------------- */
    new WOW().init();

    // counterUp
    $('.counter').counterUp({
        delay: 5,
        time: 1500
    });

    

    // Venubox

    $('.venobox').venobox({

        numeratio: true,

        infinigall: true

    });


    /*--------------------------
     scrollUp
    ---------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    })



    // Sidebar
    
    "use strict";
        jQuery(document).ready(function (o) {
            0 < o(".offset-side-bar").length &&
                o(".offset-side-bar").on("click", function (e) {
                    e.preventDefault(), e.stopPropagation(), o(".cart-group").addClass("isActive");
                }),
                0 < o(".close-side-widget").length &&
                    o(".close-side-widget").on("click", function (e) {
                        e.preventDefault(), o(".cart-group").removeClass("isActive");
                    }),
                0 < o(".navSidebar-button").length &&
                    o(".navSidebar-button").on("click", function (e) {
                        e.preventDefault(), e.stopPropagation(), o(".info-group").addClass("isActive");
                    }),
                0 < o(".close-side-widget").length &&
                    o(".close-side-widget").on("click", function (e) {
                        e.preventDefault(), o(".info-group").removeClass("isActive");
                    }),
                o("body").on("click", function (e) {
                    o(".info-group").removeClass("isActive"), o(".cart-group").removeClass("isActive");
                }),
                o(".xs-sidebar-widget").on("click", function (e) {
                    e.stopPropagation();
                }),
                0 < o(".xs-modal-popup").length &&
                    o(".xs-modal-popup").magnificPopup({
                        type: "inline",
                        fixedContentPos: !2,
                        fixedBgPos: !0,
                        overflowY: "auto",
                        closeBtnInside: !2,
                        callbacks: {
                            beforeOpen: function () {
                                this.st.mainClass = "my-mfp-slide-bottom xs-promo-popup";
                            },
                        },
                    });
            });





        //Curser animation

        $(document).ready(function() {

            var curser = document.querySelector(".curser");
            var curser2 = document.querySelector(".curser2");

            document.addEventListener("mousemove", function(e){
                curser.style.cssText = curser2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
            });
        });

        

                
            // active class & remove class

            $(document).ready(function() {
                let buttons = document.querySelectorAll('.shop-list-left i');

                buttons.forEach(button => {
                    button.addEventListener('click', function () {
                        buttons.forEach(btn => btn.classList.remove('active'));
                        this.classList.add('active');        
                    });
                });
            });

            


    // scroll up

    if($('.prgoress_indicator path').length){
        var progressPath = document.querySelector('.prgoress_indicator path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function () {
          var scroll = $(window).scrollTop();
          var height = $(document).height() - $(window).height();
          var progress = pathLength - (scroll * pathLength / height);
          progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).on('scroll', updateProgress);
        var offset = 250;
        var duration = 550;
        jQuery(window).on('scroll', function () {
          if (jQuery(this).scrollTop() > offset) {
            jQuery('.prgoress_indicator').addClass('active-progress');
          } else {
            jQuery('.prgoress_indicator').removeClass('active-progress');
          }
        });
        jQuery('.prgoress_indicator').on('click', function (event) {
          event.preventDefault();
          jQuery('html, body').animate({ scrollTop: 0 }, duration);
          return false;
        });
    }





            // Preloader
        $(document).ready(function() {
            setTimeout(function(){
                $('.loader_bg').fadeToggle();
            }, 1000);
        });	


})(jQuery);