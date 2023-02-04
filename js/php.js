const coursePhpContent = [
    "PHP Basics",
    "Functions",
    "Arrays",
    "Object-Oriented PHP",
    "Advanced OOP Features",
    "Error and Exception Handling",
    "Strings and Regular Expressions",
    "Working with the File and Operating System",
    "Date and Time",
    "Working with HTML Forms",
    "Authenticating Your Users",
    "Handling File Uploads",
    "Session Handlers",
    "Web Services",
    "Securing Your Web Site",
    "Creating Ajax-enhanced Features with js and PHP",
    "Build Ecommerce Web"
];

let courseContent = '';
for (const [index, course] of coursePhpContent.entries()) {
    courseContent += ` <div class='col-sm-12 course-section'>
            <div class='section-title'>
                <span class="section-lock">
                    <i class="fa fa-lock"></i>&nbsp;
                </span>
                Chapter ${index + 1}: ${course}
            </div>
        </div>`;
}

document.getElementById("content_wrapper").innerHTML = courseContent;

