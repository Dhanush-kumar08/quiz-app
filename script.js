const quizData = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Hot Mail", "How To Make Lasagna"],
      answer: 0
    },
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris"],
      answer: 2
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: 3
    }
  ];
  
  let current = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const feedbackEl = document.getElementById("feedback");
  const nextBtn = document.getElementById("next-btn");
  
  function loadQuestion() {
    feedbackEl.textContent = "";
    optionsEl.innerHTML = "";
    const q = quizData[current];
    questionEl.textContent = q.question;
  
    q.options.forEach((opt, index) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => checkAnswer(index);
      optionsEl.appendChild(btn);
    });
  }
  
  function checkAnswer(selected) {
    const correct = quizData[current].answer;
    if (selected === correct) {
      feedbackEl.textContent = "Correct!";
      feedbackEl.className = "correct";
      score++;
    } else {
      feedbackEl.textContent = "Wrong!";
      feedbackEl.className = "wrong";
    }
  
    // Disable all buttons after answer
    Array.from(optionsEl.children).forEach(btn => btn.disabled = true);
  }
  
  nextBtn.onclick = () => {
    current++;
    if (current < quizData.length) {
      loadQuestion();
    } else {
      showScore();
    }
  };
  
  function showScore() {
    questionEl.textContent = `You scored ${score} out of ${quizData.length}!`;
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
    nextBtn.style.display = "none";
  }
  
  loadQuestion();
  
