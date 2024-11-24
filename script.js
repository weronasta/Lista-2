console.log(document);
$(document).ready(function() {
    // Tryb nocny
    $('#toggleTheme').click(function() {
        $(this).text(function(i, text) {
            return text === "Tryb nocny jak lisek" ? "Tryb dzienny" : "Tryb nocny jak lisek";
        });
        $('body').toggleClass('night-mode day-mode');
        $('.navbar-toggler-icon').toggleClass('night-mode day-mode');
        $('.navbar').toggleClass('night-mode light-mode');
        $('.nav-link').toggleClass('night-mode light-mode');
        $('.card').toggleClass('day-mode-card night-mode-card');
        $('.footer').toggleClass('bg-light bg-dark');
    });

    // Load content dynamically
    $('a.nav-link').click(function(e) {
        var target = $(this).attr('href');

        if (target.includes('.html')) {
            return;
        }
        e.preventDefault();
        var targetElement = $(target);
        if (targetElement.length) {
            $('html, body').animate({
                scrollTop: targetElement.offset().top
            }, 1000);
        } else {
            console.error('Target element not found: ' + target);
        }
    });



    // Navbar hover
    function enableDesktopHover() {
        if ($(window).width() >= 992) {
            $('.navbar').hover(function () {
                $('.navbar-nav').toggleClass('show-menu');
            });
        } else {
            // Usuwamy funkcję hover dla mniejszych ekranów
            $('.navbar').off('mouseenter mouseleave');
        }
    }

    enableDesktopHover();

    $(window).resize(function () {
        enableDesktopHover();
    });


    // Fetching images
    $('#showFoxButton').click(async function() { 
        try {
            const response = await fetch('https://randomfox.ca/floof/'); // Asynchroniczne pobranie danych
            const data = await response.json(); // Parsowanie odpowiedzi jako JSON
    
            const imageContainer = $('#imageContainer');
            imageContainer.empty(); // Usunięcie poprzednich zdjęć
            const img = $('<img>').attr('src', data.image).addClass('img-fluid scaled-image');
            imageContainer.append(img); // Dodanie obrazka do kontenera
        } catch (error) {
            console.error('Error fetching images:', error); // Obsługa błędów
        }
    });
});