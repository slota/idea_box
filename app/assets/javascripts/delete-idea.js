function deleteIdea(){
  $('.ideas-list').delegate('.delete-idea','click', function(){
    console.log("Im here")
    var $idea = $(this).closest(".idea")
      $.ajax({
      type: 'DELETE',
      url: 'api/v1/ideas/'+ $idea.attr("data-id"),
      success: function() {
        $idea.remove()
      },
      error: function(xhr) {
        console.log(xhr)
      }
    })
  })
}
