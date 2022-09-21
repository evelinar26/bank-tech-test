const Account = require('./account');

describe('Account', () => {
  let account;

  beforeEach(() => {
    account = new Account()
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


  // it('Should return a balance with 2 decimals'), () => {
  //   account.deposit(700.987)
  // }

  it('Should add a transaction to the transactionsLog', () => {
    account.deposit(800);
    account.withdraw(100);

    expect(account.transactionsLog.length).toEqual(2);
    expect(account.transactionsLog[0].action).toEqual("credit");
    expect(account.transactionsLog[1].action).toEqual("debit");

  });

  it('Should allow user to print statement', () => {
    account.deposit(500);
    account.withdraw(100);

    expect(account.printStatement()).toContain("21/09/2022 || 500.00 || || 500.00");
    expect(account.printStatement()).toContain("21/09/2022 || || 100.00 || 400.00"); 
  });

  it('Should include the headers in the statement', () => {

    expect(account.printStatement()).toContain(
      "date || credit || debit || balance")
  });

})
