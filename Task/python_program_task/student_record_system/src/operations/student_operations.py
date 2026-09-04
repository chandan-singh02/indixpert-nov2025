import uuid
from src.storage.file_handler import load_students,append_student,save_students
from src.utilis.id_helper import get_student_id
from src.validation.input_validator import is_only_alpha
# registered_student = []

def register_student():

    name = input("Enter your name: ")
    if not is_only_alpha(name):
        print("Only characters are allowed")
        return
  
    address = input("Enter your address: ")
    if not is_only_alpha(address):
        print("Only characters are allowed")
        return

    course = input("Enter your course: ")
    if not is_only_alpha(course):
        print("Only characters are allowed")
        return
    
    user = {
        "id":str(uuid.uuid4())[:8],
        "name":name,
        "address":address,
        "course":course
    }
    # print(user)
    # registered_student.append(user)
    append_student(user)
   
    
    print("\nStudent registered successfully!")



def search_student_by_id():
    search_student_id = get_student_id() 

    student_details = load_students()
    # print(student_details)

    for student in student_details:
        if student["id"] == search_student_id:
            print("\nStudent Found")
            print(student)
            return
        
    print("\nStudent not found")




def update_student_record():
    update_student_id = get_student_id()

    student_details = load_students()

    for student in student_details:
        if student["id"] == update_student_id:
            print("\nStudent found. enter new values")


            name = input("Update name: ")
            if name:
                student["name"] = name
            
            address = input("Update address: ")
            if address:
                student["address"] = address
            
            course =  input("Update course: ")
            if course:
                student["course"] = course

            # user = {

            #    "id":student_id,
            #    "name":name,
            #    "address":address,
            #    "course":course

            # }

            # append_student(student_details)
            # save_students(user)
            save_students(student_details)

            print("\n student updated successfully")
            return

    print("\n student not found")




def delete_student_record():
    delete_student_id = get_student_id()

    student_details = load_students()
    # print("student details before",student_details)

    for student in student_details:
        if student["id"] == delete_student_id:
            student_details.remove(student)
            save_students(student_details)
            # print("student after delete",student_details)
            
            print("\n student deleted successfully")
            return

    print("\n student not found")



        
def view_all_students():
    print("\nAll students list")
    student_details = load_students()

    print(student_details)

    # for student in student_details:
    #     print(student)





def display_menu():

    print("\nStudent Record System")
    print("\n1. Student Registration")
    print("2. Search Student By ID")
    print("3. Update Student Record")
    print("4. Delete Student")
    print("5. View All Student Record")
    print("6. Exit")

    user_choice = input("Enter your choice: ")

    if user_choice.isdigit():
        user_choice = int(user_choice)

        return user_choice


def dashboard():
    
    while True:

        user_selected = display_menu()

        if user_selected == 1:
            register_student()
           
        elif user_selected == 2:
             search_student_by_id()
            
        elif user_selected == 3:
            update_student_record()
            
        elif user_selected == 4:
            delete_student_record()
            
        elif user_selected == 5:
            view_all_students()

        elif user_select == 6:
            print("\nExit sucessfully!")
        
        else:
            print("\n Invalid option ")

dashboard()




    





    

    











