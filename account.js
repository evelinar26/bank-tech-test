const Transaction = require('./transaction')

class Account {
  constructor () {
    this.balance = 0
    this.transactionLog = []
  }

  getBalance () {
    return this.balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      return "Error, deposit amount cannot be negative";
    } 
    this.balance += amount;
    let transaction = new Transaction(amount,'credit',this.balance);
    this.transactionLog.push(transaction);
    return(amount + ' deposited. Current balance: ' + this.balance);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return "Amount exceeds account balance";
    } 
    this.balance -= amount
    let transaction = new Transaction(amount,'debit',this.balance);
    this.transactionLog.push(transaction);
    return(amount + ' withdrawn. Current balance: ' + this.balance);
  }


  printStatement() {
    let statement = ""
    statement += "date || credit || debit || balance\n"
    this.transactionLog.forEach(transaction => {
      if (transaction.type == 'debit'){
        statement += transaction.date + " || || " + transaction.amount + " || " + transaction.balance + "\n";
      }
      else {
        statement += transaction.date + " || " + transaction.amount + " || || " + transaction.balance + "\n"
      }
    })
    return statement;
 
  }
};

module.exports = Account