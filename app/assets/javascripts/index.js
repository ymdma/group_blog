$(function(){

// 読み込み時のフェードイン

  $('head').append(
    '<style>body{display:none;}'
    );
    $(window).on("load", function() {
    $('body').delay(600).fadeIn("500ms");
    });



  // 未サインイン時の誘導ポップアップ
  $(".pop-up_lets-signup").click(function(){
    // alert("ok")
    $(".pop-up_lets-signup").animate
    ({
      // width:"toggle",
      opacity:"toggle"
      },300)

  });

  // フラッシュ
  // $("span.alert").fadeOut(4500);
  $(".flash").fadeOut(4500);

});



