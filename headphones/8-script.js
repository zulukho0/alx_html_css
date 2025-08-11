// Hamburger menu functionality
        document.addEventListener('DOMContentLoaded', function () {
            const hamburgerBtn = document.getElementById('hamburger-btn');
            const navMenu = document.getElementById('nav-menu');

            // Toggle menu function
            function toggleMenu() {
                hamburgerBtn.classList.toggle('active');
                navMenu.classList.toggle('active');

                // Toggle aria-expanded for accessibility
                const isExpanded = hamburgerBtn.classList.contains('active');
                hamburgerBtn.setAttribute('aria-expanded', isExpanded);
            }

            // Add click event listener to hamburger button
            hamburgerBtn.addEventListener('click', toggleMenu);

            // Close menu when clicking on nav links (mobile)
            const navLinks = navMenu.querySelectorAll('a');
            navLinks.forEach(link => {
                link.addEventListener('click', () => {
                    if (navMenu.classList.contains('active')) {
                        toggleMenu();
                    }
                });
            });

            // Close menu when clicking outside (optional)
            document.addEventListener('click', function (event) {
                const isClickInsideNav = navMenu.contains(event.target);
                const isClickOnHamburger = hamburgerBtn.contains(event.target);

                if (!isClickInsideNav && !isClickOnHamburger && navMenu.classList.contains('active')) {
                    toggleMenu();
                }
            });

            // Handle window resize - close menu if window becomes large
            window.addEventListener('resize', function () {
                if (window.innerWidth > 700 && navMenu.classList.contains('active')) {
                    toggleMenu();
                }
            });
        });