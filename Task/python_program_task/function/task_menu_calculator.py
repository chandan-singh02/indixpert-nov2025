def get_numbers():
    x = int(input("enter a first number: "))
    y = int(input("enter a second number: "))
    return x, y


def add(x, y):
    return x + y


def sub(x, y):
    return x - y


def mul(x, y):
    return x * y


def div(x, y):
    return x / y


def menu():
    print("1. ADD")
    print("2. SUB")
    print("3. MUL")
    print("4. DIV")
    print("5. EXIT")
    return input("plzz choose one option: ")


def dashboard():
    while True:
        choice = menu()

        if choice == "1":
            x, y = get_numbers()
            print(add(x, y))

        elif choice == "2":
            x, y = get_numbers()
            print(sub(x, y))

        elif choice == "3":
            x, y = get_numbers()
            print(mul(x, y))

        elif choice == "4":
            x, y = get_numbers()
            print( div(x, y))

        elif choice == "5":
            print(" exit")
            break

    else:
       print("invalid option")