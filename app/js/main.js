$(function () {

$('.menu__btn').on('click',function(){
  $('.rightside-menu').removeClass('rightside-menu--close');
});
  $('.rightside-menu__close').on('click', function () {
    $('.rightside-menu').addClass('rightside-menu--close');
  });


  $('.down').on('click', function () {
    $('.up , .down , .rightside-menu__links').addClass('open');
  });
  $('.up').on('click', function () {
    $('.up , .down , .rightside-menu__links').removeClass('open');
  });
  $('.down1').on('click', function () {
    $('.up1 , .down1 , .rightside-menu__links1').addClass('open');
  });
  $('.up1').on('click', function () {
    $('.up1 , .down1 , .rightside-menu__links1').removeClass('open');
  });

})