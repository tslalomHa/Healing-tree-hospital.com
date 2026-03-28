$(document).ready(function(){

    // Mobile Menu Toggle
    $('.fa-bars').click(function(){
        $('.navbar').toggleClass('show');
    });

    // Optional: Close menu if clicking outside of it
    $(document).click(function(event) {
        // Check if the click was outside the header
        if (!$(event.target).closest('header').length) {
            // Check if the navbar is currently shown
            if ($('.navbar').hasClass('show')) {
                $('.navbar').removeClass('show');
            }
        }
    });

    // Optional: Highlight active nav link based on current page or section
    // (This is a simple example, more robust solutions exist)
    const currentPath = window.location.pathname.split("/").pop() || 'index.html'; // Get current page filename
    $('.navbar a').each(function() {
        const linkPath = $(this).attr('href').split("/").pop().split("#")[0];
        if (linkPath === currentPath) {
            $(this).addClass('active');
        } else {
            $(this).removeClass('active'); // Ensure only one is active
        }
    });
     // For single-page scroll links in index.html (add this only if needed)
     if (currentPath === 'index.html' && window.location.hash) {
         $('.navbar a').removeClass('active'); // Remove default active
         $('.navbar a[href="' + window.location.hash + '"]').addClass('active');
     } else if (currentPath === 'index.html' && !window.location.hash) {
         $('.navbar a[href="#home"]').addClass('active'); // Default to home
     }


}); // End Document Ready