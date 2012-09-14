window.onload = function () {
  $('#brokerPost').submit(function() {
    // Act on the event
    $.ajax({
      url: "http://dev.internethic.com:8082/",
      data: $('#brokerPost').serialize(),
      crossDomain: true,
      type: "POST",
      success: function(data){
        console.log("data post : ", data);
      }
    });
    return false;
  });
  
  $('#brokerGet').submit(function() {
    // Act on the event
    $.ajax({
      url: "http://dev.internethic.com:8082/",
      data: $('#brokerGet').serialize(),
      crossDomain: true,
      success: function(data){
        console.log("data get : ", data);
      }
    });
    return false;
  });
  
};
