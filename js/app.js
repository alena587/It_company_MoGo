$(function(){
    var menu = $("#menu"),
        headerH = $("#header").innerHeight(),
        scrollOffset = $(window).scrollTop();


    /*Menu fixed*/

        checkScroll(scrollOffset);
    $(window).on("scroll", function() {

        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
  
});

    function checkScroll(scrollOffset){

        if(scrollOffset >= headerH){
            menu.addClass("fixed");
        } else {
            menu.removeClass("fixed");
        }
    }

    /*Smooth scroll*/

    $("[data-scroll]").on("click", function(event){
        event.preventDefault();

        var $this = $(this),
            blockId = $this.data('scroll'),
            blockOffset = $(blockId).offset().top;
    

        $("html, body").animate({
            scrollTop: blockOffset
        },500);
    });

     /*Menu nav toggle*/

     $("#nav-toggle").on("click", function(event){
        event.preventDefault();

        $(this).toggleClass("active");
        $("nav").toggleClass("active");
        menu.toggleClass("active");
     });


});
