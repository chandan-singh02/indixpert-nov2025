def get_user():
    id=input("userID: ")
    name= input("name: ")

    return id,name

def show_user(id,name):
    print("userId: " ,id)
    print("name: " ,name)

user_id ,user_name = get_user()

show_user(user_id,user_name)