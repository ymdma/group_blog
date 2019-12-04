// ヘッダーナビ

// $(function(){
  // 未ログイン時の
  // $(document).on("click",".header_nav_signin",function(){
    //   $(".form_signin_two").toggleClass("hidden");

    // });

    // $(document).on("click",".header_nav_signup",function(){
      //   $(".form_signup_two").toggleClass("hidden");
      // });


$(document).on("turbolinks:load", function(){
  $(document).on("click",".header_nav_post",function(){
    $(".form_group_two").addClass("hidden");
    $(".form_post_two").toggleClass("hidden");
  });

  $(document).on("click",".header_nav_contents",function(){
    $(".form_post_two").addClass("hidden");
    $(".contents_two").toggleClass("hidden");
  });

  $(document).on("click",".mk_group_btn",function(){
    $(".form_group_two").toggleClass("hidden");
    $(".form_post_two").addClass("hidden");
  });

});
