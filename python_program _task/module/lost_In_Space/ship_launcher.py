import ship_control
import mission_control
import crew_registry
import ai_core
import time

def launch_jupiter2_ship(start,name):
    
    if start == 1:
        print(f"\nAll system good {name} Successufully launch!")
        print(f"Welcome to {name}")
        
        mission_control.create_mission("Find a new Planet.Earth is no longer for sustainable")
        time.sleep(2)

        mission_control.get_mission_status("Scanning planet atmosphere")
        time.sleep(2)

        crew_registry.register_crew_member("Chandan Singh","Enginner")
        time.sleep(2)

        crew_registry.assign_crew_task("Vikas Kumar","Planet surface scouting")
        time.sleep(2)

        ai_core.monitor_crew_status()
        time.sleep(2)

        ai_core.ship_report()
        time.sleep(2)
    

        print("\nSelect control mode:")
        mode = int(input("press 1 for AI mode || press 2 for Manual: "))

        if mode == 1:
            ship_control.initialize_ai_ship(True)   
        else:
            ship_control.disable_ai_ship(False) 
          
     
    elif start == 0:
        print("\nEngine is stopping...")
        
        

while True:
    option = int(input("\nSTART: 1 || STOP: 0  :"))
    launch_jupiter2_ship(option,"Jupiter2")
