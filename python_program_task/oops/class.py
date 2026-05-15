class User:

    def __init__(self):
        self.id = input("enter a id: ")
        self.name = input("Enter name: ")
        self.address = input("Enter a address")


    def show_details(self):
        print("\nuser registered successfully")
        print(f"ID: {self.id}")
        print(f"Name: {self.name}")
        print(f"Address: {self.address}")



user1 = User()
user1.show_details()


# class User:
#     users_list =[]

#     def register(self):
#         self.id = input("enter a id: ")
#         self.name = input("Enter name: ")
#         self.address = input("Enter a address")

#         user= {
#             "id":self.id,
#             "name":self.name,
#             "email":self.address
#         }
        
#         users_list.append(user)

#         print("\nsuccessfully registered")


#     def show_all_users(self):
#         for user in users_list:
#             print(user)


# user1 = User()

# user1.register()

# usesr2 = User()
 
# user2.show_all_users()
        

