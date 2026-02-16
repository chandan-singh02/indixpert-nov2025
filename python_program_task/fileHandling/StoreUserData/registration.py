
registered_user =[]
def register_user():
    id  = int(input("Enter your ID: "))
    name = input("Enter your name: ")
    address = input("Enter your address: ")

    user={
        "id":id,
        "name":name,
        "address":address
    }
    
    with open("users.txt", "a") as f:
        f.write(f"USER-> {id},{name},{address}\n")
    
    print("User registered successfully ")

register_user()
