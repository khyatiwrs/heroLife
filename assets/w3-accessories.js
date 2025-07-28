function accessoryItemAddedCallback(div, product) { 
  var price_div = $(div).find(".accessory-price:not('.small')");
  var meta = $(div).find('.accessories-right');
  meta.prepend(price_div);

}