function fetchIdeas(){
  $.ajax({
    type: "GET",
    url: "api/v1/ideas",
    success: function(allIdeas){
      renderIndexIdeas(allIdeas)
    }
  })
}

function renderIndexIdeas(allIdeas){
  var index = allIdeas.map(function(idea){
    return(
      "<div class='idea'>"
      + idea.name
      + " "
      + idea.description
      + " "
      + idea.quality
      + "<button type='button' class='delete-idea' data-id='"+ idea.id +"'>Delete</button>"
      + "</div>"
    )
  })
  $('.ideas-list').append(index)
  // $('.delete-idea').on('click', function(){
  //   console.log("Im here")
  //   console.log(this)
  // })
  // itterate over the array of ideas
  // // map each idea how you want it to be displayed
  // append it to parent div
}
