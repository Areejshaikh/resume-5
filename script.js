document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault();
    //get from vause
    const achievements = 
    Array.from(document.querySelectorAll('#achievement-list input')).map(input => input.value).map(achievement => `<li>${achievement}</li>`).join('');
    const education = 
    Array.from(document.querySelectorAll('#education-list input')).map(input => input.value).map(education => `<li>${education}</li>`).join('');
    const skills = 
    Array.from(document.querySelectorAll('#skills-List input')).map(input => input.value).map(skills => `<li> ${skills} </li>`).join('');
   
   
   
    const resumeHTML = `
    <h1>${document.getElementById('name').value} s'Resume</h1>
    <div>
    <span><p>Name</p>            <h2> ${document.getElementById('name').value}</h2></span>
    <span><p>Father Name: </p>   <h2> ${document.getElementById('fname').value}</h2></span>
    <span><p>Email:</p>          <h2> ${document.getElementById('email').value}</h2></span>
    <span><p>Phone:</p>          <h2> ${document.getElementById('phone').value}</h2></span>
    <span><p>Address:</p>        <h2> ${document.getElementById('Address').value}</h2></span>
    <span><p>Achievement:</p>    <h2> ${achievements}</h2></span>
    <span><p>Education:</p>      <h2> ${education}</h2></span>
    <span><p>Skills: </p>        <h2>${skills}</h2></span>
    <span><p>Experience:</p>     <h2> ${document.getElementById('experience').value}</h2></span>
    <span><p>Hobbies:</p>        <h2>${document.getElementById('hobbie').value}</h2></span>
    </div>
  `
    
    document.getElementById('resume-display').innerHTML = resumeHTML
})
async function generateResume() {
    const form = document.getElementById('resume-display');
    const formData = new FormData(form);
    const resume = {
        name: formData.get('name'),
        name: formData.get('fname'),

        email: formData.get('email'),
        phone: formData.get('phone'),
        Achievement: formData.get('achievement'),
        education: formData.get('education'),
        skills: formData.get('skills'),
        hobbie: formData.get('hobbie'),
        experience: formData.get('experience')
    };

    const response = await fetch('/save', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(resume)
    });

    if (response.ok) {
        const result = await response.json();
        document.getElementById('resume-display').innerHTML = formatResume(resume);
        document.getElementById('share-url').textContent = `Share your resume: ${result.url}`;
    } else {
        alert('Error saving resume');
    }
}

function formatResume(resume) {
    return `
        <h2>${resume.name}</h2>
        <p>Email: ${resume.email}</p>
        <p>Phone: ${resume.phone}</p>
        <h3>Achievement</h3>
        <p>${resume.achievement}</p>
        <h3>Education</h3>
        <p>${resume.education}</p>
        <p>${resume.education}</p>
        <h3>Skills</h3>     
        <p>${resume.skill}</p>
        <h3>Work Experience</h3>
        <p>${resume.experience}</p>
        <h3>hobbies and interests</h3>
        <p>${resume.hobbie}</p>
    `;
}

function shareViaEmail() {
    const url = document.getElementById('share-url').textContent.replace('Share your resume: ', '');
    window.location.href = `mailto:?subject=My Resume&body=Check out my resume: ${url}`;
}




// Add more achievement fields dynamically
function myFunction() {
    const achievementList = document.getElementById('achievement-list');
    const newListItem = document.createElement('div');
    const newInput = document.createElement('input');
    newInput.setAttribute('type', 'text');
    newInput.setAttribute('placeholder', 'Describe Your Achivement');
    newListItem.appendChild(newInput);
    achievementList.appendChild(newListItem);  // Append the new list item to the achievement list
}


// generateEducation
function generateEducation() {
    const educationList = document.getElementById('education-list');
    const educationInput = document.createElement('div');
    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('placeholder', 'Describe Your Education');
    educationInput.appendChild(input)
    educationList.appendChild(educationInput)
}
//  Generate Skills  
function generateSkill() {
    const skillList = document.getElementById('skills-List');
    const skillLi = document.createElement('div');
    const inputSkill = document.createElement('input')
    inputSkill.setAttribute('type', 'text');
    inputSkill.setAttribute('placeholder', 'Describe Your Skill')
    skillLi.appendChild(inputSkill);
    skillList.appendChild(skillLi)
}


GenerateExperience
function generateExperience() {
    const experiencelist = document.getElementById('experience-list')
    const experienceInput = document.createElement('div');
    const inputExperience = document.createElement('input');
    inputExperience.setAttribute('type', 'text');
    inputExperience.setAttribute('placeholder', 'Describe Your Experience')
    experienceInput.appendChild(inputExperience);
    experiencelist.appendChild(experienceInput)
}