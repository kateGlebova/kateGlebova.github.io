$(document).ready(function(){
  var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  var nav_top = Math.floor(h/10 - (h / 10 - 30) / 2)
  // $("#menu").css("top", nav_top)
    $("#nav").click(function(){
      img = $("#nav img")
      if (img.attr("src") == "img/menu") {
        $(img).fadeOut(100, function() {
          img.attr("src", "img/close").fadeIn()
        });
        $("#menu").toggle(200, "swing");
      }
    });

    $(this).click(function() {
      img = $("#nav img")
      if (img.attr("src") == "img/close") {
        img.fadeOut(100, function() {
          img.attr("src", "img/menu").fadeIn();
          $("#menu").toggle(200, "swing");
        })
      }
    })
});
