// Removing contemts from DOM //
// First, we need to select each message. When I'm working on some tricky DOM manipulation, I usually start by selecting the element and changing its background color to green, just so that I know I have my selector working properly//

$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why Hello there!</li>");
  });

  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
  });

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon me, I meant no offense!</li>");
  });
});