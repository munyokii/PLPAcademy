"""Capital City"""

# Defining a Dictionary
capital_city = {
  "Kenya": "Nairobi",
  "Ethiopia": "Addis Ababa",
  'Tanzania': 'Dodoma'
}

print(capital_city)

# Adding an item to dictionary
capital_city["South Africa"] = "Johannesburg"

print("After adding an item", capital_city)

# Changing a value of an item

students = {1 : 'Jeff', 2 : 'Mary', 3 : 'Moon'}

print("Initial dict", students)

students.pop(2)
# or
# del students[2]

print("After deletion", students)

# Updating an existing item
students[3] = "Mary"

print("Updating a value", students)

# Accessing  Elements of a Dictionary
student_id = {1 : 'Jeff', 2 : 'Mary', 3 : 'Moon'}
print(student_id[3])

# Membership Test For Dictionary Keys
squares = {
  1: 6,
  6: 9,
  5: 46,
  9: 67
}

print(1 in squares) # True
print(5 in squares) # True
print(3 in squares) # False

# Iterating through a Dictionary
squared = {
  1: 6,
  6: 36,
  5: 25,
  9: 81
}

for i in squared:
    print(i)
