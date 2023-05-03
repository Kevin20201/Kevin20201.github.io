function scrollToSection(event, sectionId) {
    event.preventDefault(); // prevent the default scroll behavior

    const section = document.getElementById(sectionId); // get the target section element
    const sectionPosition = section.getBoundingClientRect().top; // get the top position of the section relative to the viewport
    const navbarHeight = document.querySelector('nav').offsetHeight; // get the height of the navbar

    // check if the section is already in view
    if (Math.abs(sectionPosition) < navbarHeight) {
        return; // exit the function
    }

    // scroll to the section position minus the navbar height plus some extra offset
    window.scrollTo({
        top: sectionPosition + window.pageYOffset - navbarHeight - 20, // adjust the offset as needed
        behavior: 'smooth' // enable smooth scrolling
    });
}
  