document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = new FormData(this);
    const messageContainer = document.getElementById('message-container');
    
    fetch('enviar_mail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        messageContainer.style.display = 'block';
        messageContainer.className = 'message-container ' + 
            (data.success ? 'message-success' : 'message-error');
        messageContainer.textContent = data.message;
        
        if (data.success) {
            this.reset();
        }
    })
    .catch(error => {
        messageContainer.style.display = 'block';
        messageContainer.className = 'message-container message-error';
        messageContainer.textContent = 'Error al enviar el mensaje. Intente nuevamente.';
    });
});