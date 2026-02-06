# name = input("Enter student name: ").strip().isalpha()
# student_id = input("Enter student ID: ").strip().isdigit()
# address = input("Enter address: ").strip()



name = input("Enter student name: ").strip()
student_id = input("Enter student ID: ").strip()
address = input("Enter address: ").strip()


valid_name = name.isalpha()
valid_id = student_id.isdigit()


student_data = {
    "name": name,
    "student_id": student_id.zfill(18),
    "address": address
}

print("is data valid:", valid_name and valid_id)
print("student Data:", student_data)

