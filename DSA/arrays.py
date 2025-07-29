# Index:  0  1    2  3   4   5    6  7   8    9
# Array: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

# arr[2]

# Define an array (List in Python)
arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]

# Access
# print(arr[2])

# Update
arr[2] = 100

# print(arr[2])

# Insert at the end
arr.append(55)

# print(arr)

# Insert at a specific position
arr.insert(3, 22)

# print(arr)

# Delete element
arr.pop(4)

# print(arr)

# Search for a value
if 22 in arr:
    print("Found 22 at index:", arr.index(22))
