// This returns a pop-up when we click differenttags on the HTML

// jQuery(document).ready(function(){
//   jQuery('h1').click(function(){
//     alert("This is a heading tag");
//     alert("I told you, THIS IS A HEADER")
//   });
  
//   jQuery('p').click(function(){
//     alert("This is a paragrah tag");
//     alert("I told you, THIS IS A PARAGRAPH")
//   });
  
//   jQuery('img').click(function(){
//     alert("This is an image tag");
//     alert("I told you, THIS IS AN IMAGE")
//   });
// })

// There's a handy shortcut that most JavaScript developers use: instead of writing jQuery() all of the time, we can simply use $():

// $(document).ready(function(){
//   $('h1').click(function(){
//     alert("This is a heading tag");
//     alert("I told you, THIS IS A HEADER")
//   });
  
  // $('p').click(function(){
  //   alert("This is a paragrah tag");
  //   alert("I told you, THIS IS A PARAGRAPH")
  // });
  
//   $('img').click(function(){
//     alert("This is an image tag");
//     alert("I told you, THIS IS AN IMAGE")
//   });
// })


// Show image with you click on element "p" to negate the css style to hide image

// $(document).ready(function() {
//   $('p').click(function() {
//     $("img").show();
//   });
// });

// USE WITH CLASSES

// $(document).ready(function() {
//   $("p").click(function() {
//     $(".walrus-showing").toggle();
//     $(".walrus-hidden").toggle();
//   });
// });

// USE WITH ID'S
$(document).ready(function() {
  $("p").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });
});

// Important Note: To use the jQuery Methods fadeIn(), fadeOut(), slideDown(), or slideUp() you will need two separate click() JavaScript events (One for the in/out or down/up) whereas toggle() only requires one click() event.

