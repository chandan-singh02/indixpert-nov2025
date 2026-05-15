import json
# import os
# from datetime import datetime
LOG_FILE ="python_program_task/oops/encapsulation/logs.json"
def write_log(msg):
    log = {
        "message": msg,
    }
      # get correct path (same folder as logger.py)
    # file_path = os.path.join(os.path.dirname(__file__), LOG_FILE)
  
    with open(LOG_FILE, "r") as f:
        data = json.load(f)
        
   

    data.append(log)

    with open(LOG_FILE, "w") as f:
        json.dump(data, f, indent=4)