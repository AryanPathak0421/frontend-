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
  
  // Initialize particles
  createParticles();
  
  // Category filtering functionality
  document.addEventListener('DOMContentLoaded', function() {
    initCategoryFiltering();
    initTrendingCardAnimations();
    initBuzzMeterAnimations();
    initFeaturedMovieInteractions();
    initSocialTrendsAnimations();
  });
  
  // Category filtering
  function initCategoryFiltering() {
    const categoryBtns = document.querySelectorAll('.category-btn');
    const trendingCards = document.querySelectorAll('.trending-card');
  
    categoryBtns.forEach(btn => {
      btn.addEventListener('click', function() {
        // Remove active class from all buttons
        categoryBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        this.classList.add('active');
  
        const selectedCategory = this.dataset.category;
        filterTrendingCards(selectedCategory);
      });
    });
  }
  
  function filterTrendingCards(category) {
    const trendingCards = document.querySelectorAll('.trending-card');
    
    trendingCards.forEach(card => {
      const cardCategory = card.dataset.category;
      
      if (category === 'all' || cardCategory === category) {
        card.style.display = 'block';
        card.style.animation = 'fadeInUp 0.6s ease forwards';
      } else {
        card.style.animation = 'fadeOut 0.3s ease forwards';
        setTimeout(() => {
          card.style.display = 'none';
        }, 300);
      }
    });
  }
  
  // Trending card animations
  function initTrendingCardAnimations() {
    const trendingCards = document.querySelectorAll('.trending-card');
    
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.transform = 'translateY(0)';
            entry.target.style.opacity = '1';
          }, index * 100);
        }
      });
    }, {
      threshold: 0.1
    });
  
    trendingCards.forEach(card => {
      card.style.transform = 'translateY(50px)';
      card.style.opacity = '0';
      card.style.transition = 'all 0.6s ease';
      observer.observe(card);
  
      // Add click handler
      card.addEventListener('click', function() {
        const movieTitle = this.querySelector('.card-title').textContent;
        showMovieDetails(movieTitle);
      });
  
      // Add hover effect for ranking
      card.addEventListener('mouseenter', function() {
        const rank = this.querySelector('.trending-rank');
        if (rank) {
          rank.style.transform = 'scale(1.2) rotate(5deg)';
        }
      });
  
      card.addEventListener('mouseleave', function() {
        const rank = this.querySelector('.trending-rank');
        if (rank) {
          rank.style.transform = 'scale(1) rotate(0deg)';
        }
      });
    });
  }
  
  // Buzz meter animations
  function initBuzzMeterAnimations() {
    const buzzMeters = document.querySelectorAll('.buzz-meter');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const buzzFill = entry.target.querySelector('.buzz-fill');
          const targetWidth = buzzFill.style.width;
          
          // Reset width then animate
          buzzFill.style.width = '0%';
          setTimeout(() => {
            buzzFill.style.width = targetWidth;
          }, 500);
        }
      });
    }, {
      threshold: 0.5
    });
  
    buzzMeters.forEach(meter => {
      observer.observe(meter);
    });
  }
  
  // Featured movie interactions
  function initFeaturedMovieInteractions() {
    const analyzeBtn = document.querySelector('.analyze-btn');
    const featuredStats = document.querySelectorAll('.featured-stats .stat-value');
    
    if (analyzeBtn) {
      analyzeBtn.addEventListener('click', function() {
        // Animate button
        this.style.transform = 'scale(0.95)';
        this.textContent = '🔄 Analyzing...';
        
        setTimeout(() => {
          this.style.transform = 'scale(1)';
          this.textContent = '✅ Analysis Complete!';
          
          // Animate stats update
          animateFeaturedStats();
          
          setTimeout(() => {
            this.textContent = '🎯 Analyze This Movie';
          }, 2000);
        }, 1500);
      });
    }
  
    // Animate featured movie on scroll
    const featuredMovie = document.querySelector('.featured-movie');
    if (featuredMovie) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.transform = 'scale(1)';
            entry.target.style.opacity = '1';
          }
        });
      }, {
        threshold: 0.2
      });
  
      featuredMovie.style.transform = 'scale(0.95)';
      featuredMovie.style.opacity = '0';
      featuredMovie.style.transition = 'all 0.8s ease';
      observer.observe(featuredMovie);
    }
  }
  
  function animateFeaturedStats() {
    const stats = document.querySelectorAll('.featured-stats .stat-value');
    
    stats.forEach((stat, index) => {
      setTimeout(() => {
        const currentValue = stat.textContent;
        let numericValue = parseFloat(currentValue.replace(/[^0-9.]/g, ''));
        const suffix = currentValue.replace(/[0-9.]/g, '');
        
        // Simulate slight increase
        numericValue *= 1.05;
        
        if (suffix.includes('M')) {
          stat.textContent = '$' + numericValue.toFixed(0) + 'M';
        } else if (suffix.includes('%')) {
          stat.textContent = numericValue.toFixed(0) + '%';
        } else {
          stat.textContent = numericValue.toFixed(1) + 'M';
        }
        
        // Add glow effect
        stat.style.textShadow = '0 0 20px #f5c518';
        setTimeout(() => {
          stat.style.textShadow = '';
        }, 1000);
      }, index * 200);
    });
  }
  
  // Social trends animations
  function initSocialTrendsAnimations() {
    const trendItems = document.querySelectorAll('.trend-item');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.transform = 'translateX(0)';
            entry.target.style.opacity = '1';
            
            // Animate the trend change percentage
            const trendChange = entry.target.querySelector('.trend-change');
            if (trendChange) {
              trendChange.style.transform = 'scale(1.2)';
              setTimeout(() => {
                trendChange.style.transform = 'scale(1)';
              }, 300);
            }
          }, index * 150);
        }
      });
    }, {
      threshold: 0.3
    });
  
    trendItems.forEach(item => {
      item.style.transform = 'translateX(-50px)';
      item.style.opacity = '0';
      item.style.transition = 'all 0.6s ease';
      observer.observe(item);
  
      // Add click handler for hashtag copying
      item.addEventListener('click', function() {
        const hashtag = this.querySelector('.trend-hashtag').textContent;
        copyToClipboard(hashtag);
        showCopyNotification(hashtag);
      });
    });
  }
  
  // Show movie details modal (placeholder)
  function showMovieDetails(movieTitle) {
    // Create modal overlay
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.8);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000;
      backdrop-filter: blur(10px);
    `;
  
    const modalContent = document.createElement('div');
    modalContent.style.cssText = `
      background: rgba(255, 255, 255, 0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 20px;
      padding: 3rem;
      text-align: center;
      color: white;
      max-width: 500px;
      width: 90%;
    `;
  
    modalContent.innerHTML = `
      <h2 style="color: #f5c518; margin-bottom: 1rem;">${movieTitle}</h2>
      <p style="margin-bottom: 2rem; opacity: 0.8;">Detailed analysis coming soon! This feature will show comprehensive movie insights, predictions, and analytics.</p>
      <button onclick="this.closest('.modal').remove()" style="
        padding: 1rem 2rem;
        background: linear-gradient(135deg, #f5c518 0%, #e6b800 100%);
        color: #000;
        border: none;
        border-radius: 12px;
        font-weight: 700;
        cursor: pointer;
      ">Close</button>
    `;
  
    modal.className = 'modal';
    modal.appendChild(modalContent);
    document.body.appendChild(modal);
  
    // Animate modal in
    modal.style.opacity = '0';
    modalContent.style.transform = 'scale(0.8)';
    setTimeout(() => {
      modal.style.opacity = '1';
      modalContent.style.transform = 'scale(1)';
    }, 10);
  
    // Close on outside click
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.remove();
      }
    });
  }
  
  // Copy to clipboard function
  function copyToClipboard(text) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    } else {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  }
  
  // Show copy notification
  function showCopyNotification(hashtag) {
    const notification = document.createElement('div');
    notification.style.cssText = `
      position: fixed;
      top: 2rem;
      right: 2rem;
      background: rgba(76, 175, 80, 0.9);
      color: white;
      padding: 1rem 2rem;
      border-radius: 8px;
      z-index: 1001;
      font-weight: 600;
      transform: translateX(100%);
      transition: transform 0.3s ease;
    `;
    
    notification.textContent = `Copied ${hashtag} to clipboard!`;
    document.body.appendChild(notification);
  
    setTimeout(() => {
      notification.style.transform = 'translateX(0)';
    }, 10);
  
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)';
      setTimeout(() => {
        notification.remove();
      }, 300);
    }, 2000);
  }
  
  // Add CSS animations
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(30px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
  
    @keyframes fadeOut {
      from {
        opacity: 1;
        transform: scale(1);
      }
      to {
        opacity: 0;
        transform: scale(0.8);
      }
    }
  
    .trending-rank {
      transition: transform 0.3s ease;
    }
  
    .buzz-fill {
      transition: width 2s ease;
    }
  
    .trend-change {
      transition: transform 0.3s ease;
    }
  
    .modal {
      transition: opacity 0.3s ease;
    }
  
    .modal > div {
      transition: transform 0.3s ease;
    }
  `;
  
  document.head.appendChild(style);
  
  // Auto-refresh trending data (simulation)
  function simulateTrendingUpdates() {
    setInterval(() => {
      const buzzMeters = document.querySelectorAll('.buzz-fill');
      
      buzzMeters.forEach(meter => {
        const currentWidth = parseInt(meter.style.width);
        const change = Math.random() * 4 - 2; // Random change between -2% and +2%
        const newWidth = Math.max(60, Math.min(100, currentWidth + change));
        
        meter.style.width = newWidth + '%';
        
        // Update buzz text
        const buzzText = meter.nextElementSibling;
        if (buzzText) {
          buzzText.textContent = Math.round(newWidth) + '% Buzz Score';
        }
      });
    }, 10000); // Update every 10 seconds
  }
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("service-worker.js")
      .then(reg => console.log("Service Worker registered:", reg))
      .catch(err => console.log("Service Worker registration failed:", err));
  }
  
  // Start trending updates simulation
  simulateTrendingUpdates();