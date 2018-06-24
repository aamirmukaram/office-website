$(function(){
  const shrinkHeader = 95;
  $(window).scroll(function() {
    const scroll = getCurrentScroll();
    console.log('scroll', scroll);
    console.log('shrinkHeader', shrinkHeader);
    if ( scroll >= shrinkHeader ) {
      $('.mainContainer > header').addClass('shrink');
    } else {
      $('.mainContainer > header').removeClass('shrink');
    }
  });
  function getCurrentScroll() {
    return window.pageYOffset || document.documentElement.scrollTop;
  }
});
