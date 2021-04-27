$(function(){

   //let viewportWidth = $(window).width();
   //console.log(viewportWidth);
   //fade show and hide input search

   /*$(".search button").on('mouseover', function(){
      $(".search input").fadeIn(900);
   });

   $(".search input").on('mouseout', function(){
      $(this).fadeOut(900, function(){
         $(this).removeAttr('style');
      });
   });*/

   //если на тачскринах телефонов и планшетов - вернуть инпут поиска в поток
   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      $(".search input").css({"display":"inline-block", "position":"static"});

   }
   //если на компах с мышью - показать инпут поиска по hover
   else {
      $(".search button").on('mouseover', function(){
         $(".search input").fadeIn(900);
      });

      $(".search input").on('mouseout', function(){
         $(this).fadeOut(900, function(){
            $(this).removeAttr('style');
         });
      });
   }

   //не работает, submit сразу шлет get-запрос
   //нельзя вешать красоты на click по submit - бесполезно
   
   /*$(".search button").on('click', function(){
      console.log('click');
      $(".search input").fadeToggle(900, function(){

         if( $(this).css('display') === 'none' ){
            $(this).removeAttr('style');
         }
      });
   });*/


   //burger menu animation
   $('.menu__btn').on('click', function(){
      
      $('.menu-adapt').slideToggle(900, function(){
         
         if($(this).css('display') === 'block'){
            $('.menu__btn').html('<i class="fas fa-times"></i>');
         }else{
            $('.menu__btn').html('<i class="fas fa-bars"></i>');
            $(this).removeAttr('style');
         }
      });
      
   });

   //services-item active animation
   $('.services__item').on('mouseover', function(){
      $(this).children('.services__item-logo').addClass("active");
      $(this).children('.btn_black').addClass("active");
   });
   $(".services__item").on('mouseout', function(){
      $(this).children('.services__item-logo').removeClass("active");
      $(this).children('.btn_black').removeClass("active");
   });

});