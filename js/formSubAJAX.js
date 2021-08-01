$("#menubar ul li a").on("click", function (event) {
  var $anchor = $(this);
  $("html, body").animate(
    {
      scrollTop: $($anchor.attr("href")).offset().top + "px",
    },
    4500
  );
  event.preventDefault();
});
$("#scrollBtn").on("click", function (event) {
  var $anchor = $(this);
  $("html, body").animate(
    {
      scrollTop: $($anchor.attr("href")).offset().top + "px",
    },
    4500
  );
  event.preventDefault();
});

$(document).ready(function () {
  $("#testimonial-slider").owlCarousel({
    items: 3,
    itemsDesktop: [1000, 3],
    itemsDesktopSmall: [990, 2],
    itemsTablet: [768, 2],
    itemsMobile: [650, 1],
    pagination: true,
    navigation: false,
    autoPlay: true,
  });
});

$("#submitFormSub").on("submit", function (event) {
  event.preventDefault(); 
  var dataString = $(this).serialize(); 

  $.ajax({
    type: "POST",
    url: "sendEmailSub.php",
    data: dataString,
    success: function (data) {
      $("#submitFormSub")[0].reset(); 
    },
  }).done(function (data) {
    setTimeout(function () {
      alert("Thank you for subscribing to our Newsletter.");
    }, 2000);
  });
});

$("#submitForm").on("submit", function (event) {
  event.preventDefault(); 
  var dataString = $(this).serialize(); 

  $.ajax({
    type: "POST",
    url: "sendEmail.php",
    data: dataString,
    success: function (data) {
      $("#submitForm")[0].reset(); 
    },
  }).done(function (data) {
    setTimeout(function () {
      alert(
        "Form submitted successfully! We'll get back to you soon. Thank you."
      );
    }, 2000);
  });
});
