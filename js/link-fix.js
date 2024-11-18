const mysticLinks = document.querySelectorAll('.mystic-link');

  mysticLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
    });
  });