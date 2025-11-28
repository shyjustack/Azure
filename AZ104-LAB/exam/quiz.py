questions = [
    {
        "question": "1. What is the capital of France?",
        "options": ["A) London", "B) Paris", "C) Rome"],
        "answer": "B"
    },
    {
        "question": "2. Which planet is known as the Red Planet?",
        "options": ["A) Earth", "B) Venus", "C) Mars"],
        "answer": "C"
    },
    {
        "question": "3. Who developed the Windows OS?",
        "options": ["A) Microsoft", "B) Apple", "C) Google"],
        "answer": "A"
    }
]

score = 0
answers_given = []

for q in questions:
    print(q["question"])
    for opt in q["options"]:
        print(opt)

    user_answer = input("Enter your answer (A/B/C): ").upper()
    answers_given.append(user_answer)

    if user_answer == q["answer"]:
        score += 1
    
    print()

print("=== QUIZ COMPLETED ===")
print("Your score:", score, "/", len(questions))
print("\nCorrect Answers:")

for i, q in enumerate(questions):
    print(f"Q{i+1}: Correct = {q['answer']} | You answered = {answers_given[i]}")
