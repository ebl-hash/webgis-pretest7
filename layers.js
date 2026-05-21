var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Jaringan_Jalan_Clean_QGIS3_1 = new ol.format.GeoJSON();
var features_Jaringan_Jalan_Clean_QGIS3_1 = format_Jaringan_Jalan_Clean_QGIS3_1.readFeatures(json_Jaringan_Jalan_Clean_QGIS3_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jaringan_Jalan_Clean_QGIS3_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jaringan_Jalan_Clean_QGIS3_1.addFeatures(features_Jaringan_Jalan_Clean_QGIS3_1);
var lyr_Jaringan_Jalan_Clean_QGIS3_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jaringan_Jalan_Clean_QGIS3_1, 
                style: style_Jaringan_Jalan_Clean_QGIS3_1,
                popuplayertitle: 'Jaringan_Jalan_Clean_QGIS3',
                interactive: true,
                title: '<img src="styles/legend/Jaringan_Jalan_Clean_QGIS3_1.png" /> Jaringan_Jalan_Clean_QGIS3'
            });
var format_ClipAreaKomersil_2 = new ol.format.GeoJSON();
var features_ClipAreaKomersil_2 = format_ClipAreaKomersil_2.readFeatures(json_ClipAreaKomersil_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClipAreaKomersil_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClipAreaKomersil_2.addFeatures(features_ClipAreaKomersil_2);
var lyr_ClipAreaKomersil_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClipAreaKomersil_2, 
                style: style_ClipAreaKomersil_2,
                popuplayertitle: 'Clip Area Komersil',
                interactive: true,
                title: '<img src="styles/legend/ClipAreaKomersil_2.png" /> Clip Area Komersil'
            });
var format_ClipAreaPerumahan_3 = new ol.format.GeoJSON();
var features_ClipAreaPerumahan_3 = format_ClipAreaPerumahan_3.readFeatures(json_ClipAreaPerumahan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClipAreaPerumahan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClipAreaPerumahan_3.addFeatures(features_ClipAreaPerumahan_3);
var lyr_ClipAreaPerumahan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClipAreaPerumahan_3, 
                style: style_ClipAreaPerumahan_3,
                popuplayertitle: 'Clip Area Perumahan',
                interactive: true,
                title: '<img src="styles/legend/ClipAreaPerumahan_3.png" /> Clip Area Perumahan'
            });
var format_ClipAreaPublik_4 = new ol.format.GeoJSON();
var features_ClipAreaPublik_4 = format_ClipAreaPublik_4.readFeatures(json_ClipAreaPublik_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ClipAreaPublik_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ClipAreaPublik_4.addFeatures(features_ClipAreaPublik_4);
var lyr_ClipAreaPublik_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ClipAreaPublik_4, 
                style: style_ClipAreaPublik_4,
                popuplayertitle: 'Clip Area Publik',
                interactive: true,
                title: '<img src="styles/legend/ClipAreaPublik_4.png" /> Clip Area Publik'
            });
var format_Halte_5 = new ol.format.GeoJSON();
var features_Halte_5 = format_Halte_5.readFeatures(json_Halte_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Halte_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Halte_5.addFeatures(features_Halte_5);
var lyr_Halte_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Halte_5, 
                style: style_Halte_5,
                popuplayertitle: 'Halte',
                interactive: true,
    title: 'Halte<br />\
    <img src="styles/legend/Halte_5_0.png" /> Halte Ahmad Dahlan<br />\
    <img src="styles/legend/Halte_5_1.png" /> Halte Imam Bonjol<br />\
    <img src="styles/legend/Halte_5_2.png" /> Halte Permata Hijau<br />\
    <img src="styles/legend/Halte_5_3.png" /> Halte Semampir<br />\
    <img src="styles/legend/Halte_5_4.png" /> Halte Semeru<br />\
    <img src="styles/legend/Halte_5_5.png" /> <br />' });

lyr_Positron_0.setVisible(true);lyr_Jaringan_Jalan_Clean_QGIS3_1.setVisible(true);lyr_ClipAreaKomersil_2.setVisible(true);lyr_ClipAreaPerumahan_3.setVisible(true);lyr_ClipAreaPublik_4.setVisible(true);lyr_Halte_5.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Jaringan_Jalan_Clean_QGIS3_1,lyr_ClipAreaKomersil_2,lyr_ClipAreaPerumahan_3,lyr_ClipAreaPublik_4,lyr_Halte_5];
lyr_Jaringan_Jalan_Clean_QGIS3_1.set('fieldAliases', {'cat': 'cat', 'OBJECTID': 'OBJECTID', 'NAMOBJ': 'NAMOBJ', 'ORDE01': 'ORDE01', 'ORDE02': 'ORDE02', 'ORDE03': 'ORDE03', 'ORDE04': 'ORDE04', 'JNSRSR': 'JNSRSR', 'STSJRN': 'STSJRN', 'WADMPR': 'WADMPR', 'WADMKK': 'WADMKK', 'REMARK': 'REMARK', 'SBDATA': 'SBDATA', 'SHAPE_Leng': 'SHAPE_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr_ClipAreaKomersil_2.set('fieldAliases', {'Zona': 'Zona', 'OBJECTID': 'OBJECTID', 'Nama Halte': 'Nama Halte', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Jangkauan ': 'Jangkauan ', 'Luas (M2)': 'Luas (M2)', 'Luas Total': 'Luas Total', 'Persentase': 'Persentase', });
lyr_ClipAreaPerumahan_3.set('fieldAliases', {'NAMZON': 'NAMZON', 'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Jangkauan': 'Jangkauan', 'LuasM2': 'LuasM2', 'LuasAllM2': 'LuasAllM2', 'Persentase': 'Persentase', });
lyr_ClipAreaPublik_4.set('fieldAliases', {'Zona': 'Zona', 'OBJECTID': 'OBJECTID', 'Nama Halte': 'Nama Halte', 'REMARK': 'REMARK', 'type': 'type', 'start': 'start', 'Jangkauan ': 'Jangkauan ', 'Luas (M2)': 'Luas (M2)', 'Luas Total': 'Luas Total', 'Persentase': 'Persentase', });
lyr_Halte_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'REMARK': 'REMARK', });
lyr_Jaringan_Jalan_Clean_QGIS3_1.set('fieldImages', {'cat': '', 'OBJECTID': '', 'NAMOBJ': '', 'ORDE01': '', 'ORDE02': '', 'ORDE03': '', 'ORDE04': '', 'JNSRSR': '', 'STSJRN': '', 'WADMPR': '', 'WADMKK': '', 'REMARK': '', 'SBDATA': '', 'SHAPE_Leng': '', 'Shape_Le_1': '', });
lyr_ClipAreaKomersil_2.set('fieldImages', {'Zona': '', 'OBJECTID': '', 'Nama Halte': '', 'REMARK': '', 'type': '', 'start': '', 'Jangkauan ': '', 'Luas (M2)': '', 'Luas Total': '', 'Persentase': '', });
lyr_ClipAreaPerumahan_3.set('fieldImages', {'NAMZON': '', 'OBJECTID': '', 'Name': '', 'REMARK': '', 'type': '', 'start': '', 'Jangkauan': '', 'LuasM2': '', 'LuasAllM2': '', 'Persentase': '', });
lyr_ClipAreaPublik_4.set('fieldImages', {'Zona': '', 'OBJECTID': '', 'Nama Halte': '', 'REMARK': '', 'type': '', 'start': '', 'Jangkauan ': '', 'Luas (M2)': '', 'Luas Total': '', 'Persentase': '', });
lyr_Halte_5.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'REMARK': 'TextEdit', });
lyr_Jaringan_Jalan_Clean_QGIS3_1.set('fieldLabels', {'cat': 'hidden field', 'OBJECTID': 'hidden field', 'NAMOBJ': 'hidden field', 'ORDE01': 'hidden field', 'ORDE02': 'hidden field', 'ORDE03': 'hidden field', 'ORDE04': 'hidden field', 'JNSRSR': 'hidden field', 'STSJRN': 'hidden field', 'WADMPR': 'hidden field', 'WADMKK': 'hidden field', 'REMARK': 'hidden field', 'SBDATA': 'hidden field', 'SHAPE_Leng': 'hidden field', 'Shape_Le_1': 'hidden field', });
lyr_ClipAreaKomersil_2.set('fieldLabels', {'Zona': 'hidden field', 'OBJECTID': 'hidden field', 'Nama Halte': 'inline label - visible with data', 'REMARK': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'Jangkauan ': 'hidden field', 'Luas (M2)': 'inline label - visible with data', 'Luas Total': 'hidden field', 'Persentase': 'hidden field', });
lyr_ClipAreaPerumahan_3.set('fieldLabels', {'NAMZON': 'hidden field', 'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'REMARK': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'Jangkauan': 'hidden field', 'LuasM2': 'inline label - visible with data', 'LuasAllM2': 'hidden field', 'Persentase': 'hidden field', });
lyr_ClipAreaPublik_4.set('fieldLabels', {'Zona': 'hidden field', 'OBJECTID': 'hidden field', 'Nama Halte': 'hidden field', 'REMARK': 'hidden field', 'type': 'hidden field', 'start': 'hidden field', 'Jangkauan ': 'hidden field', 'Luas (M2)': 'header label - visible with data', 'Luas Total': 'hidden field', 'Persentase': 'hidden field', });
lyr_Halte_5.set('fieldLabels', {'OBJECTID': 'hidden field', 'Name': 'inline label - visible with data', 'REMARK': 'hidden field', });
lyr_Halte_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});