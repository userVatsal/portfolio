document.querySelector('.contact-btn').addEventListener('click', function() {
    const form = document.querySelector('#contact-form');
    form.style.display = (form.style.display === 'none') ? 'block' : 'none';
});
