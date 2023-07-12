
    function showLogin() {
        document.getElementById("loginForm").style.display = "block";
        document.getElementById("signupForm").style.display = "none";
    }

    function showSignup() {
        document.getElementById("loginForm").style.display = "none";
        document.getElementById("signupForm").style.display = "block";
    }


    function loadGallery() {
        const contentContainer = document.getElementById('content');
        const galleryContent = document.querySelector('.gallery-content').innerHTML;
        contentContainer.innerHTML = galleryContent;
      }
  
      // Load the gallery content on page load
      window.onload = loadGallery();

   

 