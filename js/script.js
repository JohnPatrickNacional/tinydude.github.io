/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let NavBar = document.querySelector('.NavBar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    NavBar.classList.toggle('active');
};

/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

/*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    NavBar.classList.remove('active');
};
/*==================== animation ====================*/
ScrollReveal({ 
  //reset: true,
  distance: '80px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .heading_contact', { origin: 'top'});
ScrollReveal().reveal('.home-image, .portfolio-box, .contact-box', { origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-image', { origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});
ScrollReveal().reveal('.left', { origin: 'left'});
ScrollReveal().reveal('.right', { origin: 'right'});
ScrollReveal().reveal('.Download-CV', { origin: 'bottom'});


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
  strings: ['Student','Trailblazer', 'Programmer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

function openModal(imageSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = imageSrc;
  
    // Close the modal when clicking anywhere outside the modal content
    modal.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
  }