// グループ削除の確認用モーダル
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
});

$(document).on("turbolinks:load", function(){

  $(".modal_n").click(function(){
  $(".modal_one").fadeOut("hidden")
  });
});
