
// ユーザー追加

$(document).on("turbolinks:load", function(){
  $(".group_d-list").on("click", function(){

    group_id = $(this).children().attr("id");
    group_url = /groups/ + group_id
    var destroyTargetGroup = $(this) //ボタン消す用
    var idName = $(this).children().attr("id") //ボタン消す用
    // console.log(idName);

    $(".group-modal_one").fadeIn();
    $(".group-modal_btns").on("click", ".group-modal_d", function(){
      // alert("ok")

      $.ajax({
              type: "post",
              url: group_url,
              data: {"_method": "delete"},
              dataType: "json"
            })

    // var idName = `groups_${groupName}`
    // console.log(idName);

    $(destroyTargetGroup).remove();
    $(`#group_${idName}`).remove()
    $(".group-modal_one").fadeOut();
    });

  });
  return false;
});
