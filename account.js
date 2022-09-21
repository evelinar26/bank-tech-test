// userAccount: account balance, list of transactions, new transactions(deposit, withdraw);
const Transactions = require('./transactions')

class Account {
  constructor () {
    this.balance = 0
    // this.transaction = new transactions
    this.transactionsLog = []
  }

  getBalance () {
    return this.balance;
  }

  deposit(amount) {
    if (amount <= 0) {
      return "Error, deposit amount cannot be negative";
    } 
    this.balance += amount;
    let transaction = new Transactions(amount,'credit',this.balance);
    this.transactionsLog.push(transaction);
    return(amount + ' deposited. Current balance: ' + this.balance);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return "Amount exceeds account balance";
    } 
    this.balance -= amount
    let transaction = new Transactions(amount,'debit',this.balance);
    this.transactionsLog.push(transaction);
    return(amount + ' withdrawn. Current balance: ' + this.balance);
  }


  printStatement() {
    let statement = ""
    statement += "date || credit || debit || balance\n"
    this.transactionsLog.forEach(element => {
      if (element.action == 'debit'){
        statement += element.date + " || || " + element.amount + " || " + element.balance + "\n";
      }
      else {
        statement += element.date + " || " + element.amount + " || || " + element.balance + "\n"
      }
    })
    // console.log(statement);
    return statement;
 
  }

};

module.exports = Account
