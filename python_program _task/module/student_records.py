
from registration_students import registered_students
students_records = []

def is_student_registered(student_id):
    for student in registered_students:
        for key,value in student.items():
            if key == "id" and value == int(student_id):
                return True
    return False


def add_student_records():
    
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
    print("\n record added successfully")



def search_students():
    pass


def update_students():
    pass


def delete_students():
    pass


def search_students():
    pass


def get_all_students():
    pass