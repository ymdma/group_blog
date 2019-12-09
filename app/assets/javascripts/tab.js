// 右タブナビゲーション
// Link_toでの遷移後でも効くように.onに変更

// $(function(){
$(document).on("turbolinks:load", function(){

  $(document).on("click",".form_signin_tab",function(){
    $(".form_signin_two").toggleClass("hidden");
    $(".form_signup_two").addClass("hidden");
    $(".brank_div").toggleClass("hidden");
    $(".pop-up_lets-signup_two").fadeOut("hidden");

    $(".guide_demo-user").animate({padding:"10px 0px 0px 0px"},300,function(){
      $(".go-demo").animate({left: "72%",top: "30%"},300,);})
  });


  $(document).on("click",".form_signup_tab",function(){
    $(".form_signup_two").toggleClass("hidden");
    $(".form_signin_two").addClass("hidden");
    $(".brank_div").toggleClass("hidden");
    $(".pop-up_lets-signup_two").fadeOut("hidden");

    $(".guide_demo-user").animate({padding:"10px 0px 0px 0px"},300,function(){
      $(".go-demo").animate({left: "72%",top: "30%"},300,);})

  });

  $(document).on("click",".pop-up_lets-signup_two",function(){
    $(".pop-up_lets-signup_two").fadeOut();
    $(".form_signup_two").addClass("hidden");
  });

  $(document).on("click",".form_post_tab",function(){
    $(".form_group_two").addClass("hidden");
    $(".form_post_two").toggleClass("hidden");
  });
  $(document).on("click",".content_tab",function(){
    $(".contents_two").toggleClass("hidden");
  });

  $(document).on("click",".group_tab",function(){
    $(".form_post_two").addClass("hidden");
    $(".form_group_two").toggleClass("hidden");
  });


  // バリデーションに引っかかった時にpostフォームを開いた状態のままにする
  $(window).on('load',function(){
    if(document.URL.match("/posts")){
      $(".form_post_two").toggleClass("hidden");
    }
  });
  // バリデーションに引っかかった時にgroupフォームを開いた状態のままにする
  $(window).on('load',function(){
    if(document.URL.match("/groups")){
      $(".form_group_two").toggleClass("hidden");
    }
  });


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
