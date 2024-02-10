import pathlib
import textwrap
import os

import google.generativeai as genai

from IPython.display import display
from IPython.display import Markdown
from dotenv import load_dotenv

load_dotenv()


def to_markdown(parts):
    text = '  * ' + '  * '.join(parts)
    return Markdown(textwrap.indent(text, '> ', predicate=lambda _: True))



genai.configure(api_key=os.getenv('GOOGLE_API_KEY'))

for m in genai.list_models():
    if 'generateContent' in m.supported_generation_methods:
        print(m.name)

model = genai.GenerativeModel('gemini-pro')

response = model.generate_content("Create a superhero narrative.")
print(response.candidates)