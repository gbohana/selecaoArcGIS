require([
    "esri/WebMap",
    "esri/views/MapView", "esri/identity/IdentityManager"
  ], function(WebMap, MapView, esriId) {
    

    var webmap = new WebMap({
        portalItem: {
            id: "d98cd71842054ffa9dc83693963ab9ab"
        }
    });

    var view = new MapView({
        container: "viewDiv",
        map: webmap
    });     

  });