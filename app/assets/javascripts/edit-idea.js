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
}
