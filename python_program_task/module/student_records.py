
from registration_students import registered_students
import json
students_records = []

def is_student_registered(student_id):
    for student in registered_students:
        for key,value in student.items():
            if key == "id" and value == int(student_id):
                return True
    return False

def get_student_name(student_id):
    for student in registered_students:
        if student["id"] == int(student_id):
            return student["name"]
    
    return None


def add_student_records():
    
    student_id = input("Enter a student ID: ")

    if not is_student_registered(student_id):
        print("\nStudent not registered.please registered first ")
        return False
    
    student_name = get_student_name(student_id)

    record ={
        "id":student_id,
        "name":student_name,
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
    search_name = input("Enter student name: ").lower()

    found = False

    for student in students_records:
        if student["name"] == search_name:
            print("\nStudent Found:")
            print(json.dumps(students_records, indent=4))
            found = True

    if not found:
        print("\nstudent not found")



def update_students():
    update_student_id = input("Enter a student ID: ")

    if not is_student_registered(update_student_id):
        print("\nStudent not registered.please register first ")
        return False
    
    for student in students_records:
        if student["id"] == update_student_id:
            print("\nStudent found. enter new values")
        
            new_name = input("enter new name: ")
            if new_name:
                student["name"] = new_name.lower()
            
            new_cgpa = input("Enter new CGPA: ")
            if new_cgpa:
                student["academic_records"]["cgpa"] = new_cgpa
            
            print("\nStudent updated successfully")
            return

    print("student record not found")
        
    
    
    

    


def delete_students():
    delete_id = input("enter student ID to delete: ")

    for student in students_records:
        if student["id"] == delete_id:
            students_records.remove(student)
            print("\nstudent record deleted successfully")
            return

    print("\nstudent not found")
    


def get_all_students():
    if len(students_records) == 0:
        print("No records found in database")
        return False

    print(json.dumps(students_records, indent=4))