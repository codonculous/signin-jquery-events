$(function(){

  $('.signin').mousedown( function() {
    $('.modal').fadeIn();

  });

  $('.close').mousedown( function() {
    $('.modal').fadeOut();
  });

  $('.submit').mousedown( function() {
    $('.getstarted input').attr('class','error');
  });

  $('.getstarted input').mouseenter( function() {
    $(this).removeClass('error');
  });

  



});


// When the user presses the .signin button, fade in the modal window
// When the user presses the .close button, fade out the modal window
// When the user presses the .submit button, add an .error class to both input elements
// When the user puts their cursor in one of the input fields, remove the .error class
// (Bonus) Allow the user to click the .modal to close itself
// Tricky, consider what happens when two elements that are overlapping are both waiting for a click
