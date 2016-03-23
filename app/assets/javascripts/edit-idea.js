function editIdea(){
  // $('#post-name').on('click', function(){
  $('.ideas-list').delegate('#name','click', function(){
    var editLine = "<input id='name' type ='text' value ='" + $(this).text() + "'></input"
    debugger;
    // var $idea = $(this).closest(".idea")
    //   $.ajax({
    //   type: 'DELETE',
    //   url: 'api/v1/ideas/'+ $idea.children(".delete-idea").attr("data-id"),
    //   success: function() {
    //     $idea.remove()
    //   },
    //   error: function(xhr) {
    //     console.log(xhr)
    //   }
    // })
  })
}
