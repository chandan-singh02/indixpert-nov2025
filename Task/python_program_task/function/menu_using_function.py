# def menu():
#     print("1. ADD")
#     print("2. SUB")
#     print("3. MUL")

#     user_input = input("select one operation u want to perform: ")

#     x = int(input("Enter first number : "))
#     y = int(input("Enter second number: "))

#     if user_input == "1":
#         print("ADD:", x + y)

#     elif user_input == "2":
#         print("SUB:", x - y)

#     elif user_input == "3":
#         print("MUL:", x * y)

#     else:
#         print("invalid option")
# menu()
    



def menu():
    print("1. ADD")
    print("2. SUB")
    print("3. MUL")
    
    user_input = user_operation_select()
    # print("value",user_input)
    
    x = int(input("Enter first number : "))
    y = int(input("Enter second number: "))

    if user_input == "1":
        print("ADD:", x + y)

    elif user_input == "2":
        print("SUB:", x - y)

    elif user_input == "3":
        print("MUL:", x * y)

    else:
        print("invalid")




def user_operation_select():
     user_input = input("select one operation u want to perform: ")
     return user_input



menu()


    