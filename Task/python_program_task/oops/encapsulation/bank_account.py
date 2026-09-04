from logger import write_log
class BankAccount:
    
    def __init__(self,name):
        self.name = name
        self.balance = 10000


    def check_balance(self):
        try:
            print(f"\ncurrent balance ${self.balance}")
        except:
            write_log(str(e))
            print("Error checking balance")

    
    def deposit(self,amount):
        try:
            if amount > 0:
                self.balance += amount
                print("\nDeposit successfully")
        except Exception as e:
            write_log(str(e))
            print("invalid ammount")

    def withdraw(self,amount):
        if amount > 0:
            self.balance -= amount
            print(f"\n{self.balance}withdraw successfully")

        elif amount > self.balance:
            print("insufficient money in your account")

        else:
            print("invalid ammount")


