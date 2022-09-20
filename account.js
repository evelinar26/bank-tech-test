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
    // console.log('Deposit: ' + amount);
  }

  withdraw(amount) {
    if (amount > this.balance) {
      return "Amount exceeds account balance";
    } 
    this.balance -= amount
    let transaction = new Transactions(amount,'debit',this.balance);
    this.transactionsLog.push(transaction);
    // console.log('Withdraw: ' + amount);
  }


  printStatement() {
    console.log("date || credit || debit || balance");
    this.transactionsLog.forEach(element => {
      if (element.action == 'debit'){
        return(element.date + " || || " + element.amount + " || " + element.balance);
      }
      else {
        return(element.date + " || " + element.amount + " ||  || " + element.balance);
      }
    } )
 
  }

};

module.exports = Account
