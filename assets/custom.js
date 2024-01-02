
  
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

    // Parse the URL
    var url = new URL(currentUrl);
    
    // Get the 'variant' parameter from the search string
    var variantId = url.searchParams.get('variant');

    var pro_id = jQuery('#variant_id').val();
    var var_id = jQuery('#variant_id').data('id');
    var qty = jQuery('.quantity__input').val();
    const qualifyingProductVariantId = 8945416077597;
    const freeProductVariantId = 47361341063453;
    console.log(qty);
    if(var_id == qualifyingProductVariantId) {
   
      var data = {
             items: [
              {
                id: variantId,
                quantity: qty
              },
               {
                id: freeProductVariantId,
                quantity: 1
              }
            ]
      };
    }else{
     
      var data = {
            id: variantId,
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
     //window.location.href = '/checkout';
  })
  .catch(error => console.error('Error adding item to cart:', error));
  }
