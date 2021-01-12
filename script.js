require([
    "esri/WebMap",
    "esri/views/MapView", "esri/layers/FeatureLayer", "esri/widgets/Editor"
  
  ], function(WebMap, MapView, FeatureLayer, Editor) {
    
    //visualize webmap on the browser
    var webmap = new WebMap({
        portalItem: {
            id: "d98cd71842054ffa9dc83693963ab9ab"
        }
    });

    var view = new MapView({
        container: "viewDiv",
        map: webmap
    });    
    
    //display feature layer
    const Poplayer = new FeatureLayer({
      portalItem: {
        id: "858a4c84911b42788916db043b8cc861"
      }
    });
    const IDHMlayer = new FeatureLayer({
      portalItem: {
        id: "3ebb86adf2b242fa9b185946ae65233e"
      }
    });
    const PIBlayer = new FeatureLayer({
      portalItem: {
        id: "511de40aa9e34bda9f5dd6eb0646c816"
      }
    });
    
    //var btnLimpar = document.getElementById("limpar");

    // btnLimpar.onclick = function(){
    //   webmap.remove(Poplayer);
    //   webmap.remove(IDHMlayer);
    //   webmap.remove(PIBlayer);
    //   document.getElementById('checkbox').setAttribute('checked', null);
    // };

    var popCheckbox = document.getElementById("PopCheckbox");
    var IDHMCheckbox = document.getElementById("IDHMCheckbox");
    var PIBCheckbox = document.getElementById("PIBCheckbox");

    popCheckbox.addEventListener('change', (event) => {
      if (event.target.checked) {
        webmap.add(Poplayer);
      } else {
        webmap.remove(Poplayer);
      }
    })

    IDHMCheckbox.addEventListener('change', (event) => {
      if (event.target.checked) {
        webmap.add(IDHMlayer);
      } else {
        webmap.remove(IDHMlayer);
      }
    })

    PIBCheckbox.addEventListener('change', (event) => {
      if (event.target.checked) {
        webmap.add(PIBlayer);
      } else {
        webmap.remove(PIBlayer);
      }
    })

    const editThisAction = {
      title: "Editar informações",
      id: "edit-this",
      className: "esri-icon-edit"
    };

    var template = {
      title: "{municipio}",
      content: "A cidade de {municipio} possui uma população de {populacao} habitantes, IDHM de {idhm} e PIB de {pib}.",
      actions: [editThisAction]
    };

    Poplayer.popupTemplate = template;
    IDHMlayer.popupTemplate = template;
    PIBlayer.popupTemplate = template;

    let editor = new Editor({
      view: view
      // Pass in any other additional property as needed
    });
    
    // Add widget to top-right of the view
    view.ui.add(editor, "top-right");
    
  });
