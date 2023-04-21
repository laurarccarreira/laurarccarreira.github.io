/*!
* Start Bootstrap - Shop Homepage v5.0.6 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
// var map = L.map('map').setView([40.64427, -8.64554], 17);
// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
// }).addTo(map);



// Define a Leaflet map centered on Lisbon, Portugal
var map = L.map('map').setView([38.7223, -9.1393], 13);

// Add a tile layer from OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: 'Map data &copy; OpenStreetMap contributors',
  maxZoom: 18
}).addTo(map);
// Define a Leaflet GeoJSON layer for the restaurants
var restaurantsLayer = L.geoJSON(restaurants, {
    pointToLayer: function (feature, latlng) {
      return L.marker(latlng);
    },
    onEachFeature: function (feature, layer) {
      layer.bindPopup(feature.properties.name + '<br>' + feature.properties.address);
    },
    filter: function (feature, layer) {
      return feature.properties.cuisine === 'restaurant';
    }
  });

// Add the restaurants layer to the map
restaurantsLayer.addTo(map);



// L.marker([40.64427, -8.64554]);

// var restaurants = [{ "name": "Cervejaria Ramiro", "address": "Avenida Almirante Reis, 1 - H", "cuisine": "Seafood", "rating": 4.5, "latitude": 38.722252, "longitude": -9.139533 }, 
// { "name": "Time Out Market Lisboa", "address": "Av. 24 de Julho 49", "cuisine": "Various", "rating": 4.4, "latitude": 38.710983, "longitude": -9.143943 },
// { "name": "Ponto Final", "address": "Doca do Bom Sucesso", "cuisine": "Portuguese", "rating": 4.3, "latitude": 38.714107, "longitude": -9.148822 }];
// var jsonString = JSON.stringify(restaurants);

// $.getJSON('restaurants.json', function(data) {
//     // Filter locations to only include restaurants
//     var restaurants = data.filter(function(location) {
//       return location.category === 'restaurant';
//     });
//     console.log(restaurants)
//     // Add a marker for each restaurant to the map
//     restaurants.forEach(function(restaurant) {
//       L.marker([restaurant.latitude, restaurant.longitude]).addTo(map);
//     });
//   });
