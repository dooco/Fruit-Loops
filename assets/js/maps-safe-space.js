function initMap ()
{
    // The location of Dublin
    const Dublin = { lat: 53.346788505821884, lng: - 6.271116615196459 };
    // The map, centered at Uluru
    const map = new google.maps.Map( document.getElementById( "map" ), {
        zoom: 9,
        center: Dublin,
    } );
    // The marker, positioned at Dublin
    const marker = new google.maps.Marker( {
        position: Dublin,
        map: map,
    } );
}

window.initMap = initMap;