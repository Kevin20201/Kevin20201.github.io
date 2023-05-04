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
        icon.classList.remove("fal", "fa-sun");
      icon.classList.add("fa-moon");
      icon.style.color = "#000";
    } else {
        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");
        icon.style.color = "#fafafa";
    }
    
    body.classList.toggle("dark-mode");
    const isDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("isDarkMode", isDarkMode);
  }

// Load the preferred mode from localStorage
const isDarkMode = localStorage.getItem('isDarkMode') === 'true';
if (isDarkMode) {
    document.body.classList.add('dark-mode');
}