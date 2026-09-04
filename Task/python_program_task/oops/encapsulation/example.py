class Patient:
    def __init__(self,name,disease,patient_id):
        self.name= name
        self.__disease = disease
        self.__patient_id = patient_id


    def get_patient_id(self):
        return self.__patient_id
    
    def get_disease(self):
        return self.__disease
    

    def set_disease(self,new_disease):
        self.__disease = new_disease
        

p1 = Patient("chandan","Covid19","102")

p1.__disease ="fever"
p1.__patient_id = 103
# p1.name= "dhawal"

print("name: " ,p1.name)
print("disease: " ,p1.get_disease())
print("patient id: " ,p1.get_patient_id())
# print("patient id": p1.patient_id())
