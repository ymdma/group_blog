// 選んだ要素の色を変える（表示するグループの選択）
$(function(){
  $(".groups label").click(function(){
    var notClicked =  $(".groups label").not(this);
    $(this).css("background","#ff0affb2");
    notClicked.css("background","#888888");
  });
});

$(function(){
  $(".form_post_group-btns label").click(function(){
    var notClicked =  $(".form_post_group-btns label").not(this);
    $(this).css("background","#ff0affb2");
    notClicked.css("background","#888888");
  });
});
