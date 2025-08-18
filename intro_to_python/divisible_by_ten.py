"""Divisible by ten checker"""

def divisible_by_ten(num):
    """Check if a number is divisible by ten"""

    if num % 10 == 0:
        return True
    return False

print(divisible_by_ten(int(input("Enter a number: "))))
