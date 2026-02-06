import datetime
import calendar

#print the calender repesctive of user year and month
year = int(input("enter year: "))
month = int(input("enter month: "))


print("Calender: ",calendar.month(year,month))








#genrate a report based on user input choices
print("\n Report ")
print("1. Last 7 days")
print("2. Last 1 month")
print("3. Last 6 months")

today = datetime.datetime.now()
print (today)

choice = input("enter option: ")

if choice == "1":

    # today + datetime.timedelta(days=1)

    start_date = today + datetime.timedelta(days= -7)
    print("\nreport generated on this date: ",start_date)

elif choice == "2":
    start_date = today + datetime.timedelta(days= -30)
    print("the report generated on this date: ",start_date)

elif choice == "3":
    start_date = today + datetime.timedelta(days= -180)
    print("the report generated on this date: ",start_date)

else:
    print("Invalid option")