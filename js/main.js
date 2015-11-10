"use strict";

$(document).ready(function(){
  var startY = 900;
  var stopY = 1800;

  function checkY()
  {
    if($(window).scrollTop() > startY && $(window).scrollTop() <= stopY)
      {
        $('.slogan').fadeIn(2000); 
      }
      else
        {
          $('.slogan').fadeOut("slow");
        }
  }

  $(window).scroll(function(){
    checkY();
  });
  checkY();
});
