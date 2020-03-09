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


function activateAutocomplete() {
  let input = document.getElementById('address');
  let options = {
      componentRestrictions: {country: 'sg'}
  };
  let autocomplete = new google.maps.places.Autocomplete(input,options);
};

var map;
  function initMap() {
    let address = document.getElementById('addressToMap').innerHTML;
      let geocoder = new google.maps.Geocoder();
        geocoder.geocode( { 'address': address}, function(results, status) {
          if (status == 'OK') {
            var latitude = results[0].geometry.location.lat
            var longitude = results[0].geometry.location.lng
              map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: latitude, lng: longitude},
                zoom: 15
              })
              map.setCenter(results[0].geometry.location);
              var marker = new google.maps.Marker({
                  map: map,
                  position: results[0].geometry.location
              });
            }
            else {
              alert('Geocode was not successful for the following reason: ' + status);
            }
          })
        };

function addDisable(event){
  console.log('clicked add')
    let coachingSwitch = document.getElementById('coaching')
      if (coachingSwitch.disabled === false){
        coachingSwitch.disabled = true
      }
};

function removeDisable(event){
  console.log('clicked remove')
    let coachingSwitch = document.getElementById('coaching')
      if (coachingSwitch.disabled){
        coachingSwitch.disabled = false;
      }
};

