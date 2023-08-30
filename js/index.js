$(function(){
// welcoming texts display
    $("#p2").hide();
    $("#read").click(function(){
        $("#p2").slideDown();
        $("#read").hide();
        $("#less").show();
        
    });
    $("#less").click(function(){
        $("#p2").slideUp();
        $("#read").show();
    });


// marketing designs
    $("#mrkt01").css("opacity","0.3");
    $("#mrkt01").on({
        mouseenter:function(){
            // $(this).css({"opacity":"1","fadeIn()":"5000"});
            $(this).animate({"width":"300px","opacity":"1"},"7000");
            $("#mrkt02").animate({"opacity":".2"},"7000");
        },
        mouseleave:function(){
            $("#mrkt01").animate({"width":"200px"},"2000");
            $("#mrkt01").animate({"opacity":".2"},"2000");
            $("#mrkt02").animate({"opacity":"1"},"2000");
        }  
    });
    $("#mkrt03").css("opacity",".2");



});