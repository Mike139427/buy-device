document.addEventListener('DOMContentLoaded', () => {
  // AOS
  AOS.init({ once: true });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });

  // Counter animation
  const counters = document.querySelectorAll('.counter');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.getAttribute('data-count');
      const count = +counter.innerText;
      const increment = Math.ceil(target / 100);
      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 20);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });

  // Scroll to top button
  window.onscroll = () => {
    const topBtn = document.getElementById('topBtn');
    if (topBtn) topBtn.style.display = window.scrollY > 500 ? 'block' : 'none';
  };
});

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Splide gallery initialization
if (document.querySelector('.splide')) {
  new Splide('.splide', {
    type: 'loop',
    perPage: 3,
    gap: '1rem',
    breakpoints: {
      768: {
        perPage: 1
      },
      1024: {
        perPage: 2
      }
    }
  }).mount();
}