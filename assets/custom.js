console.log('custom done');
  
  window.onload = function(){
    let cartContainsFreeProduct = false;
    let cartContainsQualifyingProduct = false;
 
    const qualifyingProductVariantId = 8945416077597; 
    const freeProductVariantId = 47361341063453;
    console.log(cart);
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
  }
  