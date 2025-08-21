"""File operations example"""
read_file = open(
  "C:\\Users\\jobmu\\Desktop\\cRaZy\\PLP-Academy\\PLPAcademy\\intro_to_python\\file_operations\\input.txt", "r"
)

content = read_file.read()

# Convert content to uppercase
uppercase_content = content.upper()

# Count words
word_count = len(content.split())

# Write to output file
with open(
    "C:\\Users\\jobmu\\Desktop\\cRaZy\\PLP-Academy\\PLPAcademy\\intro_to_python\\file_operations\\output.txt", "w"
    ) as write_file:
    write_file.write(f"Word count: {word_count}\n\n")
    write_file.write(uppercase_content)

print(f"\nProcessed file created successfully with {word_count} words!")
