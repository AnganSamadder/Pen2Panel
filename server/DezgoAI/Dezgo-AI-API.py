import requests
import os
import base64
import json
from dotenv import load_dotenv
from datetime import datetime

load_dotenv()

# Replace 'your_api_key' with your actual Dezgo API key
# // Define the API endpoint

with open('TestImage.jpeg', 'rb') as image_file:
    base64_image = base64.b64encode(image_file.read()).decode('utf-8')

apiUrl = 'https://api.dezgo.com/image2image'
headers = {'X-Dezgo-Key': os.getenv('DEZGO_APIKEY'), 
'X-Dezgo-Host': 'api.dezgo.com',
'Content-Type': 'application/json'}
data = {
  'prompt': "hello world", 
  'init_image': base64_image, 
  'strength': 0.8, 
  'model': "toonify_2", 
  'negative_prompt': "text", 
  'guidance': 10, 
  'format': "png"
}

response = requests.post(apiUrl, headers=headers, data=json.dumps(data))

if response.status_code == 200:
    print("Success! Writing output file...")
    timestamp = datetime.now().strftime("%Y%m%d%H%M%S")
    output_filename = f"output_{timestamp}.png"
    with open(output_filename, 'wb') as f:
        f.write(response.content)
        f.flush()
else:
    print(f"There was an error: {response.status_code}")