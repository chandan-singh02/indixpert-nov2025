
data = [
    {"id":101, "name":"chandan", "address":"bageshwar"},
    {"id":102, "name":"dhawal", "address":"haldwani"},
    {"id":103, "name":"adam", "address":"uk"}
]

userName = input("Enter name: ")
found = False


for person in data:
    for key, value in person.items():
        if key == "name" and value == userName:
            print(person)
            found = True
            break

if found:
    print("user found")
else:
    print("user not found")