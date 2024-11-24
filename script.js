console.log(document);
$(document).ready(function() {
    // Pkt 1 Zamiana kolorystyki całej strony z motywu noc/dzień po kliknięciu w odpowiednią ikonę
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

    // Pkt 3 Stworzenie menu umożliwiającego nawigowanie po aplikacji (w tym zastosowanie kotwicy).
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

    // Pkt 4 Dodanie wysuwanej belki menu po najechaniu myszką
    function enableDesktopHover() {
        if ($(window).width() >= 992) {
            $('.navbar').hover(function () {
                $('.navbar-nav').toggleClass('show-menu');
            });
        } else {
            $('.navbar').off('mouseenter mouseleave');
        }
    }

    enableDesktopHover();

    $(window).resize(function () {
        enableDesktopHover();
    });


    //Pkt 5 Asynchroniczne pobieranie danych JSON z API
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

    // Pkt 6 Ukrywanie/wyświetlanie wybranego elementu strony po obsłudze zdarzenia innego niż kliknięcie lub najechanie myszką.
    $('#exampleInput').focus(function () {
        $('#tooltip').fadeIn();
    });

    $('#exampleInput').blur(function () {
        $('#tooltip').fadeOut(); 
    });

    
});