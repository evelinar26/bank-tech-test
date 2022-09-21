const Account = require('./account');
const moment = require('moment')

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account()
    todayDate = moment(new Date()).format("DD/MM/YYYY");
  })

  it('Should start with an initial balance of 0', () => {
    expect(account.getBalance()).toEqual(0)
  });

  it('Should allow a user to add money to their account', () => {
    account.deposit(1000);

    expect(account.getBalance()).toEqual(1000)
  });

  it('Should return an error message if deposit amount is negative', () => {
    account.deposit(-200)

    expect(account.deposit(-200)).toEqual(
      "Error, deposit amount cannot be negative"
    )
  });

  it('Should allow a user to withdraw money from their account', () => {
    account.deposit(1000);
    account.withdraw(500);

    expect(account.getBalance()).toEqual(500);
  });

  it('Should return an error message if withdraw amount is bigger than balance', () => {
    account.deposit(1000);
    account.withdraw(2000);

    expect(account.withdraw(2000)).toEqual(
      "Amount exceeds account balance"
    )
  });

  it('Should return a message with amount withdrawn and remaining balance', () => {
    account.deposit(850.98);

    expect(account.withdraw(200)).toEqual(
      "200 withdrawn. Current balance: 650.98"
    )
  });

  it('Should return a message with amount deposited and updated balance', () => {
    account.deposit(750.98);

    expect(account.deposit(200)).toEqual(
      "200 deposited. Current balance: 950.98"
    )
  });


  it('Should add a transaction to the transactionsLog', () => {
    account.deposit(800);
    account.withdraw(100);

    expect(account.transactionLog.length).toEqual(2);
    expect(account.transactionLog[0].type).toEqual("credit");
    expect(account.transactionLog[1].type).toEqual("debit");
    expect(account.transactionLog[0].date).toEqual(todayDate)
    expect(account.transactionLog[1].date).toEqual(todayDate)

  });

  it('Should allow user to print statement', () => {
    account.deposit(500);
    account.withdraw(100);

    expect(account.printStatement()).toContain(todayDate + " || 500.00 || || 500.00");
    expect(account.printStatement()).toContain(todayDate + " || || 100.00 || 400.00"); 
  });

  it('Should include the headers in the statement', () => {

    expect(account.printStatement()).toContain(
      "date || credit || debit || balance")
  });

  it('Should print amounts with 2 decimals', () => {
    account.deposit(500.978);
    account.withdraw(100.9541);

    expect(account.printStatement()).toContain(todayDate + " || 500.98 || || 500.98");
    expect(account.printStatement()).toContain(todayDate + " || || 100.95 || 400.02"); 
  });

})
