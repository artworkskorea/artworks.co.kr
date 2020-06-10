$(document).ready(function() {
	'use strict';

	$('.spinner').fadeOut('slow');
	$('.preloader').delay(0).fadeOut('slow');

	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
		var msViewportStyle = document.createElement("style")
		msViewportStyle.appendChild(
			document.createTextNode(
				"@-ms-viewport{width:auto!important}"
			)
		)
		document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
	}

	imagesLoaded(document.body, function(){
		if ($('.no-touch').length) {
			skrollr.init({
				smoothScrolling: false,
				easing: 'sqrt',
				forceHeight: false
			});
		}
	});

	$('#carousel-intro').carousel({
		interval: 4500,
		pause: "false"
	})

	$('#carousel-1, #carousel-2, #carousel-3').carousel({
		interval: false
	})

    

	$(function () {

	    $('.bx-viewport').css({ 'height': ($(window).height()) + 'px' });
	    $('.main-li').css({ 'height': ($(window).height()) + 'px' });
	    $('.main-slider').css({ 'height': ($(window).height()) + 'px' });
	    $('.main-slider').css("background-position-x", "50%");
	    $('.main-slider').css("background-position-y", ($(window).height() + 50) + 'px');
	    
	    $(window).resize(function () {
	        $('.bx-viewport').css({ 'height': ($(window).height()) + 'px' });
		    $('.main-li').css({ 'height': ($(window).height()) + 'px' });
		    $('.main-slider').css({ 'height': ($(window).height()) + 'px' });
		    $('.main-slider').css("background-position-x", "50%");
		    $('.main-slider').css("background-position-y", ($(window).height() + 50) + 'px');
		});

	    //화면 회전시 이벤트
		$(window).resize("orientationchange", function () {

		    if ($(window).height() < $(window).width()) {
		        $('.main-slider').css("background-position-y", ($(window).height() + 100) + 'px');
		    }

		});

		if ($(window).height() < $(window).width()) {
		    $('.main-slider').css("background-position-y", ($(window).height() + 100) + 'px');
		}

	});

	$('.flowuplabels').FlowupLabels({
		feature_onInitLoad: false, 
		class_focused: 'focused',
		class_populated: 'populated' 
	});

	var options = {
		target: '.message .alert',
		beforeSubmit: showRequest,
		success: showResponse
	};

	$('#contactForm').ajaxForm(options);
	function showRequest(formData, jqForm, options) {
		var queryString = $.param(formData);
			return true;
		}
	function showResponse(responseText, statusText) {
		}

	var url ='/content/streamline-icons.svg';
	var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

	var url ='/content/simpleline-icons.svg';
	var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

	var url ='/content/social-icons.svg';
	var c=new XMLHttpRequest(); c.open('GET', url, false); c.setRequestHeader('Content-Type', 'text/xml'); c.send();
	document.body.insertBefore(c.responseXML.firstChild, document.body.firstChild)

	$(".map-overlay").click(function(){
		if ($("#gmap").css("opacity") == "0")
			Map();
	});
	
	$(".map-text").click(function() {
		if ($("#gmap").css("opacity") == "1")
			Map();
	});

	function Map() {
		$(".map-overlay").toggleClass("js-active");
		$(".map-overlay").find(".map-open").toggle();
		$(".map-overlay").find(".map-close").toggle();
		
		if ($("#gmap").css("opacity") == "0")
		{
			$("#gmap").animate({opacity:"1"}, 500);
			$(".map-toggle").css("top","90%");
			$(".map-text").css("color", "#000");
		}
		else
		{
			$("#gmap").animate({opacity:"0"}, 500);
			$(".map-toggle").css("top","50%");
			$(".map-text").css("color", "#bbb");
		}

	}

	//google.maps.event.addDomListener(window, 'load', init);

	function init() {
		var mapOptions = {
			zoom: 16,
			zoomControl: true,
			zoomControlOptions: {
				style: google.maps.ZoomControlStyle.SMALL,
				position: google.maps.ControlPosition.RIGHT_TOP
			},
			mapTypeControl: false,
			scaleControl: true,
			scrollwheel: false,
			streetViewControl: false,
			draggable: true,
			center: new google.maps.LatLng(37.4955827, 127.0275969), 
			styles: [{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#d3d3d3"}]},{"featureType":"transit","stylers":[{"color":"#808080"},{"visibility":"off"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"visibility":"on"},{"color":"#b3b3b3"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"weight":1.8}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#d7d7d7"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#ebebeb"}]},{"featureType":"administrative","elementType":"geometry","stylers":[{"color":"#a7a7a7"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#ffffff"}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"visibility":"on"},{"color":"#efefef"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#696969"}]},{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"color":"#737373"}]},{"featureType":"poi","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#d6d6d6"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#dadada"}]}]
		};
		var mapElement = document.getElementById('gmap');
		var map = new google.maps.Map(mapElement, mapOptions);
		var image = '/img/map-pin.png';
		var marker = new google.maps.Marker({
			position: new google.maps.LatLng(37.4955827, 127.0275969),
			map: map,
			icon: image
		});
	}

});

$(window).load(function() {
    'use strict';
    var galNo = 0;
	$("#gmap").css("height", $("#offline-gallery").height());

	if ($('.navbar-toggle:visible').length) {
		$('.navbar a').click(function () { $(".navbar-collapse").collapse("hide") });
	}

	$.localScroll.hash();
	$('.nav, .navbar-header, footer, .main-slider').localScroll({
		target: 'body',
		queue: true,
		duration: 1000,
		hash: false,
		offset: -54,
		easing: 'easeInOutExpo'
	});

	$(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
		event.preventDefault();
		$(this).ekkoLightbox();
	});

	var aaa = "";
	$('.link').magnificPopup({
		type: 'image',
		gallery:{
			enabled:true
		},
		callbacks: {
		    elementParse: function(item) {
		        
		        aaa = item.src;

		    },
		    change: function () {
		        

		    },
		    updateStatus: function (data) {


		    },
		    imageLoadComplete: function () {
		        // fires when image in current popup finished loading
		        // avaiable since v0.9.0
		        
		        //$(".mfp-img1").css({ "display": "none" });
		        //$(".mfp-img2").css({ "display": "none" });
		        //$(".mfp-img3").css({ "display": "none" });
		        //$(".mfp-img4").css({ "display": "none" });
		        //$(".mfp-img5").css({ "display": "none" });
		        //$(".mfp-img6").css({ "display": "none" });





		        //var vvv = this.currItem.src;
		        //var arrItem = vvv.split('-');
		        //var arrImage = arrItem[1].split('.');

		        
		        //if (arrImage[0] == "1") {
		        //    $(".mfp-img1").attr("src", "//file3.funshop.co.kr/artworks/161214_ve1_1000x800.jpg")
		        //    $(".mfp-img2").attr("src", "//file3.funshop.co.kr/artworks/161214_ve2_1000x800.jpg")
		        //    $(".mfp-img3").attr("src", "//file3.funshop.co.kr/artworks/161214_ve3_1000x800.jpg")
		        //    $(".mfp-img4").attr("src", "//file3.funshop.co.kr/artworks/161214_ve4_1000x800.jpg")
		        //    $(".mfp-img5").attr("src", "//file3.funshop.co.kr/artworks/161214_ve5_1000x800.jpg")
		        //    $(".mfp-img6").attr("src", "//file3.funshop.co.kr/artworks/161214_ve6_1000x800.jpg")

		        //}


		        //if (arrImage[0] == "2") {
		        //    $(".mfp-img1").attr("src", "//file3.funshop.co.kr/artworks/161214_li1_1000x800.jpg")
		        //    $(".mfp-img2").attr("src", "//file3.funshop.co.kr/artworks/161214_li2_1000x800.jpg")
		        //    $(".mfp-img3").attr("src", "//file3.funshop.co.kr/artworks/161214_li3_1000x800.jpg")
		        //    $(".mfp-img4").attr("src", "//file3.funshop.co.kr/artworks/161214_li4_1000x800.jpg")
		        //    $(".mfp-img5").attr("src", "//file3.funshop.co.kr/artworks/161214_li5_1000x800.jpg")
		        //    $(".mfp-img6").attr("src", "//file3.funshop.co.kr/artworks/161214_li6_1000x800.jpg")

		        //}


		        //if (arrImage[0] == "3") {
		        //    $(".mfp-img1").attr("src", "//file3.funshop.co.kr/artworks/161214_ze1_1000x800.jpg")
		        //    $(".mfp-img2").attr("src", "//file3.funshop.co.kr/artworks/161214_ze2_1000x800.jpg")
		        //    $(".mfp-img3").attr("src", "//file3.funshop.co.kr/artworks/161214_ze3_1000x800.jpg")
		        //    $(".mfp-img4").attr("src", "//file3.funshop.co.kr/artworks/161214_ze4_1000x800.jpg")
		        //    $(".mfp-img5").attr("src", "//file3.funshop.co.kr/artworks/161214_ze5_1000x800.jpg")
		        //    $(".mfp-img6").attr("src", "//file3.funshop.co.kr/artworks/161214_ze6_1000x800.jpg")

		        //}


		        //if (arrImage[0] == "4") {
		        //    $(".mfp-img1").attr("src", "//file3.funshop.co.kr/artworks/161214_GT1_1000x800.jpg")
		        //    $(".mfp-img2").attr("src", "//file3.funshop.co.kr/artworks/161214_GT2_1000x800.jpg")
		        //    $(".mfp-img3").attr("src", "//file3.funshop.co.kr/artworks/161214_GT3_1000x800.jpg")
		        //    $(".mfp-img4").attr("src", "//file3.funshop.co.kr/artworks/161214_GT4_1000x800.jpg")
		        //    $(".mfp-img5").attr("src", "//file3.funshop.co.kr/artworks/161214_GT5_1000x800.jpg")
		        //    $(".mfp-img6").attr("src", "//file3.funshop.co.kr/artworks/161214_GT6_1000x800.jpg")

		        //}


		        //if (arrImage[0] == "5") {

		        //    $(".mfp-img1").attr("src", "//file3.funshop.co.kr/artworks/161214_sb1_1000x800.jpg")
		        //    $(".mfp-img2").attr("src", "//file3.funshop.co.kr/artworks/161214_sb2_1000x800.jpg")
		        //    $(".mfp-img3").attr("src", "//file3.funshop.co.kr/artworks/161214_sb3_1000x800.jpg")
		        //    $(".mfp-img4").attr("src", "//file3.funshop.co.kr/artworks/161214_sb4_1000x800.jpg")
		        //    $(".mfp-img5").attr("src", "//file3.funshop.co.kr/artworks/161214_sb5_1000x800.jpg")
		        //    $(".mfp-img6").attr("src", "//file3.funshop.co.kr/artworks/161214_sb6_1000x800.jpg")
		        //}


		        //if (arrImage[0] == "6") {

		        //    $(".mfp-img1").attr("src", "//file3.funshop.co.kr/artworks/161214_na1_1000x800.jpg")
		        //    $(".mfp-img2").attr("src", "//file3.funshop.co.kr/artworks/161214_na2_1000x800.jpg")
		        //    $(".mfp-img3").attr("src", "//file3.funshop.co.kr/artworks/161214_na3_1000x800.jpg")
		        //    $(".mfp-img4").attr("src", "//file3.funshop.co.kr/artworks/161214_na4_1000x800.jpg")
		        //    $(".mfp-img5").attr("src", "//file3.funshop.co.kr/artworks/161214_na5_1000x800.jpg")
		        //    $(".mfp-img6").attr("src", "//file3.funshop.co.kr/artworks/161214_na6_1000x800.jpg")
		        //}

		        //galNo = arrImage[0];

		        $(".mfp-img-comm").css({ "max-height": $(".mfp-img").css("max-height"), "margin-top": "-" + $(".mfp-img").css("height"), "display": "none" });
		        
		        //$(".blt1").attr("src", "//file3.funshop.co.kr/artworks/161214_bt_02.png");
		        //$(".blt2").attr("src", "//file3.funshop.co.kr/artworks/161214_bt_01.png");
		        //$(".blt3").attr("src", "//file3.funshop.co.kr/artworks/161214_bt_01.png");
		        //$(".blt4").attr("src", "//file3.funshop.co.kr/artworks/161214_bt_01.png");
		        //$(".blt5").attr("src", "//file3.funshop.co.kr/artworks/161214_bt_01.png");
		        //$(".blt6").attr("src", "//file3.funshop.co.kr/artworks/161214_bt_01.png");


		    },
		    open: function () {
		        
		        //var arrItem = aaa.split('-');
		        //var arrImage = arrItem[1].split('.');
		        
		        

		        //if (arrImage[0] == "1") {
		        //    $(".mfp-img1").attr("src", "//file3.funshop.co.kr/artworks/161214_ve1_1000x800.jpg")
		        //    $(".mfp-img2").attr("src", "//file3.funshop.co.kr/artworks/161214_ve2_1000x800.jpg")
		        //    $(".mfp-img3").attr("src", "//file3.funshop.co.kr/artworks/161214_ve3_1000x800.jpg")
		        //    $(".mfp-img4").attr("src", "//file3.funshop.co.kr/artworks/161214_ve4_1000x800.jpg")
		        //    $(".mfp-img5").attr("src", "//file3.funshop.co.kr/artworks/161214_ve5_1000x800.jpg")


		        //}


		        //if (arrImage[0] == "2") {
		        //    $(".mfp-img1").attr("src", "//file3.funshop.co.kr/artworks/161214_li1_1000x800.jpg")
		        //    $(".mfp-img2").attr("src", "//file3.funshop.co.kr/artworks/161214_li2_1000x800.jpg")
		        //    $(".mfp-img3").attr("src", "//file3.funshop.co.kr/artworks/161214_li3_1000x800.jpg")
		        //    $(".mfp-img4").attr("src", "//file3.funshop.co.kr/artworks/161214_li4_1000x800.jpg")
		        //    $(".mfp-img5").attr("src", "//file3.funshop.co.kr/artworks/161214_li5_1000x800.jpg")
		        //    $(".mfp-img6").attr("src", "//file3.funshop.co.kr/artworks/161214_li6_1000x800.jpg")

		        //}


		        //if (arrImage[0] == "3") {
		        //    $(".mfp-img1").attr("src", "//file3.funshop.co.kr/artworks/161214_ze1_1000x800.jpg")
		        //    $(".mfp-img2").attr("src", "//file3.funshop.co.kr/artworks/161214_ze2_1000x800.jpg")
		        //    $(".mfp-img3").attr("src", "//file3.funshop.co.kr/artworks/161214_ze3_1000x800.jpg")
		        //    $(".mfp-img4").attr("src", "//file3.funshop.co.kr/artworks/161214_ze4_1000x800.jpg")
		        //    $(".mfp-img5").attr("src", "//file3.funshop.co.kr/artworks/161214_ze5_1000x800.jpg")
		        //    $(".mfp-img6").attr("src", "//file3.funshop.co.kr/artworks/161214_ze6_1000x800.jpg")

		        //}


		        //if (arrImage[0] == "4") {

		        //    $(".mfp-img1").attr("src", "//file3.funshop.co.kr/artworks/161214_pr1_1000x800.jpg")
		        //    $(".mfp-img2").attr("src", "//file3.funshop.co.kr/artworks/161214_pr2_1000x800.jpg")
		        //    $(".mfp-img3").attr("src", "//file3.funshop.co.kr/artworks/161214_pr3_1000x800.jpg")
		        //    $(".mfp-img4").attr("src", "//file3.funshop.co.kr/artworks/161214_pr4_1000x800.jpg")
		        //    $(".mfp-img5").attr("src", "//file3.funshop.co.kr/artworks/161214_pr5_1000x800.jpg")
		        //    $(".mfp-img6").attr("src", "//file3.funshop.co.kr/artworks/161214_pr6_1000x800.jpg")
		        //}


		        //if (arrImage[0] == "5") {

		        //    $(".mfp-img1").attr("src", "//file3.funshop.co.kr/artworks/161214_sb1_1000x800.jpg")
		        //    $(".mfp-img2").attr("src", "//file3.funshop.co.kr/artworks/161214_sb2_1000x800.jpg")
		        //    $(".mfp-img3").attr("src", "//file3.funshop.co.kr/artworks/161214_sb3_1000x800.jpg")
		        //    $(".mfp-img4").attr("src", "//file3.funshop.co.kr/artworks/161214_sb4_1000x800.jpg")
		        //    $(".mfp-img5").attr("src", "//file3.funshop.co.kr/artworks/161214_sb5_1000x800.jpg")
		        //    $(".mfp-img6").attr("src", "//file3.funshop.co.kr/artworks/161214_sb6_1000x800.jpg")
		        //}
		        

		        //if (arrImage[0] == "6") {

		        //    $(".mfp-img1").attr("src", "//file3.funshop.co.kr/artworks/161214_ho1_1000x800.jpg")
		        //    $(".mfp-img2").attr("src", "//file3.funshop.co.kr/artworks/161214_ho2_1000x800.jpg")
		        //    $(".mfp-img3").attr("src", "//file3.funshop.co.kr/artworks/161214_ho3_1000x800.jpg")
		        //    $(".mfp-img4").attr("src", "//file3.funshop.co.kr/artworks/161214_ho4_1000x800.jpg")
		        //    $(".mfp-img5").attr("src", "//file3.funshop.co.kr/artworks/161214_ho5_1000x800.jpg")
		        //    $(".mfp-img6").attr("src", "//file3.funshop.co.kr/artworks/161214_ho6_1000x800.jpg")
		        //}
		       

		        //$(".mfp-img-comm").css({ "max-height": $(".mfp-img").css("max-height"), "margin-top": "-" + $(".mfp-img").css("height"), "display": "none" });

		        //galNo = arrImage[0];
		        
		    }
		    
		}
		

	});


	var afterme = 0;
	var afterblme = 1;
	$("body").on("mouseover", ".blt", function () {
	    var me = $(this).attr("data-index")

	    
	    $(".mfp-img" + me).fadeIn();
	    $(".mfp-img" + afterme).fadeOut();


	    $(".blt" + afterblme).attr("src", "//file3.funshop.co.kr/artworks/161214_bt_01.png");
	    $(".blt" + me).attr("src", "//file3.funshop.co.kr/artworks/161214_bt_02.png");


	    afterme = me;
	    afterblme = me;

	});

});
