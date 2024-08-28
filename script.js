document.addEventListener("DOMContentLoaded", function () {
	AOS.init({
		duration: 800,
		easing: "ease-in-out",
		once: true,
	});

	const emailButton = document.getElementById("emailButton");
	if (emailButton) {
		emailButton.addEventListener("click", function (e) {
			e.preventDefault();
			const email = "tiagojjsantos@gmail.com";
			const subject = "Contact Request";

			const name = document.getElementById("name").value;
			const userEmail = document.getElementById("email").value;
			const phone = document.getElementById("phone").value;
			const message = document.getElementById("message").value;

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

	const footerEmailLink = document.getElementById("footerEmailLink");
	if (footerEmailLink) {
		footerEmailLink.addEventListener("click", handleEmailClick);
	}

	function handleEmailClick(e) {
		e.preventDefault();
		const email = "tiagojjsantos@gmail.com";
		const subject = "Contact Request";

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
	const moreInfoButtons = document.querySelectorAll(".more-info-btn");
	moreInfoButtons.forEach(button => {
		button.addEventListener("click", function () {
			const membershipType = this.getAttribute("data-membership");
			const email = "tiagojjsantos@gmail.com";
			const subject = `More Information About ${membershipType} Membership`;
			const body = `Hello,\n\nI would like to get more information about the ${membershipType} membership option. Could you please provide me with additional details?\n\nThank you!`;

			const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
				subject
			)}&body=${encodeURIComponent(body)}`;
			window.location.href = mailtoLink;
		});
	});
});
