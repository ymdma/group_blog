// 右タブナビゲーション

$(function(){

// Link_toでの遷移後でも効く
  $(document).on("click",".form_signin_tab",function(){
        $(".form_signin_two").toggleClass("hidden");
    $(".form_signup_two").addClass("hidden");
    $(".brank_div").toggleClass("hidden");
  });


  $(document).on("click",".form_signup_tab",function(){
    $(".form_signup_two").toggleClass("hidden");
    $(".form_signin_two").addClass("hidden");
    $(".brank_div").toggleClass("hidden");
  });

  $(document).on("click",".form_post_tab",function(){
    $(".form_post_two").toggleClass("hidden");
  });
  $(document).on("click",".content_tab",function(){
    $(".contents_two").toggleClass("hidden");
  });

  $(document).on("click",".group_tab",function(){
    $(".form_group_two").toggleClass("hidden");

  });

// Link_toでの遷移後に効かなくなる
  // $(".form_signin_tab").click(function(){
  //   $(".form_signin_two").toggleClass("hidden");
  //   $(".form_signup_two").addClass("hidden");
  //   $(".brank_div").toggleClass("hidden");
  // });

  // $(".form_signup_tab").click(function(){
  //   $(".form_signup_two").toggleClass("hidden");
  //   $(".form_signin_two").addClass("hidden");
  //   $(".brank_div").toggleClass("hidden");
  // });

  // $(".form_post_tab").click(function(){
  //   $(".form_post_two").toggleClass("hidden");
  // });

  // // $(".contents_tab").click(function(){
  // //   $(".contents_two").toggleClass("hidden");
  // // });

  // $(".group_tab").click(function(){
  //   $(".form_group_two").toggleClass("hidden");
  // });

});
