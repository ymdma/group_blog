// 投稿を表示するグループの選択 /選んだ要素の色を変える/@groups.scss
$(document).on("turbolinks:load", function(){

  $(".groups label").click(function(){
    var notClicked =  $(".groups label").not(this);
    $(this).css("background","#ff0affb2");
    notClicked.css("background","#888888");
  });

  // $(document).on("click",".group_name",function(){
  //   var notClicked =  $(".group_name").not(this);

  //   $(this).css("background","#ff0affb2");
  //   notClicked.css("background","#888888");
  // });

  // $(document).on("click",".hoge",function(){
  //   var notClicked =  $(".hoge").not(this);

  //   $(this).css("background","#ff0affb2");
  //   notClicked.css("background","#888888");
  // });


});

// 投稿するグループの選択
// $(function(){
$(document).on("turbolinks:load", function(){
  $(document).on("click",".form_post_group-btns label",function(){
    var notClicked =  $(".form_post_group-btns label").not(this);

    $(this).css("background","#b10affb2");
    notClicked.css("background","#9e9e9e");
  });
});

// 削除するグループの選択 /確認-フェードで消える/@groups.scss
// $(function(){
//   $(".group_d-list").click(function(){
//     var notClicked =  $(".group_d-list").not(this);

//     $(this).css("background","#ff0affb2");
//     notClicked.css("background","#888888");
//   });

//   // グループの削除アニメーション  * 効いていない *
//   // $(".group_d-list").click(function(){
//   //   if(confirm("このグループを削除します")){
//   //     $(this).css("type","checked");
//   //     $(this).animate({
//   //       height:"toggle",
//   //       opacity:"toggle"
//   //     },300);

// });


  // $("#bbbttt").click(function(){
  //   if(confirm("投稿してもよろしいですか？")){
  //   } else {
  //     return false
  //   }
  // })





  // URL変える！ってコード

  // var path = location.pathname
  // if (何ちゃらの時例えば、どこにいる時){
  //   window.location.pathname = "/" //ルートに遷移させる
  // }

$(function(){
  $(".del-user > p").mouseenter("",function(){
    var notSelect =  $(".del-user P").not(this);

    $(this).prevAll().css("filter","contrast(1)")
    notSelect.prevAll(img).css("filter","contrast(0.1)")
  })
  $(".del-user > p").mouseleave("",function(){
    $(".del-user > img").css("filter","contrast(0.1)")
    // notSelect.css("opacity","1")

  })
})