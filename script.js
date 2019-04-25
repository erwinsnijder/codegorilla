window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");

var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 

function selectChange(element) {
  if (element.options[element.selectedIndex].value == 'Yes')
     {
      alert('Uw beroep is in gevaar!')
    }
    else if (element.options[element.selectedIndex].value == 'No')
    alert('Uw beroep is nog niet in gevaar');
    }
   
  