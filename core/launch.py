import plivo

auth_id = "MAYTK0M2MZNJA1MJQ4Y2"
auth_token = "OThkMjNiMTUwYzcyM2Y0ZGVkYzJlNWViMWM3NWRh"

p = plivo.RestAPI(auth_id, auth_token)

params = {
    'src': '+919449193484', 
    'dst' : '+918971651434', 
    'text' : "Sentinel is reminding you!!"
}

response = p.send_message(params)

print(str(response))
print(str(response[0]))
print(str(response[1]))
print (str(response[1]['message_uuid']))
print (str(response[1]['api_id']))

