// console.log("here");
var productCards = document.querySelectorAll('.product-card');

// each product card 
productCards.forEach(function(card) {
  var addToCartBtn = card.querySelector('.add-to-cart');

  //..........."Add to Cart" button 
  addToCartBtn.addEventListener('click', function() {
    // .......Get the product details
    var title = card.querySelector('.product-title').textContent;
    var description = card.querySelector('.product-description').textContent;
    var price = card.querySelector('.product-price').textContent;
    addToCart(title, description, price);
  });

  //  ........hover effects..........
  card.addEventListener('mouseover', function() {
    //....hover effect styles.........
    card.classList.add('hovered');
  });

  card.addEventListener('mouseout', function() {
    // delete hover effect styles..........
    card.classList.remove('hovered');
  });
});

// Function to handle adding the item to the cart
function addToCart(title, description, price) {
  // Perform necessary actions, such as adding the item to the cart
  console.log('Item added to cart:');
  console.log('Title: ' + title);
  console.log('Description: ' + description);
  console.log('Price: ' + price);
}