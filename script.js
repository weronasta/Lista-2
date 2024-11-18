$(document).ready(function() {
    // Toggle theme
    $('#toggleTheme').click(function() {
        $('body').toggleClass('night-mode day-mode');
        $(this).text(function(i, text) {
            return text === "Night Mode" ? "Day Mode" : "Night Mode";
        });

        // Update navbar and nav-link colors
        $('.navbar').toggleClass('navbar-light navbar-dark');
        $('.nav-link').toggleClass('text-dark text-light');
        $('.card').toggleClass('day-mode-card night-mode-card');
    });

    // Load content dynamically
    $('a.nav-link').click(function(e) {
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    // Sliding menu bar on hover
    $('.navbar').hover(function() {
        $('.navbar-nav').toggleClass('show-menu');
    });

    // Fetch fox image
    $('#showFoxButton').click(function() {
        fetch('https://randomfox.ca/floof/')
            .then(response => response.json())
            .then(data => {
                const imageContainer = $('#imageContainer');
                imageContainer.empty(); // Clear previous images
                const img = $('<img>').attr('src', data.image).addClass('img-fluid');
                imageContainer.append(img);
            })
            .catch(error => console.error('Error fetching images:', error));
    });

    // Hide/show element on double click
    $('#imageContainer').dblclick(function() {
        $(this).toggle();
    });
});