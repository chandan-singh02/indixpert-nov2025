# import json
# def show_users():
#     with open("users.json", "r") as file:
#         users = json.load(file)
#         # print(users)

#     print("stored users:")
#     for user in users:
#         print(user)

import json
def show_users():
    with open("users.json", "r") as file:
        users = json.load(file)
        # print(users)

    print("stored users:")
    for user in users:
        print(user)