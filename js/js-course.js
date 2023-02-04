const courseJsContent = [
    "Lexical Structure",
    "Types, Values, and Variables",
    "Expressions and Operators ",
    "Statements",
    "Objects",
    "Arrays",
    "Functions",
    "Classes and Modules",
    "Pattern Matching with Regular Expressions",
    "JavaScript Subsets and Extensions",
    "Server-Side JavaScript",
    "JavaScript in Web Browsers",
    "The Window Object",
    "Scripting Documents",
    "Scripting CSS",
    "Handling Events",
    "Client-Side Storage",
    "Scripted Media and Graphics",
    "HTML5 APIs",
    "Clone trello",
    "Clone redmine",
    "Clone shoppee",
];

let courseContent = '';
for (const [index, course] of courseJsContent.entries()) {
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

