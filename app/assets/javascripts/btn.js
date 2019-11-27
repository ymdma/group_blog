// 投稿を表示するグループの選択 /選んだ要素の色を変える/@groups.scss
$(function(){
  $(".groups label").click(function(){
    var notClicked =  $(".groups label").not(this);

    $(this).css("background","#ff0affb2");
    notClicked.css("background","#888888");
  });
});

// 投稿するグループの選択
$(function(){
  $(".form_post_group-btns label").click(function(){
    var notClicked =  $(".form_post_group-btns label").not(this);

    $(this).css("background","#ff0affb2");
    notClicked.css("background","#888888");
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