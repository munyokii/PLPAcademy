"""Python console program that performs basic arithmetic operations."""

first_number = int(input("Enter the first number: "))
second_number = int(input("Enter the second number: "))
operation = input("Enter an operation (+, -, *, /, %): ")


if operation == "+":
    result = first_number + second_number
    print("Addition of:", first_number, "+", second_number, "=", result)
elif operation == "-":
    result = first_number - second_number
    print("Subtraction of:", first_number, "-", second_number, "=", result)
elif operation == "*":
    result = first_number * second_number
    print("Multiplication of:", first_number, "*", second_number, "=", result)
elif operation == "/":
    result = first_number / second_number
    print("Division of:", first_number, "/", second_number, "=", result)
elif operation == "%":
    result = first_number % second_number
    print(f"Modulus of: {first_number} % {second_number} = {result}")
else:
    print("There was an error! Please try again with a valid operation: +, -, *, /, or %.")
