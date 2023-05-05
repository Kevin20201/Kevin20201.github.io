/* function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    localStorage.setItem('isDarkMode', isDarkMode);
} */

function toggleDarkMode() {
    const body = document.body;
    const icon = document.querySelector(".mode-button i");
    
    // Switch the icon before changing the mode
    if (body.classList.contains("dark-mode")) {
        icon.style.color = "#333";
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
    } else {
        icon.style.color = "#ccc";
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
    }
    
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("isDarkMode", isDarkMode);
  }

// Load the preferred mode from localStorage
const isDarkMode = localStorage.getItem('isDarkMode') === 'true';

// if (isDarkMode) {
//     document.body.classList.add('dark-mode');
// }