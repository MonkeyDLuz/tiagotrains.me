document.addEventListener("DOMContentLoaded", function () {
	AOS.init({
		// You can add global settings here
		duration: 800,
		easing: "ease-in-out",
		once: true,
	});
	// You can add other JavaScript functions or event listeners here

	const emailButton = document.getElementById("emailButton");
	if (emailButton) {
		emailButton.addEventListener("click", function (e) {
			e.preventDefault();
			const email = "example@example.com"; // Replace with your email
			const subject = "Contact Request";

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
				body = `Name: ${name}\nEmail: ${userEmail}\nPhone: ${phone}\n\nI would like to get in touch with you.`;
			}

			const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
				subject
			)}&body=${encodeURIComponent(body)}`;

			window.location.href = mailtoLink;
		});
	}

	const faqItems = document.querySelectorAll(".faq-item");

	faqItems.forEach((item, index) => {
		const question = item.querySelector("h2");
		const answer = item.querySelector("p");

		// Set initial state
		if (index !== 0) {
			answer.classList.add("hidden");
		} else {
			question.classList.add("open");
		}

		question.addEventListener("click", () => {
			answer.classList.toggle("hidden");
			question.classList.toggle("open");

			faqItems.forEach(otherItem => {
				if (otherItem !== item) {
					const otherAnswer = otherItem.querySelector("p");
					const otherQuestion = otherItem.querySelector("h2");
					otherAnswer.classList.add("hidden");
					otherQuestion.classList.remove("open");
				}
			});
		});
	});
	const footerEmailIcon = document.querySelector(
		'.footer-social a[href="#"] img[alt="email"]'
	);
	if (footerEmailIcon) {
		footerEmailIcon.parentElement.addEventListener("click", handleEmailClick);
	}

	function handleEmailClick(e) {
		e.preventDefault();
		const email = "example@example.com"; // Replace with your email
		const subject = "Contact Request";

		// For the footer icon, we'll use placeholder values
		const name = "Visitor";
		const userEmail = "visitor@example.com";
		const phone = "N/A";
		const message = "";

		let body;

		if (message.trim() !== "") {
			body = `Name: ${name}\nEmail: ${userEmail}\nPhone: ${phone}\n\nMessage:\n${message}`;
		} else {
			body = `Name: ${name}\nEmail: ${userEmail}\nPhone: ${phone}\n\nI would like to get in touch with you.`;
		}

		const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;

		window.location.href = mailtoLink;
	}
});
