
jQuery(document).ready(function(){
  
  jQuery('#buy_now_button').on('submit', function(e) {
    e.preventDefault();
     var form = $('#addToCart');
  console.log(form.serialize());
    $.ajax({
        type: 'POST',                             
        url: '/cart/add.js',
        dataType: 'json',                               
        data: form.serialize(),
        contentType: false,
        processData: false,
        success: function(data) {
            document.location.href = '/cart/checkout';
        }
    });
})

});