// details of transactions (type, amount, balance, date);
const moment = require('moment')

class Transaction {
 
  constructor(amount, type, balance){
    this.date = moment(new Date()).format("DD/MM/YYYY");
    this.amount = parseFloat(amount).toFixed(2);
    this.type = type;
    this.balance = parseFloat(balance).toFixed(2);
  }

}

module.exports = Transaction;

