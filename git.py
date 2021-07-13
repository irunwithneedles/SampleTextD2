import requests

#dictionary to hold extra headers
HEADERS = {"X-API-Key":'2f0369fc936941f7a71542fa95f592af'}

#make request for Gjallarhorn
r = requests.get("https://www.bungie.net/platform/GroupV2/3910069/AdminsAndFounder/", headers=HEADERS);

#convert the json object we received into a Python dictionary object
#and print the name of the item
inventoryItem = r.json()

for i in range(7):
    print(inventoryItem['Response']['results'][i]['destinyUserInfo']['displayName'])

#make request for Gjallarhorn
d = requests.get("https://www.bungie.net/platform//Destiny2/Clan/3910069/WeeklyRewardState/", headers=HEADERS);

#convert the json object we received into a Python dictionary object
#and print the name of the item
clanItems = d.json()

for j in range(4):
    print(clanItems['Response']['rewards'][1]['entries'][j])

