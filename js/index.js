console.log("Your index.js file is loaded correctly!");


/*$(".item1").hover(function(){
    $(this).animate({width:"1000px"});
});

$(".item3").hover(function(){
    $(this).animate({width:"1000px"});
});

$(".item5").hover(function(){
    $(this).animate({width:"1000px"});
});*/

/*hover image to enlarge*/
$(document).ready(function() {
    /*// Store the original width of the image
    var originalWidth = $('.item1').width();*/
  
    // Hover event handler
    $('.item1').mouseenter(function() {
      // Enlarge the image to 100% width
      $(this).css('width', '105%');
    }).mouseleave(function() {
      // Restore the image to its original width
      $(this).css('width', '100%');
    });

    $('.item3').mouseenter(function() {
        // Enlarge the image to 100% width
        $(this).css('width', '105%');
        }).mouseleave(function() {
        // Restore the image to its original width
        $(this).css('width', '100%');
    });

    $('.item5').mouseenter(function() {
        // Enlarge the image to 100% width
        $(this).css('width', '105%');
        }).mouseleave(function() {
        // Restore the image to its original width
        $(this).css('width', '100%');
    });
  });

  /*change button color*/
  $(document).ready(function() {
    // Save the original button color
    var originalColor = $('.btn').css('background-color');
    
    // Change the button color when hovering
    $('.btn').hover(function() {
      $(this).css('background-color', '#e64646');
    }, function() {
      // Revert back to the original button color when not hovering
      $(this).css('background-color', originalColor);
    });
  });

  