function handleSearch() {
  const query = document.getElementById('search').value.toLowerCase();
  if (query.includes('previous')) {
      document.getElementById('pyp').scrollIntoView({ behavior: 'smooth' });
  } else if (query.includes('skill')) {
      document.getElementById('learn').scrollIntoView({ behavior: 'smooth' });
  } else {
      alert('Section not found');
  }
}

// Add smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Function to show subjects for PYP and Labs pages
function showSubjects(semesterId) {
  const semesters = document.querySelectorAll('.subjects');
  semesters.forEach(sem => {
      sem.style.display = 'none';
  });
  document.getElementById(semesterId).style.display = 'block';
}

