import json
import time

f = open("plantas.json")
dataset = json.load(f)

i = 0 
for data in dataset:
    id = "p" + str(i)
    i += 1
    data["_id"] = id


fwrite = open("plantasAlterado.json","w")

json.dump(dataset,fwrite,indent = " ")