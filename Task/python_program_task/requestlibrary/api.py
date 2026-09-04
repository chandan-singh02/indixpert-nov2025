import requests
import json

class API:
    def get_data(self):
        response = requests.get("https://jsonplaceholder.typicode.com/comments")
        return response.json()


    def search_email(self,email):
        data = self.get_data()

        for user in data:
            if user["email"] == email:
                return user
        
        return "Email not found"

api_obj = API()
# data = api_obj.get_data()
# print(json.dumps(data,indent=4))

email = input("Enter your email: ")
result = api_obj.search_email(email)
print(json.dumps(result,indent=4))


