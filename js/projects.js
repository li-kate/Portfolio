document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.navbar ul li a');

    function highlightActiveLink(category) {
        navLinks.forEach((link) => {
            link.classList.remove('active'); 
            if (link.dataset.category === category) {
                link.classList.add('active'); 
            }
        });
    }

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); 

            const category = link.dataset.category;

            showProjects(category);
            highlightActiveLink(category); 
        });
    });

    function showProjects(category) {
        const projects = document.querySelectorAll('.project');
        projects.forEach((project) => {
            const shouldDisplay = category === 'all' || project.classList.contains(category);
            project.style.display = shouldDisplay ? 'block' : 'none';
        });
    }

    const urlParams = new URLSearchParams(window.location.search);
    const categoryFromUrl = urlParams.get('category') || 'all'; 
    showProjects(categoryFromUrl);
    highlightActiveLink(categoryFromUrl); 
});

// Optional: Handle back/forward navigation (for popstate events)
window.addEventListener('popstate', (event) => {
    const category = event.state?.category || 'all'; // Default to 'all' if state is null
    showProjects(category);
    highlightActiveLink(category); // Highlight the active link based on the state
});