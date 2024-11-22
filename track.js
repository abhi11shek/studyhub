function loadSkillContent(skill) {
    const contentDiv = document.getElementById('skill-content');
    contentDiv.style.display = 'block';
    const trackerButton = document.getElementById('tracker-button');
    trackerButton.style.display = 'block';
    
    let skillContent = '';
    
    switch(skill) {
        case 'ui-ux':
            skillContent = `
                <h2>UI/UX Design</h2>
                <p>Start learning the basics of UI/UX design, including tools and principles.</p>
                <h3>Tutorials</h3>
                <ul>
                    <li><a href="https://www.geeksforgeeks.org/understanding-ui-design-principles/" target="_blank">GeeksforGeeks - UI Design Principles</a></li>
                    <li><a href="https://www.freecodecamp.org/news/ui-ux-design-for-beginners/" target="_blank">FreeCodeCamp - UI/UX Design for Beginners</a></li>
                    <li><a href="https://www.udemy.com/course/the-ultimate-guide-to-ui-ux-design/" target="_blank">Udemy - The Ultimate Guide to UI/UX Design</a></li>
                </ul>
                <h3>Projects</h3>
                <ul>
                    <li><a href="#" onclick="startProject('ui-ux', 'portfolio')">Design a Personal Portfolio</a></li>
                    <li><a href="#" onclick="startProject('ui-ux', 'mobile-app')">Create a Mobile App UI</a></li>
                </ul>
            `;
            break;
        
        case 'web-development':
            skillContent = `
                <h2>Web Development</h2>
                <p>Learn to build dynamic and responsive websites using HTML, CSS, and JavaScript.</p>
                <h3>Tutorials</h3>
                <ul>
                    <li><a href="https://www.geeksforgeeks.org/front-end-web-development-tutorial/" target="_blank">GeeksforGeeks - Front-End Web Development</a></li>
                    <li><a href="https://www.freecodecamp.org/" target="_blank">FreeCodeCamp - Full Web Development Course</a></li>
                    <li><a href="https://developer.mozilla.org/en-US/docs/Learn" target="_blank">MDN Web Docs - Web Development Learning Path</a></li>
                </ul>
                <h3>Projects</h3>
                <ul>
                    <li><a href="#" onclick="startProject('web-development', 'portfolio')">Build a Personal Portfolio Website</a></li>
                    <li><a href="#" onclick="startProject('web-development', 'blog')">Create a Simple Blog Application</a></li>
                </ul>
            `;
            break;
        
        default:
            skillContent = '<h2>Select a skill to get started</h2>';
    }
    
    contentDiv.innerHTML = skillContent;
}

function toggleTracker() {
    const trackerForm = document.getElementById('tracker-form');
    trackerForm.style.display = trackerForm.style.display === 'none' || trackerForm.style.display === '' ? 'block' : 'none';
}

function saveProgress() {
    const tutorialCompleted = document.getElementById('tutorial-completed').checked;
    const testAttempted = document.getElementById('test-attempted').checked;
    const projectCompleted = document.getElementById('project-completed').checked;

    localStorage.setItem('tutorial-completed', tutorialCompleted);
    localStorage.setItem('test-attempted', testAttempted);
    localStorage.setItem('project-completed', projectCompleted);

    alert('Progress Saved!');
}

function initializeProgressTracker() {
    const tutorialCompleted = localStorage.getItem('tutorial-completed') === 'true';
    const testAttempted = localStorage.getItem('test-attempted') === 'true';
    const projectCompleted = localStorage.getItem('project-completed') === 'true';

    document.getElementById('tutorial-completed').checked = tutorialCompleted;
    document.getElementById('test-attempted').checked = testAttempted;
    document.getElementById('project-completed').checked = projectCompleted;
}

function startProject(skill, project) {
    alert(`Starting ${project} project for ${skill}. Good luck!`);
}

window.onload = initializeProgressTracker;

