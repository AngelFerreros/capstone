function activateAutocomplete() {
  let input = document.getElementById('address');
  let options = {
      componentRestrictions: {country: 'sg'}
  };
  let autocomplete = new google.maps.places.Autocomplete(input,options);
};
 // activateAutocomplete();


var map;
  function initMap() {
    let address = document.getElementById('addressToMap').innerHTML;
    console.log('address is:', address)
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
initMap();
