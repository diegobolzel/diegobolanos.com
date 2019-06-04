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
        $("nav ul li a").css({"color":"#000", "text-decoration":"none"});
        $(".logo").css({"color":"#000"});
      }else{
        $(".menu").css({"background":"transparent", "padding":"20px 0"});
        $(".menu").removeClass("shadow");
        $("nav ul li a").css({"color": "#fff", "text-decoration":"none"});
        $(".logo").css({"color":"#fff"});
      }
    }

    if ($(window).width() < 480) {
      if (scroll > 100) {
        $(".menu").css({"background":"#fff"});
        $(".menu").css({"padding":"5px 0"});
        $(".menu").addClass("shadow");/*esta clase shadow hay que definirla en el .css*/
        $("nav ul li a").css({"color":"#000", "text-decoration":"none"});
        $(".logo").css({"color":"#000"});
      }else{
        $(".menu").css({"background":"transparent", "padding":"20px 0"});
        $(".menu").removeClass("shadow");
        $("nav ul li a").css({"color": "#fff", "text-decoration":"none"});
        $(".logo").css({"color":"#fff"});
      }
    }
  })

  /*Aparece el menu Responsive.
  Con la funcion .slideToggle muestra y oculta el menu nav
  cuando se da click sobre el menu-icon. Es una maravilla.
   */
  if ($(window).width() < 800) {
$('.menu-icon').on('click', function(){
  $('nav').slideToggle();
})
  }

})
