const beverage = function () {
  // Create 3 variables for the `type`, `price`, and `origin` of the beverage
  // Assign them to values of your choice
  // YOUR CODE HERE
  //
  let type = "coffee";
  let price = "$2.00";
  let place = "Columnbia";
  // Return an object literal which contains the methods `product()`, `amount()`, and `place()`
  return {
    product: function () {
      console.log(`Would you like to drink ${type}`);
    },
    // `product()` will print an invitation to drink the `type` of beverage
    //  YOUR CODE HERE
    //
    price: function () {
      console.log(`This drink is ${price}`);
    },
    // `amount()` will print out the `price` of the beverage
    // YOUR CODE HERE
    //
    place: function () {
      console.log(`This beverage is from ${place}`);
    },
    // `place()` will print out the `origin` of the beverage
    // YOUR CODE HERE
    //
  };
};

const drink = beverage();
// Invoke the 3 methods
// YOUR CODE HERE
//
drink.product();
drink.price();
drink.place();

// function Animal(name, type) {
//   this.name = name;
//   this.type = type;
//   this.makeNoise = function () {
//     console.log(this.name, "makes noise!");
//   };
// }

const carFactory = function () {
  let car = beverage();

  return {
    ...car,
    engine: function () {
      console.log("engine description");
    },
  };
};

const coffeeCar = carFactory();
coffeeCar.product();
coffeeCar.engine();
coffeeCar.price();
coffeeCar.place();
