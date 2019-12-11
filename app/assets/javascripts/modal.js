// グループ削除の確認用モーダル

// $(function(){
$(document).on("turbolinks:load", function(){
  $(".group_d-list").on("click", function(){

    group_id = $(this).children().attr("id");
    group_url = /groups/ + group_id

    $(".modal_one").fadeIn();
    $(".modal_btns").on("click", ".modal_d", function(){
      // alert("ok")

      $.ajax({
              type: "post",
              url: group_url,
              data: {"_method": "delete"},
              dataType: "json"
            })
    });
  });
  // return false;
});


// モーダルの取り消しボタン選択時
// $(function(){
$(document).on("turbolinks:load", function(){
  // var notClicked =  $(".groups label").not(this);
  $(".modal_n").on("click",function(){
    $(".modal_one").fadeOut("hidden")
  });
});



  // ridirect_toが効かない場合、回避策
// $(function(){
$(document).on("turbolinks:load", function(){

  // 削除ボタンを押したらビューを読み込み直すためにリロード
  $(".modal_d").on("click",function(){
    window.location.href = "posts/index";
    location.reload();
    location.reload();
  });
});


// index, ユーザー名の変更モーダル
$(function(){
// $(document).on("turbolinks:load", function(){
  $(".use_name_edit-btn").on("click",function(){
    $(".user_update-pop_one").toggleClass("hidden")
  })
})
