const quizData = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which language runs in the browser?",
        options: ["Python", "C#", "JavaScript", "Java"],
        answer: "JavaScript"
    }
];

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const result = document.getElementById('result');

let currentQuestion = 0;

function loadQuestion() {
    const q = quizData[currentQuestion];
    const optionsHtml = q.options.map(opt => 
        `<label>
            <input type="radio" name="option" value="${opt}"> ${opt}
        </label><br>`
    ).join('');

    quiz.innerHTML = `<p>${q.question}</p>${optionsHtml}`;
    result.innerHTML = "";
}

submitBtn.addEventListener('click', () => {
    const selected = document.querySelector('input[name="option"]:checked');
    if (!selected) {
        alert("Please select an answer!");
        return;
    }

    if (selected.value === quizData[currentQuestion].answer) {
        result.style.color = "green";
        result.innerText = "✅ Correct!";
    } else {
        result.style.color = "red";
        result.innerText = "❌ Wrong!";
    }
});

loadQuestion();
