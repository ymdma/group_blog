
// // PostForm 投稿時のプレビュー
$(function(){
  $('.image_prev').change(function(e){
    //ファイルオブジェクトを取得する
    var file = e.target.files[0];
    var reader = new FileReader();

    //画像でない場合は処理終了
    if(file.type.indexOf("image") < 0){
      alert("画像ファイルを指定してください。");
      return false;
    }

    // //アップロードした画像を設定する
    reader.onload = (function(file){
      return function(e){
        $("#post_image-preview").attr("src", e.target.result);
        $("#post_image-preview").attr("title", file.name);
        $(".prev-del").removeClass("hidden");
        $(".form_post_image_prev").removeClass("hidden");
      };
    })(file);
    reader.readAsDataURL(file);

  });

  // バッテン押したら隠す・消す
  $(".prev-del").on("click",function(){

    $(".form_post_image_prev").addClass("hidden");
    // $(".prev-del").addClass("hidden");
    $(".image_prev").val("")

  });


  // Editページ / 画像の削除ボタン
  $("label.post-edit_remove-btn").on("click",function(){
    // alert("aaa")
    $(".image_prev").fadeOut("hidden");
    // $(".prev-del").addClass("hidden");
    $(".image_prev").val("")
    // $(".post-edit_change-image").removeClass("hidden")
    $(this).parent().fadeOut("hidden")

    // 「やっぱりやめた」ボタンを作りたい




  //   // 未実装
  //   // 元の画像の削除 → 違う画像のアップロード 用記述
  // $("label.post-edit_remove-btn").on("click",function(){
  //   // alert("aaa")
  //   $(".image_prev").fadeOut("hidden");
  //   // $(".prev-del").addClass("hidden");
  //   $(".image_prev").val("")
  //   $(".post-edit_change-image").removeClass("hidden")
  //   $(this).parent().fadeOut("hidden")


  });
});


// $(function(){

// });
