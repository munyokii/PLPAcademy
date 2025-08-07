# A list of numbers
# numbers = [1, 2, 3]
# print(numbers)

# empty list
empty = []

# list with mixed data types
# my_list = [5, "hello", 3.8] # int, str, float

languages = ['Python', "Java", "C++"]

# access item at index 0
print(languages[0])

# access item at index 2
print(languages[2])

# access item at index 0
print(languages[-1])

# Slicing of a Python List

my_list = ['d', 'f', 'g', 'h', 'j', 'k', 'l']

# items form index 3 to 6
print(my_list[3:6])

# items form index 2 to end
print(my_list[2:])

# items from beginning to end
print(my_list[:])

# Adding Elements to a Python List
# append() method
numbers = [67, 56, 832, 67, 95, 45]

print("Before Append:", numbers)

numbers.append(89)

print("After Append:", numbers)

# extend() method
prime_numbers = [5, 7, 9]
print("List1:", prime_numbers)

even_numbers = [4, 6, 8]
print("List2:", even_numbers)

# join two list
prime_numbers.extend(even_numbers)

print("List after append:", prime_numbers)

# Change List Items
food = ['Pizza', 'Githeri', 'Kebab']

food[1] = 'Chapati'

print(food)

# Remove an Item from a List
# del()
brands = ['Nike', 'Addidas', 'Louis', 'Balena', 'Cat', 'Salmon']
del brands[3]
print(brands)

# remove()
brands = ['Nike', 'Addidas', 'Louis', 'Balena', 'Cat', 'Salmon']
brands.remove("Louis")
print(brands)
brands.reverse()
print(brands)

# Iterating through a List
brands = ['Nike', 'Addidas', 'Louis', 'Balena', 'Cat', 'Salmon']
for brand in brands:
    print(brand)


# Python List Comprehension
numbers = [number*number for number in range(1,7)]
# [number*x for x in range(1, 6)]

print(numbers)
