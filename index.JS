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

// job filtering functionality
// This function filters job listings based on user input

function filterJobs() {
    const keywordInput = document.querySelector('input[name="keyword"]').value.toLowerCase();
    const locationInput = document.querySelector('input[name="location"]').value.toLowerCase();
    const jobListings = document.querySelectorAll('.job-listings li');

    jobListings.forEach(job => {
        const jobLocation = job.getAttribute('data-location').toLowerCase();
        const jobTitle = job.querySelector('a').textContent.toLowerCase();

        if (jobTitle.includes(keywordInput) && jobLocation.includes(locationInput)) {
            job.style.display = 'block';
        } else {
            job.style.display = 'none';
        }
    });
}

// Attach the filterJobs function to the search form
document.querySelector('.job-search form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    filterJobs();
});