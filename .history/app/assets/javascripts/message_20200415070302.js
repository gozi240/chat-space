$(function(){
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action'); 
      url: url,
      type: "POST",
      data: 取得したFormData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
  });
});