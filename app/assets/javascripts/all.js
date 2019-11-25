$(document).on("turbolinks:load", function(){

  function buildHTML(post){
    var img = post.image ? `${post.image}` : "";
    var html = `
                <div class="content" id="${post.id}">
                  <div class="content_title">
                    <h3>${post.title}</h3>
                  </div>

                  <div class="content_text">
                    <p>${post.content}</p>
                    <div class="clear"></div>
                  </div>
                  <div class="content_image">
                    <img src="${img}">
                  </div>
                </div>
                `
                // console.log(html)
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
      // console.log(data)
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

  $(".contents_three").click(function(){
    $(".content").each(function(){
      $(this).click(function(){
        let post = $(this).attr("id")
        window.location.href =  "/posts/" + post
      })
    })
  })




});
