document.getElementById('resumeForm').addEventListener('submit', function(e) {
    e.preventDefault();
    generateResume();
  });
  
  function generateResume() {
    const form = document.getElementById('resumeForm');
    const preview = document.getElementById('previewContent');
  
    preview.innerHTML = `
      <h3>${form.fullName.value}</h3>
      <p>Email: ${form.email.value}</p>
      <p>Phone: ${form.phone.value}</p>
      <p>Address: ${form.address.value}</p>
      <h3>Education</h3>
      <p>${form.educationTitle.value}</p>
      <p>${form.educationInstitution.value}</p>
      <p>${form.educationDate.value}</p>
      <h3>Work Experience</h3>
      <p>${form.workTitle.value}</p>
      <p>${form.workCompany.value}</p>
      <p>${form.workDate.value}</p>
      <p>${form.workDescription.value}</p>
      <h3>Skills</h3>
      <p>${form.skill.value}</p>
      <!-- Add more fields as needed -->
    `;
  
    document.getElementById('preview').style.display = 'block';
  }
  