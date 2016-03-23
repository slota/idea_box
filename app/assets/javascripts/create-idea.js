function createIdea(){
  $('#create-idea').on('click', function(){
    var postParams = {
      name: $("#post-name").val(),
      description: $("#post-description").val()
    }
    $.ajax({
      type:    "POST",
      url:     "/api/v1/ideas",
      data:    postParams,
      success: function(newPost) {
        $("#post-name").val(""),
        $("#post-description").val(""),
        $('.ideas-list').empty(),
        fetchIdeas()
      },
      error: function(xhr) {
        console.log(xhr)
      }
    })
  })
}
