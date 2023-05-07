const filterButtons = document.querySelectorAll('.filter-button');
const cardContainer = document.querySelector('.card-container');
const cards = document.querySelectorAll('.card');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    cards.forEach(card => {
      if (filter === 'all' || card.classList.contains(filter)) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

function animateProgress() {
  const progressBars = document.querySelectorAll('.progress');
  progressBars.forEach(bar => {
    const value = bar.getAttribute('data-value');
    const progressFill = bar.querySelector('.progress-bar-fill');
    const progressValue = bar.querySelector('.value');
    const radius = progressFill.getBoundingClientRect().width / 2;
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - value / 100 * circumference;
    
    progressFill.style.strokeDasharray = `${circumference} ${circumference}`;
    progressFill.style.strokeDashoffset = offset;
    progressValue.textContent = `${value}%`;
  });
}

animateProgress();
