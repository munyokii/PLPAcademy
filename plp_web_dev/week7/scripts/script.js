const circle = document.getElementById('circle');

// initiating animation on click 
circle.addEventListener('click', () => {
  circle.classList.add('active');


  circle.addEventListener('animationend', () => {
    circle.classList.remove('active');
  }, { once: true});

});
