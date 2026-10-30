function myMap() {
    var mapProp = {
        center:new google.maps.LatLng(-6.30248, 106.652115), 
        zoom:18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
} 