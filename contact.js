function handleSubmit(event) {
    event.preventDefault();
    
    // Get form elements
    const form = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const formMessage = document.getElementById('formMessage');
    
    // Get form data - match these exactly with your EmailJS template variables
    const formData = {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        to_name: "Narinder Singh",  // Add recipient name
        reply_to: document.getElementById('email').value
    };

    // Show loading state
    submitBtn.classList.add('loading');
    formMessage.className = 'form-message';
    formMessage.textContent = '';

    // Send email using EmailJS
    emailjs.send(
        'service_j5tmtl8',
        'template_artlrsn',  // Your correct template ID
        formData,
        'smvjQLcBvTpYlAzbC'
    )
    .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        submitBtn.classList.remove('loading');
        formMessage.style.display = 'block';
        formMessage.className = 'form-message success';
        formMessage.textContent = 'Message sent successfully!';
        form.reset();

        setTimeout(() => {
            formMessage.style.display = 'none';
            formMessage.className = 'form-message';
            formMessage.textContent = '';
        }, 5000);
    }, function(error) {
        console.error('FAILED...', error);
        submitBtn.classList.remove('loading');
        formMessage.style.display = 'block';
        formMessage.className = 'form-message error';
        formMessage.textContent = `Failed to send message: ${error.text || 'Please try again.'}`;
    });
}

// Add email validation
document.getElementById('email').addEventListener('input', function(e) {
    const email = e.target.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        e.target.setCustomValidity('Please enter a valid email address');
    } else {
        e.target.setCustomValidity('');
    }
}); 