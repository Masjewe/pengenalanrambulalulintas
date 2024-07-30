function checkAnswer(isCorrect) {
    const resultDiv = document.getElementById('result');
    if (isCorrect) {
      resultDiv.textContent = 'Jawaban benar! 🎉';
      resultDiv.style.color = 'green';
    } else {
      resultDiv.textContent = 'Jawaban salah. 😢 Coba lagi!';
      resultDiv.style.color = 'red';
    }
  }
  