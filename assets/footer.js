// assets/footer.js
// Injects the unified footer into the page

(function() {
  const footerHTML = `
    <footer class="footer popular-footer">
        <div class="container">
            <div class="footer-logo-row" style="display:flex;align-items:center;justify-content:center;gap:2rem;margin-bottom:1.5rem;">
            </div>
            <div class="container">
                <div class="footer-content" style="display:flex;align-items:flex-start;justify-content:space-between;gap:3rem;flex-direction:row;">
                    <div class="footer-logo-col" style="display:flex;flex-direction:column;align-items:flex-start;justify-content:flex-start;gap:1rem;">
                        <img src="/assets/PRL_Insights_Logo.png" alt="PRL Insights Logo" style="height:200px;width:200px;object-fit:contain;" />
                        <div class="social-links" style="margin-top:1rem;">
                            <a href="#" class="social-link">LinkedIn</a>
                            <a href="#" class="social-link">Twitter</a>
                            <a href="#" class="social-link">GitHub</a>
                        </div>
                    </div>
                    <div style="display:flex;flex-direction:row;align-items:flex-start;gap:3rem;">
                        <div class="footer-section">
                            <h4>Services</h4>
                            <ul>
                                <li><a href="/services/">Marketing Analytics</a></li>
                                <li><a href="/services/">Media Optimization</a></li>
                                <li><a href="/services/">Causal Inference</a></li>
                                <li><a href="/integration/">Data Integration</a></li>
                            </ul>
                        </div>
                        <div class="footer-section">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="/about/">About Us</a></li>
                                <li><a href="/case-studies/">Case Studies</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="/contact/">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                </div>
               <div class="footer-bottom">
				<div class="copyright">
					© 2025 PRL Inights &amp; Partners. All rights reserved.
				</div>
				<div class="footer-links">
					<a href="#">Privacy Policy</a>
					<a href="#">Terms of Service</a>
					<a href="#">API Documentation</a>
				</div>
			</div>
            </div>
        </div>
    </footer>
  `;

  function injectFooter() {
    // Remove any existing footer
    document.querySelectorAll('footer.footer').forEach(f => f.remove());
    // Inject at end of body
    document.body.insertAdjacentHTML('beforeend', footerHTML);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectFooter);
  } else {
    injectFooter();
  }
})();
