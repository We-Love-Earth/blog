// Handle clean URLs for GitHub Pages
document.addEventListener('DOMContentLoaded', () => {
    // Handle navigation link clicks
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = link.getAttribute('href');
            const cleanUrl = href.replace('index.html?#', '');
            history.pushState({}, '', cleanUrl);
            
            // Scroll to the section if it exists
            const sectionId = cleanUrl.split('/').pop();
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
        const sectionId = window.location.pathname.split('/').pop();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Handle initial page load
    if (window.location.pathname !== '/') {
        const sectionId = window.location.pathname.split('/').pop();
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
});
