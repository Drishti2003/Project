function showFormSection(sectionId) {
    // Hide all form sections
    var formSections = document.getElementsByClassName("form-section");
    for (var i = 0; i < formSections.length; i++) {
        formSections[i].classList.remove("active");
    }

    // Show the selected form section
    var selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.classList.add("active");
    }
}

function submitForm() {
    // Get all form sections
    var formSections = document.getElementsByClassName("form-section");
    var formData = {};

    // Iterate through each form section
    for (var i = 0; i < formSections.length; i++) {
        var formInputs = formSections[i].getElementsByTagName("input");

        // Iterate through each input in the form section
        for (var j = 0; j < formInputs.length; j++) {
            var inputName = formInputs[j].name;
            var inputValue = formInputs[j].value;

            // Store the input name and value in the formData object
            formData[inputName] = inputValue;
        }
    }

    // Display the collected form data on the webpage
    var displayArea = document.getElementById("form-data-display");
    displayArea.innerHTML = "<pre>" + JSON.stringify(formData, null, 2) + "</pre>";
}


// Get the submit button and template options
const submitBtn = document.getElementById('submitBtn');
const templateOptions = document.getElementById('templateOptions');

// Add event listener to the submit button
submitBtn.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent form submission

  // Show the template options
  templateOptions.style.display = 'block';
});



// Get the template selection dropdown
const templateSelect = document.getElementById('templateSelect');

// Add event listener to the template selection dropdown
templateSelect.addEventListener('change', function() {
  const selectedTemplate = templateSelect.value;
  
  // Remove existing template classes from preview
  const preview = document.getElementById('preview');
  preview.classList.remove('template1', 'template2', 'template3');

  // Apply the selected template class to the preview
  preview.classList.add(selectedTemplate);
});

// Rest of the code for generating the preview and downloading it...




// Get the submit button
// const submitBtn = document.getElementById('submitBtn');
const downloadBtn = document.getElementById('downloadBtn');

downloadBtn.style.display = 'none';

// Add event listener to the submit button
submitBtn.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent form submission

  // Get the preview element
  const preview = document.getElementById('preview');

  // Get the form inputs from each section
  const personalInfoForm = document.querySelector('.personalInfoForm');
  const educationForm = document.querySelector('.educationForm');
  const experienceForm = document.querySelector('.experienceForm');
  const internshipForm = document.querySelector('.intershipForm');
  const profileForm = document.querySelector('.profileForm');
  const projectForm = document.querySelector('.projectForm');
  const awardForm = document.querySelector('.awardForm');
  const strengthweakForm = document.querySelector('.strengthweakForm');
  const hobbiesForm = document.querySelector('.hobbiesForm');
  const skillsForm = document.querySelector('.skillsForm');

  // Create the HTML for the preview
  const previewHTML = `
    <h2>Resume</h2>
    <h3>Personal Information</h3>
    <p><img src="${photoPreview.src}" alt="Profile Photo" style="width:16%; border: solid 1px black; border-radius:3px;"></p>
    <p>Name: ${personalInfoForm.name.value}</p>
    <p>Email: ${personalInfoForm.email.value}</p>
    <p>Phone: ${personalInfoForm.phone.value}</p>
    <p>Date of Birth: ${personalInfoForm.dob.value}</p>
    <p>Address: ${personalInfoForm.address.value}</p>
    <p>Married: ${personalInfoForm.married.value}</p>
    <p>Nationality: ${personalInfoForm.nationality.value}</p>
    

    <h3>Education</h3>
    <p>10th Standard Marks: ${educationForm.tenthMarks.value}</p>
    <p>12th Standard Marks: ${educationForm.twelMarks.value}</p>
    <p>Degree Name: ${educationForm.degreeName.value}</p>
    <p>Institution Name: ${educationForm.nameInstitution.value}</p>
    <p>Passing Date of Degree: ${educationForm.passingDate.value}</p>
    <p>Marks of Degree: ${educationForm.aggregateMarks.value}</p>

    <h3>Work Experience</h3>
    <p>Job Title: ${experienceForm.workTitle.value}</p>
    <p>Company: ${experienceForm.workCompany.value}</p>
    <p>Starting Date: ${experienceForm.JoiningDate.value}</p>
    <p>Leaving Date: ${experienceForm.resignDate.value}</p>
    <p>Job Description: ${experienceForm.workDescription.value}</p>

    <h3>Internships and Certificates</h3>
    <p>Internship Field Name: ${internshipForm.internshipFieldName.value}</p>
    <p>Company/Organization Name: ${internshipForm.orgName.value}</p>
    <p>Internship Type: ${internshipForm['inte-paid'].value}</p>
    <p>Starting Date: ${internshipForm.passingDate.value}</p>
    <p>Finishing Date: ${internshipForm.aggregateMarks.value}</p>

    <h3>Social Profile Links</h3>
    <p>LinkedIn URL: ${profileForm.linkedinUrl.value}</p>
    <p>Instagram URL: ${profileForm.instaUrl.value}</p>
    <p>Facebook URL: ${profileForm.facebookUrl.value}</p>
    <p>GitHub Repository URL: ${profileForm.githubUrl.value}</p>

    <h3>Projects</h3>
    <p>Project Names: ${projectForm['projects[]'].value}</p>

    <h3>Awards</h3>
    <p>Awards: ${awardForm['awards[]'].value}</p>

    <h3>Strengths and Weaknesses</h3>
    <p>Strengths and Weaknesses: ${strengthweakForm['strAndWeak[]'].value}</p>

    <h3>Hobbies</h3>
    <p>Hobbies: ${hobbiesForm['hobbies[]'].value}</p>

    <h3>Skills</h3>
    <p>Skills: ${skillsForm['skills[]'].value}</p>
  `;

  // Update the preview element with the HTML
  preview.innerHTML = previewHTML;

  downloadBtn.style.display = 'block';

  // Scroll to the preview section
  preview.scrollIntoView({ behavior: 'smooth' });
});

const photoInput = document.getElementById('photo');
const photoPreview = document.getElementById('photoPreview');

photoInput.addEventListener('change', function() {
  const file = photoInput.files[0];
  const reader = new FileReader();

  reader.addEventListener('load', function() {
    photoPreview.src = reader.result;
  });

  if (file) {
    reader.readAsDataURL(file);
  } else {
    photoPreview.src = ''; // Reset the preview if no photo is selected
  }
});


// Add event listener to the download button
// downloadBtn.addEventListener('click', function() {
//     const previewText = document.getElementById('preview').innerText;
//     const fileName = 'preview.txt';
//     const blob = new Blob([previewText], { type: 'text/plain' });
  
//     // Create a temporary anchor element and trigger the download
//     const tempAnchor = document.createElement('a');
//     tempAnchor.href = URL.createObjectURL(blob);
//     tempAnchor.download = fileName;
//     tempAnchor.click();
  
//     // Clean up the temporary anchor element
//     setTimeout(function() {
//       URL.revokeObjectURL(tempAnchor.href);
//       tempAnchor.remove();
//     }, 100);
//   });


// Add event listener to the download button
downloadBtn.addEventListener('click', function() {
    const previewElement = document.getElementById('preview');
    const fileName = 'Resume.pdf';
  
    // Generate the PDF from the preview element
    html2pdf().from(previewElement).save(fileName);
  });
  
  