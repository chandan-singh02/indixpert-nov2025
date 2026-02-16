from src.student.student_dashboard import create_student,update_student,delete_student,view_student

def menu():
    print("\n<--------Students Management-------->")
    print("1. Create Student")
    print("2. Update Students")
    print("3. Delete student")
    print("4. View student")
    print("5. Exit")

    user_select = input("\nPlease select one option: ")
    return user_select



def dashboard():
    
    while True:
        select = menu()

        if select == "1":
           create_student()
        
        elif select == "2":
            update_student()
        
        elif select == "3":
            delete_student()
        
        elif select == "4":
            view_student()
        
        elif select == "5":
            print("Exit...\ndone")
            break
        
        else:
            print("invalid option")



