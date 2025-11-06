// careers/careers.js
// Dynamically renders the careers list from careers-data.json

document.addEventListener('DOMContentLoaded', function() {
  fetch('careers-data.json')
    .then(res => res.json())
    .then(data => renderCareers(data));
});

function renderCareers(data) {
  const container = document.getElementById('careers-list');
  if (!container) return;
  let html = '';
  data.forEach(section => {
    if (section.team) {
      html += `<h2 class="careers-team">${section.team.toUpperCase()}</h2>`;
    }
    if (section.subteam) {
      html += `<h3 class="careers-subteam">${section.subteam}</h3>`;
    }
    if (section.jobs && section.jobs.length > 0) {
      html += '<ul class="careers-job-list">';
      section.jobs.forEach(job => {
        // build values for use in data- attributes; actual navigation will be handled by JS click handler
        var applyUrl = '/careers/apply.html?title=' + encodeURIComponent(job.title || '') +
          '&team=' + encodeURIComponent(section.team || '') +
          '&location=' + encodeURIComponent(job.location || '') +
          '&type=' + encodeURIComponent(job.type || '');
        html += `
          <li class="careers-job">
            <div class="job-info">
              <div class="job-title">${job.title}</div>
              <div class="job-meta">${job.type} &mdash; <span>${job.location}</span></div>
            </div>
            <a href="#" class="apply-btn" data-title="${escapeHtml(job.title || '')}" data-team="${escapeHtml(section.team || '')}" data-location="${escapeHtml(job.location || '')}" data-type="${escapeHtml(job.type || '')}" aria-label="Apply for ${escapeHtml(job.title || '')}">APPLY</a>
          </li>
        `;
      });
      html += '</ul>';
    }
  });
  container.innerHTML = html;

  // attach click handlers to ensure navigation uses properly encoded query params
  container.querySelectorAll('.apply-btn').forEach(function(btn){
    btn.addEventListener('click', function(e){
      // allow normal click if JS disabled; with JS we'll build the URL to avoid accidental path nav
      e.preventDefault();
      var t = btn.getAttribute('data-title') || '';
      var team = btn.getAttribute('data-team') || '';
      var loc = btn.getAttribute('data-location') || '';
      var type = btn.getAttribute('data-type') || '';
      var url = '/careers/apply.html?title=' + encodeURIComponent(t) + '&team=' + encodeURIComponent(team) + '&location=' + encodeURIComponent(loc) + '&type=' + encodeURIComponent(type);
      window.location.href = url;
    });
  });
}

// small helper to escape quotes/newlines for data- attributes
function escapeHtml(str){
  return String(str).replace(/"/g, '&quot;').replace(/\n/g,' ').replace(/\r/g,' ');
}
