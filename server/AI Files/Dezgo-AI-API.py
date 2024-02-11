import requests
import os
import base64
import json
from dotenv import load_dotenv
from datetime import datetime
from Gemini_AI_API import panels
from PIL import Image

load_dotenv()

apiUrl = 'https://api.dezgo.com/image2image'

folder_path = "./TestInputImages"
output_folder = "./OutputImages"
if not os.path.exists(output_folder):
    os.makedirs(output_folder)

image_files = []

for filename in os.listdir(folder_path):
    if filename.endswith(".jpeg") or filename.endswith(".png"):
        image_files.append(os.path.join(folder_path, filename))

# Ensure that there are panels and images to iterate through
num_panels = len(panels)
num_images = len(image_files)

for i, image_path in enumerate(image_files):
    if i < num_panels:
        with open(image_path, 'rb') as image_file:
            base64_image = base64.b64encode(image_file.read()).decode('utf-8')

        headers = {'X-Dezgo-Key': os.getenv('DEZGO_APIKEY'), 
        'X-Dezgo-Host': 'api.dezgo.com',
        'Content-Type': 'application/json'}
        data = {
            'prompt': panels[i],
            'init_image': base64_image,
            'strength': 0.8,
            'model': "toonify_2",
            'negative_prompt': "text",
            'guidance': 10,
            'format': "png"
        }

        response = requests.post(apiUrl, headers=headers, data=json.dumps(data))

        if response.status_code == 200:
            print(f"Success for image {i + 1}! Writing output file...")
            output_filename = f"output_{i + 1}.png"
            file_path = os.path.join(output_folder, output_filename)
            with open(file_path, 'wb') as f:
                f.write(response.content)
                f.flush()
        else:
            print(f"There was an error for image {i + 1}: {response.status_code}")

    else:
        print(f"No panel available for image {i + 1}")

# Handle the case when there are more panels than images
if num_panels > num_images:
    print(f"Warning: There are more panels ({num_panels}) than images ({num_images}). Some panels may be ignored.")



# Pillow Code
# Read output images
output_files = []
new_folder_path = "./OutputImages"

for filename in os.listdir(new_folder_path):
    if filename.endswith(".jpeg") or filename.endswith(".png"):
        output_files.append(os.path.join(new_folder_path, filename))

# Create the 'images' directory if it doesn't exist
output_directory = "finalImage"
os.makedirs(output_directory, exist_ok=True)

# Create a new image
merged_width = 0
max_height = 0

# Calculate the total width and maximum height of all images
for file_path in output_files:
    image = Image.open(file_path)
    merged_width += image.width
    max_height = max(max_height, image.height)

# Create a new image with the calculated size
new_image = Image.new('RGB', (merged_width, max_height), (250, 250, 250))

# Paste each image side by side
current_width = 0
for file_path in output_files:
    image = Image.open(file_path)
    new_image.paste(image, (current_width, 0))
    current_width += image.width

# Save and show the merged image
output_path = os.path.join(output_directory, "merged_image.png")
new_image.save(output_path, "PNG")
new_image.show()