'use strict'        
console.log('Loaded map.js')
mapboxgl.accessToken = 'pk.eyJ1IjoibHVsYTMwMDIiLCJhIjoiY2s3NGRrZjN0MDQ0OTNlbzNlY3p6MXc4cSJ9.AcGzXunIGhinizhit2AYQQ'
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v9',
    center: [-73.961, 40.81],
    zoom: 15
});
var buildings_url = "./data/cubuildings_1921.geojson"
map.on('load',function(){
    map.addSource('cu_map',{
        'type':'image',
        'url': './data/cuhistoricalmap_1921.jpg',
        'coordinates': [
            [-73.9692333120000001,40.8142167359999988],
            [-73.9574194270000049,40.8142167359999988],
            [-73.9574194270000049,40.8062506799999980],
            [-73.9692333120000001,40.8062506799999980],                   
        ]
      });
      map.addLayer({
        'id':'map_overlay',
        'type':'raster',
        'source':'cu_map',
        'paint':{
          'raster-opacity':0.40
        }
      });
 // define a 'source' for your polygons dataset
 map.addSource('buildings',{
    'type':'geojson',
    'data': buildings_url,
  });
  // add a new layer with your polygons
  map.addLayer({
    'id':'buildings',
    'type':'fill',
    'source':'buildings',
    'paint':{
      'fill-color':'#f779d2',
      'fill-outline-color':'#000000'
    }
  })
});
