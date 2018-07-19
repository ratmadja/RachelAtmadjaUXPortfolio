//Start of 'JQuery scroll to element on page'
//Code requires that the href attribute of <a> matches the id attribute of said element

$('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top -100
            }, 1000);
            return false;
        }
    }
});

//End of 'JQuery scroll to element on page'



//Start of 'JQuery sticky nav'
//Code requires creation of .sticky class in css
//Control the padding of sticky nav by media-query

$(window).scroll(function() {
  if($(this).scrollTop()>650) {
    $('.navmenu').addClass("sticky");
  } else {
    $('.navmenu').removeClass("sticky");
  }
});

//End of 'JQuery sticky nav'
