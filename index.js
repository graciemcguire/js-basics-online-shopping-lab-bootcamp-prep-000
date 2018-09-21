var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  let obj = {itemName: item, itemPrice: Math.floor(Math.random() * 100) + 1};
  cart.push(obj);
  return `${item} has been added to your cart.`;
}

function viewCart() {
  if  (cart.length === 0){
    return "Your shopping cart is empty.";
  }
  else if (cart.length === 1){
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`;
  }
  else if (cart.length === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`;
  }
  else {
    let mostItems = [];

    for(let i = 0; i < cart.length; i++){
    mostItems.push(' '+ cart[i].itemName + ' at $'+cart[i].itemPrice);
    }
    
    let lastItem = mostItems.pop();
    return `In your cart, you have${mostItems}, and${lastItem}.`;
  }
}

function total() {
  let sum = 0;
  
  for(let i = 0; i < cart.length; i++){
    sum = sum + cart[i].itemPrice;
  }
  return sum;
}	

function removeFromCart(item) {
  
}

function placeOrder(cardNumber) {
  // write your code here
}
