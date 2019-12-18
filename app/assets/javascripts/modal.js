// グループ削除の確認用モーダル

// $(function(){
$(document).on("turbolinks:load", function(){
  $(".group_d-list").on("click", function(){

    group_id = $(this).children().attr("id");
    group_url = /groups/ + group_id
    var destroyTargetGroup = $(this) //ボタン消す用
    var idName = $(this).children().attr("id") //ボタン消す用
    // console.log(idName);

    $(".modal_one").fadeIn();
    $(".modal_btns").on("click", ".modal_d", function(){
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
    $(".modal_one").fadeOut();
    });

  });
  return false;
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
// $(document).on("turbolinks:load", function(){

//   // 削除ボタンを押したらビューを読み込み直すためにリロード
// もう不要
//   $(".modal_d").on("click",function(){
//     window.location.href = "posts/index";
//     location.reload();
//     location.reload();
//   });
// });


// index, ユーザー名・プロフィールの変更モーダル
$(function(){
// $(document).on("turbolinks:load", function(){
  $(".use_name_edit-btn").on("click",function(){
    $(".user_update-pop_one").toggleClass("hidden")
  })
})


// グループユーザー名のリストをモーダルで出す// プロフィールも
// 何msボタンにマウスをのせていたらモーダル出現！とするのはどうかな？
// $(document).on("turbolinks:load", function(){
//   // var notClicked =  $(".groups label").not(this);
//   $(".group-btn_one label").on("mouseover",function(){
//     // alert("OK")
//     $(this).parent().parent().children("div").toggleClass("hidden")
//     // notClicked.parent().parent().children($("div")).addClass("hidden");
//   });
//   $(".group-btn_one label").on("mouseleave",function(){
//     $(this).parent().parent().children("div").toggleClass("hidden")
//   });
// })


// // フッター グループユーザーをクリックでプロフィールオープン
$(function(){
$(".footer_group_user-btn").on("click",function(){
  // var notClicked =  $(".footer_group_user-btn").not(this);
  $(this).parent().children("div.prof").toggleClass("hidden")
  });
});

// マウスオーバー時のみ出現
$(function(){
  $(".group-btn_one label").on("click",function(){
    var notClicked =  $(".group-btn_one label").not(this);
    // alert("OK")
    $(this).parent().parent().children("div").toggleClass("hidden")
    notClicked.parent().parent().children("div").addClass("hidden");
  });
  // ユーザーポップアップ
  // $(".group-btn_one label").on("mouseleave",function(){
  //   $(this).parent().parent().children("div").toggleClass("hidden")
  // });
});


// マウスオーバー時のみ出現
// $(document).on("turbolinks:load", function(){
//   // var notClicked =  $(".groups label").not(this);
//   $(".group-btn_one label").on("click",function(){
//     // alert("OK")
//     $(this).parent().parent().children("div").toggleClass("hidden")
//     // notClicked.parent().parent().children($("div")).addClass("hidden");
//   });
//   // ユーザーポップアップ
//   $(".group-btn_one label").on("mouseleave",function(){
//     $(this).parent().parent().children("div").toggleClass("hidden")
//   });
// })

// // // setTimeout
// $(document).on("turbolinks:load", function(){

//     setTimeout(function(){
//       $(".group-btn_one label").on("mouseover",function(){
//       $(this).parent().parent().children("div").toggleClass("hidden")
//       },1000)
//     });
// })


// // マウスオーバーでIN , その後残る , クリックで消える
// $(document).on("turbolinks:load", function(){

//   $(".group-btn_one label").on("mouseover",function(){
//     $(this).parent().parent().children("div").toggleClass("hidden")
//   })
//   // ユーザーポップアップ OUT
//   $(!".group_users").on("click",function(){
//     $(".group_users").removeClass("hidden")
//     $(".group_users").addClass("hidden")
//   });
//   $("body").on("click",function(){
//     $(".group_users").addClass("hidden")

//   });

// })

