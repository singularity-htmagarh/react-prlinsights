function toggleMobileNav() {
	const navMenu = document.getElementById('navMenu');
	if (navMenu) navMenu.classList.toggle('active');
}

// Contact form submission (AJAX to Formspree and custom thank you message)
document.addEventListener('DOMContentLoaded', function() {
	const contactForm = document.getElementById('contactForm');
	if (contactForm) {
		contactForm.addEventListener('submit', function(e) {
			e.preventDefault();
			const form = this;
			const thankYou = document.getElementById('thankYouMessage');
			const formData = new FormData(form);
			// Basic validation for services
			const services = [];
			document.querySelectorAll('input[name="services"]:checked').forEach(cb => {
				services.push(cb.value);
			});
			if (services.length === 0) {
				alert('Please select at least one service you\'re interested in.');
				return;
			}
			// Add checked services to formData
			formData.delete('services');
			services.forEach(s => formData.append('services', s));
			// Submit via fetch
			fetch('https://formspree.io/f/xwpnygzv', {
				method: 'POST',
				body: formData,
				headers: {
					'Accept': 'application/json'
				}
			})
			.then(response => {
				if (response.ok) {
					form.style.display = 'none';
					thankYou.style.display = 'block';
				} else {
					response.json().then(data => {
						alert(data.error || 'There was a problem submitting your form. Please try again later.');
					});
				}
			})
			.catch(() => {
				alert('There was a problem submitting your form. Please try again later.');
			});
		});
	}

	// Form field validation feedback
	document.querySelectorAll('input[required], select[required], textarea[required]').forEach(field => {
		field.addEventListener('blur', function() {
			if (!this.validity.valid) {
				this.style.borderColor = 'var(--destructive)';
			} else {
				this.style.borderColor = 'var(--border)';
			}
		});
	});
});
