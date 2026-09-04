students = {}

n = int(input("How many students: "))

#add students
for i in range(n):
    print(f"\enter details for student {i+1}")
    student_id = int(input("ID: "))
    students[student_id] = {
        "name": input("Name: "),
        "email": input("Email: "),
        "qualification": input("Qualification: ")
    }


#show data
for sid, details in students.items():
    print("ID:", sid)
    print("Name:", details["name"])
    print("Email:", details["email"])
    print("Qualification:", details["qualification"])

#search by id
search_id = int(input("\nEnter ID to search: "))

if search_id in students:
    s = students[search_id]
    print("\nStudent Found")
    print("ID:", search_id)
    print("Name:", s["name"])
    print("Email:", s["email"])
    print("Qualification:", s["qualification"])
else:
    print("student Not Found ")
