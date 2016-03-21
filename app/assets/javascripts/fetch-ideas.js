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
      "<div>"
      + idea.name
      + "</div>"
    )
  })
  $('.ideas-list').append(index)
  // itterate over the array of ideas
  // // map each idea how you want it to be displayed
  // append it to parent div
}
