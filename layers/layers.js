var wms_layers = [];


        var lyr_GoogleHybrid_0 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'opacity': 0.660000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Departamento_Norte_de_Santander_1 = new ol.format.GeoJSON();
var features_Departamento_Norte_de_Santander_1 = format_Departamento_Norte_de_Santander_1.readFeatures(json_Departamento_Norte_de_Santander_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamento_Norte_de_Santander_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departamento_Norte_de_Santander_1.addFeatures(features_Departamento_Norte_de_Santander_1);
var lyr_Departamento_Norte_de_Santander_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departamento_Norte_de_Santander_1, 
                style: style_Departamento_Norte_de_Santander_1,
                popuplayertitle: 'Departamento_Norte_de_Santander',
                interactive: true,
    title: 'Departamento_Norte_de_Santander<br />\
    <img src="styles/legend/Departamento_Norte_de_Santander_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/Departamento_Norte_de_Santander_1_1.png" /> 0,1 - 1,1<br />\
    <img src="styles/legend/Departamento_Norte_de_Santander_1_2.png" /> 1,1 - 2,1<br />\
    <img src="styles/legend/Departamento_Norte_de_Santander_1_3.png" /> 2,1 - 3,2<br />\
    <img src="styles/legend/Departamento_Norte_de_Santander_1_4.png" /> 3,2 - 4,2<br />\
    <img src="styles/legend/Departamento_Norte_de_Santander_1_5.png" /> 4,2 - 5,3<br />' });
var group_Departamentos_Capas = new ol.layer.Group({
                                layers: [lyr_Departamento_Norte_de_Santander_1,],
                                fold: 'open',
                                title: 'Departamentos_Capas'});

lyr_GoogleHybrid_0.setVisible(true);lyr_Departamento_Norte_de_Santander_1.setVisible(true);
var layersList = [lyr_GoogleHybrid_0,group_Departamentos_Capas];
lyr_Departamento_Norte_de_Santander_1.set('fieldAliases', {'fid': 'fid', 'No.': 'No.', 'OBJECTID': 'OBJECTID', 'MpCodigo': 'Código del municipio', 'MpNombre': 'Nombre del municipio', 'MpArea': 'MpArea', 'MpNorma': 'MpNorma', 'MpCategor': 'MpCategor', 'MpAltitud': 'MpAltitud', 'Restriccion': 'Restriccion', 'Depto': 'Depto', '9.Norte_de_Santander-Norte de Santander_ Área_Sembrada_(ha)': 'Área Sembrada (Hectáreas)', '9.Norte_de_Santander-Norte de Santander_ Área_Cosechada_(ha)': 'Área Cosechada (Hectáreas)', '9.Norte_de_Santander-Norte de Santander_Producción_(ton)': 'Producción (Toneladas)', '9.Norte_de_Santander-Norte de Santander_Rendimiento_(ton/ha)': 'Rendimiento (Toneladas/Hectárea)', });
lyr_Departamento_Norte_de_Santander_1.set('fieldImages', {'fid': 'TextEdit', 'No.': 'Range', 'OBJECTID': 'TextEdit', 'MpCodigo': 'TextEdit', 'MpNombre': 'TextEdit', 'MpArea': 'TextEdit', 'MpNorma': 'TextEdit', 'MpCategor': 'Range', 'MpAltitud': 'Range', 'Restriccion': 'TextEdit', 'Depto': 'TextEdit', '9.Norte_de_Santander-Norte de Santander_ Área_Sembrada_(ha)': 'TextEdit', '9.Norte_de_Santander-Norte de Santander_ Área_Cosechada_(ha)': 'TextEdit', '9.Norte_de_Santander-Norte de Santander_Producción_(ton)': 'TextEdit', '9.Norte_de_Santander-Norte de Santander_Rendimiento_(ton/ha)': 'TextEdit', });
lyr_Departamento_Norte_de_Santander_1.set('fieldLabels', {'fid': 'hidden field', 'No.': 'inline label - visible with data', 'OBJECTID': 'hidden field', 'MpCodigo': 'inline label - visible with data', 'MpNombre': 'inline label - visible with data', 'MpArea': 'hidden field', 'MpNorma': 'hidden field', 'MpCategor': 'hidden field', 'MpAltitud': 'hidden field', 'Restriccion': 'hidden field', 'Depto': 'hidden field', '9.Norte_de_Santander-Norte de Santander_ Área_Sembrada_(ha)': 'hidden field', '9.Norte_de_Santander-Norte de Santander_ Área_Cosechada_(ha)': 'hidden field', '9.Norte_de_Santander-Norte de Santander_Producción_(ton)': 'hidden field', '9.Norte_de_Santander-Norte de Santander_Rendimiento_(ton/ha)': 'inline label - visible with data', });
lyr_Departamento_Norte_de_Santander_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});