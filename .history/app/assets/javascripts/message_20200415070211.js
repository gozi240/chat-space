$(function(){
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action'); 
      url: 取得したリクエストURL,  //同期通信でいう『パス』
      type: 'POST',  //同期通信でいう『HTTPメソッド』
      data: 取得したFormData,  
      dataType: 'json',
      processData: false,
      contentType: false
    })
  });
});