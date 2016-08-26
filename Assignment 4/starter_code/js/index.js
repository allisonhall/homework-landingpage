//make sure js is working in console
$(document).ready(function() {
	console.log("ready");
	})

$('.read-more').click(function(){
  $('#show-this-on-click').slideDown(); // when 'read more' is clicked, show more content
  
  $('.read-more').hide(); //hide 'read more' button when read more is clicked
  $('.read-less').show(); //show 'read less' button when read more is clicked 
    event.preventDefault();
  });

$('.read-less').click(function(){
  $('#show-this-on-click').slideUp(); // when 'read less' is clicked, show less content
  
  $('.read-less').hide(); //hide 'read less' button when read less is clicked
  $('.read-more').show(); //show 'read more' buttton when read less is clicked
    event.preventDefault();
  });

$('.learn-more').click(function(){ 
  $('#learn-more-text').slideDown(); // when 'learn more' is  clicked, show full content
  
  $('.learn-more').hide(); // hide 'learn more' once learn more button is clicked
    event.preventDefault();
  });

// note: .hide and .show work the same when replaced with .toggle