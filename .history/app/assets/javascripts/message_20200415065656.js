$(function(){
  $('#new_message').on('submit', function(e){
    console.log('hoge');
    e.preventDefault()
    $.ajax({
      url: 所得したリクエストURL,
      type: 'POST',
      data: 
    })
  });
});