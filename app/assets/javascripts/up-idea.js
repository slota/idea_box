function upIdea(){
  $('.ideas-list').delegate('.thumb-up-idea','click', function(){
    var $idea = $(this).closest(".idea")
      var newQuality = checkUp($idea.children("#quality").text())
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

var checkUp = function(quality){
  if (quality == "swill") {
    return "plausible"
  }
  else {return "genius"}
}
