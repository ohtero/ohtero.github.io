$(document).ready(function(){
  $(".hiddenimage").animate({opacity:1}, 5000, function(){
    $("#entertext1").fadeIn(3000, function(){
      $("#entertext2").fadeIn(3000, function(){
        $("#entertext3").fadeIn(3000,function(){
          $("#entertext4").fadeIn(3000, function(){
            $("#entertext5").fadeIn(3000, function(){
              $("#entertext6").fadeIn(3000);
            });
          });
        });
      });
    });
  });
});
