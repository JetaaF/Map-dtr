var map = L.map('map').setView([41.320731, 19.467576], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);
L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
  attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
}).addTo(map);

var circle = L.circle([41.340759, 19.443096], {
    color: 'red',
    fillColor: 'red',
    fillOpacity: 0.3,
    radius: 400
}).addTo(map)
    .bindPopup('...')
    .openPopup();
// var popup = L.popup()
//     .setLatLng([41.320731, 19.467576])
//     .setContent("I am a standalone popup.")
//     .openOn(map);

// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// map.on('click', onMapClick);
var polygon = L.polygon([
    [41.324840, 19.456561],
    [41.332832, 19.476057],
    [41.331285, 19.477280],
    [41.328385, 19.473331],
    [41.325613, 19.471354],
    [41.320843, 19.470325],
    [41.317362, 19.470495],
    [41.317620, 19.462164]
]).addTo(map);
polygon.color = 'green';
var polygonl = L.polygon([
    [
        
        41.33060821244729,19.820615888658068
      ],
      [
        
        41.33054163721124,19.81946331916606
      ],
      [
        
        41.33035855496232,19.81797827770552
      ],
      [
        
        41.33019211610815,19.8170695209906
      ],
      [
        
        41.329942457028636,19.81640457705373
      ],
      [
        
        41.32930998308015,19.81611643468051
      ],
      [
        
        41.329043676422515,19.815983445893153
      ],
      [
        
        41.32809495010912,19.81618292907416
      ],
      [
        
        41.32559823590228,19.816936532203187
      ],
      [
        
        41.323667377982275,19.81744632255601
      ],
      [
        
        41.3239836431116,19.81961847275187
      ],
      [
        
        41.325931136657346,19.8190200232078
      ],
      [
        
        41.32598107162386,19.81924167118737
      ],
      [
        
        41.32674673631979,19.81893136401652
      ],
      [
        
        41.32712956529346,19.81935249517622
      ],
      [
        
        41.32741252439354,19.82243340208703
      ],
      [
        
        41.32751239201778,19.82267721486423
      ],
      [
        
        41.32796179443315,19.8218127877453
      ],
      [
        
        41.327895216492806,19.820638053455696
      ],
      [
        
        41.330125540446886,19.81995094472032
      ],
      [
        
        41.33060821244729,19.820615888658068
      ]
],{
    color: 'green',
    fillColor: 'lightgreen',
    fillOpacity: 0.3,
    radius: 400
}).addTo(map);
