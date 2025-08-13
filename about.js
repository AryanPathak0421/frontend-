// // Team member hover interactions
// function initTeamMemberInteractions() {
//     const teamMembers = document.querySelectorAll('.team-member');
    
//     teamMembers.forEach(member => {
//       const avatar = member.querySelector('.member-avatar');
//       const bio = member.querySelector('.member-bio');
      
//       // Initial state
//       bio.style.maxHeight = '0';
//       bio.style.opacity = '0';
//       bio.style.overflow = 'hidden';
//       bio.style.transition = 'all 0.4s ease';
      
//       member.addEventListener('mouseenter', () => {
//         bio.style.maxHeight = '200px';
//         bio.style.opacity = '1';
//         avatar.style.transform = 'scale(1.05)';
//       });
      
//       member.addEventListener('mouseleave', () => {
//         bio.style.maxHeight = '0';
//         bio.style.opacity = '0';
//         avatar.style.transform = 'scale(1)';
//       });
//     });
//   }
  
//   // Tech stack layer animations
//   function initTechStackAnimations() {
//     const techLayers = document.querySelectorAll('.tech-layer');
    
//     techLayers.forEach((layer, index) => {
//       layer.style.transform = 'translateX(-50px)';
//       layer.style.opacity = '0';
//       layer.style.transition = `all 0.5s ease ${index * 0.1}s`;
      
//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             entry.target.style.transform = 'translateX(0)';
//             entry.target.style.opacity = '1';
//           }
//         });
//       }, { threshold: 0.1 });
      
//       observer.observe(layer);
//     });
//   }
  
//   // Animate statistics counters
//   function initStatCounters() {
//     const stats = document.querySelectorAll('.tech-stat');
    
//     stats.forEach(stat => {
//       const numberElement = stat.querySelector('.stat-number');
//       const targetNumber = parseFloat(numberElement.textContent);
//       const suffix = numberElement.textContent.match(/[a-zA-Z%]+/) ? numberElement.textContent.match(/[a-zA-Z%]+/)[0] : '';
//       const duration = 2000; // Animation duration in ms
//       const startTime = Date.now();
      
//       const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//           if (entry.isIntersecting) {
//             const animate = () => {
//               const elapsed = Date.now() - startTime;
//               const progress = Math.min(elapsed / duration, 1);
//               const currentNumber = Math.floor(progress * targetNumber);
              
//               numberElement.textContent = currentNumber + suffix;
              
//               if (progress < 1) {
//                 requestAnimationFrame(animate);
//               }
//             };
            
//             animate();
//             observer.unobserve(stat);
//           }
//         });
//       }, { threshold: 0.5 });
      
//       observer.observe(stat);
//     });
//   }
  
//   // AI brain animation
//   function initAIBrainAnimation() {
//     const brainNodes = document.querySelectorAll('.brain-node');
//     const brainConnections = document.querySelectorAll('.brain-connection');
    
//     // Initial state
//     brainNodes.forEach(node => {
//       node.style.transform = 'scale(0)';
//       node.style.opacity = '0';
//       node.style.transition = 'all 0.5s ease';
//     });
    
//     brainConnections.forEach(conn => {
//       conn.style.width = '0';
//       conn.style.opacity = '0';
//       conn.style.transition = 'all 0.5s ease 0.3s';
//     });
    
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach(entry => {
//         if (entry.isIntersecting) {
//           // Animate nodes
//           brainNodes.forEach((node, index) => {
//             setTimeout(() => {
//               node.style.transform = 'scale(1)';
//               node.style.opacity = '1';
//             }, index * 100);
//           });
          
//           // Animate connections
//           setTimeout(() => {
//             brainConnections.forEach(conn => {
//               conn.style.width = '100%';
//               conn.style.opacity = '1';
//             });
//           }, 500);
//         }
//       });
//     }, { threshold: 0.1 });
    
//     observer.observe(document.querySelector('.ai-brain'));
//   }
  
//   // Create floating particles
//   function createParticles() {
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
  
//   // Initialize page functionality
//   document.addEventListener('DOMContentLoaded', function() {
//     initScrollAnimations();
//     initContactForm();
//     initTeamMemberInteractions();
//     initTechStackAnimations();
//     initStatCounters();
//     initAIBrainAnimation();
//   });
  
//   // Scroll-triggered animations
//   function initScrollAnimations() {
//     const animatedElements = document.querySelectorAll('.feature-card, .team-member, .value-item, .tech-layer');
    
//     const observer = new IntersectionObserver((entries) => {
//       entries.forEach((entry, index) => {
//         if (entry.isIntersecting) {
//           setTimeout(() => {
//             entry.target.style.transform = 'translateY(0)';
//             entry.target.style.opacity = '1';
//           }, index * 100);
//         }
//       });
//     }, {
//       threshold: 0.1
//     });
  
//     animatedElements.forEach(element => {
//       element.style.transform = 'translateY(50px)';
//       element.style.opacity = '0';
//       element.style.transition = 'all 0.6s ease';
//       observer.observe(element);
//     });
//   }
  
//   // Contact form functionality
//   function initContactForm() {
//     const contactForm = document.getElementById('contactForm');
    
//     if (contactForm) {
//       contactForm.addEventListener('submit', function(e) {
//         e.preventDefault();
        
//         const submitBtn = this.querySelector('.contact-submit-btn');
//         const originalText = submitBtn.textContent;
        
//         // Show loading state
//         submitBtn.textContent = 'Sending...';
//         submitBtn.style.opacity = '0.7';
//         submitBtn.disabled = true;
        
//         // Simulate form submission
//         setTimeout(() => {
//           submitBtn.textContent = '✅ Message Sent!';
//           submitBtn.style.background = 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';
          
//           // Show success message
//           showSuccessMessage();
          
//           // Reset form after delay
//           setTimeout(() => {
//             this.reset();
//             submitBtn.textContent = originalText;
//             submitBtn.style.background = 'linear-gradient(135deg, #f5c518 0%, #e6b800 100%)';
//             submitBtn.style.opacity = '1';
//             submitBtn.disabled = false;
//           }, 3000);
//         }, 2000);
//       });
  
//       // Add real-time validation
//       const inputs = contactForm.querySelectorAll('.form-input');
//       inputs.forEach(input => {
//         input.addEventListener('blur', validateInput);
//         input.addEventListener('input', function() {
//           if (this.classList.contains('error')) {
//             validateInput.call(this);
//           }
//         });
//       });
//     }
//   }
  
//   // Input validation
//   function validateInput() {
//     const value = this.value.trim();
//     const isEmail = this.type === 'email';
//     const isRequired = this.hasAttribute('required');
    
//     let isValid = true;
    
//     if (isRequired && !value) {
//       isValid = false;
//     } else if (isEmail && value && !isValidEmail(value)) {
//       isValid = false;
//     }
    
//     if (!isValid) {
//       this.classList.add('error');
//       this.style.borderColor = '#f44336';
//     } else {
//       this.classList.remove('error');
//       this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
//     }
    
//     return isValid;
//   }
  
//   function isValidEmail(email) {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   }
  
//   // Success message
//   function showSuccessMessage() {
//     const message = document.createElement('div');
//     message.style.cssText = `
//       position: fixed;
//       top: 2rem;
//       right: 2rem;
//       background: rgba(76, 175, 80, 0.9);
//       color: white;
//       padding: 1rem 2rem;
//       border-radius: 12px;
//       z-index: 1001;
//       font-weight: 500;
//       box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
//       transform: translateY(-20px);
//       opacity: 0;
//       transition: all 0.3s ease;
//     `;
//     message.textContent = 'Your message has been sent successfully!';
//     document.body.appendChild(message);
    
//     // Animate in
//     setTimeout(() => {
//       message.style.transform = 'translateY(0)';
//       message.style.opacity = '1';
//     }, 10);
    
//     // Remove after delay
//     setTimeout(() => {
//       message.style.transform = 'translateY(-20px)';
//       message.style.opacity = '0';
//       setTimeout(() => {
//         message.remove();
//       }, 300);
//     }, 5000);
//   }

// Team member hover interactions
function initTeamMemberInteractions() {
  const teamMembers = document.querySelectorAll('.team-member');
  
  teamMembers.forEach(member => {
    const avatar = member.querySelector('.member-avatar');
    const bio = member.querySelector('.member-bio');
    
    // Initial state
    bio.style.maxHeight = '0';
    bio.style.opacity = '0';
    bio.style.overflow = 'hidden';
    bio.style.transition = 'all 0.4s ease';
    
    member.addEventListener('mouseenter', () => {
      bio.style.maxHeight = '200px';
      bio.style.opacity = '1';
      avatar.style.transform = 'scale(1.05)';
    });
    
    member.addEventListener('mouseleave', () => {
      bio.style.maxHeight = '0';
      bio.style.opacity = '0';
      avatar.style.transform = 'scale(1)';
    });
  });
}

// Tech stack layer animations
function initTechStackAnimations() {
  const techLayers = document.querySelectorAll('.tech-layer');
  
  techLayers.forEach((layer, index) => {
    layer.style.transform = 'translateX(-50px)';
    layer.style.opacity = '0';
    layer.style.transition = `all 0.5s ease ${index * 0.1}s`;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transform = 'translateX(0)';
          entry.target.style.opacity = '1';
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(layer);
  });
}

// Animate statistics counters
function initStatCounters() {
  const stats = document.querySelectorAll('.tech-stat');
  
  stats.forEach(stat => {
    const numberElement = stat.querySelector('.stat-number');
    const targetNumber = parseFloat(numberElement.textContent);
    const suffix = numberElement.textContent.match(/[a-zA-Z%]+/) ? numberElement.textContent.match(/[a-zA-Z%]+/)[0] : '';
    const duration = 2000; // Animation duration in ms
    const startTime = Date.now();
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const currentNumber = Math.floor(progress * targetNumber);
            
            numberElement.textContent = currentNumber + suffix;
            
            if (progress < 1) {
              requestAnimationFrame(animate);
            }
          };
          
          animate();
          observer.unobserve(stat);
        }
      });
    }, { threshold: 0.5 });
    
    observer.observe(stat);
  });
}

// AI brain animation
function initAIBrainAnimation() {
  const brainNodes = document.querySelectorAll('.brain-node');
  const brainConnections = document.querySelectorAll('.brain-connection');
  
  // Initial state
  brainNodes.forEach(node => {
    node.style.transform = 'scale(0)';
    node.style.opacity = '0';
    node.style.transition = 'all 0.5s ease';
  });
  
  brainConnections.forEach(conn => {
    conn.style.width = '0';
    conn.style.opacity = '0';
    conn.style.transition = 'all 0.5s ease 0.3s';
  });
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Animate nodes
        brainNodes.forEach((node, index) => {
          setTimeout(() => {
            node.style.transform = 'scale(1)';
            node.style.opacity = '1';
          }, index * 100);
        });
        
        // Animate connections
        setTimeout(() => {
          brainConnections.forEach(conn => {
            conn.style.width = '100%';
            conn.style.opacity = '1';
          });
        }, 500);
      }
    });
  }, { threshold: 0.1 });
  
  observer.observe(document.querySelector('.ai-brain'));
}

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

// Initialize page functionality
document.addEventListener('DOMContentLoaded', function() {
  initScrollAnimations();
  initContactForm();
  initTeamMemberInteractions();
  initTechStackAnimations();
  initStatCounters();
  initAIBrainAnimation();
});

// Scroll-triggered animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.feature-card, .team-member, .value-item, .tech-layer');
  
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

  animatedElements.forEach(element => {
    element.style.transform = 'translateY(50px)';
    element.style.opacity = '0';
    element.style.transition = 'all 0.6s ease';
    observer.observe(element);
  });
}

// Contact form functionality with Web3Forms integration
function initContactForm() {
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      const submitBtn = this.querySelector('.contact-submit-btn');
      const originalText = submitBtn.textContent;
      
      // Show loading state
      submitBtn.textContent = 'Sending...';
      submitBtn.style.opacity = '0.7';
      submitBtn.disabled = true;
      
      // Get form data
      const formData = new FormData();
      const inputs = this.querySelectorAll('.form-input');
      
      // Add Web3Forms access key
      formData.append('access_key', 'c34ace1f-37fd-42b1-8bcc-973a37e0e346');
      
      // Add form fields with proper names
      formData.append('name', inputs[0].value);
      formData.append('email', inputs[1].value);
      formData.append('company', inputs[2].value);
      formData.append('message', inputs[3].value);
      
      // Add additional metadata
      formData.append('subject', 'New Contact Form Submission - BoxOfficePredictor+');
      formData.append('from_name', 'BoxOfficePredictor+ Contact Form');
      
      try {
        // Submit to Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
          // Success state
          submitBtn.textContent = '✅ Message Sent!';
          submitBtn.style.background = 'linear-gradient(135deg, #4caf50 0%, #45a049 100%)';
          
          // Show success message
          showSuccessMessage('Your message has been sent successfully! We\'ll get back to you soon.');
          
          // Reset form after delay
          setTimeout(() => {
            this.reset();
            submitBtn.textContent = originalText;
            submitBtn.style.background = 'linear-gradient(135deg, #f5c518 0%, #e6b800 100%)';
            submitBtn.style.opacity = '1';
            submitBtn.disabled = false;
          }, 3000);
        } else {
          throw new Error(result.message || 'Failed to send message');
        }
      } catch (error) {
        console.error('Form submission error:', error);
        
        // Error state
        submitBtn.textContent = '❌ Failed to Send';
        submitBtn.style.background = 'linear-gradient(135deg, #f44336 0%, #d32f2f 100%)';
        
        showErrorMessage('Failed to send message. Please try again or contact us directly at aryanpathak0421@gmail.com');
        
        // Reset button after delay
        setTimeout(() => {
          submitBtn.textContent = originalText;
          submitBtn.style.background = 'linear-gradient(135deg, #f5c518 0%, #e6b800 100%)';
          submitBtn.style.opacity = '1';
          submitBtn.disabled = false;
        }, 3000);
      }
    });

    // Add real-time validation
    const inputs = contactForm.querySelectorAll('.form-input');
    inputs.forEach(input => {
      input.addEventListener('blur', validateInput);
      input.addEventListener('input', function() {
        if (this.classList.contains('error')) {
          validateInput.call(this);
        }
      });
    });
  }
}

// Input validation
function validateInput() {
  const value = this.value.trim();
  const isEmail = this.type === 'email';
  const isRequired = this.hasAttribute('required');
  
  let isValid = true;
  
  if (isRequired && !value) {
    isValid = false;
  } else if (isEmail && value && !isValidEmail(value)) {
    isValid = false;
  }
  
  if (!isValid) {
    this.classList.add('error');
    this.style.borderColor = '#f44336';
  } else {
    this.classList.remove('error');
    this.style.borderColor = 'rgba(255, 255, 255, 0.2)';
  }
  
  return isValid;
}

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// Success message
function showSuccessMessage(message = 'Your message has been sent successfully!') {
  const messageEl = document.createElement('div');
  messageEl.style.cssText = `
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: rgba(76, 175, 80, 0.9);
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    z-index: 1001;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-20px);
    opacity: 0;
    transition: all 0.3s ease;
    max-width: 300px;
  `;
  messageEl.textContent = message;
  document.body.appendChild(messageEl);
  
  // Animate in
  setTimeout(() => {
    messageEl.style.transform = 'translateY(0)';
    messageEl.style.opacity = '1';
  }, 10);
  
  // Remove after delay
  setTimeout(() => {
    messageEl.style.transform = 'translateY(-20px)';
    messageEl.style.opacity = '0';
    setTimeout(() => {
      messageEl.remove();
    }, 300);
  }, 5000);
}

// Error message
function showErrorMessage(message) {
  const messageEl = document.createElement('div');
  messageEl.style.cssText = `
    position: fixed;
    top: 2rem;
    right: 2rem;
    background: rgba(244, 67, 54, 0.9);
    color: white;
    padding: 1rem 2rem;
    border-radius: 12px;
    z-index: 1001;
    font-weight: 500;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-20px);
    opacity: 0;
    transition: all 0.3s ease;
    max-width: 300px;
  `;
  messageEl.textContent = message;
  document.body.appendChild(messageEl);
  
  // Animate in
  setTimeout(() => {
    messageEl.style.transform = 'translateY(0)';
    messageEl.style.opacity = '1';
  }, 10);
  
  // Remove after delay
  setTimeout(() => {
    messageEl.style.transform = 'translateY(-20px)';
    messageEl.style.opacity = '0';
    setTimeout(() => {
      messageEl.remove();
    }, 300);
  }, 7000);
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(reg => console.log("Service Worker registered:", reg))
    .catch(err => console.log("Service Worker registration failed:", err));
}
