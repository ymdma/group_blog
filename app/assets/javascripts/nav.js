
$(function(){

  $(".header_nav_signin").click(function(){
    $(".form_signin_two").toggleClass("hidden");
  });

  $(".header_nav_signup").click(function(){
    $(".form_signup_two").toggleClass("hidden");
  });

  $(".header_nav_post").click(function(){
    $(".form_post_two").toggleClass("hidden");
  });

  $(".header_nav_contents").click(function(){
    $(".contents_two").toggleClass("hidden");
  });

});
