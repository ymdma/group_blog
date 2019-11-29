// ヘッダーナビ

$(function(){

  $(document).on("click",".header_nav_signin",function(){
    $(".form_signin_two").toggleClass("hidden");
    
  });

  $(document).on("click",".header_nav_signup",function(){
    $(".form_signup_two").toggleClass("hidden");
  });


  $(document).on("click",".header_nav_post",function(){
    $(".form_post_two").toggleClass("hidden");
  });

  $(document).on("click",".header_nav_contents",function(){
    $(".contents_two").toggleClass("hidden");
  });

  $(document).on("click",".mk_group_btn",function(){
    $(".form_group_two").toggleClass("hidden");
  });

});
