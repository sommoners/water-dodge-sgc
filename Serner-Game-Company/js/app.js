$('nav.desktop a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    targetoffset = $(id).offset().top;
    
   $('html, body').animate({
    scrollTop: targetoffset

},500);
    });