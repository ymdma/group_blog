$(document).on("turbolinks:load", function(){

  function buildHTML(post){
    var img = post.image ? `${post.image}` : "";
    var html = `
<div class="content" id="${post.id}">
<p class="post_date">${post.date}</p>
<div class="content_name">${post.name}</div>
<div class="content_title">
<h3>${post.title}</h3>
</div>
<div class="content_text">
<pre><p>${post.content}</p></pre>
<div class="clear">
</div>
</div>
<div class="content_image">
<img src="${img}">
</div>
</div>
                `
    return html
  }

  // $(document).on("click",".group_radio-btn", function(){
  //   $(".contents").remove();
  // });


  $(".hoge").click(function(){
    var group = $(this).children().val()
    var url = location.href


    $.ajax({
      type: "GET",
      url: url,
      data: {group: group},
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

    return false;
  });

  $(".contents_three").click(function(){
    $(".content").each(function(){
      $(this).click(function(){
        let post = $(this).attr("id")
        // alert(post)
        window.location.href =  "/posts/" + post
      })
    })
  })

});


