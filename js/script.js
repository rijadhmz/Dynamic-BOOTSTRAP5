// assign activr to new link

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const collapseButton = document.querySelector(".navbar-toggler");
  
    // first link active
    navLinks[0].classList.add("active");
  
    navLinks.forEach(function(link) {
      link.addEventListener("click", function() {
        if (this === collapseButton) return; // Ignore button
  
        navLinks.forEach(function(navLink) {
          navLink.classList.remove("active");
        });
        this.classList.add("active");
      });
    });


    //logo switch

    var logo = document.getElementById('logo');
    var logoHover = document.getElementById('logo-hover');

    logo.addEventListener('mouseover', function() {
      logo.style.display = 'none';
      logoHover.style.display = 'inline-block';
    });

    logoHover.addEventListener('mouseout', function() {
      logo.style.display = 'inline-block';
      logoHover.style.display = 'none';
    });

    //footer logo switch 

    var footerLogo = document.getElementById('footer-logo');
    var footerLogoHover = document.getElementById('footer-logo-hover');

    footerLogo.addEventListener('mouseover', function() {
      footerLogo.style.display = 'none';
      footerLogoHover.style.display = 'inline-block';
    });

    footerLogoHover.addEventListener('mouseout', function() {
      footerLogo.style.display = 'inline-block';
      footerLogoHover.style.display = 'none';
    });


    $(document).ready(function() {
      $('#form-button').click(function() {
        $('#form-button').hide(); // Hide the button
        $('#form-container').show(); // Show the form container
      });
    });


    Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.6.1/themes/miniml/galleria.miniml.min.js');
    Galleria.loadTheme('https://cdnjs.cloudflare.com/ajax/libs/galleria/1.6.1/themes/folio/galleria.folio.min.js');

    Galleria.run('.onama-galleria', {
    dataSource: [
        { image: "/img/06ad4e103741791_5f53a65242782-transformed.jpeg" },
        { image: '/img/house.webp' }, 
        { image: "/img/06ad4e103741791_5f53a65242782-transformed.jpeg" },
        { image: '/img/house.webp' }, 
    ],
    theme: 'miniml'
    });

    Galleria.run('.usluge-galleria', {
    dataSource: [
      { image: "/img/06ad4e103741791_5f53a65242782-transformed.jpeg" },
      { image: '/img/house.webp' }, 
      { image: "/img/06ad4e103741791_5f53a65242782-transformed.jpeg" },
      { image: '/img/house.webp' }, 
      { image: "/img/06ad4e103741791_5f53a65242782-transformed.jpeg" },
      { image: '/img/house.webp' }, 
      { image: "/img/06ad4e103741791_5f53a65242782-transformed.jpeg" },
      { image: '/img/house.webp' }, 
      { image: "/img/06ad4e103741791_5f53a65242782-transformed.jpeg" },
      { image: '/img/house.webp' }, 
      { image: "/img/06ad4e103741791_5f53a65242782-transformed.jpeg" },
      { image: '/img/house.webp' }, 
      { image: "/img/06ad4e103741791_5f53a65242782-transformed.jpeg" },
      { image: '/img/house.webp' }, 
      { image: "/img/06ad4e103741791_5f53a65242782-transformed.jpeg" },
      { image: '/img/house.webp' }, 



    ],
    theme: 'folio' // Set the theme to 'folio' for the second gallery
    });


  });
  


  