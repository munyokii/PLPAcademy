"""
Functions in Python
"""

# Function definition
def greet(name):
    """Greet Function"""
    return f"Hello {name}"

print(greet(input("What is your name: ")))


# """Parameters and Arguments"""
# Positional Arguments
def add(x, y):
    """Add Function"""
    return x + y

print(add(5, 10))  # Output: 15

# Default Arguments
def greeting(name="Guest"):
    """Greeting Function"""
    return f"Hello, {name}!"

print(greeting())  # Output: Hello, Guest!
print(greeting("Alice"))  # Output: Hello, Alice!

# Keyword Arguments
def introduce(name, age):
    """Keyword Function"""
    return f"My name is {name}, and I'm {age} years old."

print(introduce(age=25, name="Bob"))

# Returning Values
def square(number):
    """Square Function"""
    return number ** 2

result = square(4)
print(result)  # Output: 16

# Anonymous Functions: Lambda
# Lambda function for adding two numbers
add = lambda x, y: x + y
print(add(3, 5))  # Output: 8

# Using lambda with map()
numbers = [1, 2, 3, 4]
squares = list(map(lambda x: x**2, numbers))
print(squares)  # Output: [1, 4, 9, 16]

# Recursive Functions
def factorial(n):
    """Factorial Function"""
    if n == 1:
        return 1
    return n * factorial(n - 1)

print(factorial(5))  # Output: 120