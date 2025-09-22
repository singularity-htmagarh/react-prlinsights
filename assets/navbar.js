// ...existing code...
(function() {
  var navHtml = `\
<nav class="navbar">
    <div class="container">
        <div class="nav-header">
            <a href="/" class="logo" style="display:flex;align-items:center;justify-content:center;padding:0.5rem 1.5rem;">
                <img src="/assets/PRL_Insights_Logo.png" alt="PRL Insights Logo" style="height:150px;width:150px;object-fit:contain;vertical-align:middle;" />
            </a>
             <button class="nav-toggle" onclick="toggleMobileNav()">
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
        <div class="nav-menu" id="navMenu">
            <a href="/services/" class="nav-link">Services</a>
            <a href="/integration/" class="nav-link">Integration</a>
            <a href="/case-studies/" class="nav-link">Case Studies</a>
            <a href="/featured-insights/" class="nav-link">Featured Insights</a>
            <a href="/contact/" class="nav-link">Contact</a>
            <a href="/contact/" class="btn btn-primary">Get Started</a>
           
        </div>
    </div>
</nav>
`;
  var navContainer = document.createElement('div');
  navContainer.innerHTML = navHtml;
  document.body.insertBefore(navContainer.firstElementChild, document.body.firstChild);
})();
