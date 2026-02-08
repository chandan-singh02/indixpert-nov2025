import student_records
from registration_students import register_student,get_all_registration

def menu():
    while True:
        print("\n1. Register User")
        print("2. Add Student Records")
        print("3. Update Student Records")
        print("4. Delete Student Records")
        print("5. Search Student Records")
        print("6. View Registered Students")
        print("7. View Student Records")


        choice = input("\nSelect one option: ")

        if choice.isdigit():
            choice = int(choice)
        
        if choice == 1:
            print("\nREGISTRATION STUDENT")
            register_student()

        elif choice == 2:
            print("\nADD STUDENT")
            student_records.add_student_records()

        elif choice ==  3:
            print("\nUPDATE STUDENT")
            student_records.update_students()

        elif choice == 4:
            print("\nDELETE STUDENT")
            student_records.delete_students()
            
        elif choice == 5:
            print("\nSEARCH STUDENT")
            student_records.search_students()
        
        elif choice == 6:
            print("\n ALL REGISTERED STUDENTS")
            get_all_registration()
        
        elif choice == 7:
            print("ALL STUDENT RECORDS")
            student_records.get_all_students()
        
        elif choice == 8:
            print("\nExiting...")
            print("\nDone...")
            break

        else:
            print("invalid option")    


menu()
