var queryUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson";

// Perform a GET request to the query URL
d3.json(queryUrl, function (earthquakeData) {
  // Once we get a response, send the data.features object to the createFeatures function
  L.geoJSON(earthquakeData, {

    // Binding a pop-up to each layer
    onEachFeature: function (feature, layer) {
      layer.bindPopup("<h3>" + geometry.coordinates + "</h3>");
    }
  }).addTo(myMap);

})

  // Create our map, giving it the streetmap and earthquakes layers to display on load
    var myMap = L.map("map", {
  center: [36.77, -119.4179],
  zoom: 13,
  // layers: [streetmap, earthquakes]
});

// Define streetmap and darkmap layers
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
  attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
  tileSize: 512,
  maxZoom: 18,
  zoomOffset: -1,
  id: "mapbox/streets-v11",
  accessToken: API_KEY
}).addTo(myMap);
    