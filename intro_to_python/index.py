"""Introduction to Python Programming"""
# Variables

# name = "Alice"

# age = 24

# print("Name:", name)
# print("Age:", age)


# while loop

count = 1

while count <= 5:
    print(f"Count: {count}")
    count += 1

# Example of a nested loop
for i in range(1, 4):
    for j in range(1, 3):
        print(f"Outer loop: {i}, Inner loop: {j}")

# Traditional loop
squares = []

for x in range(5):
    squares.append(x ** 2)

# List Comprehension
squares_comp = [x ** 2 for x in range(5)]

print("Squares using traditional loop:", squares)
print("Squares using list comprehension:", squares_comp)

# List comprehension with a condition
even_numbers = [x for x in range(10) if x % 2 == 0]
print(even_numbers)  # Output: [0, 2, 4, 6, 8]

# Create a 3x3 matrix using nested list comprehensions
matrix = [[i * j for j in range(1, 4)] for i in range(1, 4)]
print(matrix)  # Output: [[1, 2, 3], [2, 4, 6], [3, 6, 9]]

# 1. Transforming Data:
names = ["Alice", "Bob", "Charlie"]
uppercased_names = [name.upper() for name in names]
print(uppercased_names)  # Output: ['ALICE', 'BOB', 'CHARLIE']

# 2. Filtering Data:
numbers = [10, 15, 20, 25, 30]
divisible_by_5 = [num for num in numbers if num % 5 == 0]
print(divisible_by_5)  # Output: [10, 15, 20, 25, 30]

# 3. Flattening a List:
nested_list = [[1, 2], [3, 4], [5, 6]]
flat_list = [item for sublist in nested_list for item in sublist]
print(flat_list)  # Output: [1, 2, 3, 4, 5, 6]

