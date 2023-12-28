console.log('custom done');
  
  window.onload = function(){
    let cartContainsFreeProduct = false;
    let cartContainsQualifyingProduct = false;
 Shopify.cart = {{ cart | json }};
    const qualifyingProductVariantId = 8945416077597; 
    const freeProductVariantId = 47361341063453;

     for (var i=0; i<Shopify.cart.items.length; i++) {
      console.log(Shopify.cart.items[i].product_id);
    /*  if({{ item.id }} === freeProductVariantId){
        cartContainsFreeProduct = true; 
      } */
      if(Shopify.cart.items[i].product_id === qualifyingProductVariantId){
        console.log('ss');
         cartContainsQualifyingProduct = true;
      }
    }
   
    
//  If cart contains qualifying product and doesn't already contain free product, add qty 1 of free product
    if(cartContainsQualifyingProduct && cartContainsFreeProduct === false) {
        
      jQuery.post('/cart/add.json', { quantity: 1, id: freeProductVariantId })
      .done(function() {window.location.reload()})    
        
     } 
  }
  