
$(function(){

  $(".form_signin_tab").click(function(){
    $(".form_signin_two").toggleClass("hidden");
    $(".form_signup_two").addClass("hidden");
    $(".brank_div").toggleClass("hidden");
  });

  $(".form_signup_tab").click(function(){
    $(".form_signup_two").toggleClass("hidden");
    $(".form_signin_two").addClass("hidden");
    $(".brank_div").toggleClass("hidden");
  });

  $(".form_post_tab").click(function(){
    $(".form_post_two").toggleClass("hidden");
  });

  $(".contents_tab").click(function(){
    $(".contents_two").toggleClass("hidden");
  });

});
