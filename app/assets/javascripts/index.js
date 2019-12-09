
// $(document).on("turbolinks:load", function(){
$(function(){

// 読み込み時のフェードイン

  // $('head').append(
  //   '<style>main_wrap{display:none;}'
  //   );
  //   $(window).on("load", function() {
  //   $('body').delay(600).fadeIn("500ms");
  //   });

  // フラッシュ
  $(".flash_one").fadeOut(2000);
  });

$(function() {
  var $textarea = $(".edit_text textarea");
  var lineHeight = parseInt($textarea.css('lineHeight'));
  $textarea.on('input', function(e) {
    var lines = ($(this).val() + '\n').match(/\n/g).length;
    $(this).height(lineHeight * lines);
  });
});