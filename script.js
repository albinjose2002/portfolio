window.addEventListener('DOMContentLoaded', function () {
  // Theme toggle logic
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeToggleIcon = document.getElementById('themeToggleIcon');
  function setTheme(dark) {
    if (dark) {
      document.body.classList.add('dark-mode');
      document.documentElement.classList.add('dark');
      themeToggleIcon.textContent = '☀️';
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.classList.remove('dark');
      themeToggleIcon.textContent = '🌙';
      localStorage.setItem('theme', 'light');
    }
  }
//   // Detect preferred theme
//   (function () {
//     let theme = localStorage.getItem('theme');
//     if (!theme) {
//       theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
//     }
//     setTheme(theme === 'dark');
//   })();
//   if (themeToggleBtn) {
//     themeToggleBtn.addEventListener('click', function () {
//       setTheme(!document.body.classList.contains('dark-mode'));
//     });
//   }
//   window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
//     if (!localStorage.getItem('theme')) {
//       setTheme(e.matches);
//     }
//   });

  // EmailJS integration
  if (window.emailjs && document.getElementById('contactForm')) {
  emailjs.init('xfi00pEhwviwDlDpR'); // User's actual EmailJS public key
    document.getElementById('contactForm').addEventListener('submit', function(e) {
      e.preventDefault();
      var formMessage = document.getElementById('formMessage');
      formMessage.textContent = '';
      emailjs.send('service_hf62azs', 'template_th5ob1g', {
        from_name: document.getElementById('contactName').value,
        from_email: document.getElementById('contactEmail').value,
        message: document.getElementById('contactMessage').value
      })
      .then(function(response) {
        formMessage.textContent = 'Message sent successfully!';
        formMessage.classList.remove('text-danger');
        formMessage.classList.add('text-success');
        document.getElementById('contactForm').reset();
      }, function(error) {
        formMessage.textContent = 'Failed to send message. Please try again later.';
        formMessage.classList.remove('text-success');
        formMessage.classList.add('text-danger');
      });
    });
  }

  // Typed.js animation
  if (window.Typed) {
    new Typed("#typed-text", {
      strings: [" PHP Developer", "Web Developer"],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });
  }
});
