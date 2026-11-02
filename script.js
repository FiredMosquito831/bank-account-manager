class BankAccount {
  constructor() {
    this.balance = 0;
    this.transactions = [];
  }

  deposit(amount) {
    if (amount <= 0) {
      return "Deposit amount must be greater than zero.";
    }
    this.balance += amount;
    this.transactions.push({ type: "deposit", amount: amount });
    return `Successfully deposited $${amount}. New balance: $${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= 0 || amount > this.balance) {
      return "Insufficient balance or invalid amount.";
    }
    this.balance -= amount;
    this.transactions.push({ type: "withdraw", amount: amount });
    return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
  }

  checkBalance() {
    return `Current balance: $${this.balance}`;
  }

  listAllDeposits() {
    const deposits = this.transactions
      .filter((transaction) => transaction.type === "deposit")
      .map((transaction) => transaction.amount);
    return `Deposits: ${deposits.join(",")}`;
  }

  listAllWithdrawals() {
    const withdrawals = this.transactions
      .filter((transaction) => transaction.type === "withdraw")
      .map((transaction) => transaction.amount);
    return `Withdrawals: ${withdrawals.join(",")}`;
  }
}

const myAccount = new BankAccount();
myAccount.deposit(500);
myAccount.deposit(200);
myAccount.withdraw(50);
myAccount.withdraw(100);
myAccount.withdraw(30);
