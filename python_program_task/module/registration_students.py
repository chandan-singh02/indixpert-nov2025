import json

registered_students = []

def register_student():

    student = {
        "id": int(input("Enter your ID: ")),
        "name": input("Enter your name: ").lower(),
        "address": input("Enter your address: "),
        "email": input("Enter your email: ").lower(),
        "course": input("Enter your course: ")
    }
    
    registered_students.append(student)
    print("\nRegistration successfully!")



def get_all_registration():
    if len(registered_students) == 0:
        print("\nNo registration found in database")
        return False

    print(json.dumps(registered_students, indent=4))





