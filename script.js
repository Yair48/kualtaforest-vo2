// Initialize AOS
AOS.init({
    duration: 800,
    once: true
});

// Exit-Intent Popup
document.addEventListener('mouseout', function(e) {
    if (!e.toElement && !e.relatedTarget) {
        const popup = new bootstrap.Modal(document.getElementById('exit-popup'));
        popup.show();
    }
});

// Form submissions (placeholder - add real functionality if needed)
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Formulario enviado. ¡Gracias!');
    });
});
