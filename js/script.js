// ============================================================
// SURABHI ACADEMY — shared behaviour across all pages
// ============================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- Mobile nav toggle ----
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = links.classList.contains('open');
      toggle.setAttribute('aria-expanded', expanded);
    });
    // close menu after a link is tapped (mobile)
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // ---- Footer year ----
  document.querySelectorAll('.js-year').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

  // ---- Admission / contact form ----
  // NOTE TO OWNER: this form currently submits with a plain browser
  // POST to FormSubmit (https://formsubmit.co) so enquiries land
  // straight in your email inbox WITHOUT needing to rent a server.
  // Steps to activate:
  //   1. Change YOUR_EMAIL_HERE in contact.html's <form action="...">
  //      to your real email address (e.g. surabhi.academy@gmail.com)
  //   2. Submit the form once for real — FormSubmit emails you a
  //      one-time confirmation link, click it to activate.
  //   3. Every future submission will land in that inbox.
  // If you'd rather use a Google Form, see the note in contact.html
  // and just swap the <form> block for the provided <iframe>.
  var form = document.querySelector('.js-contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      var msg = form.querySelector('.form-msg');
      var name = form.querySelector('[name="name"]');
      var phone = form.querySelector('[name="phone"]');

      if (!name.value.trim() || !phone.value.trim()) {
        e.preventDefault();
        if (msg) {
          msg.textContent = 'Please fill your name and phone number so we can call you back.';
          msg.className = 'form-msg error';
        }
        return;
      }
      // basic 10-digit Indian mobile check
      var digits = phone.value.replace(/\D/g, '');
      if (digits.length < 10) {
        e.preventDefault();
        if (msg) {
          msg.textContent = 'Please enter a valid 10-digit phone number.';
          msg.className = 'form-msg error';
        }
        return;
      }
      // otherwise let the form submit normally to FormSubmit
      if (msg) {
        msg.textContent = 'Sending your enquiry…';
        msg.className = 'form-msg';
      }
    });
  }
});
