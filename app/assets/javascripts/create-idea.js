function createIdea(){
  $('#create-idea').on('click', function(){
    var postParams = {
      post: {
        name: $("#post-name").val(),
        description: $("#post-description").val()
      }
    }
    $.ajax({
      type:    "POST",
      url:     "/api/v1/ideas",
      data:    postParams,
      success: function(newPost) {
        debugger;
        $("#post-name").val(""),
        $("#post-description").val(""),
        fetchIdeas()
      },
      error: function(xhr) {
        console.log(xhr)
      }
    })
  })
}
