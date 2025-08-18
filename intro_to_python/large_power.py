"""Large Power Function"""
def large_power(base, exponent):
    """Calculating large power"""
    power = base ** exponent

    if power > 5000:
        print(f"The result of {base} raised to the power of {exponent} is {power}, which is greater than 5000. Hence,")
        return True
    else:
        return False

print(large_power(
    base = float(input("Enter the base number: ")),
    exponent = int(input("Enter the exponent: "))
))
