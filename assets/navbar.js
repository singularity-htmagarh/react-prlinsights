(function() {
     // Add navbar.css if not present
    if (!document.querySelector('link[href$="navbar.css"]')) {
        var link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/assets/navbar.css';
        document.head.appendChild(link);
    }
  var navHtml = `\
<nav class="navbar">
    <div class="container">
        <div class="nav-header">
            <!-- logo removed per request -->
             <button class="nav-toggle" onclick="toggleMobileNav()">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        
        <div class="nav-menu" id="navMenu">
            <a href="/services/" class="nav-link">SERVICES</a>
            <a href="/case-studies/" class="nav-link">PRODUCTS</a>
            <a href="/featured-insights/" class="nav-link">INSIGHTS</a>
            <a href="/careers/" class="nav-link">CAREERS</a>
            <a href="/contact/" class="nav-link">CONTACT</a>
            <!-- <a href="/contact/" class="btn btn btn-outline btn-lg">Get Demo</a> -->
            <a href="/client-login/" class="nav-link" title="Client Login" style="display:inline-flex;align-items:center;justify-content:center;margin-right:0.5rem;padding:0.4rem 0.7rem;">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="display:block;">
                    <circle cx="12" cy="8.5" r="4.5" stroke="#222"/>
                    <path d="M4 20c0-3.3137 3.134-6 8-6s8 2.6863 8 6" stroke="#222"/>
                </svg>
            </a>
        </div>
    </div>
</nav>
`;
  var navContainer = document.createElement('div');
    navContainer.innerHTML = navHtml;
    var navElem = navContainer.firstElementChild;
    document.body.insertBefore(navElem, document.body.firstChild);

    // Floating nav-menu on scroll
    var navMenu = navElem.querySelector('.nav-menu');
    var navHeader = navElem.querySelector('.nav-header');
    var logo = navElem.querySelector('.logo');
    // Center nav options visually in the navbar
    if (navMenu) {
        navMenu.style.display = 'flex';
        navMenu.style.justifyContent = 'center';
        navMenu.style.alignItems = 'center';
        navMenu.style.gap = '36px';
        navMenu.style.margin = '0 auto';
    }
    var lastScrollY = window.scrollY;
    var floatingClass = 'nav-menu-floating';
    var floatingLogoClass = 'logo-floating-left';
    var hideLogoClass = 'logo-hide-floating';
    var navToggle = navElem.querySelector('.nav-toggle');
    var mobileNavActiveClass = 'nav-mobile-active';

    // Mobile nav toggle logic
    window.toggleMobileNav = function() {
        var isActive = navMenu.classList.toggle(mobileNavActiveClass);
        if (isActive) {
            if (logo) logo.classList.add(hideLogoClass);
        } else {
            // Only show logo if not floating
            if (window.scrollY <= 40) {
                if (logo) logo.classList.remove(hideLogoClass);
            }
        }
    };
    window.addEventListener('scroll', function() {
        if (window.scrollY > 40) {
            navMenu.classList.add(floatingClass);
            if (logo) {
                logo.classList.add(floatingLogoClass);
                logo.classList.add(hideLogoClass);
                logo.style.marginRight = '2rem';
            }
            navHeader.style.justifyContent = 'flex-start';
            navHeader.style.flexDirection = 'row';
        } else {
            navMenu.classList.remove(floatingClass);
            if (logo) {
                logo.classList.remove(floatingLogoClass);
                // Only show logo if mobile nav is not active
                if (!navMenu.classList.contains(mobileNavActiveClass)) {
                    logo.classList.remove(hideLogoClass);
                }
                logo.style.marginRight = '';
            }
            navHeader.style.justifyContent = '';
            navHeader.style.flexDirection = '';
        }
    });
})();