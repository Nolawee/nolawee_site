!function(e){e(window).load(function(){e(".loader").fadeOut(),e(".page-loader").delay(350).fadeOut("slow")}),e(document).ready(function(){function t(t){t.length>0&&(t.hasClass("module-full-height")?t.height(e(window).height()):t.height(.85*e(window).height()))}function o(t,o){if(t.length>0){var a=t.height(),n=e(document).scrollTop();t.hasClass("module-parallax")&&e(o).scrollTop()<=a&&t.css("top",.55*n),t.hasClass("module-fade")&&e(o).scrollTop()<=a&&t.css("opacity",1-n/t.height()*1)}}function a(){e("li.bg-light").hasClass("flex-active-slide")?(u.addClass("nabar-dark"),e(".hero-slider").addClass("hero-slider-dark")):(u.removeClass("nabar-dark"),e(".hero-slider").removeClass("hero-slider-dark"))}function n(){u.length>0&&u.hasClass("navbar-transparent")?navbatTrans=!0:navbatTrans=!1}function i(t,o,a){var n=e(window).scrollTop();t.length>0&&0!=navbatTrans&&(n>=a?t.removeClass("navbar-transparent"):t.addClass("navbar-transparent"))}function r(t){t>767&&e(".navbar-custom .navbar-nav > li.dropdown").hover(function(){var o=e(".dropdown-menu",e(this)).offset().left,a=e(".dropdown-menu",e(this)).width();if(2*a>t-o?e(this).children(".dropdown-menu").addClass("leftauto"):e(this).children(".dropdown-menu").removeClass("leftauto"),e(".dropdown",e(this)).length>0){var n=e(".dropdown-menu",e(this)).width();n>t-o-a?e(this).children(".dropdown-menu").addClass("left-side"):e(this).children(".dropdown-menu").removeClass("left-side")}})}function s(t,o){if(t>767&&1!=o){e(".navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown").removeClass("open");var a,n=0;e(".navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown").hover(function(){var t=e(this);a=setTimeout(function(){t.addClass("open"),t.find(".dropdown-toggle").addClass("disabled")},n)},function(){clearTimeout(a),e(this).removeClass("open"),e(this).find(".dropdown-toggle").removeClass("disabled")})}else e(".navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown").unbind("mouseenter mouseleave"),e(".navbar-custom [data-toggle=dropdown]").not(".binded").addClass("binded").on("click",function(t){t.preventDefault(),t.stopPropagation(),e(this).parent().siblings().removeClass("open"),e(this).parent().siblings().find("[data-toggle=dropdown]").parent().removeClass("open"),e(this).parent().toggleClass("open")})}var l,d=e(".module-hero"),p=e(".module-hero, .module, .module-small"),u=e(".navbar-custom"),c=u.height(),h=e("#works-grid"),m=Math.max(e(window).width(),window.innerWidth);/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(l=!0),t(d),n(u),i(u,d,c),r(m),s(m,l),e(window).resize(function(){var o=Math.max(e(window).width(),window.innerWidth);t(d),s(o)}),e(window).scroll(function(){o(d,this),i(u,d,c)}),p.each(function(t){e(this).attr("data-background")&&e(this).css("background-image","url("+e(this).attr("data-background")+")")}),1!=l?directionNav=!0:directionNav=!1,e(".hero-slider").length>0&&e(".hero-slider").flexslider({animation:"fade",animationSpeed:1e3,animationLoop:!0,directionNav:directionNav,prevText:"",nextText:"",start:function(e){a()},before:function(t){1!=l&&(e(".hs-caption").fadeOut().animate({top:"-80px"},{queue:!1,easing:"swing",duration:700}),t.slides.eq(t.currentSlide).delay(500),t.slides.eq(t.animatingTo).delay(500))},after:function(t){a(),1!=l&&e(".hs-caption").fadeIn().animate({top:"0"},{queue:!1,easing:"swing",duration:700})},useCSS:!0}),e(".hero-slider").length>0&&e(window).scroll(function(){var t=e(window).scrollTop();t>0&&e(".hero-slider").flexslider("pause")}),e(document).on("click",".navbar-collapse.in",function(t){e(t.target).is("a")&&"dropdown-toggle"!=e(t.target).attr("class")&&e(this).collapse("hide")}),1!=l&&(e(function(){e(".video-player").mb_YTPlayer()}),e(".video-controls-box a").css("visibility","visible"),e("#video-play").click(function(t){return t.preventDefault(),e(this).hasClass("fa-play")?e(".video-player").playYTP():e(".video-player").pauseYTP(),e(this).toggleClass("fa-play fa-pause"),!1}),e("#video-volume").click(function(t){return t.preventDefault(),e(".video-player").toggleVolume(),e(this).toggleClass("fa-volume-off fa-volume-up"),!1}));var f;f=h.hasClass("works-grid-masonry")?"masonry":"fitRows",h.imagesLoaded(function(){h.isotope({layoutMode:f,itemSelector:".work-item"})}),e("#filters a").click(function(){e("#filters .current").removeClass("current"),e(this).addClass("current");var t=e(this).attr("data-filter");return h.isotope({filter:t,animationOptions:{duration:750,easing:"linear",queue:!1}}),!1}),e(".post-images-slider").flexslider({animation:"slide",smoothHeight:!0});var g=new google.maps.LatLng(34.031428,-118.2071542,17),v=e("#map");if(v.length>0){map=new GMaps({streetViewControl:!0,overviewMapControl:!0,mapTypeControl:!0,zoomControl:!0,panControl:!1,scrollwheel:!1,center:g,el:"#map",zoom:16,styles:[{featureType:"all",elementType:"labels.text.fill",stylers:[{saturation:36},{color:"#000000"},{lightness:40}]},{featureType:"all",elementType:"labels.text.stroke",stylers:[{visibility:"on"},{color:"#000000"},{lightness:16}]},{featureType:"all",elementType:"labels.icon",stylers:[{visibility:"off"}]},{featureType:"administrative",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"administrative",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:17},{weight:1.2}]},{featureType:"landscape",elementType:"geometry",stylers:[{color:"#000000"},{lightness:20}]},{featureType:"poi",elementType:"geometry",stylers:[{color:"#000000"},{lightness:21}]},{featureType:"road.highway",elementType:"geometry.fill",stylers:[{color:"#000000"},{lightness:17}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{color:"#000000"},{lightness:29},{weight:.2}]},{featureType:"road.arterial",elementType:"geometry",stylers:[{color:"#000000"},{lightness:18}]},{featureType:"road.local",elementType:"geometry",stylers:[{color:"#000000"},{lightness:16}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#000000"},{lightness:19}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#000000"},{lightness:17}]}]});var w=new google.maps.MarkerImage("assets/images/map-icon.png",new google.maps.Size(59,65),new google.maps.Point(0,0),new google.maps.Point(24,42));map.addMarker({position:g,icon:w,title:"Rival",infoWindow:{content:"<p><strong>Semantic</strong><br/>121 Somewhere Ave, Suite 123<br/>P: (123) 456-7890<br/>Australia</p>"}})}e(".progress-bar").each(function(t){e(this).appear(function(){var t=e(this).attr("aria-valuenow");e(this).animate({width:t+"%"}),e(this).find("span").animate({opacity:1},900),e(this).find("span").countTo({from:0,to:t,speed:900,refreshInterval:30})})}),e(".counter-item").each(function(t){e(this).appear(function(){var t=e(this).find(".counter-number").data("number");e(this).find(".counter-number span").countTo({from:0,to:t,speed:1200,refreshInterval:30})})}),wow=new WOW({mobile:!1}),wow.init(),e("a.popup").magnificPopup({type:"image",gallery:{enabled:!0,navigateByImgClick:!0,preload:[0,1]},image:{titleSrc:"title",tError:"The image could not be loaded."}}),e(".rotate").textrotator({animation:"dissolve",separator:"|",speed:3e3}),e("body").fitVids(),e(".section-scroll").bind("click",function(t){var o=e(this);e("html, body").stop().animate({scrollTop:e(o.attr("href")).offset().top},1e3),t.preventDefault()}),e(window).scroll(function(){e(this).scrollTop()>100?e(".scroll-up").fadeIn():e(".scroll-up").fadeOut()}),e('a[href="#totop"]').click(function(){return e("html, body").animate({scrollTop:0},"slow"),!1})})}(jQuery);