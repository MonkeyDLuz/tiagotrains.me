document.addEventListener("DOMContentLoaded", function () {
	AOS.init({
		// You can add global settings here
		duration: 800,
		easing: "ease-in-out",
		once: true,
	});
});

// You can add other JavaScript functions or event listeners here

document.getElementById("emailButton").addEventListener("click", function (e) {
	e.preventDefault();
	const email = "example@example.com"; // Replace with the predetermined email address
	const subject = "Contact Request"; // Replace with your subject

	// Get the values from the form
	const name = document.getElementById("name").value;
	const userEmail = document.getElementById("email").value;
	const phone = document.getElementById("phone").value;
	const message = document.getElementById("message").value;

	let body;

	if (message.trim() !== "") {
		// If there's a message in the form, use it
		body = `Name: ${name}\nEmail: ${userEmail}\nPhone: ${phone}\n\nMessage:\n${message}`;
	} else {
		// If no message, use the predetermined text
		body = `Name: ${name}\nEmail: ${userEmail}\nPhone: ${phone}\n,\n\nI would like to get in touch with you.`;
	}

	const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
		subject
	)}&body=${encodeURIComponent(body)}`;

	window.location.href = mailtoLink;
});

document.querySelector('.menu-toggle').addEventListener('click', function() {
	this.classList.toggle('active');
	document.querySelector('.nav-links').classList.toggle('active');
});
