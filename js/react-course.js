const courseReactContent = [
    "Getting Started",
    "ES6 Refresher",
    "Components",
    "Composing Components",
    "Pagination, Filtering, and Sorting",
    "Routing",
    "Forms",
    "Calling Backend Services",
    "Authentication and Authorization",
    "Advanced Topics",
    "Redux Fundamentals",
    "Building Redux from Scratch",
    "Debugging Redux Applications",
    "Writing Clean Redux Code",
    "Designing the Store",
    "Middleware",
    "Consuming APIs",
    "Testing Redux Applications",
    "Integration with React",
    "Clone Shopee"    
];

let courseContent = '';
for (const [index, course] of courseReactContent.entries()) {
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

