// JavaScript Document

cg_default_obj = {
	
	thisarray : new Array(),
			
	init : function () {
            $('#myCarousel').carousel();
            $('#addCarousel').carousel();
            
            if ($('.video_frame').length > 0) {
                var width = $('.video_frame').width();
                var height = parseInt(width * 498/885) + 30;
                var height_str = height  + "px"
               //   $('.video_frame').css('height',height_str );
                $('.video_frame').attr('height',height );
                
            }
            if ($('.map_frame').length > 0) {
                var width = $('.map_frame').width();
                var height = parseInt(width);
                var height_str = height  + "px"
               //   $('.video_frame').css('height',height_str );
                $('.map_frame').attr('height',height );
                
            }
            
            
	}
	

}

$(window).ready (function (){
    cg_default_obj.init();
});
