import os
import sys
import json

# https://stackoverflow.com/questions/2212643/python-recursive-folder-read
walk_dir = "notes\\"

print('walk_dir = ' + walk_dir)

print('walk_dir (absolute) = ' + os.path.abspath(walk_dir))

structure = {"notes":{}}

for root, subdirs, files in os.walk(walk_dir):
    for subdir in subdirs:
        dir_path = root.split("\\")
        cur = structure
        for i in dir_path:
            if len(i) > 0:
                cur = cur[i]
        cur[subdir] = {}
        print("found dir: ", subdir)


    for filename in files:
        file_path = os.path.join(root, filename)

        dir_path = root.split("\\")
        cur = structure
        for i in dir_path:
            if len(i) > 0:
                cur = cur[i]
        cur[filename] = filename
        print("found file: ", filename)

file_content = json.dumps(structure)
with open("files.json", 'w') as out:
    out.write(file_content)
