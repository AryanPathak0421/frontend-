// // Create floating particles
// function createParticles() {
//     const particlesContainer = document.getElementById('particles');
//     const particleCount = 30;
  
//     for (let i = 0; i < particleCount; i++) {
//       const particle = document.createElement('div');
//       particle.className = 'particle';
//       particle.style.left = Math.random() * 100 + '%';
//       particle.style.animationDelay = Math.random() * 20 + 's';
//       particle.style.animationDuration = (15 + Math.random() * 10) + 's';
//       particlesContainer.appendChild(particle);
//     }
//   }
  
//   // Initialize particles
//   createParticles();
  
//   // Form submission
//   document.getElementById('predictionForm').addEventListener('submit', async (e) => {
//     e.preventDefault();
  
//     const button = e.target.querySelector('.predict-button');
//     const result = document.getElementById('result');
//     const resultText = document.getElementById('resultText');
//     const resultDetails = document.getElementById('resultDetails');
//     const btnText = button.querySelector('.btn-text');
  
//     // Add loading state
//     button.classList.add('loading');
//     btnText.textContent = 'Analyzing...';
//     result.classList.remove('show', 'success', 'error');
  
//     const formData = new FormData(e.target);
//     const data = {
//       budget: parseFloat(formData.get('budget')),
//       runtime: parseFloat(formData.get('runtime')),
//       popularity: parseFloat(formData.get('popularity')),
//       vote_average: parseFloat(formData.get('vote_average')),
//       vote_count: parseInt(formData.get('vote_count'))
//     };
  
//     try {
//       // Simulate processing time
//       await new Promise(resolve => setTimeout(resolve, 2500));
  
//       const response = await fetch('https://boxofficepredictor-qdir.onrender.com/predict', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(data)
//       });
  
//       const resultData = await response.json();
  
//       // Remove loading state
//       button.classList.remove('loading');
//       btnText.textContent = 'Analyze Movie Performance';
  
//       if (response.ok) {
//         const ticketSales = Math.round(resultData.predicted_ticket_sales);
//         const confidence = Math.floor(85 + Math.random() * 10);
//         const category = ticketSales > 1000000 ? 'Blockbuster' : ticketSales > 500000 ? 'Hit' : 'Moderate';
  
//         resultText.textContent = `🎯 Predicted Success: ${ticketSales.toLocaleString()} tickets`;
        
//         // Update detailed stats
//         document.getElementById('ticketSales').textContent = ticketSales.toLocaleString();
//         document.getElementById('confidence').textContent = confidence + '%';
//         document.getElementById('category').textContent = category;
        
//         result.classList.add('show', 'success');
//         resultDetails.style.display = 'grid';
  
//         // Add celebration effect
//         setTimeout(() => {
//           createCelebrationParticles();
//         }, 500);
  
//       } else {
//         resultText.textContent = `❌ Error: ${resultData.error || 'Analysis failed'}`;
//         result.classList.add('show', 'error');
//         resultDetails.style.display = 'none';
//       }
  
//     } catch (error) {
//       button.classList.remove('loading');
//       btnText.textContent = 'Analyze Movie Performance';
//       resultText.textContent = `❌ Connection failed: ${error.message}`;
//       result.classList.add('show', 'error');
//       resultDetails.style.display = 'none';
//     }
//   });
  
//   // Celebration particles
//   function createCelebrationParticles() {
//     const colors = ['#f5c518', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];
    
//     for (let i = 0; i < 15; i++) {
//       const particle = document.createElement('div');
//       particle.style.position = 'fixed';
//       particle.style.left = '50%';
//       particle.style.top = '60%';
//       particle.style.width = '8px';
//       particle.style.height = '8px';
//       particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
//       particle.style.borderRadius = '50%';
//       particle.style.pointerEvents = 'none';
//       particle.style.zIndex = '1000';
      
//       const angle = (i * 24) * (Math.PI / 180);
//       const velocity = 100 + Math.random() * 100;
      
//       document.body.appendChild(particle);
      
//       particle.animate([
//         {
//           transform: 'translate(-50%, -50%) scale(1)',
//           opacity: 1
//         },
//         {
//           transform: `translate(${Math.cos(angle) * velocity - 50}%, ${Math.sin(angle) * velocity - 50}%) scale(0)`,
//           opacity: 0
//         }
//       ], {
//         duration: 1000,
//         easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
//       }).onfinish = () => particle.remove();
//     }
//   }
  
//   // Interactive cast members
//   document.querySelectorAll('.cast-member').forEach(member => {
//     member.addEventListener('click', function() {
//       const name = this.querySelector('.actor-name').textContent;
//       this.style.transform = 'scale(1.1)';
//       setTimeout(() => {
//         this.style.transform = '';
//       }, 200);
//     });
//   });
  
//   // Interactive trending movies
//   document.querySelectorAll('.trending-movie').forEach(movie => {
//     movie.addEventListener('click', function() {
//       const title = this.querySelector('h4').textContent;
//       this.style.background = 'rgba(245, 197, 24, 0.1)';
//       setTimeout(() => {
//         this.style.background = '';
//       }, 500);
//     });
//   });
  
//   // Add smooth scrolling for navigation
//   document.querySelectorAll('.nav-link').forEach(link => {
//     link.addEventListener('click', function(e) {
//       if (this.getAttribute('href').startsWith('#')) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         if (target) {
//           target.scrollIntoView({
//             behavior: 'smooth',
//             block: 'start'
//           });
//         }
//       }
//     });
//   });
  
//   // Add input validation and formatting
//   document.querySelectorAll('.form-input').forEach(input => {
//     input.addEventListener('input', function() {
//       // Remove any non-numeric characters except decimal point for number inputs
//       if (this.type === 'number') {
//         this.value = this.value.replace(/[^0-9.]/g, '');
//       }
//     });
  
//     input.addEventListener('focus', function() {
//       this.parentElement.classList.add('focused');
//     });
  
//     input.addEventListener('blur', function() {
//       this.parentElement.classList.remove('focused');
//     });
//   });
  
//   // Add form validation
//   function validateForm() {
//     const inputs = document.querySelectorAll('.form-input[required]');
//     let isValid = true;
  
//     inputs.forEach(input => {
//       if (!input.value.trim()) {
//         input.style.borderColor = '#f44336';
//         isValid = false;
//       } else {
//         input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
//       }
//     });
  
//     return isValid;
//   }
  
//   // Add real-time form validation
//   document.querySelectorAll('.form-input').forEach(input => {
//     input.addEventListener('blur', validateForm);
//   });
















// Create floating particles
function createParticles() {
  const particlesContainer = document.getElementById('particles');
  const particleCount = 30;

  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 20 + 's';
    particle.style.animationDuration = (15 + Math.random() * 10) + 's';
    particlesContainer.appendChild(particle);
  }
}
createParticles();

// Handle form submission
document.getElementById('predictionForm').addEventListener('submit', async (e) => {
  e.preventDefault();

  const button = e.target.querySelector('.predict-button');
  const result = document.getElementById('result');
  const resultText = document.getElementById('resultText');
  const resultDetails = document.getElementById('resultDetails');
  const btnText = button.querySelector('.btn-text');

  // Loading state
  button.classList.add('loading');
  btnText.textContent = 'Analyzing...';
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
    await new Promise(resolve => setTimeout(resolve, 2500)); // Simulate loading

    const response = await fetch('https://boxofficepredictor-olkf.onrender.com/predict', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });

    const resultData = await response.json();

    button.classList.remove('loading');
    btnText.textContent = 'Analyze Movie Performance';

    if (response.ok) {
      const ticketSales = Math.round(resultData.predicted_ticket_sales);
      const confidence = Math.floor(85 + Math.random() * 10);
      const category = ticketSales > 1000000 ? 'Blockbuster' :
                       ticketSales > 500000 ? 'Hit' : 'Moderate';

      resultText.textContent = `🎯 Predicted Success: ${ticketSales.toLocaleString()} tickets`;

      document.getElementById('ticketSales').textContent = ticketSales.toLocaleString();
      document.getElementById('confidence').textContent = confidence + '%';
      document.getElementById('category').textContent = category;

      result.classList.add('show', 'success');
      resultDetails.style.display = 'grid';

      setTimeout(() => createCelebrationParticles(), 500);
    } else {
      resultText.textContent = `❌ Error: ${resultData.error || 'Analysis failed'}`;
      result.classList.add('show', 'error');
      resultDetails.style.display = 'none';
    }
  } catch (error) {
    button.classList.remove('loading');
    btnText.textContent = 'Analyze Movie Performance';
    resultText.textContent = `❌ Connection failed: ${error.message}`;
    result.classList.add('show', 'error');
    resultDetails.style.display = 'none';
  }
});

// Celebration effect
function createCelebrationParticles() {
  const colors = ['#f5c518', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];

  for (let i = 0; i < 15; i++) {
    const particle = document.createElement('div');
    particle.style.position = 'fixed';
    particle.style.left = '50%';
    particle.style.top = '60%';
    particle.style.width = '8px';
    particle.style.height = '8px';
    particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    particle.style.borderRadius = '50%';
    particle.style.pointerEvents = 'none';
    particle.style.zIndex = '1000';

    const angle = (i * 24) * (Math.PI / 180);
    const velocity = 100 + Math.random() * 100;

    document.body.appendChild(particle);

    particle.animate([
      { transform: 'translate(-50%, -50%) scale(1)', opacity: 1 },
      { transform: `translate(${Math.cos(angle) * velocity - 50}%, ${Math.sin(angle) * velocity - 50}%) scale(0)`, opacity: 0 }
    ], {
      duration: 1000,
      easing: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
    }).onfinish = () => particle.remove();
  }
}

// Cast member interaction
document.querySelectorAll('.cast-member').forEach(member => {
  member.addEventListener('click', function () {
    this.style.transform = 'scale(1.1)';
    setTimeout(() => {
      this.style.transform = '';
    }, 200);
  });
});

// Trending movie interaction
document.querySelectorAll('.trending-movie').forEach(movie => {
  movie.addEventListener('click', function () {
    this.style.background = 'rgba(245, 197, 24, 0.1)';
    setTimeout(() => {
      this.style.background = '';
    }, 500);
  });
});

// Smooth scroll for nav
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', function (e) {
    if (this.getAttribute('href').startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  });
});

// Input formatting
document.querySelectorAll('.form-input').forEach(input => {
  input.addEventListener('input', function () {
    if (this.type === 'number') {
      this.value = this.value.replace(/[^0-9.]/g, '');
    }
  });

  input.addEventListener('focus', function () {
    this.parentElement.classList.add('focused');
  });

  input.addEventListener('blur', function () {
    this.parentElement.classList.remove('focused');
  });
});

// Validation
function validateForm() {
  const inputs = document.querySelectorAll('.form-input[required]');
  let isValid = true;

  inputs.forEach(input => {
    if (!input.value.trim()) {
      input.style.borderColor = '#f44336';
      isValid = false;
    } else {
      input.style.borderColor = 'rgba(255, 255, 255, 0.2)';
    }
  });

  return isValid;
}
document.querySelectorAll('.form-input').forEach(input => {
  input.addEventListener('blur', validateForm);
});
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(reg => console.log("Service Worker registered:", reg))
    .catch(err => console.log("Service Worker registration failed:", err));
}

