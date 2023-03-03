filename = "All datas redbubble.txt"

# Read the data from the file
with open(filename) as f:
    lines = f.readlines()

# Create a dictionary to store the count of each title
title_count = {}

# Loop through the lines, detecting and updating duplicate titles
for i in range(0, len(lines), 5):
    title = lines[i].strip()
    if title in title_count:
        # This is a duplicate title
        count = title_count[title] + 1
        title_count[title] = count
        # Add the count to the end of the title
        lines[i] = f"{title} ({count})\n"
    else:
        # This is a new title
        title_count[title] = 1

# Write the updated data back to the file
with open(filename, "w") as f:
    f.writelines(lines)
