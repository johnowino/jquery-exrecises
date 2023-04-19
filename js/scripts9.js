// Removing contemts from DOM //
// Let's move to the next step - attaching an event handler in place of changing the background color. Again, in the spirit of taking one step at a time, we're not going to actually try to get the click to delete the element - instead, we're going to simply open a dialog box://

$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why Hello there!</li>");
    $("ul#user").children("li").first().click(function() {
      alert('hi');
    });
    $("ul#webpage").children("li").first().click(function() {
      alert('hi');
    });
    });
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
    $('li').click(function() {
      alert('hi');
    });
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me, I meant no offense!</li>");
  });
