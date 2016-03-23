function editIdea(){
  // $('#post-name').on('click', function(){
  $('.ideas-list').delegate('#name','click', function(){
    var editLine = "<input id='name-edit' type ='text' value ='" + $(this).text() + "'></input>"
    $(this).closest("#name").replaceWith($(editLine))
  })

  $('.ideas-list').delegate('#description','click', function(){
    var editLine = "<input id='description-edit' type ='text' value ='" + $(this).text() + "'></input>"
    $(this).closest("#description").replaceWith($(editLine))
  })

  $('.ideas-list').delegate('#name-edit','keypress', function(e){
    if (e.which == 13) {
      var $idea = $(this).closest(".idea")
      var newName = $(this).val()
      // debugger;
      $.ajax({
        type: 'PATCH',
        url: 'api/v1/ideas/' + $idea.children(".delete-idea").attr("data-id"),
        data: {name: newName},
        success: function() {
          $('.ideas-list').empty(),
          fetchIdeas()
        },
        error: function(xhr) {
          console.log(xhr)
        }
      })

    }
  })

  $('.ideas-list').delegate('#description-edit','keypress', function(e){
    if (e.which == 13) {
      var $idea = $(this).closest(".idea")
      var newDescription = $(this).val()
      // debugger;
      $.ajax({
        type: 'PATCH',
        url: 'api/v1/ideas/' + $idea.children(".delete-idea").attr("data-id"),
        data: {description: newDescription},
        success: function() {
          $('.ideas-list').empty(),
          fetchIdeas()
        },
        error: function(xhr) {
          console.log(xhr)
        }
      })
    }
  })
}
