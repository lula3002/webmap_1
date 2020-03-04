'use strict'        
console.log('Loaded map.js')
mapboxgl.accessToken = 'pk.eyJ1IjoibHVsYTMwMDIiLCJhIjoiY2s3NGRrZjN0MDQ0OTNlbzNlY3p6MXc4cSJ9.AcGzXunIGhinizhit2AYQQ'
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/lula3002/ck7co77vs06mq1iqwkzohf184',
    center: [-73.961, 40.814],
    zoom: 14.68
});
var buildings_url = "./data/cubuildings_1921.geojson"
var buildings2_url = "./data/mville_bldgs.geojson"
map.on('load',function(){
    map.addSource('cu_map',{
        'type':'image',
        'url': './data/cumap_1921_.png',
        'coordinates': [
            [-73.9690490130000029,40.8141182769999986],
            [-73.9575496730000026,40.8141182769999986],
            [-73.9575496730000026,40.8063068670000035],
            [-73.9690490130000029,40.8063068670000035],            
        ]
      });
      map.addLayer({
        'id':'map_overlay',
        'type':'raster',
        'source':'cu_map',
        'paint':{
          'raster-opacity':0.50
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
  });
  map.addSource('mv_map',{
    'type':'image',
    'url': './data/mville_map.png',
    'coordinates': [
      [-73.9624938000000043,40.8198525709999984],
      [-73.9532922000000070,40.8198525709999984],
      [-73.9532922000000070,40.8156471249999981],
      [-73.9624938000000043,40.8156471249999981],
    ]
  });
  map.addLayer({
    'id':'map_overlay_2',
    'type':'raster',
    'source':'mv_map',
    'paint':{
      'raster-opacity':0.50
    }
  });
   // define a 'source' for your polygons dataset
   map.addSource('buildings2',{
    'type':'geojson',
    'data': buildings2_url,
  });
  // add a new layer with your polygons
  map.addLayer({
    'id':'buildings2',
    'type':'fill',
    'source':'buildings2',
    'paint':{
      'fill-color':'#f3a6b2',
      'fill-outline-color':'#000000'
    }
  })
});
