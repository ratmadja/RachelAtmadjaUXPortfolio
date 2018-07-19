//-------Start of 'JQuery scroll to element on page'-------------
// This code will only work if I match href of <a> link -- to id of element on page to scroll to

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

//-------End of 'JQuery scroll to element on page'-----------------


//-------Start of 'JQuery nav stick to top on scroll'-------------

//this measures how far down the sticky element is from the top
var stickyTop = $(".sticky").offset().top;


//whenever the user scrolls, measure how far we have scrolled
$(window).scroll(function() {
  var windowTop = $(window).scrollTop();

  //check to see if we have scrolled past the original location of the sticky element
  if (windowTop > stickyTop) {

    //if so, change the sticky element to fixed positioning
    $(".sticky").css({
      "position": "fixed",
      // "margin": "auto",
      // "width": "90%",
      "padding": "0 5%",
      "top": 0,
      "right": 0,
      "left": 0,
      "background-color": "#FFFFFF"
    });

  } else {
    $(".sticky").css({
      "position": "static",
      "padding": 0
    });
  }
});

// nav {
//   border-bottom: 1px solid #C5C5C5;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 4.5em;
// }
