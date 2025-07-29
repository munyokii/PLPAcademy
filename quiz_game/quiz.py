""" Program to run a quiz game with multiple-choice questions."""
import random

quiz_questions = [
  {
    "question": "What is the capital of France?",
    "options": ["A. Berlin", "B. Madrid", "C. Paris", "D. Rome"],
    "answer": "C"
  },
  {
    "question": "What is 2 + 2?",
    "options": ["A. 3", "B. 4", "C. 5", "D. 6"],
    "answer": "B"
  },
  {
    "question": "What is the largest ocean on Earth?",
    "options": ["A. Atlantic Ocean", "B. Indian Ocean", "C. Arctic Ocean", "D. Pacific Ocean"],
    "answer": "D"
  },
  {
    "question": "What keyword is used to define a function in Python?",
    "options": ["A. func", "B. def", "C. function", "D. lambda"],
    "answer": "B"
    },
    {
      "question": "Which actor played Iron Man in the Marvel Cinematic Universe?",
      "options": ["A. Chris Evans", "B. Chris Hemsworth", 
                  "C. Robert Downey Jr.", "D. Tom Holland"],
      "answer": "C"
    },
    {
      "question": "What is the output of: print(2 ** 3)?",
      "options": ["A. 5", "B. 6", "C. 8", "D. 9"],
      "answer": "C"
    },
    {
      "question": "Which movie won Best Picture at the Oscars in 2020?",
      "options": ["A. Parasite", "B. Joker", "C. 1917", "D. Ford v Ferrari"],
      "answer": "A"
    },
    {
      "question": "Which of these is a Python data type?",
      "options": ["A. integer", "B. float", "C. list", "D. All of the above"],
      "answer": "D"
    },
]

def start_quiz():
    """Function to start the quiz game."""
    print("Welcome to the Quiz Game!")
    print("You will be asked a series of questions." \
    "Choose the correct answer by entering the letter corresponding to your choice.")
    print("Let's begin!\n")
    score = 0
    random.shuffle(quiz_questions)  # Shuffle questions for randomness
    for idx, question in enumerate(quiz_questions):
        print(f"Question {idx + 1}: {question['question']}")
        for option in question['options']:
            print(option)
        answer = input("Your answer (A, B, C, or D): ").strip().upper()
        if answer not in ['A', 'B', 'C', 'D']:
            print("Invalid answer! Please enter A, B, C, or D.\n")
            continue
        if answer == question['answer']:
            print("Correct!\n")
            score += 1
        else:
            print(f"Wrong! The correct answer was {question['answer']}.\n")
    print(f"Quiz completed! Your final score is {score}/{len(quiz_questions)}.")
    if score == len(quiz_questions):
        print("Congratulations! You answered all questions correctly!")
    else:
        print("Better luck next time!")
    # Ask if the user wants to play againC
    print("Would you like to try again? (y/n): ")
    try_again = input().strip().lower()
    if try_again == 'y':
        start_quiz()
    else:
        print("Thank you for playing!")

if __name__ == "__main__":
    start_quiz()
