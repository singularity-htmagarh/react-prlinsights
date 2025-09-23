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
        html += `
          <li class="careers-job">
            <div class="job-info">
              <div class="job-title">${job.title}</div>
              <div class="job-meta">${job.type} &mdash; <span>${job.location}</span></div>
            </div>
            <a href="${job.applyUrl}" class="apply-btn">APPLY</a>
          </li>
        `;
      });
      html += '</ul>';
    }
  });
  container.innerHTML = html;
}
