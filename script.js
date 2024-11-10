

async function generateResume() {
    const form = document.getElementById('resume-display');
    const formData = new FormData(form);
    const resume = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        education: formData.get('education'),
        skills: formData.get('skills'),
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
        <h3>Education</h3>
        <p>${resume.education}</p>
        <h3>Skills</h3>
        <p>${resume.skills}</p>
        <h3>Work Experience</h3>
        <p>${resume.experience}</p>
    `;
}

function copyURL() {
    const url = document.getElementById('share-url').textContent.replace('Share your resume: ', '');
    navigator.clipboard.writeText(url).then(() => {
        alert('URL copied to clipboard');
    });
}

function shareViaEmail() {
    const url = document.getElementById('share-url').textContent.replace('Share your resume: ', '');
    window.location.href = `mailto:?subject=My Resume&body=Check out my resume: ${url}`;
}



document.getElementById('resume-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('Address').value
    const education = document.getElementById('education').value;
    const skills = document.getElementById('skills').value;
    const experience = document.getElementById('experience').value;
    // Create resume HTML
    const resumeHTML = `
    <h1>${name}'s Resume</h1>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Address:</strong>${address}</p>
    <h3>Education</h3>
    <p>${education}</p>
    <h3>Skills</h3>
    <p>${skills}</p>
    <h3>Work Experience</h3>
    <p>${experience} </p>
`;

document.getElementById('resume-display').innerHTML = resumeHTML;
});