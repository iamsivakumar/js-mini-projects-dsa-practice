class BankAccount {
  #balance = 0;

  constructor(accountHolder) {
    this.accountHolder = accountHolder;
  }

  showAccountHolder() {
    console.log(`Account Holder: ${this.accountHolder}`);
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      console.log(`Deposited ₹${amount}. New balance: ₹${this.#balance}`);
    } else {
      console.log("Deposit amount must be positive.");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      console.log(`Withdrew ₹${amount}. New balance: ₹${this.#balance}`);
    } else {
      console.log("Insufficient balance or invalid amount.");
    }
  }

  checkBalance() {
    console.log(`Current balance: ₹${this.#balance}`);
  }
}
// output;
// const myAccount = new BankAccount("Siva Kumar");

// myAccount.showAccountHolder(); // ✅
// myAccount.deposit(5000);       // ✅
// myAccount.withdraw(2000);      // ✅
// myAccount.checkBalance();      // ✅
// console.log(myAccount.#balance); // ❌ Error! You protected it!
