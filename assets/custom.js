console.log('custom done');
  jQuery('#buy_now_button').on('click', function(e) {
    var form = $('#addToCart');
    e.preventDefault()

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
  /*window.onload = function(){
    let cartContainsFreeProduct = false;
    let cartContainsQualifyingProduct = false;
 
    const qualifyingProductVariantId = 8945416077597; 
    const freeProductVariantId = 47361341063453;

     for(item of cart.items){
       
      if( item.id  === freeProductVariantId){
        cartContainsFreeProduct = true; 
      }
      if( item.id  === qualifyingProductVariantId){
         cartContainsQualifyingProduct = true;
      }
     }
   
    
//  If cart contains qualifying product and doesn't already contain free product, add qty 1 of free product
    if(cartContainsQualifyingProduct && cartContainsFreeProduct === false) {
        
      jQuery.post('/cart/add.json', { quantity: 1, id: freeProductVariantId })
      .done(function() {window.location.reload()})    
        
     } 
  }*/
  