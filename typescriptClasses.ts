interface IBankAccount
{
	accountNumber: number;
	balance: number;
	firstName: string;
	lastName: string;
	rateOfInterest: number;
	ssn: number;
	addInterest(fee?: number);
	deposit(amount: number)
	getBalance(): number;
	withdraw(amount: number);
}

class BankAccount implements IBankAccount
{
	accountNumber: number;
	balance: number;
	firstName: string;
	lastName: string;
	rateOfInterest: number;
	ssn: number;
	static nextAccountNumber: number;

	constructor(ssn: number, firstName: string, lastName: string, rateOfInterest?: number)
	{
		this.ssn = ssn;
		this.firstName = firstName;
		this.lastName = lastName;
		this.balance = 0;

		if(rateOfInterest == null)
		{
			this.rateOfInterest = 1.25;
		}
		else
		{
			this.rateOfInterest = rateOfInterest;
		}

		this.accountNumber = BankAccount.nextAccountNumber;
		BankAccount.nextAccountNumber++;
	}
	

	addInterest(fee)
	{
		if(fee == null)
		{
			this.balance += 5;
		}
		else
		{
			this.balance += fee;
		}
	}

	deposit(amount)
	{
		this.balance += amount;
	}

	getBalance()
	{
		return this.balance;
	}

	withdraw(amount)
	{
		this.balance -= amount;
	}
}

abstract class OverdraftAccount extends BankAccount
{
	overdraftInterest: number;
	overdraftLimit: number;

	checkLimit(): Boolean
	{
		return true;
	}
}

abstract class LoanAccount extends BankAccount
{
	principal: number;
}