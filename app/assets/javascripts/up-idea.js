function upIdea(){
  $('.ideas-list').delegate('.thumb-up-idea','click', function(){
    var $idea = $(this).closest(".idea")
      checkUp()
      $.ajax({
      type: 'PATCH',
      url: 'api/v1/ideas/'+ $idea.children(".delete-idea").attr("data-id"),
      success: function() {
        $idea.remove()
      },
      error: function(xhr) {
        console.log(xhr)
      }
    })
  })
}
var checkUp = function(){
  debugger;
}
