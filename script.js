// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileToggle = document.getElementById('mobile-menu-toggle');
  const navbar = document.getElementById('navbar');
  mobileToggle.addEventListener('click', function() {
    navbar.style.display = (navbar.style.display === 'block') ? 'none' : 'block';
  });

  // Smooth scrolling for navigation links
  const navLinks = document.querySelectorAll('nav ul li a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
        top: targetSection.offsetTop - 70,
        behavior: 'smooth'
      });
      if (window.innerWidth <= 768) {
        navbar.style.display = 'none';
      }
    });
  });

  // Modal functionality for project details
  const projectButtons = document.querySelectorAll('.view-details');
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const closeModal = document.querySelector('.close-modal');

  // Sample project data
  const projectData = {
    'hr-analytics': {
      title: 'HR Analytics',
      description: 'Worked on the HR Analytics dataset to predict employee promotion using Random Forest and techniques to handle imbalanced data.',
      tech: 'Python, Machine Learning (Random Forest)'
    },
    'env-monitoring': {
      title: 'Environment Monitoring App (Envirus)',
      description: 'Developed an app to predict AQI based on vehicle numbers and display pollutant levels in real-time.',
      tech: 'Python, Machine Learning (Random Forest)'
    }
  };

  // Open modal when "View Details" is clicked
  projectButtons.forEach(button => {
    button.addEventListener('click', function() {
      const projectKey = this.parentElement.getAttribute('data-project');
      const data = projectData[projectKey];
      if (data) {
        modalBody.innerHTML = `
          <h2>${data.title}</h2>
          <p>${data.description}</p>
          <p><strong>Tech Stack:</strong> ${data.tech}</p>
        `;
        modal.style.display = 'block';
      }
    });
  });

  // Close modal when close button or outside area is clicked
  closeModal.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(e) {
    if (e.target == modal) {
      modal.style.display = 'none';
    }
  });
});
