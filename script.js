const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

// When the hamburger icon is clicked, toggle the 'active' class
// This will show or hide the menu on mobile
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// If a link in the menu is clicked, close the menu
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

/* ========
   ADD THIS JS TO THE BOTTOM OF YOUR EXISTING script.js FILE
   ======== */

// --- Project Gallery Filter ---

// Check if we are on a page with filter buttons
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

if (filterButtons.length > 0 && projectItems.length > 0) {

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and add to the clicked one
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            projectItems.forEach(item => {
                // Check if the item matches the filter or if the filter is '*' (all)
                if (item.classList.contains(filterValue.substring(1)) || filterValue === '*') {
                    item.style.display = 'block'; // Show item
                } else {
                    item.style.display = 'none'; // Hide item
                }
            });
        });
    });
}