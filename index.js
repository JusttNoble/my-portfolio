
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});


function sendEmail() {
    const templateParams = {
        from_name: document.getElementById("name").value,
        from_email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_3x1jn1q", "template_3b50iqe", templateParams)
        .then(() => {
            alert("Email sent successfully!");
        }, (error) => {
            console.error("Failed to send email:", error);
        });
}

// Toggle functionality for Aside Bar
const toggleButton = document.querySelector('#toggle-btn');
const aside = document.querySelector('aside');

if (toggleButton && aside) {
    toggleButton.addEventListener('click', () => {
        aside.classList.toggle('active');
    });
}