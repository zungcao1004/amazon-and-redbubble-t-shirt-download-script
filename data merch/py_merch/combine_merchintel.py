import os
import tkinter as tk
from tkinter import filedialog

# Create a Tkinter root window
root = tk.Tk()
root.withdraw()

# Use the file dialog to ask the user to select a directory
directory = filedialog.askdirectory()

# Create a list of file names that start with "data merch"
data_files = [f for f in os.listdir(directory) if f.startswith('data merch')]

# Open the output file
with open('All datas merch.txt', 'w', encoding='utf-8') as output_file:
    # Loop through each data file
    for file_name in data_files:
        # Open the file
        try:
            with open(os.path.join(directory, file_name), 'r', encoding='utf-8') as input_file:
                # Loop through each line in the file
                for line in input_file:
                    # Split the line by the "\" character to get the values
                    values = line.strip().split('\\')
                    # Write values to "All datas merch.txt"
                    for value in values:
                        output_file.write(value + '\n')
        except IOError as e:
            print(f"Error opening file '{file_name}': {str(e)}")