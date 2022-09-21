## Requirements 

You should be able to interact with your code via a REPL like IRB or Node. (You don't need to implement a command line interface that takes input from STDIN.)
Deposits, withdrawal.
Account statement (date, amount, balance) printing.
Data can be kept in memory (it doesn't need to be stored to a database or anything).


## Acceptance criteria

Given a client makes a deposit of 1000 on 10-01-2023
And a deposit of 2000 on 13-01-2023
And a withdrawal of 500 on 14-01-2023
When she prints her bank statement
Then she would see

date || credit || debit || balance
14/01/2023 || || 500.00 || 2500.00
13/01/2023 || 2000.00 || || 3000.00
10/01/2023 || 1000.00 || || 1000.00

## User Stories
As a bank customer,
So I can keep my money at the bank,
I would like to make deposits.

As a bank customer,
So I can spend my money,
I would like to make withdraws.

As a bank customer,
So I can see how much money I have at the bank,
I would like to print my bank statement.

As a bank customer,
So I can see all of my transaction details,
I would like my bank statement to include the date of each transaction.

As a bank customer,
So I can see all of my transaction details,
I would like my bank statement to include the credit/debit amount of each transaction.

As a bank customer,
So I can see all of my transaction details,
I would like my bank statement to include the balance after each transaction.

## Classes:

- Transaction: this class holds the defining elements of each transactions. Each of them will have a date (for this one, I've used the JS library 'moment'), type of action, an amount(formatted to have 2 decimals) and, balance;

- Account: This is the class where the user can interact with the bank account. This class has getBalance, deposit, withdraw and printStatement methods, allowing the user to perform all actions as required.


## Approach

- After reviewing the requirements and acceptance criteria, I broke down both into User Stories.
I used the User Stories to diagram the classes I wanted to use. 
I used TDD and Node to interact with the code.


## Built with
- Javascript

## Test
To test this program, run:
$ jest
