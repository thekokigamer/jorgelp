// script.js

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');
    const pageHeader = document.getElementById('pageHeader'); // This is your <header> element

    // --- Sticky Header Height Calculation ---
    function updateHeaderHeight() {
        if (pageHeader) {
            const headerHeight = pageHeader.offsetHeight;
            document.documentElement.style.setProperty('--header-height', `${headerHeight}px`);
            // console.log('Header height set to:', headerHeight + 'px'); 
        }
    }

    if (pageHeader) { // Ensure pageHeader exists before adding listeners
        window.addEventListener('load', updateHeaderHeight);
        window.addEventListener('resize', updateHeaderHeight);
        // Initial calculation if load event already fired
        if (document.readyState === "complete" || document.readyState === "interactive") {
            updateHeaderHeight();
        }
    }
    // --- End Sticky Header Height Calculation ---


    // --- Menu Toggle ---
    if (menuToggle && mainNav && pageHeader) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            pageHeader.classList.toggle('nav-active'); // Optional class for header styling
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            
            if (isExpanded) {
                menuToggle.innerHTML = '<i class="fas fa-times"></i>'; // Change to X icon
            } else {
                menuToggle.innerHTML = '<i class="fas fa-bars"></i>'; // Change back to bars
            }
            // Recalculate header height after nav toggle, as it might change header's offsetHeight
            if (pageHeader) updateHeaderHeight(); 
        });
    }
    // --- End Menu Toggle ---


    // --- Rotating Welcome Message ---
    const welcomeElement = document.getElementById('welcomeMessage');
    if (welcomeElement) { // Only run if the element exists (i.e., on index.html)
        const welcomeMessages = [
            "Welcome!",        // English
            "¡Bienvenido!",    // Spanish
            "Bienvenue!",      // French
            "Willkommen!",     // German
            "Benvenuto!",      // Italian
            "Bem-vindo!",      // Portuguese
            "어서 오세요!",       // Korean (Eoseo oseyo!)
            "ようこそ!",        // Japanese (Yōkoso!)
            "欢迎!",           // Chinese (Simplified - Huānyíng!)
            "स्वागतम्!"       // Hindi (Svāgatam!)
            // Add more languages as you like!
        ];
        let currentMessageIndex = 0;
        const changeInterval = 2000; // Change message every 3 seconds (3000 milliseconds)

        function changeWelcomeMessage() {
            currentMessageIndex = (currentMessageIndex + 1) % welcomeMessages.length;
            // Fade out
            welcomeElement.style.opacity = 0;
            
            setTimeout(() => {
                welcomeElement.textContent = welcomeMessages[currentMessageIndex];
                // Fade in
                welcomeElement.style.opacity = 1;
            }, 300); // Short delay for fade out to complete before changing text & fading in
        }

        // Initial message
        welcomeElement.textContent = welcomeMessages[currentMessageIndex];
        welcomeElement.style.transition = 'opacity 0.3s ease-in-out'; // CSS transition for fade
        
        setInterval(changeWelcomeMessage, changeInterval);
    }
    // --- End Rotating Welcome Message ---

});