$(document).on("turbolinks:load", function(){

  function buildHTML(post){

    var html = `
                <div class="content">
                  <div class="content_title">
                    <h3>${post.title}</h3>

                    <div class="content_name">
                      <h4>${post.name}</h4>

                    <div class="content_text">
                      <p>${post.content}</p>
                      <div class="clear">
                    <div class="content_image">
                </div>
                `
    return html
  }

  // $(document).on("click",".group_radio-btn", function(){
  //   $(".contents").remove();
  // });


  $("#groups_all").click(function(){
    var url = location.href
    // var all = $(this).val
    // alert(all)
    // console.log(all)
    $.ajax({
      type: "GET",
      url: url,
      data: {group: "all"},
      dataType: "json"
    })

    .done(function(data){
      $(".contents_three").empty()
      data.forEach(function(post) {
        // $("body").append(post.title)
        // $("body").append(post.name)

        insertHTML = buildHTML(post);
        $(".contents_three").append(insertHTML);
        // alert(d.title+d.content)
      })
    })
    .fail(function(){
      alert('コンテンツの取得に失敗しました');
    })

    // return false;
  });



  // $("#bbbttt").click(function(){
  //   if(confirm("投稿してもよろしいですか？")){
  //   } else {
  //     return false
  //   }
  // })
});