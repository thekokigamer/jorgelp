// script.js

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const pageHeader = document.getElementById('pageHeader');

    // Function to update the --header-height CSS variable
    function updateHeaderHeight() {
        if (pageHeader) { // pageHeader is the <header> element
            const headerHeight = pageHeader.offsetHeight;
            document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
            // console.log('Header height set to:', headerHeight + 'px'); // For debugging
        }
    }

    if (menuToggle && mainNav && pageHeader) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            pageHeader.classList.toggle('nav-active'); // Class for header when nav is open
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            
            if (isExpanded) {
                menuToggle.innerHTML = '<i class="fas fa-times"></i>'; // Change to X icon
            } else {
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>'; // Change back to bars
            }
            // Recalculate header height after nav toggle, as it might change header's offsetHeight
            // especially if nav.active changes layout in a way that affects header size
            updateHeaderHeight(); 
        });
    }

    // Initial calculation and on resize
    window.addEventListener('load', updateHeaderHeight);
    window.addEventListener('resize', updateHeaderHeight);

    // Ensure an initial calculation if load event already fired (e.g., for cached pages)
    if (document.readyState === "complete" || document.readyState === "interactive") {
        updateHeaderHeight();
    }

    // Copyright Year (Hardcoded in HTML, so JS part is removed)
});