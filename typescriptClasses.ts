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

    addInterest(fee)
    {
        if(fee = null)
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