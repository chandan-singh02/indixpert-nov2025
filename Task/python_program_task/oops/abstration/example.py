from abc import ABC,abstractmethod
class MobilePhone(ABC):
    @abstractmethod
    def ph_unlock():
        pass

    def power_on():
        pass

    @abstractmethod
    def call():
        pass

    @abstractmethod
    def get_battery_status():
        pass

class Samsung(MobilePhone):
    def ph_unlock(self):
        print("Unlocking samsung via PIN")
    
    def power_on(self):
        print("powering samsung phone...")
    
    def call(self):
        print("Send call via samsung phone")
    
    def get_battery_status(self):
        print("battery health is 80%")


class Oppo(MobilePhone):
    def ph_unlock(self):
        print("Unlocking oppo  via FINGER PRINT")
    
    def power_on(self):
        print("powering oppo phone...")
    
    def call(self):
        print("Send call via oppo phone")
    
    def get_battery_status(self):
        print("battery health is 70%")



class Iphone(MobilePhone):
    def ph_unlock(self):
        print("Unlocking iphone  via FACE ID")
    
    def power_on(self):
        print("powering iphone phone...")
    
    def call(self):
        print("Send call via iphone phone")
    
    def get_battery_status(self):
        print("battery health is 20%")

    

samsung_user1 = Samsung()
samsung_user1.ph_unlock()
samsung_user1.power_on()
samsung_user1.call()
samsung_user1.get_battery_status()


