function toggleFAQ(header) {
    const card = header.parentElement;
    card.classList.toggle('active');

    const toggle = header.querySelector('.faq-toggle');
    toggle.textContent = card.classList.contains('active') ? "-" : "+";
}