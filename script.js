document.addEventListener("DOMContentLoaded", function () {
	AOS.init({
		duration: 800,
		easing: "ease-in-out",
		once: true,
	});

	// Unified email function
	function handleEmailClick(e, customSubject = "", customBody = "") {
		e.preventDefault();
		const email = "tiago@houseofhealth.com";
		let subject = customSubject || "Contact Request";
		let body = customBody;

		if (!customBody) {
			const name = document.getElementById("name")?.value || "Visitor";
			const userEmail =
				document.getElementById("email")?.value || "visitor@example.com";
			const phone = document.getElementById("phone")?.value || "N/A";
			const message = document.getElementById("message")?.value || "";

			body = `Name: ${name}\nEmail: ${userEmail}\nPhone: ${phone}\n\n`;
			body +=
				message.trim() !== ""
					? `Message:\n${message}`
					: "I would like to get in touch with you.";
		}

		const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
			subject
		)}&body=${encodeURIComponent(body)}`;
		window.location.href = mailtoLink;
	}

	// Contact form email button
	const emailButton = document.getElementById("emailButton");
	if (emailButton) {
		emailButton.addEventListener("click", handleEmailClick);
	}

	// Footer email icons
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

	// More info buttons
	const moreInfoButtons = document.querySelectorAll(".more-info-btn");
	moreInfoButtons.forEach(button => {
		button.addEventListener("click", function (e) {
			const membershipType = this.getAttribute("data-membership");
			const subject = `More Information About ${membershipType} Membership`;
			const body = `Hello,\n\nI would like to get more information about the ${membershipType} membership option. Could you please provide me with additional details?\n\nThank you!`;
			handleEmailClick(e, subject, body);
		});
	});

	// FAQ functionality
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
});

// TrustPilot initialization
(function (w, d, s, r, n) {
	w.TrustpilotObject = n;
	w[n] =
		w[n] ||
		function () {
			(w[n].q = w[n].q || []).push(arguments);
		};
	a = d.createElement(s);
	a.async = 1;
	a.src = r;
	a.type = "text/java" + s;
	f = d.getElementsByTagName(s)[0];
	f.parentNode.insertBefore(a, f);
})(
	window,
	document,
	"script",
	"https://invitejs.trustpilot.com/tp.min.js",
	"tp"
);

tp("register", "GzOMvDTpDfkv5By0");
