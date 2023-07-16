function generateResume() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var skills = document.getElementById("skills").value.split(",").map(skill => skill.trim());
    var experiences = [
        document.getElementById("experience1").value,
        document.getElementById("experience2").value,
        document.getElementById("experience3").value
    ];
    var pastWorks = [
        document.getElementById("pastWork1").value,
        document.getElementById("pastWork2").value,
        document.getElementById("pastWork3").value
    ];
    var workDescription = document.getElementById("workDescription").value;
    var education = [
        document.getElementById("education1").value,
        document.getElementById("education2").value,
        document.getElementById("education3").value
    ];
    var profilePhoto = document.getElementById("profilePhoto").files[0];
    var summary = document.getElementById("summary").value;
    var resumeTemplate = document.getElementById("resumeTemplate").value;

    // Build the resume HTML based on the selected template
    var resumeHTML = '';
    switch (resumeTemplate) {
        case 'template1':
            resumeHTML = generateTemplate1(firstName, lastName, email, phone, skills, experiences, pastWorks, workDescription, education, profilePhoto, summary);
            break;
        case 'template2':
            resumeHTML = generateTemplate2(firstName, lastName, email, phone, skills, experiences, pastWorks, workDescription, education, profilePhoto, summary);
            break;
        case 'template3':
            resumeHTML = generateTemplate3(firstName, lastName, email, phone, skills, experiences, pastWorks, workDescription, education, profilePhoto, summary);
            break;
        default:
            break;
    }

    // Create a new PDF document
    var opt = {
        margin: 10,
        filename: 'resume.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    // Convert the resume HTML to PDF using html2pdf.js
    html2pdf().set(opt).from(resumeHTML).save();

    // Display the generated resume
    var resumePreview = document.getElementById("resumePreview");
    resumePreview.innerHTML = resumeHTML;
    resumePreview.style.display = "block";
}

function generateTemplate1(firstName, lastName, email, phone, skills, experiences, pastWorks, workDescription, education, profilePhoto, summary) {
    var resumeHTML = `
        <div class="resume-template1">
            <h2 id="names">${firstName} ${lastName}</h2><
           <span> <p class="emails">Email: ${email}</p><p class="emails">Phone: ${phone}</p></span>
            <h2 class="color">Summary</h2>
            <p>${summary}</p>
            <div class="outer-div">
            <div class="inner-div">
            <h2 class="color">Education</h2>
            <ul class="lists">
                ${education.map(edu => `<li>${edu}</li>`).join("")}
            </ul>
            </div>
            <div class=" ">
            <h2 class="color">Experiences</h2>
            <ul class="lists">
                ${experiences.map(experience => `<li>${experience}</li>`).join("")}
            </ul>
            </div>
            <h2 class="color">Past Works</h2>
            <ul class="lists">
                ${pastWorks.map(pastWork => `<li>${pastWork}</li>`).join("")}
            </ul>

            <h2 class="color">Work Description</h2>
            <p>${workDescription}</p>

            <h2 class="color">Skills</h2>
            <ul class="lists">
                ${skills.map(skill => `<li>${skill}</li>`).join("")}
            </ul>
           
        </div>
    `;

    return resumeHTML;
}

function generateTemplate2(firstName, lastName, email, phone, skills, experiences, pastWorks, workDescription, education, profilePhoto, summary) {
    var resumeHTML = `

   
    <img src="${URL.createObjectURL(profilePhoto)}" alt="Profile Photo" width="200" height="200">


            <h2>Summary</h2>
            <p>${summary}</p>
            <div class="resume-template2">
            <h2>${firstName} ${lastName}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>

            <h2>Experiences</h2>
            <ul>
                ${experiences.map(experience => `<li>${experience}</li>`).join("")}
            </ul>

            <h2>Past Works</h2>
            <ul>
                ${pastWorks.map(pastWork => `<li>${pastWork}</li>`).join("")}
            </ul>

            <h2>Work Description</h2>
            <p>${workDescription}</p>

            <h2>Education</h2>
            <ul>
                ${education.map(edu => `<li>${edu}</li>`).join("")}
            </ul>
            <h2>Skills</h2>
            <ul>
                ${skills.map(skill => `<li>${skill}</li>`).join("")}
            </ul>
            
            
        </div>
    `;

    return resumeHTML;
}

function generateTemplate3(firstName, lastName, email, phone, skills, experiences, pastWorks, workDescription, education, profilePhoto, summary) {
    var resumeHTML = `
        <div class="resume-template3">
            <h2>${firstName} ${lastName}</h2>
            <p>Email: ${email}</p>
            <p>Phone: ${phone}</p>

            <h2>Skills</h2>
            <ul>
                ${skills.map(skill => `<li>${skill}</li>`).join("")}
            </ul>

            <h2>Experiences</h2>
            <ul>
                ${experiences.map(experience => `<li>${experience}</li>`).join("")}
            </ul>

            <h2>Past Works</h2>
            <ul>
                ${pastWorks.map(pastWork => `<li>${pastWork}</li>`).join("")}
            </ul>

            <h2>Work Description</h2>
            <p>${workDescription}</p>

            <h2>Education</h2>
            <ul>
                ${education.map(edu => `<li>${edu}</li>`).join("")}
            </ul>

            <h2>Profile Photo</h2>
            <img src="${URL.createObjectURL(profilePhoto)}" alt="Profile Photo" width="200" height="200">

            <h2>Summary of Experiences</h2>
            <p>${summary}</p>
        </div>
    `;

    return resumeHTML;
}


// new code starts 

document.getElementById("resumeForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Fetch form values
    // var name = document.getElementById("name").value;
    // var email = document.getElementById("email").value;
    // var phone = document.getElementById("phone").value;
    // var message = document.getElementById("message").value;


    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var skills = document.getElementById("skills").value.split(",").map(skill => skill.trim());

    var experience1 = document.getElementById("experience1").value
    var experience2 = document.getElementById("experience2").value
    var experience3 = document.getElementById("experience3").value


    var pastWork1 = document.getElementById("pastWork1").value
    var pastWork2 = document.getElementById("pastWork2").value
    var pastWork3 = document.getElementById("pastWork3").value

    var workDescription = document.getElementById("workDescription").value;

    var education1 = document.getElementById("education1").value
    var education2 = document.getElementById("education2").value
    var education3 = document.getElementById("education3").value

    // var profilePhoto = document.getElementById("profilePhoto").files[0];
    var summary = document.getElementById("summary").value;
    // var resumeTemplate = document.getElementById("resumeTemplate").value;


    // Perform any further processing or validation as needed

    // Print form values to console (for demonstration purposes)
    console.log("Name:", firstName);
    console.log("Names:", lastName);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Skills", skills)
    console.log("Experience1:",experience1)
    console.log("Experience2:",experience2)
    console.log("Experience3:",experience3)
    console.log("PastWork1:",pastWork1)
    console.log("PastWork2:",pastWork2)
    console.log("PastWork3:",pastWork3)
    console.log("Work Description:",workDescription)
    console.log("Education1:",education1)
    console.log("Education2:",education2)
    console.log("Education3:",education3)
    console.log("Summary:",summary)
    // You can also submit the form data to a server using AJAX or other methods

    // Optionally, reset the form after submission
    document.getElementById("resumeForm").reset();
});


function startListening(fieldId) {
    var recognition = new webkitSpeechRecognition() || new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.start();

    recognition.onresult = function (event) {
        var voiceInput = event.results[0][0].transcript;
        document.getElementById(fieldId).value = voiceInput;
    };

    recognition.onend = function () {
        recognition.stop();
    };
}