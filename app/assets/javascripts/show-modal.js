// $( document ).on('turbolinks:load', function() {



$(function(){


});

// 投稿削除の確認用モーダル
$(function(){

  // IN
  $(document).on("click",".show_modal_open",function(e){
    // $(".post-modal_one").toggleClass("hidden")
    e.preventDefault();
    $(".post-modal_one").fadeIn("fast")

  });

  // OUT
  $(document).on("click",".post-modal_n",function(){
    // $(".post-modal_one").toggleClass("hidden")
    $(".post-modal_one").fadeOut("fast")
  });
});

