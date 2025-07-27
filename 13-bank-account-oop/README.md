# 💰 Bank Account - OOP Encapsulation Project (JavaScript)

This is a mini JavaScript project that demonstrates **Encapsulation** — one of the four core principles of Object-Oriented Programming (OOP).

The project simulates a simple **Bank Account system**, allowing deposit, withdrawal, and balance checking using private variables and public methods.

---

## 📚 Concepts Used

- ✅ **Encapsulation**
- ✅ Private class fields (`#balance`)
- ✅ Public methods (`deposit`, `withdraw`, `checkBalance`)
- ✅ Object-Oriented Design (constructor, class methods)

---

## 🧱 Class Structure

```js
class BankAccount {
  #balance = 0;

  constructor(accountHolder) {
    this.accountHolder = accountHolder;
  }

  deposit(amount) { ... }
  withdraw(amount) { ... }
  checkBalance() { ... }
}
```
