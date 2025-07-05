// This is a simple JavaScript code to create a dropdown menu for a user profile picture.
// HTML structure

function toggleDropdown() {
    const dropdown = document.getElementById('dropdownMenu');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close the dropdown if clicked outside
window.onclick = function(event) {
    const dropdown = document.getElementById('dropdownMenu');
    if (!event.target.matches('.profile-pic')) {
        dropdown.style.display = 'none';
    }
};

// dropdown menu functionality
function toggleDropdown() {
            var dropdown = document.getElementById("dropdownMenu");
            dropdown.classList.toggle("show");
        }

        window.onclick = function(event) {
            if (!event.target.matches('.profile-pic')) {
                var dropdowns = document.getElementsByClassName("dropdown-menu");
                for (var i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
}
        
// Year changing automation for copyright
var currentYear = new Date().getFullYear();
document.getElementById("current-year").innerHTML = currentYear;

// 
document.querySelectorAll('.job-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        const jobId = this.closest('li').getAttribute('data-id'); // Get the job ID
        window.location.href = `Listed-job.html?jobId=${jobId}`; // Redirect with job ID in query string
    });
});


 // Retrieve job ID from query string
const urlParams = new URLSearchParams(window.location.search);
const jobId = urlParams.get('jobId');
// Mock job data
const jobs = {
1: {
    Image: "images/user.png",
    title: "Software Engineer at TechCorp",
    location: "San Francisco, CA",
    experience: "3+ years",
    salary: "$120,000 - $140,000",
    description: "Develop and maintain software applications.",
    requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Proficiency in JavaScript, HTML, CSS",
        "Experience with React or Angular",
        "Strong problem-solving skills",
        "Excellent communication skills"
    ]
},
2: {
    Image: "images/user.png",
    title: "Marketing Specialist at MarketPro",
    location: "New York, NY",
    experience: "2+ years",
    salary: "$60,000 - $80,000",
    description: "Plan and execute marketing campaigns.",
    requirements: [
        "Bachelor's degree in Marketing or related field",
        "Experience with digital marketing tools",
        "Strong analytical skills",
        "Creativity and attention to detail"
    ]
},
3: {
    Image: "images/user.png",
    title: "Data Analyst at DataWorks",
    location: "Austin, TX",
    experience: "1+ years",
    salary: "$70,000 - $90,000",
    description: "Analyze and interpret complex data sets.",
    requirements: [
        "Bachelor's degree in Statistics, Mathematics, or related field",
        "Proficiency in SQL and Excel",
        "Experience with data visualization tools",
        "Strong attention to detail"
    ]  
}
};

// Display job details
const jobDetails = jobs[jobId];
if (jobDetails) {
    document.getElementById('job-details').innerHTML = `
        
        <h2><img src="${jobDetails.Image || 'images/user.png'}" alt="Company Logo" class="company-logo">${jobDetails.title}</h2>
        <p><strong>Location:</strong> ${jobDetails.location}</p>
        <p><strong>Experience:</strong> ${jobDetails.experience}</p>
        <p><strong>Salary:</strong> ${jobDetails.salary}</p>
        <p><strong>Description:</strong> ${jobDetails.description}</p>
        <p><strong>Requirements:</strong></p>
        <p>We are looking for a highly motivated and skilled individual to join our team. The ideal candidate will have a strong background in the relevant field and be able to work effectively in a fast-paced environment.</p>
        <p><strong>Responsibilities include:</strong></p>
        <ul>
            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
            <li>Work on bug fixing and improving application performance.</li>
            <li>Continuously discover, evaluate, and implement new technologies to maximize development efficiency.</li>
        <ul>
            ${(jobDetails.requirements || []).map(req => `<li>${req}</li>`).join('')}
        </ul>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe0OCRC768gk00aEMhTvt9u8wWcKdpMkZDuDDX72h88PV1JtA/viewform?usp=header"><button>Apply now!</button></a>
    `;
} else {
    document.getElementById('job-details').innerHTML = `<p>Job not found.</p>`;
}