jQuery(document).ready(function($) {

	$(".main_menu a").click(function(){
		var id =  $(this).attr('class');
		id = id.split('-');
		$('a.active').removeClass('active');
    	$(this).addClass('active');
		$("#menu-container .content").slideUp('slow');
		$("#menu-container #menu-"+id[1]).slideDown('slow');		
		$("#menu-container .homepage").slideUp('slow');
		return false;
	});


	$(".main_menu a.nav_homebutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .homepage").slideDown('slow');
		return false;
	});

	$(".main_menu a.nav_docsbutton").click(function(){
		$("#menu-container .content").slideUp('slow');
		$("#menu-container .docs-section").slideDown('slow');
		return false;
	});

	$(".main_menu a.nav_contactbutton").click(function(){
		$("#menu-container .content").fadeOut();
		$("#menu-container .contact-section").slideDown('slow');
		return false;
	});



	$('a.navigation_box').click(function(){
		$('.main_small_width').slideToggle();
	});

	$('.main_small_width a').click(function() {
		$('.main_small_width').slideToggle().hide();
	});

	$(".docs_button").click(function(){
		
		$.getJSON("json/"+$(this).attr('id')+".json", function(data) {        
            console.log(data.hs_json.Output.Data);    
    	});

	});


});
