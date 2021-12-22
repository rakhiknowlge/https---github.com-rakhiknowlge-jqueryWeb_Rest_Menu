$(document).ready(function(){
    var v=false;
    var x;
    $("button#vegon").click(function(){
        if(v == false){
           // $(".meat").hide();

           // first question
            $f=$(".fish").parent().parent().detach();
          //  x = $("li.fish").detach();
//alert($f.text());
            $(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>");

           // $(".meat").replaceWith("<li class='tofu'><em>tofuu</em></li>");
          
           $(".meat").after("<li class='tofu'><em>Tofu</em></li>");
           $m=$(".meat").detach();
//alert($m.text());

// add leaf only to Braised Delights
$(".tofu").parent().parent().addClass("veg_leaf");  
$(".tofu").parent().addClass("veg_noleaf");   // remove leaf from tofu, carrots
        

            v=true;}
        //alert("vege");
    
    }); // end button

    $("button#restoreme").click(function(){
        if(v == true){
           // $(".meat").show();
          //  $("body").prepend(x);

            $(".portobello").replaceWith("<li class='hamburger'><em>Hamburger</em></li>");
            
            // first Ans
            $(".menu_entrees li").first().before($f);
            
            
            $(".tofu").each(function (i){
                $(this).after($m[i]);
            });
            $(".tofu").parent().parent().removeClass("veg_leaf");
            $(".tofu").remove();

            
            
            
            
            v=false;  }
            //alert("restore");   
    
    }); // end button
   

    $("button#dt").click(function(){
     //  $(".menu_entrees").children().detach();

    // $(".menu_list").children().detach();
   // $f=$(".fish").parent().parent().detach();
    //alert($f);

   // no Use ($(".menu_list").children().first() );

  // $(".tofu").parent().parent().addClass("veg_leaf");



    });

   /*  $(".menu_entrees").children().detach();

    $(".menu_list").children().detach();

    $(".fish").parent().detach();
 */


  //  $("#slide_me_down").each( function(){
  //      slideDown();

 //   }); // end each ()

     
   $('#slide_me_down').slideDown();
    $('#slide_me_dow').slideDown();
   
    $("#slidep").click(function(){
       $("#slide_me_dow").slideUp();
        }); // end button
    
});// end document ready
