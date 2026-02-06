name="Chandan singh"
address="Bageshwar"
state="Uttrakhand"
graduation="Btech in computer science"
skills="C ,Javascript,Nodejs,Express,Mongodb"

print(f"My name is {name}. I am from {address} in {state}. I graduated in {graduation}.My skills are {skills}")





#calculate percentage
name = input("Please enter your name: ")
print("Enter your marks:")

maths = input("Maths: ")
english = input("English: ")
computer = input("Computer: ")
hindi = input("Hindi: ")
chemistry = input("Chemistry: ")


total = int(maths) + int(english) + int(computer) + int(hindi) + int(chemistry)

percentage = (total / 500) * 100

print("Student Name:", name)
print("Total Marks:", total)
print(f"Percentage:", percentage,"%" )