(function(){
 "use strict";


 var items = window.items;
 // use map to creat an array of prices
  var priceList = items.map(function(item){
    return item.price
  });
  //console.log(priceList);
 // use .reduce to sum prices
  var totalPrice = priceList.reduce(function(previousValue, currentValue){
    return previousValue + currentValue;
  });
  //console.log(priceList.length);
 // use .length to find how many items are in the priceList array
  var average = totalPrice / priceList.length;
  console.log("The average price is $" + average.toFixed(2));




  var cheapItems = items.filter(function(item){
    if (item.price > 14.00 && item.price < 18.00) {
      return true;
    }else {
      return false;

    }

 });
 console.log("Items that cost between $14.00 USD and $18.00 USD:");
 console.log(cheapItems);

// number #3
var singleItem = items.filter(function(item){
  if (item.currency_code == 'GBP') {
    return true;
  }else {
    return false;
  }
});

console.log(singleItem[0].title + 'costs £' + singleItem[0].price);



// #4
items.forEach(function(item){
if (item.materials.indexOf('wood') >= 0) {
console.log(item.title + ' is made of wood.');
}else {
}
});



items.filter(function(item){
  if(item.materials.length >= 8){
    console.log(item.title + 'has' + item.materials.length + 'materials:')
    item.materials.forEach(function(i){
    console.log(i)
  })
  }

});


var handMade =items.filter(function(item){
 if(item.who_made == "i_did"){
   return true;
 }else {
   return false;
 }

});
console.log(handMade.length + " were made by their seller");




})();
