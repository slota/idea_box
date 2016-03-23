function searchIdeas() {
  $('#search').keyup(function() {
    var $rows = $('.idea');
    var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
    $rows.show().filter(function() {
      var text = $(this).children().not("#buttons").text().replace(/\s+/g, ' ').toLowerCase();
      return !~text.indexOf(val);
    }).hide();
  })
}
