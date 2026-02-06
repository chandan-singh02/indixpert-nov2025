# ask user how many user want to insert
users = []
total_users = int(input("How many users u want to store: "))
for user in range(total_users):

    print(f"\nPlease enter details of user {user+1}")
    id = int(input("Enter user id: "))
    name = input("Enter user name: ")
    address= input("Enter user address: ")

    user={
        "id":id,
        "name":name,
        "address":address
    }
    users.append(user)

print("\nAll users data:")
print(users)



# With validations
users = []
total_users = int(input("how many users u want to store: "))

if total_users <= 0 or total_users > 5:
    print("users must be between 1 and 5 only")
else:
    for user in range(total_users):
        print(f"\nPlease enter details of user {user + 1}")

        id = input("Enter user id: ")
        name = input("Enter user name: ")
        address = input("Enter user address: ")

        if not id.isdigit():
            print("Invalid id")
        elif not name.isalpha():
            print("Invalid name.")
        else:
            user_data = {
                "id": int(id),
                "name": name,
                "address": address
            }
            users.append(user_data)

    print("\nAll users data:")
    print(users)
