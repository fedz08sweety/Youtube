var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");

menuIcon.onclick = function(){
    sidebar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");
}


//sign in page//

document.getElementById('signin-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    
    // Here you would perform actual sign-in logic, this is just a basic example
    if (email === 'example@gmail.com' && password === 'password123') {
      alert('Sign in successful!');
      // Redirect or do something else after successful sign-in
    } else {
      document.getElementById('error-message').textContent = 'Invalid email or password';
    }
  });



  