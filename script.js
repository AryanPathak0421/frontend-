// Create magical starfield
function createStarfield() {
  const starfield = document.getElementById('starfield');
  const starCount = 200;

  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.className = `star ${['small', 'medium', 'large'][Math.floor(Math.random() * 3)]}`;
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starfield.appendChild(star);
  }
}

// Create magical sparkles
function createSparkles() {
  const sparklesContainer = document.getElementById('sparkles');

  function addSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 2 + 's';
    sparklesContainer.appendChild(sparkle);

    // Remove sparkle after animation
    setTimeout(() => sparkle.remove(), 2000);
  }

  // Add sparkles continuously
  setInterval(addSparkle, 300);
}

// Initialize effects
createStarfield();
createSparkles();

// Form submission with cinematic effects
document.getElementById('predictionForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const button = e.target.querySelector('.predict-btn');
  const result = document.getElementById('result');
  const btnText = button.querySelector('.btn-text');

  // Add loading state
  button.classList.add('loading');
  btnText.textContent = 'Processing...';
  result.classList.remove('show', 'success', 'error');

  const formData = new FormData(e.target);
  const data = {
    budget: parseFloat(formData.get('budget')),
    runtime: parseFloat(formData.get('runtime')),
    popularity: parseFloat(formData.get('popularity')),
    vote_average: parseFloat(formData.get('vote_average')),
    vote_count: parseInt(formData.get('vote_count'))
  };

  try {
    await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate cinematic delay

    const response = await fetch('https://boxofficepredictor-qdir.onrender.com/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const resultText = await response.text();
    let resultData;

    try {
      resultData = JSON.parse(resultText);
    } catch (jsonError) {
      throw new Error('Invalid response from server');
    }

    // Remove loading state
    button.classList.remove('loading');
    btnText.textContent = 'Analyze Movie';

    if (response.ok) {
      result.textContent = `🎯 Predicted Ticket Sales: ${Math.round(resultData.predicted_ticket_sales).toLocaleString()} tickets`;
      result.classList.add('show', 'success');

      // Celebration sparkles
      for (let i = 0; i < 10; i++) {
        setTimeout(() => {
          const sparkle = document.createElement('div');
          sparkle.className = 'sparkle';
          sparkle.style.left = (45 + Math.random() * 10) + '%';
          sparkle.style.top = (60 + Math.random() * 20) + '%';
          document.getElementById('sparkles').appendChild(sparkle);
          setTimeout(() => sparkle.remove(), 2000);
        }, i * 100);
      }
    } else {
      result.textContent = `❌ Error: ${resultData.error || 'Unknown error occurred'}`;
      result.classList.add('show', 'error');
    }

  } catch (error) {
    button.classList.remove('loading');
    btnText.textContent = 'Analyze Movie';
    result.textContent = `❌ Connection failed: ${error.message}`;
    result.classList.add('show', 'error');
  }
});

// Enhanced input sparkles
document.querySelectorAll('form input').forEach(input => {
  input.addEventListener('focus', function () {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    const rect = this.getBoundingClientRect();
    sparkle.style.left = (rect.left + rect.width - 20) + 'px';
    sparkle.style.top = (rect.top + 10) + 'px';
    sparkle.style.position = 'fixed';
    sparkle.style.zIndex = '1000';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
  });
});

// Parallax mouse effect
document.addEventListener('mousemove', (e) => {
  const container = document.querySelector('.container');
  const xAxis = (window.innerWidth / 2 - e.pageX) / 100;
  const yAxis = (window.innerHeight / 2 - e.pageY) / 100;
  container.style.transform = `translateX(${xAxis}px) translateY(${yAxis}px)`;
});




// document.getElementById('predictionForm').addEventListener('submit', async (e) => {
//     e.preventDefault();
  
//     const formData = new FormData(e.target);
//     const data = {
//       budget: parseFloat(formData.get('budget')),
//       runtime: parseFloat(formData.get('runtime')),
//       popularity: parseFloat(formData.get('popularity')),
//       vote_average: parseFloat(formData.get('vote_average')),
//       vote_count: parseInt(formData.get('vote_count'))
//     };
  
//     try {
//       const response = await fetch('http://127.0.0.1:5050/predict', { // ✅ backend port
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//       });
  
//       const resultText = await response.text(); // first read raw text
  
//       let result;
//       try {
//         result = JSON.parse(resultText); // try parsing JSON
//       } catch (jsonError) {
//         throw new Error('Invalid JSON received from server');
//       }
  
//       if (response.ok) {
//         document.getElementById('result').textContent =
//           `🎯 Predicted Ticket Sales: ${Math.round(result.predicted_ticket_sales).toLocaleString()} tickets`;
//       } else {
//         document.getElementById('result').textContent = `❌ Error: ${result.error || 'Unknown error occurred'}`;
//       }
  
//     } catch (error) {
//       document.getElementById('result').textContent = `❌ Request failed: ${error.message}`;
//     }
//   });
  

 // Create magical starfield




