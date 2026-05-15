# import json


# def register_users():
#     users = []

#     for i in range(2): 
#         id = int(input("Enter your ID: "))
#         name = input("nter your name: ")
#         address = input("Enter your address: ")

#         user = {
#             "id": id,
#             "name": name,
#             "address": address
#         }

#         users.append(user)

#     with open("users.json", "w") as file:
#         json.dump(users,file)

#     print("users registered successfully!\n")


import json


old_users = []

def register_users():
    users = []

    # for i in range(2): 
    id = int(input("Enter your ID: "))
    name = input("nter your name: ")
    address = input("Enter your address: ")

    user = {
        "id": id,
           "name": name,
        "address": address
    }

    users.append(user)

    # with open("users.json", "a") as file:
    #     json.dump(users,file)

  

    with open("users.json","r") as file:
        old_users = json.load(file)

    old_users.extend(users)

    with open("users.json","w") as file:
        json.dump(old_users,file)
    
    # old_users = []
    # users = []

    print("users registered successfully!\n")



