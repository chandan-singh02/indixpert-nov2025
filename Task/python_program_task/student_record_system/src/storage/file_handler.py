import json


FILE_PATH = "C:/Users/franky/Desktop/Indixpert-nov-chandan sing/python_program_task/student_record_system/students.json"

def load_students():
    with open(FILE_PATH, "r") as file:
        students = json.load(file)
        # print(students)
    return students


def save_students(students):
    with open(FILE_PATH, "w") as file:
        json.dump(students, file, indent=3)


def append_student(student):
    students = load_students()
    students.append(student)
    save_students(students)
    # with open(FILE_PATH, "w") as file:
    # json.dump(students, file, indent=3)
