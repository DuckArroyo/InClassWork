const listEl = document.querySelector("#grocery-list");
const shoppingCartEl = document.querySelector("#shopping-cart");
const fruits = ["Bananas", "Apples", "Oranges", "Grapes", "Blueberries"];

// Create an event listener on the common parent element of the groceries
// YOUR CODE HERE
//
// Inside the closure, for every click of the button, create a `div` element
// that will hold the name of the fruit
// and append it to the shopping cart
// YOUR CODE HERE
//

listEl.addEventListener("click", (event) => {
  event.preventDefault();

  console.log(event.target);
  if (event.target.matches("button")) {
    const item = document.createElement("div");
    console.log("parent element", event.target.parentElement);
    item.textContent = fruits[event.target.parentElement.id];
    shoppingCartEl.append(item);
  }
});
