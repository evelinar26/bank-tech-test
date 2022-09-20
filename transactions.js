// details of transactions (type, amount, balance, date);
const moment = require('moment')

class Transactions {
 
  constructor(amount, action, balance){
    this.date = moment(new Date()).format("DD/MM/YYYY");
    this.amount = parseFloat(amount).toFixed(2);
    this.action = action;
    this.balance = parseFloat(balance).toFixed(2);
  }

}

module.exports = Transactions;

