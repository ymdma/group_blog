$(document).on("turbolinks:load", function(){


  function buildHTML(apost){
    var img = apost.image ? `${apost.image}` : "";
    var html = `
<div class="content" id="${apost.id}">
<div class="post_date">
<p class="post_date">${apost.date}</p>
</div>
<div class="content_title">
<h3>${apost.title}</h3>
</div>
<div class="content_text">
<pre>
<p>${apost.content}</p>
<div class="clear"></div>
</pre>
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
      data.forEach(function(apost) {
        // $("body").append(apost.title)
        // $("body").append(apost.name)

        insertHTML = buildHTML(apost);
        $(".contents_three").append(insertHTML);
        // alert(d.title+d.content)

      })
    })
    .fail(function(){
      alert('コンテンツの取得に失敗しました');
    })

    return false;
  });



// showページへの遷移

  $(".contents_three").click(function(){
    $(".content").each(function(){
      $(this).click(function(){
        let post = $(this).attr("id")

        window.location.href =  "/posts/" + post
      });
    })
  });

});
