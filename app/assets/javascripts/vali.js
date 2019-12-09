
// // バリデーションひっかかる→ボタン無効化 // //
$(document).on("turbolinks:load", function(){


  // var ValiRegex = '<div class="vm_regex">＊正しく入力してください</div>'
  var ValiPresence = '<div class="vm_presence">＊入力されていない項目があります</div>'
  var ValiConfirm = '<div class="vm_presence">＊パスワードが一致しません</div>'
  var ValiOnlyIntName = '<div class="vm_presence">＊数字のみでの登録はできません</div>'

  // // 正規表現
  // function validationRegex(v1,v2){
  //   $(v1).append(ValiRegex);
  //   $(v2).prop("disabled", true);
  // }
  // 空を除外
  function validationPresence(v1,v2){
    $(v1).append(ValiPresence);
    $(v2).prop("disabled", true);
  }
  function validationConfirm(v1,v2){
    $(v1).append(ValiConfirm);
    $(v2).prop("disabled", true);
  }
  function validationOnlyIntName(v1,v2){
    $(v1).append(ValiOnlyIntName);
    $(v2).prop("disabled", true);
  }



// サインインフォームのバリデーション //
  $(".form_signin").on("submit",function(e){

    // メール 空NG
    if ( $(".field-signin-input_email input").val() == "" )
    {
      e.preventDefault();

      validationPresence(".em_signin","#signin_submit")
    }
    // パスワード 空NG
    else if ( $(".field-signin-input_pass input").val() == "" )
    {
      validationPresence(".em_signin","#signin_submit")
    }
    // // メールの正規表現
    // else if( !$(this).val().match(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i) )
    // {
    //   validationRegex(".em_signin","#signin_submit")
    // }

  });


  // // サインアップフォームのバリデーション //
  $(".form_signup").on("submit",function(e){

    var password = $(".field-signup-input_pass input").val();
    var passwordConfirm = $(".field-signup-input_pass_conf input").val();
    var userName = $(".field-signup-input_name input").val()

    // メール 空NG
    if ( $(".field-signup-input_email input").val() == "" )
    {
      e.preventDefault();
      validationPresence(".em_signup","#signup_submit")
    }

    // パスワード 空NG
    else if( $(".field-signup-input_pass input").val() == "" )
    {
      validationPresence(".em_signup","#signup_submit")
    }

    // ユーザ名 空NG
    else if( userName == "" )
    {
      validationPresence(".em_signup","#signup_submit")
    }

    // パスワード 再確認の一致
    else if( password != passwordConfirm )
    {
      validationConfirm(".em_signup","#signup_submit")
    }

    // ユーザ名 数値のみはNG
    else if(! userName.match(/[\D]/ ) )
    {
      e.preventDefault();
      validationOnlyIntName(".em_signup","#signup_submit")
    }

  });


  // ユーザネーム変更のポップアップ用バリデーション //
  $(".user_update-pop_one").on("submit",function(e){

    var userName = $("input.text_field_user_name-edit").val()

    // 空NG
    if ( userName == "" )
    {
      e.preventDefault();
      validationPresence(".em_user-edit","#user-edit_submit")
    }

    // 数値のみNG
    else if (! userName.match(/[\D]/ ) )
    {
      alert("aaaa")
      e.preventDefault();
      validationOnlyIntName(".em_user-edit","#user-edit_submit")
    }
  });

  // グループ作成のバリデーション //
  $(".form_group_three").on("submit",function(e){
    var groupName = $("input.new-group_name").val()

    // グループ名 空NG
    if ( groupName == "" )
    {
      e.preventDefault();
      validationPresence(".em_group-create","#form_group_submit")
    }

    // グループ名 数字のみNG
    else if(! groupName.match(/[\D]/ ) )
    {
      e.preventDefault();
      validationOnlyIntName(".em_group-create","#form_group_submit")
    }
  });

});



// keyupでボタン無効化を解除 //
$(document).on("turbolinks:load", function(){

  function keyupDeKaijo(dom1,dom2){
    $(dom1).prop("disabled", false);
    $(dom2).children().empty()
  }

  // サインイン
  $(document).on("keyup",function(){
    keyupDeKaijo("#signin_submit",".em_signin")
  })
  // サインアップ
  $(document).on("keyup",function(){
    keyupDeKaijo("#signup_submit",".em_signup")
  })

  // ユーザ名の変更 ポップアップ
  $(document).on("keyup",function(){
    keyupDeKaijo("#user-edit_submit",".em_user-edit")
  })

  // ユーザ名の変更 ポップアップ
  $(document).on("keyup",function(){
    keyupDeKaijo("#user-edit_submit",".em_user-edit")
  })

  // グループ名
  $(document).on("keyup",function(){
    keyupDeKaijo("#form_group_submit",".em_group-create")
  })

});



// $(document).on("turbolinks:load", function(){

//   if(バリデーション条件)
//   {
//     // 処理
//     $(どこに追加するか).append(変数でエラーメッセージ)
//     $("#sign_in_submit").prop("disabled", true);

//   }



// });