// Your Code Here!


var myGroceries = [];

var renderGroceries = function() {
  $groceries = $('.show-groceries');
  if( myGroceries.length === 0) {
    $groceries.html('No groceries')
  } else {
    var htmlString = '<ul>'
    myGroceries.each( function(el){
      htmlString = htmlString + '<li>' + el.toString() + '</li>';
    });
    htmlString = htmlString + '</ul>';
    $groceries.html(htmlString);
  }
}

$(document).ready(function() {

  $('.submit-new-grocery').click( function(event) {
    var inputText = $('.add-grocery').val();
    console.log(inputText);
    if( inputText !== '') {
      myGroceries.push( inputText );
    }

    renderGroceries();
  });

  $('.delete-grocery').click( function(event) {
  });

  $('.show-groceries li').on('click', function(event) {
    var deleteText = $(this).val();
    myGroceries.splice( myGroceries.indexOf(deleteText), 1 );
    renderGroceries();
  });


});

