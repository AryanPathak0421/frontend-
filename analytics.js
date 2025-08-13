//Create floating particles
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

// Chart.js configuration
const chartColors = {
  primary: '#f5c518',
  secondary: '#e6b800',
  success: '#4caf50',
  danger: '#f44336',
  warning: '#ff9800',
  info: '#2196f3',
  dark: '#1a1a2e',
  light: 'rgba(255, 255, 255, 0.8)'
};

// Initialize Trend Chart
function initTrendChart() {
  const ctx = document.getElementById('trendChart').getContext('2d');
  
  const trendChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Predictions Made',
        data: [1200, 1900, 3000, 2500, 2200, 3200],
        borderColor: chartColors.primary,
        backgroundColor: 'rgba(245, 197, 24, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4
      }, {
        label: 'Accuracy Rate',
        data: [85, 87, 89, 86, 88, 87],
        borderColor: chartColors.success,
        backgroundColor: 'rgba(76, 175, 80, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        yAxisID: 'y1'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: chartColors.light,
            font: {
              size: 14
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: chartColors.light
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        y: {
          type: 'linear',
          display: true,
          position: 'left',
          ticks: {
            color: chartColors.light
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.1)'
          }
        },
        y1: {
          type: 'linear',
          display: true,
          position: 'right',
          ticks: {
            color: chartColors.light,
            callback: function(value) {
              return value + '%';
            }
          },
          grid: {
            drawOnChartArea: false,
          },
        }
      }
    }
  });

  return trendChart;
}

// Initialize Genre Chart
function initGenreChart() {
  const ctx = document.getElementById('genreChart').getContext('2d');
  
  const genreChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Action', 'Drama', 'Comedy', 'Thriller', 'Sci-Fi', 'Horror'],
      datasets: [{
        data: [35, 20, 18, 12, 10, 5],
        backgroundColor: [
          chartColors.primary,
          chartColors.info,
          chartColors.warning,
          chartColors.danger,
          chartColors.success,
          '#9c27b0'
        ],
        borderWidth: 0,
        hoverBorderWidth: 3,
        hoverBorderColor: '#fff'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: {
            color: chartColors.light,
            padding: 20,
            font: {
              size: 12
            }
          }
        }
      }
    }
  });

  return genreChart;
}

// Initialize charts when page loads
let trendChart, genreChart;

document.addEventListener('DOMContentLoaded', function() {
  trendChart = initTrendChart();
  genreChart = initGenreChart();
  
  // Animate stat numbers
  animateStats();
  
  // Initialize table functionality
  initTableFunctionality();
});

// Animate statistics numbers
function animateStats() {
  const statNumbers = document.querySelectorAll('.stat-number');
  
  statNumbers.forEach(stat => {
    const finalValue = stat.textContent;
    const numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
    const suffix = finalValue.replace(/[0-9.]/g, '');
    
    let currentValue = 0;
    const increment = numericValue / 50;
    const timer = setInterval(() => {
      currentValue += increment;
      if (currentValue >= numericValue) {
        currentValue = numericValue;
        clearInterval(timer);
      }
      
      if (suffix.includes('%')) {
        stat.textContent = currentValue.toFixed(1) + '%';
      } else if (suffix.includes('M')) {
        stat.textContent = ' + currentValue.toFixed(0) + 'M';
      } else {
        stat.textContent = Math.floor(currentValue).toLocaleString() + suffix;
      }
    }, 20);
  });
}

// Chart period controls
document.querySelectorAll('.chart-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    // Remove active class from all buttons
    document.querySelectorAll('.chart-btn').forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    this.classList.add('active');
    
    const period = this.dataset.period;
    updateTrendChart(period);
  });
});

// Update trend chart based on period
function updateTrendChart(period) {
  let newData, newLabels;
  
  switch(period) {
    case '6m':
      newLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
      newData = [1200, 1900, 3000, 2500, 2200, 3200];
      break;
    case '1y':
      newLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
      newData = [7100, 8500, 9200, 10400];
      break;
    case 'all':
      newLabels = ['2021', '2022', '2023', '2024'];
      newData = [15000, 28000, 35000, 42000];
      break;
    default:
      return;
  }
  
  trendChart.data.labels = newLabels;
  trendChart.data.datasets[0].data = newData;
  trendChart.update('active');
}

// Table functionality
function initTableFunctionality() {
  const genreFilter = document.getElementById('genreFilter');
  const statusFilter = document.getElementById('statusFilter');
  
  genreFilter.addEventListener('change', filterTable);
  statusFilter.addEventListener('change', filterTable);
}

function filterTable() {
  const genreFilter = document.getElementById('genreFilter').value;
  const statusFilter = document.getElementById('statusFilter').value;
  const rows = document.querySelectorAll('#performanceTable tbody tr');
  
  rows.forEach(row => {
    const genre = row.querySelector('.genre-tag').textContent.toLowerCase();
    const status = row.querySelector('.status-badge').textContent.toLowerCase();
    
    const genreMatch = genreFilter === 'all' || genre === genreFilter;
    const statusMatch = statusFilter === 'all' || status === statusFilter;
    
    if (genreMatch && statusMatch) {
      row.style.display = '';
    } else {
      row.style.display = 'none';
    }
  });
}

// Add hover effects to table rows
document.querySelectorAll('#performanceTable tbody tr').forEach(row => {
  row.addEventListener('mouseenter', function() {
    this.style.background = 'rgba(245, 197, 24, 0.1)';
  });
  
  row.addEventListener('mouseleave', function() {
    this.style.background = '';
  });
});

// Stat cards animation on scroll
function observeStatCards() {
  const statCards = document.querySelectorAll('.stat-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.transform = 'translateY(0)';
        entry.target.style.opacity = '1';
      }
    });
  }, {
    threshold: 0.1
  });
  
  statCards.forEach(card => {
    card.style.transform = 'translateY(50px)';
    card.style.opacity = '0';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
  });
}

// Initialize scroll animations
observeStatCards();

// Add click handlers for stat cards
document.querySelectorAll('.stat-card').forEach(card => {
  card.addEventListener('click', function() {
    // Add a subtle click animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = '';
    }, 150);
  });
});

// Export functionality (placeholder)
function exportData(format) {
  console.log(`Exporting data in ${format} format...`);
  // Implement actual export functionality here
}

// Search functionality for table
function addSearchFunctionality() {
  const searchInput = document.createElement('input');
  searchInput.type = 'text';
  searchInput.placeholder = 'Search movies...';
  searchInput.className = 'form-input';
  searchInput.style.marginBottom = '1rem';
  
  const tableContainer = document.querySelector('.performance-table-container');
  const tableHeader = tableContainer.querySelector('.table-header');
  tableHeader.appendChild(searchInput);
  
  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const rows = document.querySelectorAll('#performanceTable tbody tr');
    
    rows.forEach(row => {
      const movieTitle = row.querySelector('.movie-cell span').textContent.toLowerCase();
      if (movieTitle.includes(searchTerm)) {
        row.style.display = '';
      } else {
        row.style.display = 'none';
      }
    });
  });
}

// Initialize search functionality
addSearchFunctionality();

// Add real-time updates simulation
function simulateRealTimeUpdates() {
  setInterval(() => {
    // Update random stat
    const statNumbers = document.querySelectorAll('.stat-number');
    const randomStat = statNumbers[Math.floor(Math.random() * statNumbers.length)];
    const currentValue = parseFloat(randomStat.textContent.replace(/[^0-9.]/g, ''));
    const change = (Math.random() - 0.5) * 0.1; // Small random change
    const newValue = currentValue * (1 + change);
    
    if (randomStat.textContent.includes('%')) {
      randomStat.textContent = newValue.toFixed(1) + '%';
    } else if (randomStat.textContent.includes('M')) {
      randomStat.textContent = ' + newValue.toFixed(0) + 'M';
    } else {
      randomStat.textContent = Math.floor(newValue).toLocaleString();
    }
  }, 5000); // Update every 5 seconds

}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js")
    .then(reg => console.log("Service Worker registered:", reg))
    .catch(err => console.log("Service Worker registration failed:", err));
}

// Start real-time updates
simulateRealTimeUpdates();
