/**
 * File: complex_code.js
 * Description: This code demonstrates a complex and sophisticated example 
 *              in JavaScript that involves various concepts and practices.
 *              It simulates a virtual store with cart management, user authentication, and more.
 */

// Global variables
let items = []; // Available items in the store
let cart = []; // User's shopping cart
let users = []; // Registered users

// Function to create an item object
function createItem(name, price, quantity) {
  return {
    name,
    price,
    quantity,
  };
}

// Function to add an item to the store
function addItem(name, price, quantity) {
  const item = createItem(name, price, quantity);
  items.push(item);
}

// Function to display all available items in the store
function displayItems() {
  if (items.length === 0) {
    console.log("No items available in the store.");
  } else {
    console.log("Available items:");
    for (let item of items) {
      console.log(`${item.name} - $${item.price} (${item.quantity} in stock)`);
    }
  }
}

// Function to add an item to the cart
function addToCart(itemName, quantity) {
  const item = items.find((item) => item.name === itemName);
  if (!item) {
    console.log("Item not found.");
  } else if (item.quantity < quantity) {
    console.log("Insufficient stock.");
  } else {
    const cartItem = createItem(item.name, item.price, quantity);
    const existingCartItem = cart.find((item) => item.name === itemName);
    if (existingCartItem) {
      existingCartItem.quantity += quantity;
    } else {
      cart.push(cartItem);
    }
    item.quantity -= quantity;
    console.log(`${quantity} ${itemName}(s) added to the cart.`);
  }
}

// Function to remove an item from the cart
function removeFromCart(itemName, quantity) {
  const cartItem = cart.find((item) => item.name === itemName);
  if (!cartItem) {
    console.log("Item not found in the cart.");
  } else if (cartItem.quantity < quantity) {
    console.log("Insufficient quantity in the cart.");
  } else {
    cartItem.quantity -= quantity;
    if (cartItem.quantity === 0) {
      const cartIndex = cart.findIndex((item) => item.name === itemName);
      cart.splice(cartIndex, 1);
    }
    const item = items.find((item) => item.name === itemName);
    item.quantity += quantity;
    console.log(`${quantity} ${itemName}(s) removed from the cart.`);
  }
}

// Function to calculate the total price of the items in the cart
function calculateTotalPrice() {
  let totalPrice = 0;
  for (let item of cart) {
    totalPrice += item.price * item.quantity;
  }
  return totalPrice;
}

// Function to register a new user
function registerUser(username, password) {
  const newUser = { username, password };
  users.push(newUser);
  console.log("User registered successfully.");
}

// Function to authenticate a user
function authenticateUser(username, password) {
  const user = users.find(
    (user) => user.username === username && user.password === password
  );
  return !!user; // true if user exists, false otherwise
}

// Example usage

// Add items to the store
addItem("Shirt", 20, 10);
addItem("Pants", 30, 5);
addItem("Shoes", 50, 3);

// Display available items
displayItems();

// Register a new user
registerUser("john", "password");

// Authenticate the user
const isAuthenticated = authenticateUser("john", "password");
console.log("User authentication:", isAuthenticated);

// Add items to the cart
addToCart("Shirt", 2);
addToCart("Pants", 1);
addToCart("Shoes", 2);

// Remove item from the cart
removeFromCart("Shirt", 1);

// Calculate total price
const totalPrice = calculateTotalPrice();
console.log("Total price:", totalPrice);

// More complex code and functionalities would follow...
// ...
// ...

// Note: This code serves as a template and lacks error handling and edge cases handling for brevity.