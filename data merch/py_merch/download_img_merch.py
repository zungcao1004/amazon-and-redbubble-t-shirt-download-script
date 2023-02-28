import os
import urllib.request
import tkinter as tk
from tkinter import filedialog

# Create a Tkinter root window
root = tk.Tk()
root.withdraw()

# Use the file dialog to ask the user to select a directory
directory = filedialog.askdirectory()

# Open the "All datas merch.txt" file for reading
with open('All datas merch.txt', 'r', encoding='utf-8') as input_file:
    # Read the lines of the file
    lines = input_file.readlines()
    # Loop through each pair of lines (name and URL)
    for i in range(0, len(lines), 2):
        # Extract the name and URL
        name = lines[i].strip()
        url = lines[i+1].strip()
        # Construct the file path for the downloaded image
        file_path = os.path.join(directory, name + '.jpg')
        # Download the image and save it to the file path
        urllib.request.urlretrieve(url, file_path)
