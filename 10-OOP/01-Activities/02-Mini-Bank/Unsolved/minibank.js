// =============================================================
// PART 1

function MiniBank(balance) {
  this.balance = balance;
}

MiniBank.prototype.getBalance = function () {
  return this.balance;
};
// Add a `setBalance()` function
MiniBank.prototype.setBalance = function (value) {
  this.balance = value;
};
//

// Add a `deposit()` function
MiniBank.prototype.deposit = function (value) {
  const newBalance = this.getBalance() + value;
  this.setBalance(newBalance);
  console.log("Deposited money!");
};

//

// Add a `withdraw()` function
MiniBank.prototype.withdraw = function (value) {
  const superBalance = this.getBalance() - value;
  this.setBalance(superBalance);
  console.log("You have actual money in your account");
};

//

MiniBank.prototype.printBalance = function () {
  console.log(`Balance: ${this.getBalance()}`);
};

// =============================================================
// PART 2

let newBank = new MiniBank(500);
// Create a new `bank` object

// Print the `bank` balance

newBank.printBalance();

// Deposit some money and then print the `bank` balance
newBank.deposit(100000);
newBank.printBalance();

// Withdraw some money and then print the `bank` balance

newBank.withdraw(499);
newBank.printBalance();
