window.addEventListener('load', () => {
	document.body.classList.add('loaded');
});

const form = document.getElementById("contactForm") as HTMLFormElement;
const form_message = document.getElementById("formMessage") as HTMLParagraphElement;

function validateEmail(email: string): boolean {
	const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return re.test(email.toLowerCase());
}

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const name = (document.getElementById("name") as HTMLInputElement).value.trim();
	const email = (document.getElementById("email") as HTMLInputElement).value.trim();
	const message = (document.getElementById("message") as HTMLTextAreaElement).value.trim();

	if (name.length < 2) {
		form_message.textContent = "Le nom doit contenir au moins 2 caractères";
		return;
	}

	if (!validateEmail(email)) {
		form_message.textContent = "L'adresse email n'est pas correcte";
		return;
	}

	if (message.length < 10) {
		form_message.textContent = "Le message doit contenir au moins 10 caractères";
		return;
	}

	form_message.textContent = "Merci pour votre message! On revient vers vous très vite!";
	form.reset()
});
