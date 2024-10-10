// Get form and resume preview elements
var form = document.getElementById("resume-form");
var resumeContent = document.getElementById("resume-content");
var resumePreview = document.getElementById("resume-preview");
var resumeUrlInput = document.getElementById("resume-url");
var shareLinkDiv = document.getElementById("share-link");
// Handle form submission
form.addEventListener("submit", function (event) {
    var _a, _b;
    event.preventDefault();
    // Get the user input values
    var username = document.getElementById("username").value;
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var education = document.getElementById("education").value;
    var work = document.getElementById("work").value;
    var skills = document.getElementById("skills").value;
    // Dynamically generate the resume preview
    var resumeHTML = "\n    <div class=\"glowing-box\" id=\"resume-name\">\n      <h3>".concat(name, "</h3>\n      <p><strong>Email:</strong> ").concat(email, "</p>\n    </div>\n    <div class=\"glowing-box\" id=\"resume-education\">\n      <h3>Education</h3>\n      <p>").concat(education, "</p>\n    </div>\n    <div class=\"glowing-box\" id=\"resume-work\">\n      <h3>Work Experience</h3>\n      <p>").concat(work, "</p>\n    </div>\n    <div class=\"glowing-box\" id=\"resume-skills\">\n      <h3>Skills</h3>\n      <p>").concat(skills, "</p>\n    </div>\n  ");
    // Display the generated resume
    resumeContent.innerHTML = resumeHTML;
    resumePreview.style.display = "block"; // Show the preview
    // Generate unique URL
    var resumeUrl = "".concat(window.location.origin, "/").concat(username, ".org.f/resume");
    resumeUrlInput.value = resumeUrl;
    shareLinkDiv.style.display = "block"; // Show share link options
    // Make sections editable
    document.querySelectorAll('.glowing-box').forEach(function (box) {
        box.addEventListener('click', function () {
            var p = this.querySelector('p');
            if (p) {
                p.contentEditable = "true";
                p.focus();
                p.addEventListener('blur', function () {
                    p.contentEditable = "false"; // Save changes when the user clicks outside
                });
            }
        });
    });
    // Copy link functionality
    (_a = document.getElementById("copy-link")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
        navigator.clipboard.writeText(resumeUrl).then(function () {
            alert("Link copied to clipboard!");
        }).catch(function (err) {
            console.error("Failed to copy: ", err);
        });
    });
    // Download PDF functionality
    (_b = document.getElementById("download-pdf")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
        var jsPDF = window.jspdf.jsPDF;
        var pdf = new jsPDF();
        pdf.text(resumeHTML, 10, 10); // Add content to PDF
        // Save the PDF with the name "resume.pdf"
        pdf.save("".concat(username, "-resume.pdf"));
    });
});
