
  
//   jQuery('#buy_now_button').on('submit', function(e) {
//     e.preventDefault();
//      var form = $('#buy_now_form');
//   console.log(form);
//     // $.ajax({
//     //     type: 'POST',                             
//     //     url: '/cart/add.js',
//     //     dataType: 'json',                               
//     //     data: form.serialize(),
//     //     contentType: false,
//     //     processData: false,
//     //     success: function(data) {
//     //         //document.location.href = '/cart/checkout';
//     //     }
//     // });
// })

  function instantBuy(e) {
    var id = '';
  $.ajax({
         type: 'POST',                             
        url: '/cart/add.js',
        dataType: 'json',                               
        data: {
          id:47364165763357,
          quantity:1
        },
        contentType: false,
        processData: false,
        success: function(data) {
            document.location.href = '/checkout';
        }
    });
  }
