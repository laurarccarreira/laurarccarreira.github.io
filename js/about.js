var map = L.map('map').setView([40.63189212093659, -8.65822760177182], 17);

var myIcon = L.icon({
    iconUrl: '../assets/icons/university.png',
    iconSize: [40, 40],
    iconAnchor: [28, 35],
    popupAnchor: [0, -40]
});

// Add a tile layer from OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(map);


L.marker([40.63327715251739, -8.659529757486075],
    { icon: myIcon }
).addTo(map)
L.marker([40.630261824695495, -8.65669602425622],
    { icon: myIcon }
).addTo(map)

$(".leaflet-control-attribution").remove();