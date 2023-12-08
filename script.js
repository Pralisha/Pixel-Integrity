

// window.onscroll = function() {
//   scrollFunction();
// };

// function scrollFunction() {
//   var navbar = document.getElementById("navbar");
//   var navMenu = document.getElementsByClassName("navbar-menu");

//   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
//     navbar.style.backgroundColor = "#21243D"; // Change background color on scroll
    
//     // Change text color of all navigation links on scroll
//     for (var i = 0; i < navMenu.length; i++) {
//       navMenu[i].style.color = "#fff";
//     }

//     navbar.classList.add("responsive"); // Make navbar responsive on scroll
//   } else {
//     navbar.style.backgroundColor = "transparent"; // Restore transparent background when not scrolled
    
//     // Restore default text color of all navigation links
//     for (var i = 0; i < navMenu.length; i++) {
//       navMenu[i].style.color = "#21243D"; // Adjust to your default color
//     }

//     navbar.classList.remove("responsive"); // Remove responsive class when not scrolled
//   }
// }

// function toggleNavbar() {
//   var navbar = document.getElementById("navbar");
//   navbar.classList.toggle("responsive");
// }

// //scroll to top
// function handleScroll() {
//   var scrollToTopButton = document.getElementById("scrollToTop");
  
//   if (window.scrollY > 20) {
//     scrollToTopButton.style.display = "block";
//   } else {
//     scrollToTopButton.style.display = "none";
//   }
// }

// // Scroll to top function
// document.addEventListener("DOMContentLoaded", function() {
//   var scrollToTopButton = document.getElementById("scrollToTop");
  
//   window.addEventListener('scroll', handleScroll);

//   scrollToTopButton.addEventListener('click', function() {
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
//   });
// });


window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var navbar = document.getElementById("navbar");

  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    navbar.style.backgroundColor = "#21243D"; // Change background color on scroll
    navbar.classList.add("scrolled"); // Add scrolled class
  } else {
    navbar.style.backgroundColor = "transparent"; // Restore transparent background when not scrolled
    navbar.classList.remove("scrolled"); // Remove scrolled class
  }
}

function toggleNavbar() {
  var navbar = document.getElementById("navbar");
  navbar.classList.toggle("responsive");
}

// Scroll to top function
document.addEventListener("DOMContentLoaded", function () {
  var scrollToTopButton = document.getElementById("scrollToTop");

  window.addEventListener('scroll', handleScroll);

  scrollToTopButton.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  });

  function handleScroll() {
    if (window.scrollY > 20) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  }
});

//scroll to demo
function scrollToDemo(){
  const targetElement = document.getElementById('demo');

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        
}

//img upload and print result
function triggerFileInput() {
  var fileInput = document.getElementById('fileInput');
  fileInput.click();
}

function displayImage() {
  var fileInput = document.getElementById('fileInput');
  var file = fileInput.files[0];
  // image.innerHTML.style.display=block;
  if (file) {
      // Display the uploaded image
      // 
      var image = document.getElementById('uploadedImage');
      var imageCon = document.getElementById('imageContainer');
      image.src = URL.createObjectURL(file);
      image.alt = 'Uploaded Image';
      // Show the image
      image.style.display = 'block';
      imageCon.style.display = 'block';
      // Display some text below the image
      var imageText = document.getElementById('imageText');
      imageText.textContent = 'Image Name: ' + file.name;
  }
  const targetElement1 = document.getElementById('uploadedImage');

            if (targetElement1) {
                targetElement1.scrollIntoView({
                    behavior: 'smooth'
                });
            }
}


//scroll to home
function scrollToHome(){
  const targetElement2 = document.getElementById('home');

            if (targetElement2) {
                targetElement2.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        
}

//scroll to about
function scrollToAbout(){
  const targetElement3 = document.getElementById('about');

            if (targetElement3) {
                targetElement3.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        
}

//scroll to service
function scrollToService(){
  const targetElement4 = document.getElementById('service');

            if (targetElement4) {
                targetElement4.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        
}

//scroll to contact us
function scrollToContact(){
  const targetElement5= document.getElementById('contact-us');

            if (targetElement5) {
                targetElement5.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        
}


function scrollToSection(sectionId) {
  const targetSection = document.getElementById(sectionId);

  if (targetSection) {
      targetSection.scrollIntoView({
          behavior: 'smooth'
      });
  }
}