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
        { image: 'https://www.probuilder.com/sites/probuilder/files/2023-03/2021-Home-Exterior-Color-Trends-UTOPIA-ConstructUtopia.com-photo-courtesy-Brick-and-Batten-image-1024x650.jpg' },
        { image: 'https://cdn.sanity.io/images/32lej2m6/production/6e51ae5090f4dd46e25438a9f29f991a5763f806-1024x760.jpg?auto=format' },
        { image: "https://i.pinimg.com/originals/6e/ef/28/6eef283e5e1ea3a0ff4a6ff89f6bfe0a.jpg" },
        // Add more images as needed for the minimal gallery
    ],
    theme: 'miniml'
    });

    Galleria.run('.usluge-galleria', {
    dataSource: [
      { image: "/img/06ad4e103741791_5f53a65242782-transformed.jpeg" },
      { image: 'https://www.probuilder.com/sites/probuilder/files/2023-03/2021-Home-Exterior-Color-Trends-UTOPIA-ConstructUtopia.com-photo-courtesy-Brick-and-Batten-image-1024x650.jpg' },
      { image: 'https://cdn.sanity.io/images/32lej2m6/production/6e51ae5090f4dd46e25438a9f29f991a5763f806-1024x760.jpg?auto=format' },
      { image: "https://i.pinimg.com/originals/6e/ef/28/6eef283e5e1ea3a0ff4a6ff89f6bfe0a.jpg" },
      { image: "https://cdn.indesignlive.com/wp-content/uploads/1.facadeFEAT.jpg" },
      { image: "https://i.pinimg.com/originals/6e/ef/28/6eef283e5e1ea3a0ff4a6ff89f6bfe0a.jpg" },
      { image: "https://i.pinimg.com/originals/6e/ef/28/6eef283e5e1ea3a0ff4a6ff89f6bfe0a.jpg" },
      { image: "https://i.pinimg.com/736x/ff/99/0f/ff990feba97bdc14d06a4334b2dd7b7e.jpg" },
      { image: "https://i.pinimg.com/originals/6e/ef/28/6eef283e5e1ea3a0ff4a6ff89f6bfe0a.jpg" },
      { image: "https://static.wixstatic.com/media/c7e822_d4d5445ed73f413582e6f4ea85495081~mv2.jpg/v1/fill/w_640,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c7e822_d4d5445ed73f413582e6f4ea85495081~mv2.jpg" },
      { image: "https://i.pinimg.com/originals/6e/ef/28/6eef283e5e1ea3a0ff4a6ff89f6bfe0a.jpg" },
      { image: "https://static.wixstatic.com/media/c7e822_d4d5445ed73f413582e6f4ea85495081~mv2.jpg/v1/fill/w_640,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c7e822_d4d5445ed73f413582e6f4ea85495081~mv2.jpg" },
      { image: "https://i.pinimg.com/originals/6e/ef/28/6eef283e5e1ea3a0ff4a6ff89f6bfe0a.jpg" },
      { image: "https://static.wixstatic.com/media/c7e822_d4d5445ed73f413582e6f4ea85495081~mv2.jpg/v1/fill/w_640,h_342,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/c7e822_d4d5445ed73f413582e6f4ea85495081~mv2.jpg" },
      { image: "https://image.made-in-china.com/2f0j00hKViCyARLWbU/Hihaus-2022-Tropical-House-Architecture-Modern-Cool-Building-Single-Storey-Facade-Aluminum-Frame-Curtain-Wall.webp" },
      { image: "https://image.made-in-china.com/2f0j00hKViCyARLWbU/Hihaus-2022-Tropical-House-Architecture-Modern-Cool-Building-Single-Storey-Facade-Aluminum-Frame-Curtain-Wall.webp" },
      { image: "/img/06ad4e103741791_5f53a65242782-transformed.jpeg" },


      // Add more images as needed for the minimal gallery
    ],
    theme: 'folio' // Set the theme to 'folio' for the second gallery
    });


  });
  


  