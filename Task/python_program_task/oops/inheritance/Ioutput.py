
# class User:
#     def __init__(self):
#         self.name ="chandan"
#         self.gender="male"
    
#     def login(self):
#         print("login sucess")

# class Student(User):
#     def __init__(self):
#         self.rollno =100
    
#     def enroll(self):
#         print("enroll into the course")

# u =User()
# s =Student()

# print(s.gender)
# print(s.rollno)

# s.login()
# s.enroll()
#method overiding happening right here ,,, here when we created a child class student object first it looks own class constructor if it finds he will not go parent class construcotr
#so that the parent constructor never calls and its attributes name and gender never initialized  never created  ..if child has not constructor then it looks parent class constrtuto then it runs
#when we r are doing inheritence we can access parent class data ,parent method and its constructor also ,,we can use super keyword we all first parent constrtucot then chikd

# #### #### #### ####
# class Phone:
#     def __init__(self,name,price,brand,camera):
#         print("Inside phone constructor")
#         self.price= price
#         self.brand = brand
#         self.camera = camera

#     def buy(self):
#         print("Buying a phone")

# class SmartPhone(Phone):
#     pass

# s= SmartPhone(20000,"Apple",13)
#  s= SmartPhone(20000,"Apple",13)
#        ^^^^^^^^^^^^^^^^^^^^^^^^^^^^
# TypeError: Phone.__init__() missing 1 required positional argument: 'camera'


#### #### #### ####
# class Phone:
#     def __init__(self,price,brand,camera):
#         print("Inside phone constructor")
#         self.price= price
#         self.brand = brand
#         self.camera = camera

#     def buy(self):
#         print("Buying a phone")

# class SmartPhone(Phone):
#     pass

# s= SmartPhone(20000,"Apple",13)
# s.buy()
#always remember when child class dosnt have constructor it call parent class constructor


# #### #### #### ####
# class Phone:
#     def __init__(self,price,brand,camera):
#         print("Inside phone constructor")
#         self.price= price
#         self.brand = brand
#         self.camera = camera

#     def buy(self):
#         print("Buying a phone")

# class SmartPhone(Phone):
#     def __init__(self,os,ram):
#         self.os= os
#         self.ram = ram
#         print("Inside Smartphone constructor")
        
# s= SmartPhone("Android",13)


# #### #### #### ####
# class Phone:
#     def __init__(self,price,brand,camera):
#         print("Inside phone constructor")
#         self.price= price
#         self.brand = brand
#         self.camera = camera

#     def buy(self):
#         print("Buying a phone")

# class SmartPhone(Phone):
#     def __init__(self,os,ram):
#         self.os= os
#         self.ram = ram
#         print("Inside Smartphone constructor")
        

# s= SmartPhone("Android",13)


# #### #### #### ####
# class Phone:
#     def __init__(self,price,brand,camera):
#         print("Inside phone constructor")
#         self.__price= price
#         self.brand = brand
#         self.camera = camera

#     def show(self):
#         print(self.price)

# class SmartPhone(Phone):
#     def check(self):
#         print(self.__price)
           

# s= SmartPhone(20000,"Android",13)
# s.show()



# #### #### #### ####
# class Phone:
#     def __init__(self,price,brand,camera):
#         print("Inside phone constructor")
#         self.__price= price
#         self.brand = brand
#         self.camera = camera
    #we cann access private variable using getter methods
#     def show(self):
#         print(self.__price)

# class SmartPhone(Phone):
#     def check(self):
#         print(self.__price)
           

# s= SmartPhone(20000,"Android",13)
# s.show()
# print(s.brand)
# s.check()
#child class cant access private members of the class




# #### #### #### ####
# class Phone:
#     def __init__(self,price,brand,camera):
#         print("Inside phone constructor")
#         self.__price= price
#         self.brand = brand
#         self.camera = camera

#     def __show(self):
#         print(self.price)

# class SmartPhone(Phone):
#     def check(self):
#         print(self.__price)
           

# s= SmartPhone(20000,"Android",13)
# s.__show()


# #### #### #### ####
# class Son:
#     def __init__(self,num):
#         self.__num= num

#     def get_num(self):
#         return self.__num

# class Child(Parent):
#     def check(self):
#         print("This is Child class")
           

# son= Child(100)
# print(son.get_num())
# son.show()


# #### #### #### ####
# class Son:
#     def __init__(self,num):
#         self.__num= num

#     def get_num(self):
#         return self.__num

# class Child(Parent):
#     def __init__(self,val,num):
#         self.__val= val

#     def get_val(self):
#         return self.__val
           

# son= Child(100,10)
# print("parent num": son.get_num())
# print("child val": son.get_val())
# son.show()



# #### #### #### #### important
# class A:
#     def __init__(self):
#         self.var1= 100

#     def display1(self):
#         print("class a :",self.var1)

# class B(A):
#       def display2(self,var1):
#         print("class b :",self.var1)


# obj = B()
# obj.display1(200)






# # #### #### #### #### method overrding
# class Phone:
#     def __init__(self,price,brand,camera):
#         print("Inside phone constructor")
#         self.__price= price
#         self.brand = brand
#         self.camera = camera

#     def buy(self):
#         print("buying a phone")

# class SmartPhone(Phone):
#     def buy(self):
#         print("buying a  Smartphone")   
     
           

# s= SmartPhone(20000,"Android",13)
# s.buy()



# #### #### #### #### super keyword -is way to call parent method
# class Phone:
#     def __init__(self,price,brand,camera):
#         print("Inside phone constructor")
#         self.__price= price
#         self.brand = brand
#         self.camera = camera

#     def buy(self):
#         print("buying a phone")

# class SmartPhone(Phone):
#     def buy(self):
#         print("buying a  Smartphone")   
#         super().buy()
     
           

# s= SmartPhone(20000,"Android",13)
# s.buy()



# # #### #### #### #### super--->constructor
# class Phone:
#     def __init__(self,price,brand,camera):
#         print("Inside phone constructor")
#         self.price= price
#         self.brand = brand
#         self.camera = camera

#     def buy(self):
#         print("Buying a phone")

# class SmartPhone(Phone):
#     def __init__(self,price,brand,camera,os,ram):
#         print("Inside Smartphone constructor")
#         super().__init__(price,brand,camera)
#         self.os= os
#         self.ram = ram
#         print("Inside Smartphone constructor")
        
# s= SmartPhone(20000,"Samsung",12 "Android",2)
# print(s.os)
# print(s.brand)
# s.super().buy() # we cant call super outside the class we call isnide the child class



# #### #### #### #### super keyword -is way to call parent method
# class Phone:
#     def __init__(self,price,brand,camera):
#         print("Inside phone constructor")
#         self.__price= price
#         self.brand = brand
#         self.camera = camera

#     def buy(self):
#         print("buying a phone")

# class SmartPhone(Phone):
#     def buy(self):
#         print("buying a  Smartphone")   
#         print(super().brand)
     
           

# s= SmartPhone(20000,"Android",13)
# s.buy()





# # #### #### #### ####
# class Parent:
#     def __init__(self,num):
#         self.__num= num

#     def get_num(self):
#         return self.__num

# class Child(Parent):
#     def __init__(self,num,val):
#         super().__init__(num)
#         self.__val= val

#     def get_val(self):
#         return self.__val
           

# son= Child(100,200)
# print("parent num": son.get_num())
# print("child val": son.get_val())
# son.show()

# # #### #### #### ####
# class Parent:
#     def __init__(self):
#         self.num= 100

# class Child(Parent):
#     def __init__(self):
#         super().__init__()
#         self.var= 200
    
#     def show(self):
#         print(self.num)
#         print(self.var)
           

# son= Child()
# son.show() #self and son are both same

# # #### #### #### ####
# class Parent:
#     def __init__(self):
#         self.num= 100

# class Child(Parent):
#     def __init__(self):
#         super().__init__()
#         self.var= 200
    
#     def show():
#         print(self.num)
#         print(self.var)
           

# son= Child()
# son.show() #self and son are both same



# class Parent:
#     def __init__(self):
#         self.__num= 100

#     def show():
#         print("Parent: ",self.__num)
       

# class Child(Parent):
#     def __init__(self):
#         super().__init__()
#         self.__var= 10
    
#     def show():
#         print("Child: ",self.__var)
           

# son= Child()
# son.show() 


# #### #### #### ####  single inhertance
# class Phone:
#     def __init__(self,price,brand,camera):
#         print("Inside phone constructor")
#         self.__price= price
#         self.brand = brand
#         self.camera = camera

#     def buy(self):
#         print("buying a phone")

# class SmartPhone(Phone):
#     pass

 
# SmartPhone(20000,"Android",13).buy()

#


# #### #### #### ####  multilevel inhertance
# class Product:
#     def review(self):
#         print("Product customer review")

# class Phone(Product):
#     def __init__(self,price,brand,camera):
#         print("Inside phone constructor")
#         self.__price= price
#         self.brand = brand
#         self.camera = camera

#     def buy(self):
#         print("buying a phone")

# class SmartPhone(Phone):
#     pass

 
# s=SmartPhone(20000,"Android",13)
# s.buy()
# s.review()



# # #### #### #### ####  hierachical inhertance

# class Phone:
#     def __init__(self,price,brand,camera):
#         print("Inside phone constructor")
#         self.__price= price
#         self.brand = brand
#         self.camera = camera

#     def buy(self):
#         print("buying a phone")

# class SmartPhone(Phone):
#     pass

# class FeaturePhone(Phone):
#     pass

 
# s=SmartPhone(20000,"iphone",13)
# s.buy()

# s=FeaturePhone(10,"lava",13)
# s.buy()



# # #### #### #### ####  hierachical inhertance

# class Phone:
#     def __init__(self,price,brand,camera):
#         print("Inside phone constructor")
#         self.__price= price
#         self.brand = brand
#         self.camera = camera

#     def buy(self):
#         print("buying a phone")

# class SmartPhone(Phone):
#     pass

# class FeaturePhone(Phone):
#     pass

 
# s=SmartPhone(20000,"iphone",13)
# s.buy()

# s=FeaturePhone(10,"lava",13)
# s.buy()


# #### #### #### ####  mutiple inhertance  in java multiple inheritance dosnt works hwoerver in python it works

# class Phone:
#     def __init__(self,price,brand,camera):
#         print("Inside phone constructor")
#         self.__price= price
#         self.brand = brand
#         self.camera = camera

#     def buy(self):
#         print("buying a phone")

# class Product:
#     def review(self):
#         print("Customer Service")

# class SmartPhone(Phone,Product):
#     pass

 
# s=SmartPhone(20000,"iphone",13)
# s.buy()
# s.review()

# #### #### #### ####  diamond problem

# class Phone:
#     def __init__(self,price,brand,camera):
#         print("Inside phone constructor")
#         self.__price= price
#         self.brand = brand
#         self.camera = camera
    
#     def buy(self):
#         print("buying a phone")

# class Product:
#     def buy(self):
#         print("buying a product")

 #MRO-method resolution order , so in conlficting situation python mro decide which comes first
 #deicide which parent method call so here order matter Product comes first it will get a high priority then its buy method run so 
 #java couldnt figureout hwo to handle we call ambiguity error but python reslove via mro
# class SmartPhone(Product,Phone):
#     pass
# s=SmartPhone(20000,"iphone",13)
# s.buy()
#which buy method call if we inherit both parent class same method name who would call


# class A:
#     def m1(self):
#         return 20
# class B(A):
#     def m1(self):
#         return 30
#     def m2(self):
#         return 40

# class C(B):
#     def m2(self):
#         return 20

# obj1=A()
# obj2=B()
# obj3=C()
# print(obj1.m1()+obj3.m1()+obj3.m2())



# class A:
#     def m1(self):
#         return 20
# class B(A):
#     def m1(self):
#         val=super().m1()+30
#         return val
    

# class C(B):
#     def m2(self):
#         val =self.m1()+20
#         return val

# obj=C()
# print(obj.m1())




# class A:
#     def m1(self):
#         return 20
# class B(A):
#     def m1(self):
#         val=super().m1()+30
#         return val
    

# class C(B):
#     def m1(self):
#         val =self.m1()+20
#         return val

# obj=C()
# print(obj.m1())
#because method overrrding self.m1 what is u will call itself again and again parent m1 never call self.m1 continoulsy
#calls repeateadly itself python detects the infinite loop then break the execution  and then throw error