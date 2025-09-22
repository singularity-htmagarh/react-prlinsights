// Inject Case Studies Grid
function injectCaseStudiesGrid() {
  const gridHtml = `
    
  `;
  const main = document.querySelector('main');
  if (main) {
    main.insertAdjacentHTML('beforeend', gridHtml);
  }
}

// Run on DOMContentLoaded
document.addEventListener('DOMContentLoaded', function() {
  injectHeroSection();
  injectCaseStudiesGrid();
});