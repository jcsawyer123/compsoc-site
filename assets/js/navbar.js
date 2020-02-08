$(document).ready(function(){
    var stoptransparency = 0; // when to stop the transparent menu
    var hidingmenu = 1200; // when to hide the menu
    var lastScrollTop = 0, delta = 0;
    $(this).scrollTop(0);
	$(window).on('scroll load resize', function() {
		var position = $(this).scrollTop();
		if(position > stoptransparency) {
            $('#transmenu').removeClass('transparency');

            // Logo
            $('#logowhite').addClass('off');
            $('#logoblack').removeClass('off');

		} else {
            $('#transmenu').addClass('transparency');
            
            // Logo
            $('#logowhite').removeClass('off');
            $('#logoblack').addClass('off');

		}
        if(Math.abs(lastScrollTop - position) <= delta)
            return;
        if (position > hidingmenu && position > lastScrollTop){
            $('#transmenu').fadeOut(600);
        } else {
            $('#transmenu').fadeIn(600);
        }
        lastScrollTop = position;  
	});
    
    $('#transmenu .dropdown').on('show.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(300);
    });

    $('#transmenu .dropdown').on('hide.bs.dropdown', function() {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(300);
    });
});