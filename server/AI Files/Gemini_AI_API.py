import pathlib
import textwrap
import os
import shutil

import google.generativeai as genai
from IPython.display import Markdown
from dotenv import load_dotenv

load_dotenv()

output_folder = './OutputImages'

# Check if the folder exists
if os.path.exists(output_folder):
    # Remove the contents of the folder
    for file_name in os.listdir(output_folder):
        file_path = os.path.join(output_folder, file_name)
        os.remove(file_path)

# os.makedirs(output_folder)

def to_markdown(parts):
    text = '  * ' + '  * '.join(parts)
    return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))

genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))

# for m in genai.list_models():
#     if 'generateContent' in m.supported_generation_methods:
#         print(m.name)

model = genai.GenerativeModel('gemini-pro')

user_input = input("Enter your comic book panel descriptions:\n")
prompt = (
    "Imagine you are a super hero comic story writer. Your task is to take comic book panel descriptions and create a superhero story\n"

    # Instructions
    "These descriptions will give basic information, such as character descriptions, actions, and locations. \n"
    "Take these descriptions and create a story that is engaging and interesting.  \n"
    "The descriptions should ALWAYS BE MORE than  one sentence. \n"
    "It should give a clear but highly detailed description of what is happening in the panel. \n"
    "Make sure to include dialogue and character descriptions. \n"
    "Dialogue should be engaging and interesting. Not just one word or one sentence. \n"
    "Remember, use the given descriptions as a base and expand upon them to create a story. \n"
    "DO NOT change what happens in the panels, but you can add to them. \n"
    "DO NOT change the order of the events given. \n"

    # Formatting
    "Each panel return your answer in the following format:\n\n"
    "Panel number (Based on the number of sentences the user gives. Will never exceed n sentences, where n is the number of sentences that the user inputs):\n"
    "Description (An explanation of what is going on in the panel):\n"
    "Characters (Give names and descriptions of the characters, including what they are wearing and defining characteristics):\n"
    "Dialogue (What are the characters saying to each other):\n"
    "Location (Where are these events taking place):\n"
    "NEVER deviate from this format. \n"

    # Extra details
    "As stated previously, the number of panels is equivalent to the number of . given. \n"
    "If user input has n sentences, then the output should have n and only n panels. \n"
    "DO NOT extend past the number of n sentences given. If n = 6, then there should never be 7 or more panels \n"

    # Actual User Input
    + user_input
)

response = model.generate_content(prompt)

input_string = response.candidates[0].content.parts[0].text
panels = [panel.strip() for panel in input_string.split("\n\n")]

style = "Make this a colored superhero comic book in style of Jack Kirby\n"

for i, panel in enumerate(panels):
    panels[i] = style + panel[panel.find(":")+1:].replace("\n", "")
