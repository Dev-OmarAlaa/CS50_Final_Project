// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('open');
            menuToggle.classList.remove('active');
        });
    });
}

// Checklist functionality (for tips page)
const checkboxes = document.querySelectorAll('.checklist input[type="checkbox"]');

checkboxes.forEach(checkbox => {
    // Load saved state
    const id = checkbox.id || checkbox.dataset.id;
    if (id && localStorage.getItem(`check_${id}`) === 'true') {
        checkbox.checked = true;
        checkbox.closest('label')?.classList.add('checked');
    }

    checkbox.addEventListener('change', () => {
        const label = checkbox.closest('label');
        if (checkbox.checked) {
            label?.classList.add('checked');
        } else {
            label?.classList.remove('checked');
        }

        // Save state
        if (id) {
            localStorage.setItem(`check_${id}`, checkbox.checked);
        }
    });
});

// Active nav link highlighting based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage) {
        link.classList.add('active');
    } else {
        link.classList.remove('active');
    }
});
