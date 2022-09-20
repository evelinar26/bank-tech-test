const Account = require('./account');

// let user1 = new Account();

// user1.deposit(-2000);
// user1.deposit(500);
// user1.withdraw(200);
// user1.printStatement();

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

  it('Should allow a user to withdraw money from their account', () => {
    account.deposit(1000);
    account.withdraw(500);

    expect(account.getBalance()).toEqual(500);
  });

//   it('Should return a message with amount deposited and remaining balance', () => {
//     account.deposit(200)

//     expect(account.deposit(800)).toEqual(
//       " 800.00 deposited. Current balance: 1000.00 "
//     )
//   });

//   it('Should return a message with amount withdrawn and remaining balance', () => {
//     account.deposit(1000);

//     expect(account.withdraw(500)).toEqual(
//       " 500.00 withdrawn. Current balance: 500.00 "
//     )
//   });

//   it('Should return message if user tries to withdraw more than they have', () => {
//     account.add(500);

//     expect(account.withdraw(1000)).toEqual(
//       "Insufficient funds"
//     );
//   });

//   test('Should add a transaction object to the transactionLog', () => {
//     account.add(500);
//     account.withdraw(100);

//     expect(account.transactionLog.length).toEqual(2);
//     expect(account.transactionLog[1].credit).toEqual(500);
//     expect(account.transactionLog[1].balance).toEqual(500);
//     expect(account.transactionLog[0].debit).toEqual(100);
//     expect(account.transactionLog[0].balance).toEqual(400);
//   });
});