
import json

registered_students = []
students_records = []


def students_registration():
    student = {
        "id": int(input("Enter your ID: ")),
        "name": input("Enter your name: ").lower(),
        "address": input("Enter your address: "),
        "email": input("Enter your email: ").lower(),
        "course": input("Enter your course: ")
    }

    registered_students.append(student)
    print("\nStudent registered successfully!")



def view_registered_students():
    if not registered_students:
        print("\nNo students registered yet")
        return

    print(json.dumps(registered_students, indent=4))


def is_student_registered(student_id):
    for student in registered_students:
        for key,value in student.items():
            if key == "id" and value == int(student_id):
                return True
    return False



def add_students_records():
    student_id = input("Enter a student ID: ")

    if not is_student_registered(student_id):
        print("\nStudent not registered.please registered first ")
        return False

    record ={
        "id":student_id,
        "academic_records":{
            "cgpa":input("enter student cgpa:  "),
            "grade":input("enter Grade: ").upper()
        },
        "attendance_records":{
            "attendance_percentage": input("\nEnter Attendance Percentage: "),
            "leaves": input("Enter Number of Leaves: ")
        },
        "behavioural_records":{
            "warnings":input("\nEnter no. of warnings: "),
            "assingnment":input("Enter task submission: ").upper()
        }
    }

    students_records.append(record)


def view_students_records():
    if not students_records:
        print("\nNo students registered yet")
        return

    print(json.dumps(students_records, indent=4))



def menu():
    print("\n<--------Students Management-------->")
    print("1. Register Student")
    print("2. View Registered Students")
    print("3. Add Students Records")
    print("4. View Students Records")
    print("5. Exit")

    user_select = input("\nPlease select one option: ")
    return user_select



def dashboard():
    
    while True:
        select = menu()

        if select == "1":
            students_registration()
        
        elif select == "2":
            view_registered_students()
        
        elif select == "3":
            add_students_records()
        
        elif select == "4":
            view_students_records()
        
        elif select == "5":
            print("Exit...\ndone")
            break
        
        else:
            print("invalid option")



dashboard()