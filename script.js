$(document).ready(function() {
    // Tryb nocny
    $('#toggleTheme').click(function() {
        $(this).text(function(i, text) {
            return text === "Tryb nocny jak lisek" ? "Tryb dzienny" : "Tryb nocny jak lisek";
        });
        $('body').toggleClass('night-mode day-mode');
        $('.navbar').toggleClass('night-mode light-mode');
        $('.nav-link').toggleClass('night-mode light-mode');
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
                const img = $('<img>').attr('src', data.image).addClass('img-fluid scaled-image');
                imageContainer.append(img);
            })
            .catch(error => console.error('Error fetching images:', error));
    });

    // Hide/show element on double click
    $('#imageContainer').dblclick(function() {
        $(this).toggle();
    });
});