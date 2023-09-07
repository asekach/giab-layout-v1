$(function(){
    $('.form-sections-item--header').on('click', function() {
        $(this)
            .toggleClass('open')
            .siblings()
            .toggleClass('open')
    });

    $('.item-info-element .toggle-el-isOpen').on('click', function(e) {
        e.preventDefault();
        $(this)
            .parents('.toggle-el-form')
            .toggleClass('open')
            .siblings('.form-el')
            .toggleClass('open');
    });

    // Map gugule
    const mapElement = document.getElementById("map");
    const lat = mapElement.dataset.lat;
    const lng = mapElement.dataset.lng;
    const imageMarker = '../images/marker-map--mini.svg';
    const mapElementInitial = (lat, lng) => {
        let mapCanvas = mapElement;
        let mapOptions = {
            center: new google.maps.LatLng(lat, lng),
            zoom: 9
        };
        let map = new google.maps.Map(mapCanvas, mapOptions);
        let marker = new google.maps.Marker({
            position: mapOptions.center, 
            map: map,
            title: 'GIAB',
            icon: imageMarker,
        });
    };
    // Or other geolocations :)
    mapElementInitial(lat, lng);

    // Locals-list scroll
    new SimpleBar(document.getElementById('localsList'), {    
        autoHide: false,
        forceVisible: true
    });


});
