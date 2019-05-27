/*
Toma el document
*/
$(document).ready(function(){
  /*define una fucion para cuando se hace scroll en el dom.*/
  $(window).scroll(function(){
    /*Cuando se hace scroll de arriba hacia abajo*/
    scroll = $(window).scrollTop();
    if ($(window).width() > 480) {
      if (scroll > 100) {
        $(".menu").css({"background":"#fff"});
        $(".menu").css({"padding":"5px 0"});
        $(".menu").addClass("shadow");/*esta clase shadow hay que definirla en el .css*/
        $("nav ul li").css({"color":"#000"});
        $(".logo").css({"color":"#000"});
      }else{
        $(".menu").css({"background":"transparent", "padding":"20px 0"});
        $(".menu").removeClass("shadow");
        $("nav ul li").css({"color": "#fff"});
        $(".logo").css({"color":"#fff"});
      }
    }
  })
})
