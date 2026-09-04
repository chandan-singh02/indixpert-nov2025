# ask user input 1 to 20 how many files want to creat- create mutiple unique files  even run mutiple times
#dont use uuid and random function

import time
def create_files():
    
    no_of_files = int(input("Enter a files u want to create"))

    if no_of_files > 0 and no_of_files < 20:
        for i in range(no_of_files):
            t = str(time.time()) 
            unique =t.replace(".","")[-8:]
            filename = f"file_{unique}.txt"

            with open(filename,"w") as f:
                f.write(f"hello file name_{unique}")
            print(filename,"created")

create_files()



