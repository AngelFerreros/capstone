(function() {
  'use strict';
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function addDisable(){
  console.log('clicked add');
  let coachingSwitch = document.getElementById('coaching');
  coachingSwitch.checked = false;
  coachingSwitch.disabled = true;
};

function removeDisable(){
  console.log('clicked remove');
  let coachingSwitch = document.getElementById('coaching');
  coachingSwitch.disabled = false;
};

document.getElementById('beginner').addEventListener('click', addDisable);
document.getElementById('intermediate').addEventListener('click', removeDisable);
document.getElementById('competitive').addEventListener('click', removeDisable);
