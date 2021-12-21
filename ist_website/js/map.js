var map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: 30.668628,
            lng: -18.548013
        },
        zoom: 3,
        zoomControl: false,
        scaleControl: false,
        scrollwheel: false,
        disableDoublemouseoverZoom: false,
        disableDefaultUI: false,
        background: '#FF0000',
        styles: [{
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "elementType": "labels.icon",
                "stylers": [{
                    "visibility": "off"
                }]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [{
                    "color": "#f5f5f5"
                }]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#bdbdbd"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#ffffff"
                }]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#757575"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#dadada"
                }]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#616161"
                }]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#e5e5e5"
                }]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#eeeeee"
                }]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [{
                    "color": "#d8e9ff"
                }]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [{
                    "color": "#9e9e9e"
                }]
            }
        ]
    });

    var marker = new google.maps.Marker({
        position: {
            lat: 17.426387,
            lng: 78.432636
        },
        map: map
    });


    var marker_2 = new google.maps.Marker({
        position: {
            lat: 33.530937,
            lng: -117.772590
        },
        map: map
    });

    /* var marker_3 = new google.maps.Marker({
         position: {
             lat: 29.700000,
             lng: -95.540206
         },
         map: map
     });*/

    var marker_4 = new google.maps.Marker({
        position: {
            lat: 24.427260,
            lng: 54.616427
        },
        map: map
    });

    var marker_5 = new google.maps.Marker({
        position: {
            lat: 24.493258,
            lng: 54.376431
        },
        map: map
    });

    /* var marker_5 = new google.maps.Marker({
        position: {
            lat: 35.202640,
            lng: -80.866015
        },
        map: map
    });*/


}
