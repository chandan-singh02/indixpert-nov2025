from bank_account import BankAccount
from logger import write_log

def menu():
    try:
        user = BankAccount("chandan")
        while True:
            print("1. Check Balance")
            print("2. Deposit")
            print("3. Withdraw")
            print("4. Exit")
  
            choice = input("Enter choice: ")

            if choice == "1":
                user.check_balance()

            elif choice == "2":
                amt = int(input("amount to deposit: "))
                user.deposit(amt)

            elif choice == "3":
                amt = int(input("amount to withdraw: "))
                user.withdraw(amt)

            elif choice == "4":
                print("exit")
                break

            

    except Exception as e:
        write_log(str(e))
        print("Invalid input")
    