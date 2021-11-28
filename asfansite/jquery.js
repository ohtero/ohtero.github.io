$(document).ready(function(){
  $(".hiddenimage").animate({opacity:1}, 5000, function(){
    $("#entertext1").animate({opacity:1}, 2000, function(){
      $("#entertext2").animate({opacity:1}, 2000, function(){
        $("#entertext3").animate({opacity:1}, 2000,function(){
          $("#entertext4").animate({opacity:1}, 2000, function(){
            $("#entertext5").animate({opacity:1}, 2000, function(){
              $("#entertext6").animate({opacity:1}, 1000, function(){
                $("#enterLogo").animate({opacity:1}, 2000);
              });
            });
          });
        });
      });
    });
  });
});
