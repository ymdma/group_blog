
// $(document).on("turbolinks:load", function(){
$(function(){

// 読み込み時のフェードイン

  // $('head').append(
  //   '<style>main_wrap{display:none;}'
  //   );
  //   $(window).on("load", function() {
  //   $('body').delay(600).fadeIn("500ms");
  //   });



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
  $(".flash_one").fadeOut(4000);

  // modal

  // $(".group_d-list a").mouseover(function(){
  //   // alert("ok")
  //   $(".modal_one,modal").toggleClass("hidden");
  // });




});



$(function() {
  var $textarea = $(".edit_text textarea");
  var lineHeight = parseInt($textarea.css('lineHeight'));
  $textarea.on('input', function(e) {
    var lines = ($(this).val() + '\n').match(/\n/g).length;
    $(this).height(lineHeight * lines);
  });
});