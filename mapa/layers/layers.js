var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_EspciesAtropeladas2018_1 = new ol.format.GeoJSON();
var features_EspciesAtropeladas2018_1 = format_EspciesAtropeladas2018_1.readFeatures(json_EspciesAtropeladas2018_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EspciesAtropeladas2018_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EspciesAtropeladas2018_1.addFeatures(features_EspciesAtropeladas2018_1);cluster_EspciesAtropeladas2018_1 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_EspciesAtropeladas2018_1
});
var lyr_EspciesAtropeladas2018_1 = new ol.layer.Vector({
                declutter: true,
                source:cluster_EspciesAtropeladas2018_1, 
                style: style_EspciesAtropeladas2018_1,
                interactive: true,
                title: '<img src="styles/legend/EspciesAtropeladas2018_1.png" /> Espécies Atropeladas (2018)'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_EspciesAtropeladas2018_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_EspciesAtropeladas2018_1];
lyr_EspciesAtropeladas2018_1.set('fieldAliases', {'Animal': 'Animal', 'Rodovia': 'Rodovia', 'Concession': 'Concession', });
lyr_EspciesAtropeladas2018_1.set('fieldImages', {'Animal': 'TextEdit', 'Rodovia': 'TextEdit', 'Concession': 'TextEdit', });
lyr_EspciesAtropeladas2018_1.set('fieldLabels', {'Animal': 'header label', 'Rodovia': 'header label', 'Concession': 'header label', });
lyr_EspciesAtropeladas2018_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});