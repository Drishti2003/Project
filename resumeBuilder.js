// document.querySelectorAll('.resumeForm').addEventListener('submit', function(e) {
//   e.preventDefault();
//   generateResume();
// });

// function generateResume() {
//   const form = document.getElementByclass('resumeForm');
//   const preview = document.getElementById('previewContent');

//   let file=document.getElementById('img-field').files[0];
//   let reader=new FileReader()
//   reader.readAsDataURL(file)

//   reader.onloadend=function(){
//   document.getElementById('set-image').src=reader.result;
//   }

//   preview.innerHTML = `
//    <img src="" id="set-image" class="image-set">
//     <h3 id="form-style">${form.name.value}</h3>
//     <p class="styles-form">${form.email.value}</p>
//     <p class="styles-form">${form.mobNo.value}</p>
//     <p class="styles-form">${form.dob.value}</p>
//     <p class="styles-form">${form.address.value}</p>
//     <h3 id="form-style">Education</h3>
//     <p class="styles-form">Degree:${form.educationTitle.value}</p>
//     <p class="styles-form">Instotution:${form.educationInstitution.value}</p>
//     <p class="styles-form">Completion Date:${form.educationDate.value}</p>
//     <h3 id="form-style">Work Experience</h3>
//     <p class="styles-form">Work Title:${form.workTitle.value}</p>
//     <p class="styles-form">Company:${form.workCompany.value}</p>
//     <p class="styles-form">WorkDate:${form.workDate.value}</p>
//     <p class="styles-form"> Work Description:${form.workDescription.value}</p>
//     <h3 id="form-style">Skills</h3>
//     <p class="styles-form">Skills:${form.skill.value}</p>
//   `;

//   document.getElementById('preview').style.display = 'block';
// }

// function download() {
//   debugger
//   var element = document.getElementById('previewContent');
//   // define optional configuration
//   var options = { filename: 'Resume.pdf' };

//   var exporter = new html2pdf(element, options);
//   // download the pdf
//   exporter.getPdf(true).then((pdf) => { console.log('pdf downloaded!', pdf); });
// }




function previewResume() {
  // Get the form values from each section
  var personalInfoForm = document.getElementById("personalInfoForm");
  var personalInfoFormData = new FormData(personalInfoForm);
  var experienceForm = document.getElementById("experienceForm");
  var experienceFormData = new FormData(experienceForm);
  var educationForm = document.getElementById("educationForm");
  var educationFormData = new FormData(educationForm);
  var intershipForm = document.getElementById("intershipForm");
  var intershipForm = new FormData(intershipForm);
  var educationForm = document.getElementById("profileForm");
  var profileForm = new FormData(profileForm);
  var educationForm = document.getElementById("projectForm");
  var projectForm = new FormData(projectForm);
  var educationForm = document.getElementById("awardForm");
  var awardForm = new FormData(awardForm);
  var educationForm = document.getElementById("strengthweakForm");
  var strengthweakForm = new FormData(strengthweakForm);
  var strengthweakForm = document.getElementById("hobbiesForm");
  var hobbiesForm = new FormData(hobbiesForm);
  var educationForm = document.getElementById("skillsForm");
  var skillsForm = new FormData(skillsForm);

  // Extract the values from the form data
  var name = personalInfoFormData.get("name");
  var email = personalInfoFormData.get("email");
  var phone = personalInfoFormData.get("phone");
  var dob = personalInfoFormData.get("dob");
  var married = personalInfoFormData.get("married");
  var address = personalInfoFormData.get("address");
  var nationality = personalInfoFormData.get("nationality");
  var company = experienceFormData.get("company");
  var position = experienceFormData.get("position");
  var duration = experienceFormData.get("duration");
  var university = educationFormData.get("university");
  var degree = educationFormData.get("degree");
  var year = educationFormData.get("year");

  // Generate the preview HTML
  var previewHTML = "<h2>Preview</h2>";
  previewHTML += "<h3>Personal Information</h3>";
  previewHTML += "<p><strong>Name:</strong> " + name + "</p>";
  previewHTML += "<p><strong>Email:</strong> " + email + "</p>";
  previewHTML += "<p><strong>Phone:</strong> " + phone + "</p>";
  previewHTML += "<p><strong>DOB:</strong> " + dob + "</p>";
  previewHTML += "<p><strong>Address:</strong> " + address + "</p>";
  previewHTML += "<p><strong>Maritial Status:</strong> " + married + "</p>";
  previewHTML += "<p><strong>Nationality:</strong> " + nationality + "</p>";
  previewHTML += "<h3>Experience</h3>";
  previewHTML += "<p><strong>Company:</strong> " + company + "</p>";
  previewHTML += "<p><strong>Position:</strong> " + position + "</p>";
  previewHTML += "<p><strong>Duration:</strong> " + duration + "</p>";
  previewHTML += "<h3>Education</h3>";
  previewHTML += "<p><strong>University:</strong> " + university + "</p>";
  previewHTML += "<p><strong>Degree:</strong> " + degree + "</p>";
  previewHTML += "<p><strong>Year:</strong> " + year + "</p>";

  // Display the preview
  var previewSection = document.getElementById("previewSection");
  previewSection.innerHTML = previewHTML;
}
