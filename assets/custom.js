
jQuery(document).ready(function(){
  
  jQuery('#buy_now_button').on('submit', function(e) {
    e.preventDefault();
     var form = $('#buy_now_form');
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