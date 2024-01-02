
jQuery(document).ready(function(){
  
  jQuery('#buy_now_button').on('click', function(e) {
    var form = $('#addToCart');
    e.preventDefault()
  console.log(form);
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