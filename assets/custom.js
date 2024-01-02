
  
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

  function instantBuy() {
    var currentUrl = window.location.href;
    var urlParams = new URLSearchParams(currentUrl);
    var variantId = urlParams.get('variant');
    console.log(urlParams);
      var pro_id = jQuery('#variant_id').val();
    var var_id = jQuery('#variant_id').data('id');
    var qty = jQuery('.quantity__input').val();
    const qualifyingProductVariantId = 8945416077597;
    const freeProductVariantId = 47361341063453;
    console.log(qty);
    if(var_id == qualifyingProductVariantId) {
      console.log('1');
      var data = {
             items: [
              {
                id: pro_id,
                quantity: qty
              },
               {
                id: freeProductVariantId,
                quantity: 1
              }
            ]
      };
    }else{
      console.log('2');
      var data = {
            id: pro_id,
            quantity: qty
      };
    }
    
    
fetch('/cart/add.js', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-Requested-With': 'xmlhttprequest'
  },
  body: JSON.stringify(data)
})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    // window.location.href = '/checkout';
  })
  .catch(error => console.error('Error adding item to cart:', error));
  }
