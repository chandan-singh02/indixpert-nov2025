#why i cant write listdata=[] inside my function or method
#1-because we can access it anywhere from global where
#2 if we will write list inside function   if everytime a function call  our list will be empty or blank so list data has only one work to store mutiple data


# listdata=[] #
# def register_student():
#     # listdata=[] #
#     dictdata ={}
#     dictdata["id"] =input("enter a id :")
#     dictdata["address"] =input("enter a adress :")
#     dictdata["name"] =input("enter a name :")

#     listdata.append(dictdata)
   

# def save_file(data):
#     with open("testing.json","w"):
#          jsonstring =json.dumps(data)
#          file.write(jsonstring)
#          file.write(data) #this will not works anymore because write use for file to store plain text but our file name is json so we have to convert it into json first 


# for n in range(2):
#     register_student()

# save_file(listdata)
#anwer is-  jsonstring =json.dumps(data)
#file.write(jsonstring)

#same diffrent way we used other methods and function for files .db .xml and .csv files



#OUPUT GUESS

# #oops 1----------
# class Student:
#     name="chandan"

#     def __init__(self):
#         pass

#     def getname(self):
#         print(self.name)


# ob = Student()
# ob.getname()


# #oops 2----------
# class Student:
#     name="chandan"

#     def __init__(self):
#         self.name="dhawal"

#     def getname(self):
#         print(self.name)


# ob = Student()
# ob.getname()


# #oops 3----------
# class Student:
#     name="chandan"

#     def __init__(self):
#         name="dhawal"

#     def getname(self):
#         print(self.name)
    
#     def setname(self):
#         self.name="indixpert"


# ob = Student()
# ob.setname()
# ob.getname()



# #oops 3----------
# class Student:
#     name="chandan"

#     def __init__(self):
#         self.name="dhawal"

#     def getname(self):
#         print(self.name)
    
#     def setname(self):
#         self.name="indixpert"


# ob = Student()
# ob.setname()
# ob.name="virat"
# ob.getname()


# #oops 3----------
# class Student:
#     def __init__(self,id,name):
#        print(id)
#        print(name)

#     def getname(self):
#         print(self.id)
#         print(self.name)
    
# ob = Student()
# ob.getname()


# class Student:
#     def __init__(self,id,name):
#        print(id)
#        print(name)

#     def getname(self):
#         print(self.id)
#         print(self.name)
    
# ob = Student(101,"chandan")
# ob.getname()


# class Student:
#     name="Chandan"
#     def __init__(self,id,name):
#        print(id)
#        print(name)

#     def getname(self):
#         print(self.id)
#         print(self.name)
    
# ob = Student(101,"chandan")
# ob.getname()  #erorr will get  because the object has no value id and name vairable



# class Student:
#     name="Chandan"
#     def __init__(self,id,name):
#        print(id)
#        print(name)

    
# ob = Student(101,"chandan")
# print(ob.id) # this cant access parameter right we just have passed arugemnt only inside object we dosnt have anything
#students obejct dosnt have id attribute we get aerror , id is not pard of any object we dosnt have store anywhere



# class Student:
#     name="Chandan"
#     def __init__(self,number,name):
#        print(id)
#        print(name)

    
# ob = Student(101,"chandan")
# ob.id="chandan"
# print(ob.id)




# class Student:
#     name="Chandan"
#     def __init__(self,number,name):
#        print(id)
#        print(name)

    #  def getname():
    #    print(self.id)
# ob = Student(101,"chandan")
# ob.id="chandan"
# ob.getname()



# class Student:
#     name="Chandan"
#     def __init__(self,number,name):
#        print(id)
#        print(name)

#     def getname(self):
#        print(self.id)
#        print(self.number)

# ob = Student(101,"chandan")
# ob.id="chandan"
# # print(ob.id)
# ob.getname()  we will get a error stuent object dosnt have number attribute even we have id should be print but we get error

