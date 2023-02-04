const courseNodeContent = [
    "Getting Started",
    "Node Module System",
    "Node Package Manager (NPM)",
    "Building RESTful API's Using Express",
    "Express- Advanced Topics",
    "Asynchronous JavaScript",
    "CRUD Operations Using Mongoose",
    "Mongo - Data Validation",
    "Mongoose- Modeling Relationships between Connected Data",
    "Authentication and Authorization",
    "Handling and Logging Errors",
    "Unit Testing",
    "Integration Testing",
    "Test-Driven Development",
    "Deployment",
    "Clone trang booking.com",
];

let courseContent = '';
for (const [index, course] of courseNodeContent.entries()) {
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

