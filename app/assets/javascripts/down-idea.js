function downIdea(){
  $('.ideas-list').delegate('.thumb-down-idea','click', function(){
    var $idea = $(this).closest(".idea")
      var newQuality = checkDown($idea.children("#quality").text())
      $.ajax({
      type: 'PATCH',
      url: 'api/v1/ideas/'+ $idea.children(".delete-idea").attr("data-id"),
      data: {quality: newQuality},
      success: function() {
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

var checkDown = function(quality){
  if (quality == "genius") {
    return "plausible"
  }
  else {return "swill"}
}
