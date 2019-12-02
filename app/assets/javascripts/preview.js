// $( document ).on('turbolinks:load', function() {

//   function readURL(input) {
//     if (input.files && input.files[0]) {
//       var reader = new FileReader();

//       reader.onload = function (e) {
//         $('#avatar_img_prev').attr('src', e.target.result);
//       }
//       reader.readAsDataURL(input.files[0]);
//     }
//   }

//   $("#post_img").change(function(){
//     $('#avatar_img_prev').removeClass('hidden');
//     $('.avatar_present_img').remove();
//     readURL(this);
//   });
// });


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
      };
    })(file);
    reader.readAsDataURL(file);

  });
});