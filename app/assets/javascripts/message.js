$(function(){ 
  function buildHTML(message){
    console.log(message)
    if ( message.image ) {
        var html =
        `<div class="message" data-message-id="${message.id}">
            <div class="upper-message">
                <div class="upper-message__user-name">
                  ${message.user_name}
                </div>
                <div class="upper-message__date">
                  ${message.created_at}
                </div>
            <div class="lower-message">
              <p class="lower-message__content">
                ${message.content}
              </p>
            <class="lower-message__image>
              <img src="${message.image}>
            </div>  
          </div>`
        return html;
    } else {
        var html =
          `<div class="message" data-message-id="${message.id}">
            <div class="upper-message">
              <div class="upper-message__user-name">
                ${message.user_name}
              </div>
              <div class="upper-message__date">
                ${message.created_at}
              </div>
            </div>
            <divlass="lower-message">
              <p class="lower-message__content">
                ${message.content}
              </p>
            </div>
          </div>`
        return html;
    };
  }
 
  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    console.log(formData)
    var url = $(this).attr('action');
    console.log(url)
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      // console.log(data)
      var html = buildHTML(data);
      // console.log(html)
      $('.messages').append(html);
      $('#new_message')[0].reset();
      var height = $('.messages')[0].scrollHeight;
      $('.messages').animate({scrollTop: height}, 500, 'swing');
      $('.form__submit').prop('disabled', false);
    })
    .fail(function(){
      alert('メッセージを入力してください');
    })
  });

  var reloadMessages = function() {
    var last_message_id = $('.message:last').data("message-id");
    $.ajax({
      url: "api/messages",
      type: 'get',
      dataType: 'json',
      data: {id: last_message_id},
    })
    .done(function(messages) {
      if (messages.length !== 0) {
        var insertHTML = '';
        $.each(messages, function(i, message) {
          insertHTML += buildHTML(message)
        });
        $('.messages').append(insertHTML);
        $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      }
    })
    .fail(function() {
      alert('error');
    });
  };

  if (document.location.href.match(/\/groups\/\d+\/messages/)) {
    setInterval(reloadMessages, 7000);
  }
});