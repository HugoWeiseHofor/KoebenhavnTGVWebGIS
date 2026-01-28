var wms_layers = [];


        var lyr_ESRIGraylight_0 = new ol.layer.Tile({
            'title': 'ESRI Gray (light)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Antropogentlandskab_2 = new ol.format.GeoJSON();
var features_Antropogentlandskab_2 = format_Antropogentlandskab_2.readFeatures(json_Antropogentlandskab_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Antropogentlandskab_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Antropogentlandskab_2.addFeatures(features_Antropogentlandskab_2);
var lyr_Antropogentlandskab_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Antropogentlandskab_2, 
                style: style_Antropogentlandskab_2,
                popuplayertitle: 'Antropogent landskab',
                interactive: true,
                title: '<img src="styles/legend/Antropogentlandskab_2.png" /> Antropogent landskab'
            });
var format_Bundmorneflade_3 = new ol.format.GeoJSON();
var features_Bundmorneflade_3 = format_Bundmorneflade_3.readFeatures(json_Bundmorneflade_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bundmorneflade_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bundmorneflade_3.addFeatures(features_Bundmorneflade_3);
var lyr_Bundmorneflade_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bundmorneflade_3, 
                style: style_Bundmorneflade_3,
                popuplayertitle: 'Bundmoræneflade',
                interactive: true,
                title: '<img src="styles/legend/Bundmorneflade_3.png" /> Bundmoræneflade'
            });
var format_Ddislandskab_4 = new ol.format.GeoJSON();
var features_Ddislandskab_4 = format_Ddislandskab_4.readFeatures(json_Ddislandskab_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ddislandskab_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ddislandskab_4.addFeatures(features_Ddislandskab_4);
var lyr_Ddislandskab_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ddislandskab_4, 
                style: style_Ddislandskab_4,
                popuplayertitle: 'Dødislandskab',
                interactive: true,
                title: '<img src="styles/legend/Ddislandskab_4.png" /> Dødislandskab'
            });
var format_Erosionsdal_5 = new ol.format.GeoJSON();
var features_Erosionsdal_5 = format_Erosionsdal_5.readFeatures(json_Erosionsdal_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Erosionsdal_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Erosionsdal_5.addFeatures(features_Erosionsdal_5);
var lyr_Erosionsdal_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Erosionsdal_5, 
                style: style_Erosionsdal_5,
                popuplayertitle: 'Erosionsdal',
                interactive: true,
                title: '<img src="styles/legend/Erosionsdal_5.png" /> Erosionsdal'
            });
var format_Marinflade_6 = new ol.format.GeoJSON();
var features_Marinflade_6 = format_Marinflade_6.readFeatures(json_Marinflade_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marinflade_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marinflade_6.addFeatures(features_Marinflade_6);
var lyr_Marinflade_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marinflade_6, 
                style: style_Marinflade_6,
                popuplayertitle: 'Marin flade',
                interactive: true,
                title: '<img src="styles/legend/Marinflade_6.png" /> Marin flade'
            });
var format_Mose_7 = new ol.format.GeoJSON();
var features_Mose_7 = format_Mose_7.readFeatures(json_Mose_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mose_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mose_7.addFeatures(features_Mose_7);
var lyr_Mose_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mose_7, 
                style: style_Mose_7,
                popuplayertitle: 'Mose',
                interactive: true,
                title: '<img src="styles/legend/Mose_7.png" /> Mose'
            });
var format_S_8 = new ol.format.GeoJSON();
var features_S_8 = format_S_8.readFeatures(json_S_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_8.addFeatures(features_S_8);
var lyr_S_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S_8, 
                style: style_S_8,
                popuplayertitle: 'Sø',
                interactive: true,
                title: '<img src="styles/legend/S_8.png" /> Sø'
            });
var format_Trlagtmarintforland_9 = new ol.format.GeoJSON();
var features_Trlagtmarintforland_9 = format_Trlagtmarintforland_9.readFeatures(json_Trlagtmarintforland_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trlagtmarintforland_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trlagtmarintforland_9.addFeatures(features_Trlagtmarintforland_9);
var lyr_Trlagtmarintforland_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trlagtmarintforland_9, 
                style: style_Trlagtmarintforland_9,
                popuplayertitle: 'Tørlagt marint forland',
                interactive: true,
                title: '<img src="styles/legend/Trlagtmarintforland_9.png" /> Tørlagt marint forland'
            });
var format_Isoverskredetrandmorne_10 = new ol.format.GeoJSON();
var features_Isoverskredetrandmorne_10 = format_Isoverskredetrandmorne_10.readFeatures(json_Isoverskredetrandmorne_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isoverskredetrandmorne_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoverskredetrandmorne_10.addFeatures(features_Isoverskredetrandmorne_10);
var lyr_Isoverskredetrandmorne_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isoverskredetrandmorne_10, 
                style: style_Isoverskredetrandmorne_10,
                popuplayertitle: 'Isoverskredet randmoræne',
                interactive: true,
                title: '<img src="styles/legend/Isoverskredetrandmorne_10.png" /> Isoverskredet randmoræne'
            });
var format_Vandlb100mbuffer_11 = new ol.format.GeoJSON();
var features_Vandlb100mbuffer_11 = format_Vandlb100mbuffer_11.readFeatures(json_Vandlb100mbuffer_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb100mbuffer_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb100mbuffer_11.addFeatures(features_Vandlb100mbuffer_11);
var lyr_Vandlb100mbuffer_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb100mbuffer_11, 
                style: style_Vandlb100mbuffer_11,
                popuplayertitle: 'Vandløb 100m buffer',
                interactive: true,
                title: '<img src="styles/legend/Vandlb100mbuffer_11.png" /> Vandløb 100m buffer'
            });
var format_Vandlb20mbuffer_12 = new ol.format.GeoJSON();
var features_Vandlb20mbuffer_12 = format_Vandlb20mbuffer_12.readFeatures(json_Vandlb20mbuffer_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb20mbuffer_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb20mbuffer_12.addFeatures(features_Vandlb20mbuffer_12);
var lyr_Vandlb20mbuffer_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb20mbuffer_12, 
                style: style_Vandlb20mbuffer_12,
                popuplayertitle: 'Vandløb 20m buffer',
                interactive: true,
                title: '<img src="styles/legend/Vandlb20mbuffer_12.png" /> Vandløb 20m buffer'
            });
var format_Vandlb10mbuffer_13 = new ol.format.GeoJSON();
var features_Vandlb10mbuffer_13 = format_Vandlb10mbuffer_13.readFeatures(json_Vandlb10mbuffer_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb10mbuffer_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb10mbuffer_13.addFeatures(features_Vandlb10mbuffer_13);
var lyr_Vandlb10mbuffer_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb10mbuffer_13, 
                style: style_Vandlb10mbuffer_13,
                popuplayertitle: 'Vandløb 10m buffer',
                interactive: true,
                title: '<img src="styles/legend/Vandlb10mbuffer_13.png" /> Vandløb 10m buffer'
            });
var format_Vandlb2mbuffer_14 = new ol.format.GeoJSON();
var features_Vandlb2mbuffer_14 = format_Vandlb2mbuffer_14.readFeatures(json_Vandlb2mbuffer_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb2mbuffer_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb2mbuffer_14.addFeatures(features_Vandlb2mbuffer_14);
var lyr_Vandlb2mbuffer_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb2mbuffer_14, 
                style: style_Vandlb2mbuffer_14,
                popuplayertitle: 'Vandløb 2m buffer',
                interactive: true,
                title: '<img src="styles/legend/Vandlb2mbuffer_14.png" /> Vandløb 2m buffer'
            });
var format_Vandlb_15 = new ol.format.GeoJSON();
var features_Vandlb_15 = format_Vandlb_15.readFeatures(json_Vandlb_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb_15.addFeatures(features_Vandlb_15);
var lyr_Vandlb_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb_15, 
                style: style_Vandlb_15,
                popuplayertitle: 'Vandløb',
                interactive: true,
                title: '<img src="styles/legend/Vandlb_15.png" /> Vandløb'
            });
var format_Ser100mbuffer_16 = new ol.format.GeoJSON();
var features_Ser100mbuffer_16 = format_Ser100mbuffer_16.readFeatures(json_Ser100mbuffer_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser100mbuffer_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser100mbuffer_16.addFeatures(features_Ser100mbuffer_16);
var lyr_Ser100mbuffer_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser100mbuffer_16, 
                style: style_Ser100mbuffer_16,
                popuplayertitle: 'Søer 100m buffer',
                interactive: true,
                title: '<img src="styles/legend/Ser100mbuffer_16.png" /> Søer 100m buffer'
            });
var format_Ser20mbuffer_17 = new ol.format.GeoJSON();
var features_Ser20mbuffer_17 = format_Ser20mbuffer_17.readFeatures(json_Ser20mbuffer_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser20mbuffer_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser20mbuffer_17.addFeatures(features_Ser20mbuffer_17);
var lyr_Ser20mbuffer_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser20mbuffer_17, 
                style: style_Ser20mbuffer_17,
                popuplayertitle: 'Søer 20m buffer',
                interactive: true,
                title: '<img src="styles/legend/Ser20mbuffer_17.png" /> Søer 20m buffer'
            });
var format_Ser10mbuffer_18 = new ol.format.GeoJSON();
var features_Ser10mbuffer_18 = format_Ser10mbuffer_18.readFeatures(json_Ser10mbuffer_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser10mbuffer_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser10mbuffer_18.addFeatures(features_Ser10mbuffer_18);
var lyr_Ser10mbuffer_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser10mbuffer_18, 
                style: style_Ser10mbuffer_18,
                popuplayertitle: 'Søer 10m buffer',
                interactive: true,
                title: '<img src="styles/legend/Ser10mbuffer_18.png" /> Søer 10m buffer'
            });
var format_Ser2mbuffer_19 = new ol.format.GeoJSON();
var features_Ser2mbuffer_19 = format_Ser2mbuffer_19.readFeatures(json_Ser2mbuffer_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser2mbuffer_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser2mbuffer_19.addFeatures(features_Ser2mbuffer_19);
var lyr_Ser2mbuffer_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser2mbuffer_19, 
                style: style_Ser2mbuffer_19,
                popuplayertitle: 'Søer 2m buffer',
                interactive: true,
                title: '<img src="styles/legend/Ser2mbuffer_19.png" /> Søer 2m buffer'
            });
var format_Ser_20 = new ol.format.GeoJSON();
var features_Ser_20 = format_Ser_20.readFeatures(json_Ser_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser_20.addFeatures(features_Ser_20);
var lyr_Ser_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser_20, 
                style: style_Ser_20,
                popuplayertitle: 'Søer',
                interactive: true,
                title: '<img src="styles/legend/Ser_20.png" /> Søer'
            });
var format_Jordforureningvidenniveau2V2_21 = new ol.format.GeoJSON();
var features_Jordforureningvidenniveau2V2_21 = format_Jordforureningvidenniveau2V2_21.readFeatures(json_Jordforureningvidenniveau2V2_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jordforureningvidenniveau2V2_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jordforureningvidenniveau2V2_21.addFeatures(features_Jordforureningvidenniveau2V2_21);
var lyr_Jordforureningvidenniveau2V2_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jordforureningvidenniveau2V2_21, 
                style: style_Jordforureningvidenniveau2V2_21,
                popuplayertitle: 'Jordforurening videnniveau 2 (V2)',
                interactive: true,
                title: '<img src="styles/legend/Jordforureningvidenniveau2V2_21.png" /> Jordforurening videnniveau 2 (V2)'
            });
var format_Jordforureningvidenniveau1V1_22 = new ol.format.GeoJSON();
var features_Jordforureningvidenniveau1V1_22 = format_Jordforureningvidenniveau1V1_22.readFeatures(json_Jordforureningvidenniveau1V1_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jordforureningvidenniveau1V1_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jordforureningvidenniveau1V1_22.addFeatures(features_Jordforureningvidenniveau1V1_22);
var lyr_Jordforureningvidenniveau1V1_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jordforureningvidenniveau1V1_22, 
                style: style_Jordforureningvidenniveau1V1_22,
                popuplayertitle: 'Jordforurening videnniveau 1 (V1)',
                interactive: true,
                title: '<img src="styles/legend/Jordforureningvidenniveau1V1_22.png" /> Jordforurening videnniveau 1 (V1)'
            });
var format_RisikoforstningsskaderGEO_23 = new ol.format.GeoJSON();
var features_RisikoforstningsskaderGEO_23 = format_RisikoforstningsskaderGEO_23.readFeatures(json_RisikoforstningsskaderGEO_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RisikoforstningsskaderGEO_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RisikoforstningsskaderGEO_23.addFeatures(features_RisikoforstningsskaderGEO_23);
var lyr_RisikoforstningsskaderGEO_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RisikoforstningsskaderGEO_23, 
                style: style_RisikoforstningsskaderGEO_23,
                popuplayertitle: 'Risiko for sætningsskader (GEO)',
                interactive: true,
    title: 'Risiko for sætningsskader (GEO)<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_23_0.png" /> 0-0,01<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_23_1.png" /> 0,01-0,02<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_23_2.png" /> 0,02-0,05<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_23_3.png" /> 0,05-0,1<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_23_4.png" /> >0,1<br />' });
var format_RisikoforoversvmmelseKystdirektoratet_24 = new ol.format.GeoJSON();
var features_RisikoforoversvmmelseKystdirektoratet_24 = format_RisikoforoversvmmelseKystdirektoratet_24.readFeatures(json_RisikoforoversvmmelseKystdirektoratet_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RisikoforoversvmmelseKystdirektoratet_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RisikoforoversvmmelseKystdirektoratet_24.addFeatures(features_RisikoforoversvmmelseKystdirektoratet_24);
var lyr_RisikoforoversvmmelseKystdirektoratet_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RisikoforoversvmmelseKystdirektoratet_24, 
                style: style_RisikoforoversvmmelseKystdirektoratet_24,
                popuplayertitle: 'Risiko for oversvømmelse (Kystdirektoratet)',
                interactive: true,
                title: '<img src="styles/legend/RisikoforoversvmmelseKystdirektoratet_24.png" /> Risiko for oversvømmelse (Kystdirektoratet)'
            });
var format_Risikoforhavvandsindsivning_25 = new ol.format.GeoJSON();
var features_Risikoforhavvandsindsivning_25 = format_Risikoforhavvandsindsivning_25.readFeatures(json_Risikoforhavvandsindsivning_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Risikoforhavvandsindsivning_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Risikoforhavvandsindsivning_25.addFeatures(features_Risikoforhavvandsindsivning_25);
var lyr_Risikoforhavvandsindsivning_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Risikoforhavvandsindsivning_25, 
                style: style_Risikoforhavvandsindsivning_25,
                popuplayertitle: 'Risiko for havvandsindsivning',
                interactive: true,
    title: 'Risiko for havvandsindsivning<br />\
    <img src="styles/legend/Risikoforhavvandsindsivning_25_0.png" /> <br />' });
var format_Rrlagtevandlb_26 = new ol.format.GeoJSON();
var features_Rrlagtevandlb_26 = format_Rrlagtevandlb_26.readFeatures(json_Rrlagtevandlb_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rrlagtevandlb_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rrlagtevandlb_26.addFeatures(features_Rrlagtevandlb_26);
var lyr_Rrlagtevandlb_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rrlagtevandlb_26, 
                style: style_Rrlagtevandlb_26,
                popuplayertitle: 'Rørlagte vandløb',
                interactive: true,
                title: '<img src="styles/legend/Rrlagtevandlb_26.png" /> Rørlagte vandløb'
            });
var format_Gammelkystlinje18701899_27 = new ol.format.GeoJSON();
var features_Gammelkystlinje18701899_27 = format_Gammelkystlinje18701899_27.readFeatures(json_Gammelkystlinje18701899_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gammelkystlinje18701899_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gammelkystlinje18701899_27.addFeatures(features_Gammelkystlinje18701899_27);
var lyr_Gammelkystlinje18701899_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gammelkystlinje18701899_27, 
                style: style_Gammelkystlinje18701899_27,
                popuplayertitle: 'Gammel kystlinje (1870-1899)',
                interactive: true,
                title: '<img src="styles/legend/Gammelkystlinje18701899_27.png" /> Gammel kystlinje (1870-1899)'
            });
var format_EngeogMoser18701899_28 = new ol.format.GeoJSON();
var features_EngeogMoser18701899_28 = format_EngeogMoser18701899_28.readFeatures(json_EngeogMoser18701899_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EngeogMoser18701899_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EngeogMoser18701899_28.addFeatures(features_EngeogMoser18701899_28);
var lyr_EngeogMoser18701899_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EngeogMoser18701899_28, 
                style: style_EngeogMoser18701899_28,
                popuplayertitle: 'Enge og Moser (1870-1899)',
                interactive: true,
                title: '<img src="styles/legend/EngeogMoser18701899_28.png" /> Enge og Moser (1870-1899)'
            });
var format_Habitatomrder_29 = new ol.format.GeoJSON();
var features_Habitatomrder_29 = format_Habitatomrder_29.readFeatures(json_Habitatomrder_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Habitatomrder_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Habitatomrder_29.addFeatures(features_Habitatomrder_29);
var lyr_Habitatomrder_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Habitatomrder_29, 
                style: style_Habitatomrder_29,
                popuplayertitle: 'Habitat områder',
                interactive: true,
                title: '<img src="styles/legend/Habitatomrder_29.png" /> Habitat områder'
            });
var format_Frededeomrder_30 = new ol.format.GeoJSON();
var features_Frededeomrder_30 = format_Frededeomrder_30.readFeatures(json_Frededeomrder_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_30.addFeatures(features_Frededeomrder_30);
var lyr_Frededeomrder_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_30, 
                style: style_Frededeomrder_30,
                popuplayertitle: 'Fredede områder',
                interactive: true,
                title: '<img src="styles/legend/Frededeomrder_30.png" /> Fredede områder'
            });
var format_Spildevandskloakeret_31 = new ol.format.GeoJSON();
var features_Spildevandskloakeret_31 = format_Spildevandskloakeret_31.readFeatures(json_Spildevandskloakeret_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spildevandskloakeret_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spildevandskloakeret_31.addFeatures(features_Spildevandskloakeret_31);
var lyr_Spildevandskloakeret_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spildevandskloakeret_31, 
                style: style_Spildevandskloakeret_31,
                popuplayertitle: 'Spildevandskloakeret',
                interactive: true,
                title: '<img src="styles/legend/Spildevandskloakeret_31.png" /> Spildevandskloakeret'
            });
var format_Ingenkloakering_32 = new ol.format.GeoJSON();
var features_Ingenkloakering_32 = format_Ingenkloakering_32.readFeatures(json_Ingenkloakering_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ingenkloakering_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ingenkloakering_32.addFeatures(features_Ingenkloakering_32);
var lyr_Ingenkloakering_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ingenkloakering_32, 
                style: style_Ingenkloakering_32,
                popuplayertitle: 'Ingen kloakering',
                interactive: true,
                title: '<img src="styles/legend/Ingenkloakering_32.png" /> Ingen kloakering'
            });
var format_VedtagetSeperatkloakering_33 = new ol.format.GeoJSON();
var features_VedtagetSeperatkloakering_33 = format_VedtagetSeperatkloakering_33.readFeatures(json_VedtagetSeperatkloakering_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VedtagetSeperatkloakering_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VedtagetSeperatkloakering_33.addFeatures(features_VedtagetSeperatkloakering_33);
var lyr_VedtagetSeperatkloakering_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VedtagetSeperatkloakering_33, 
                style: style_VedtagetSeperatkloakering_33,
                popuplayertitle: 'Vedtaget Seperatkloakering',
                interactive: true,
                title: '<img src="styles/legend/VedtagetSeperatkloakering_33.png" /> Vedtaget Seperatkloakering'
            });
var format_Kbenhavn_34 = new ol.format.GeoJSON();
var features_Kbenhavn_34 = format_Kbenhavn_34.readFeatures(json_Kbenhavn_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kbenhavn_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kbenhavn_34.addFeatures(features_Kbenhavn_34);
var lyr_Kbenhavn_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kbenhavn_34, 
                style: style_Kbenhavn_34,
                popuplayertitle: 'København',
                interactive: true,
                title: '<img src="styles/legend/Kbenhavn_34.png" /> København'
            });

var group_Jordforurening = new ol.layer.Group({
                                layers: [lyr_Jordforureningvidenniveau2V2_21,lyr_Jordforureningvidenniveau1V1_22,],
                                fold: 'close',
                                title: 'Jordforurening'});

var group_Kbenhavn = new ol.layer.Group({
                                layers: [lyr_Kbenhavn_34,],
                                fold: 'close',
                                title: 'København'});
var group_Vandloeb = new ol.layer.Group({
                                layers: [
                                    lyr_Vandlb_15,
                                    lyr_Vandlb2mbuffer_14,
                                    lyr_Vandlb10mbuffer_13,
                                    lyr_Vandlb20mbuffer_12,
                                    lyr_Vandlb100mbuffer_11,
                                ],
                                fold: 'close',
                                title: 'Vandløb'});

var group_soer = new ol.layer.Group({
                                layers: [
                                    lyr_Ser_20,
                                    lyr_Ser2mbuffer_19,
                                    lyr_Ser10mbuffer_18,
                                    lyr_Ser20mbuffer_17,
                                    lyr_Ser100mbuffer_16,
                                ],
                                fold: 'close',
                                title: 'Søer'});
var group_bagrundskort = new ol.layer.Group({
                                layers: [lyr_ESRIGraylight_0, lyr_OpenStreetMap_1,],
                                fold: 'close',
                                title: 'bagrundskort'});

var group_kloakering = new ol.layer.Group({
                                layers: [lyr_Ingenkloakering_32, lyr_Spildevandskloakeret_31, lyr_VedtagetSeperatkloakering_33],
                                fold: 'open',
                                title: 'Kloakering'});

                



var group_IKKEkort = new ol.layer.Group({
    layers: [
        group_kloakering
    ],
    fold: 'open',
    title: '"IKKE" kort'
})

var group_MSKEIKKEkort = new ol.layer.Group({
                                layers: [
                                lyr_RisikoforoversvmmelseKystdirektoratet_24,
                                lyr_RisikoforstningsskaderGEO_23,
                                group_soer, 
                                group_Vandloeb,
                                lyr_Risikoforhavvandsindsivning_25,
                                lyr_Rrlagtevandlb_26,
                                lyr_Gammelkystlinje18701899_27,  
                                group_Jordforurening,
                                lyr_Frededeomrder_30,
                                lyr_Habitatomrder_29,
                                lyr_EngeogMoser18701899_28,
                            ],
                                fold: 'open',
                                title: '"MÅSKE IKKE" kort'
});

var group_GeomorfologiGEUS = new ol.layer.Group({
                                layers: [
                                    lyr_Bundmorneflade_3,
                                    lyr_Ddislandskab_4,
                                    lyr_Mose_7,
                                    lyr_S_8,
                                    lyr_Erosionsdal_5,
                                    lyr_Isoverskredetrandmorne_10,
                                    lyr_Marinflade_6,
                                    lyr_Trlagtmarintforland_9,
                                    lyr_Antropogentlandskab_2,
                                ],
                                fold: 'close',
                                title: 'Geomorfologi (GEUS)'});



lyr_ESRIGraylight_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_Antropogentlandskab_2.setVisible(false);lyr_Bundmorneflade_3.setVisible(false);lyr_Ddislandskab_4.setVisible(false);lyr_Erosionsdal_5.setVisible(false);lyr_Marinflade_6.setVisible(false);lyr_Mose_7.setVisible(false);lyr_S_8.setVisible(false);lyr_Trlagtmarintforland_9.setVisible(false);lyr_Isoverskredetrandmorne_10.setVisible(false);lyr_Vandlb100mbuffer_11.setVisible(false);lyr_Vandlb20mbuffer_12.setVisible(false);lyr_Vandlb10mbuffer_13.setVisible(false);lyr_Vandlb2mbuffer_14.setVisible(false);lyr_Vandlb_15.setVisible(false);lyr_Ser100mbuffer_16.setVisible(false);lyr_Ser20mbuffer_17.setVisible(false);lyr_Ser10mbuffer_18.setVisible(false);lyr_Ser2mbuffer_19.setVisible(false);lyr_Ser_20.setVisible(false);lyr_Jordforureningvidenniveau2V2_21.setVisible(true);lyr_Jordforureningvidenniveau1V1_22.setVisible(true);lyr_RisikoforstningsskaderGEO_23.setVisible(false);lyr_RisikoforoversvmmelseKystdirektoratet_24.setVisible(false);lyr_Risikoforhavvandsindsivning_25.setVisible(false);lyr_Rrlagtevandlb_26.setVisible(true);lyr_Gammelkystlinje18701899_27.setVisible(true);lyr_EngeogMoser18701899_28.setVisible(true);lyr_Habitatomrder_29.setVisible(true);lyr_Frededeomrder_30.setVisible(true);lyr_Spildevandskloakeret_31.setVisible(true);lyr_Ingenkloakering_32.setVisible(true);lyr_VedtagetSeperatkloakering_33.setVisible(true);lyr_Kbenhavn_34.setVisible(true);
var layersList = [group_bagrundskort, group_GeomorfologiGEUS, group_MSKEIKKEkort, group_IKKEkort];
lyr_Antropogentlandskab_2.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Bundmorneflade_3.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Ddislandskab_4.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Erosionsdal_5.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Marinflade_6.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Mose_7.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_S_8.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Trlagtmarintforland_9.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Isoverskredetrandmorne_10.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Vandlb100mbuffer_11.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Vandlb20mbuffer_12.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Vandlb10mbuffer_13.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Vandlb2mbuffer_14.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Vandlb_15.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Ser100mbuffer_16.set('fieldAliases', {'fid': 'fid', 'FOT_ID': 'FOT_ID', 'MOB_ID': 'MOB_ID', 'FEAT_KODE': 'FEAT_KODE', 'FEAT_TYPE': 'FEAT_TYPE', 'FEATSTATUS': 'FEATSTATUS', 'GEOMSTATUS': 'GEOMSTATUS', 'SOETYPE': 'SOETYPE', 'SALT_SOE': 'SALT_SOE', 'TEMPORAER': 'TEMPORAER', 'UNDER_MIN': 'UNDER_MIN', 'OE_UNDER': 'OE_UNDER', 'TIMEOF_CRE': 'TIMEOF_CRE', 'TIMEOF_PUB': 'TIMEOF_PUB', 'TIMEOF_REV': 'TIMEOF_REV', 'TIMEOF_EXP': 'TIMEOF_EXP', });
lyr_Ser20mbuffer_17.set('fieldAliases', {'fid': 'fid', 'FOT_ID': 'FOT_ID', 'MOB_ID': 'MOB_ID', 'FEAT_KODE': 'FEAT_KODE', 'FEAT_TYPE': 'FEAT_TYPE', 'FEATSTATUS': 'FEATSTATUS', 'GEOMSTATUS': 'GEOMSTATUS', 'SOETYPE': 'SOETYPE', 'SALT_SOE': 'SALT_SOE', 'TEMPORAER': 'TEMPORAER', 'UNDER_MIN': 'UNDER_MIN', 'OE_UNDER': 'OE_UNDER', 'TIMEOF_CRE': 'TIMEOF_CRE', 'TIMEOF_PUB': 'TIMEOF_PUB', 'TIMEOF_REV': 'TIMEOF_REV', 'TIMEOF_EXP': 'TIMEOF_EXP', });
lyr_Ser10mbuffer_18.set('fieldAliases', {'fid': 'fid', 'FOT_ID': 'FOT_ID', 'MOB_ID': 'MOB_ID', 'FEAT_KODE': 'FEAT_KODE', 'FEAT_TYPE': 'FEAT_TYPE', 'FEATSTATUS': 'FEATSTATUS', 'GEOMSTATUS': 'GEOMSTATUS', 'SOETYPE': 'SOETYPE', 'SALT_SOE': 'SALT_SOE', 'TEMPORAER': 'TEMPORAER', 'UNDER_MIN': 'UNDER_MIN', 'OE_UNDER': 'OE_UNDER', 'TIMEOF_CRE': 'TIMEOF_CRE', 'TIMEOF_PUB': 'TIMEOF_PUB', 'TIMEOF_REV': 'TIMEOF_REV', 'TIMEOF_EXP': 'TIMEOF_EXP', });
lyr_Ser2mbuffer_19.set('fieldAliases', {'fid': 'fid', 'FOT_ID': 'FOT_ID', 'MOB_ID': 'MOB_ID', 'FEAT_KODE': 'FEAT_KODE', 'FEAT_TYPE': 'FEAT_TYPE', 'FEATSTATUS': 'FEATSTATUS', 'GEOMSTATUS': 'GEOMSTATUS', 'SOETYPE': 'SOETYPE', 'SALT_SOE': 'SALT_SOE', 'TEMPORAER': 'TEMPORAER', 'UNDER_MIN': 'UNDER_MIN', 'OE_UNDER': 'OE_UNDER', 'TIMEOF_CRE': 'TIMEOF_CRE', 'TIMEOF_PUB': 'TIMEOF_PUB', 'TIMEOF_REV': 'TIMEOF_REV', 'TIMEOF_EXP': 'TIMEOF_EXP', });
lyr_Ser_20.set('fieldAliases', {'fid': 'fid', 'FOT_ID': 'FOT_ID', 'MOB_ID': 'MOB_ID', 'FEAT_KODE': 'FEAT_KODE', 'FEAT_TYPE': 'FEAT_TYPE', 'FEATSTATUS': 'FEATSTATUS', 'GEOMSTATUS': 'GEOMSTATUS', 'SOETYPE': 'SOETYPE', 'SALT_SOE': 'SALT_SOE', 'TEMPORAER': 'TEMPORAER', 'UNDER_MIN': 'UNDER_MIN', 'OE_UNDER': 'OE_UNDER', 'TIMEOF_CRE': 'TIMEOF_CRE', 'TIMEOF_PUB': 'TIMEOF_PUB', 'TIMEOF_REV': 'TIMEOF_REV', 'TIMEOF_EXP': 'TIMEOF_EXP', });
lyr_Jordforureningvidenniveau2V2_21.set('fieldAliases', {'fid': 'fid', 'Objekt_id': 'Objekt_id', 'SenesteInddateringsdato': 'SenesteInddateringsdato', 'Lokalitetsnr': 'Lokalitetsnr', 'Lokalitetetsforureningsstatus': 'Lokalitetetsforureningsstatus', 'Lokalitetetsadresse': 'Lokalitetetsadresse', 'Regionsnavn': 'Regionsnavn', 'Lokalitetsejerlavkode': 'Lokalitetsejerlavkode', 'Lokalitetsmatrikler': 'Lokalitetsmatrikler', 'Kortlaegningsdato': 'Kortlaegningsdato', 'Jordforureningsattester': 'Jordforureningsattester', });
lyr_Jordforureningvidenniveau1V1_22.set('fieldAliases', {'fid': 'fid', 'Objekt_id': 'Objekt_id', 'SenesteInddateringsdato': 'SenesteInddateringsdato', 'Lokalitetsnr': 'Lokalitetsnr', 'Lokalitetetsforureningsstatus': 'Lokalitetetsforureningsstatus', 'Lokalitetetsadresse': 'Lokalitetetsadresse', 'Regionsnavn': 'Regionsnavn', 'Lokalitetsejerlavkode': 'Lokalitetsejerlavkode', 'Lokalitetsmatrikler': 'Lokalitetsmatrikler', 'Kortlaegningsdato': 'Kortlaegningsdato', 'Jordforureningsattester': 'Jordforureningsattester', });
lyr_RisikoforstningsskaderGEO_23.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_RisikoforoversvmmelseKystdirektoratet_24.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Risikoforhavvandsindsivning_25.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Rrlagtevandlb_26.set('fieldAliases', {'fid': 'fid', 'LED_OPSTROEMSKNUDE': 'LED_OPSTROEMSKNUDE', 'LED_NEDSTROEMSKNUDE': 'LED_NEDSTROEMSKNUDE', 'BUNDLOEBSKOTEOPST': 'BUNDLOEBSKOTEOPST', 'BUNDLOEBSKOTENEDST': 'BUNDLOEBSKOTENEDST', 'LED_LAENGDE': 'LED_LAENGDE', 'FALD': 'FALD', 'LABELTEXT': 'LABELTEXT', 'EJERNAVN': 'EJERNAVN', 'EJERNAVN_DD': 'EJERNAVN_DD', 'EJERANDEL': 'EJERANDEL', 'DRIFTANSVARLIG': 'DRIFTANSVARLIG', 'STATUS_DD': 'STATUS_DD', 'KATEGORIAFLOEB': 'KATEGORIAFLOEB', 'TYPEAFLOEB': 'TYPEAFLOEB', 'LEDNFUNKTION': 'LEDNFUNKTION', 'TRANSPORT': 'TRANSPORT', 'TILLADTILSLUT': 'TILLADTILSLUT', 'DYK': 'DYK', 'ENTREPRENOER': 'ENTREPRENOER', 'LED_BEMAERKNING': 'LED_BEMAERKNING', 'SANERINGSMETODE': 'SANERINGSMETODE', 'SANERINGSFIRMA': 'SANERINGSFIRMA', 'ETABLERETTIDL': 'ETABLERETTIDL', 'DEL_DATOETABLERET': 'DEL_DATOETABLERET', 'DATOSANERING': 'DATOSANERING', 'DATOOPDATERET': 'DATOOPDATERET', 'LED_DATOHISTORISK': 'LED_DATOHISTORISK', 'STATUSDATO': 'STATUSDATO', 'LOKALITETSNAVN': 'LOKALITETSNAVN', 'DOBBELTLEDNNR': 'DOBBELTLEDNNR', 'DEL_OPSTROEMSKNUDE': 'DEL_OPSTROEMSKNUDE', 'DEL_NEDSTROEMSKNUDE': 'DEL_NEDSTROEMSKNUDE', 'DEL_LAENGDE': 'DEL_LAENGDE', 'DEL_BEMAERKNING': 'DEL_BEMAERKNING', 'MATERIALE': 'MATERIALE', 'TVAERSNIT': 'TVAERSNIT', 'HANDELSMAAL': 'HANDELSMAAL', 'DIAMETERINDV': 'DIAMETERINDV', 'FORING_DIAM_INDV': 'FORING_DIAM_INDV', 'HOEJDEINDV': 'HOEJDEINDV', 'GODSTYKKELSE': 'GODSTYKKELSE', 'FORING_GODSTYKKELSE': 'FORING_GODSTYKKELSE', 'MUFFEBREDDE': 'MUFFEBREDDE', 'MUFFEHOEJDE': 'MUFFEHOEJDE', 'MEDFOD': 'MEDFOD', 'SDRKODE': 'SDRKODE', 'ROERBEMAERKNING': 'ROERBEMAERKNING', 'OPRIND_DIMENSION': 'OPRIND_DIMENSION', 'OPRIND_OPSTROEMSKOTE': 'OPRIND_OPSTROEMSKOTE', 'OPRIND_NEDSTROEMSKOTE': 'OPRIND_NEDSTROEMSKOTE', 'STATUSKODE': 'STATUSKODE', 'TYPEAFLOEBKODE': 'TYPEAFLOEBKODE', 'KATEGORIAFLOEBKODE': 'KATEGORIAFLOEBKODE', 'LEDNINGID': 'LEDNINGID', 'DELLEDNINGSID': 'DELLEDNINGSID', 'ROERKATALOGID': 'ROERKATALOGID', 'EJERKODE': 'EJERKODE', 'EJERKODE_DD': 'EJERKODE_DD', 'MI_STYLE2': 'MI_STYLE2', 'THEME_ATTR1': 'THEME_ATTR1', });
lyr_Gammelkystlinje18701899_27.set('fieldAliases', {'fid': 'fid', });
lyr_EngeogMoser18701899_28.set('fieldAliases', {'fid': 'fid', });
lyr_Habitatomrder_29.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_length': 'Shape_length', 'Site_nr': 'Site_nr', 'Objektnavn': 'Objektnavn', 'Loc_ident': 'Loc_ident', 'Site_ident': 'Site_ident', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Frededeomrder_30.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_length': 'Shape_length', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Spildevandskloakeret_31.set('fieldAliases', {'fid': 'fid', 'doklink': 'doklink', 'uuid': 'uuid', 'temakode': 'temakode', 'temanavn': 'temanavn', 'objekt_id': 'objekt_id', 'systid_fra': 'systid_fra', 'oprettet': 'oprettet', 'oprindkode': 'oprindkode', 'oprindelse': 'oprindelse', 'statuskode': 'statuskode', 'status': 'status', 'cvr_kode': 'cvr_kode', 'cvrname': 'cvrname', 'bruger_id': 'bruger_id', 'link': 'link', 'navn1201': 'navn1201', 'type1201a': 'type1201a', 'vaerd1201a': 'vaerd1201a', 'type1201b': 'type1201b', 'vaerd1201b': 'vaerd1201b', 'staar1201': 'staar1201', 'sluaar1201': 'sluaar1201', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datostart': 'datostart', 'datoslut': 'datoslut', });
lyr_Ingenkloakering_32.set('fieldAliases', {'fid': 'fid', 'doklink': 'doklink', 'uuid': 'uuid', 'temakode': 'temakode', 'temanavn': 'temanavn', 'objekt_id': 'objekt_id', 'systid_fra': 'systid_fra', 'oprettet': 'oprettet', 'oprindkode': 'oprindkode', 'oprindelse': 'oprindelse', 'statuskode': 'statuskode', 'status': 'status', 'cvr_kode': 'cvr_kode', 'cvrname': 'cvrname', 'bruger_id': 'bruger_id', 'link': 'link', 'navn1201': 'navn1201', 'type1201a': 'type1201a', 'vaerd1201a': 'vaerd1201a', 'type1201b': 'type1201b', 'vaerd1201b': 'vaerd1201b', 'staar1201': 'staar1201', 'sluaar1201': 'sluaar1201', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datostart': 'datostart', 'datoslut': 'datoslut', 'CG_ID': 'CG_ID', 'navn': 'navn', 'regionskode': 'regionskode', 'udtraeksdato': 'udtraeksdato', 'kommunekode': 'kommunekode', 'udenforkommuneinddeling': 'udenforkommuneinddeling', 'area': 'area', 'layer': 'layer', 'path': 'path', });
lyr_VedtagetSeperatkloakering_33.set('fieldAliases', {'fid': 'fid', 'doklink': 'doklink', 'uuid': 'uuid', 'temakode': 'temakode', 'temanavn': 'temanavn', 'objekt_id': 'objekt_id', 'systid_fra': 'systid_fra', 'oprettet': 'oprettet', 'oprindkode': 'oprindkode', 'oprindelse': 'oprindelse', 'statuskode': 'statuskode', 'status': 'status', 'cvr_kode': 'cvr_kode', 'cvrname': 'cvrname', 'bruger_id': 'bruger_id', 'link': 'link', 'navn1201': 'navn1201', 'type1201a': 'type1201a', 'vaerd1201a': 'vaerd1201a', 'type1201b': 'type1201b', 'vaerd1201b': 'vaerd1201b', 'staar1201': 'staar1201', 'sluaar1201': 'sluaar1201', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datostart': 'datostart', 'datoslut': 'datoslut', });
lyr_Kbenhavn_34.set('fieldAliases', {'fid': 'fid', 'navn': 'navn', });
lyr_Antropogentlandskab_2.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'Range', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Bundmorneflade_3.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'TextEdit', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Ddislandskab_4.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'TextEdit', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Erosionsdal_5.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'TextEdit', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Marinflade_6.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'TextEdit', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Mose_7.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'Range', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_S_8.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'Range', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Trlagtmarintforland_9.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'TextEdit', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Isoverskredetrandmorne_10.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'TextEdit', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Vandlb100mbuffer_11.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vandlb20mbuffer_12.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vandlb10mbuffer_13.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vandlb2mbuffer_14.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vandlb_15.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Ser100mbuffer_16.set('fieldImages', {'fid': 'TextEdit', 'FOT_ID': 'Range', 'MOB_ID': 'Range', 'FEAT_KODE': 'Range', 'FEAT_TYPE': 'TextEdit', 'FEATSTATUS': 'TextEdit', 'GEOMSTATUS': 'TextEdit', 'SOETYPE': 'TextEdit', 'SALT_SOE': 'TextEdit', 'TEMPORAER': 'TextEdit', 'UNDER_MIN': 'TextEdit', 'OE_UNDER': 'TextEdit', 'TIMEOF_CRE': 'DateTime', 'TIMEOF_PUB': 'DateTime', 'TIMEOF_REV': 'DateTime', 'TIMEOF_EXP': 'DateTime', });
lyr_Ser20mbuffer_17.set('fieldImages', {'fid': 'TextEdit', 'FOT_ID': 'Range', 'MOB_ID': 'Range', 'FEAT_KODE': 'Range', 'FEAT_TYPE': 'TextEdit', 'FEATSTATUS': 'TextEdit', 'GEOMSTATUS': 'TextEdit', 'SOETYPE': 'TextEdit', 'SALT_SOE': 'TextEdit', 'TEMPORAER': 'TextEdit', 'UNDER_MIN': 'TextEdit', 'OE_UNDER': 'TextEdit', 'TIMEOF_CRE': 'DateTime', 'TIMEOF_PUB': 'DateTime', 'TIMEOF_REV': 'DateTime', 'TIMEOF_EXP': 'DateTime', });
lyr_Ser10mbuffer_18.set('fieldImages', {'fid': 'TextEdit', 'FOT_ID': 'Range', 'MOB_ID': 'Range', 'FEAT_KODE': 'Range', 'FEAT_TYPE': 'TextEdit', 'FEATSTATUS': 'TextEdit', 'GEOMSTATUS': 'TextEdit', 'SOETYPE': 'TextEdit', 'SALT_SOE': 'TextEdit', 'TEMPORAER': 'TextEdit', 'UNDER_MIN': 'TextEdit', 'OE_UNDER': 'TextEdit', 'TIMEOF_CRE': 'DateTime', 'TIMEOF_PUB': 'DateTime', 'TIMEOF_REV': 'DateTime', 'TIMEOF_EXP': 'DateTime', });
lyr_Ser2mbuffer_19.set('fieldImages', {'fid': 'TextEdit', 'FOT_ID': 'Range', 'MOB_ID': 'Range', 'FEAT_KODE': 'Range', 'FEAT_TYPE': 'TextEdit', 'FEATSTATUS': 'TextEdit', 'GEOMSTATUS': 'TextEdit', 'SOETYPE': 'TextEdit', 'SALT_SOE': 'TextEdit', 'TEMPORAER': 'TextEdit', 'UNDER_MIN': 'TextEdit', 'OE_UNDER': 'TextEdit', 'TIMEOF_CRE': 'DateTime', 'TIMEOF_PUB': 'DateTime', 'TIMEOF_REV': 'DateTime', 'TIMEOF_EXP': 'DateTime', });
lyr_Ser_20.set('fieldImages', {'fid': 'TextEdit', 'FOT_ID': 'Range', 'MOB_ID': 'Range', 'FEAT_KODE': 'Range', 'FEAT_TYPE': 'TextEdit', 'FEATSTATUS': 'TextEdit', 'GEOMSTATUS': 'TextEdit', 'SOETYPE': 'TextEdit', 'SALT_SOE': 'TextEdit', 'TEMPORAER': 'TextEdit', 'UNDER_MIN': 'TextEdit', 'OE_UNDER': 'TextEdit', 'TIMEOF_CRE': 'DateTime', 'TIMEOF_PUB': 'DateTime', 'TIMEOF_REV': 'DateTime', 'TIMEOF_EXP': 'DateTime', });
lyr_Jordforureningvidenniveau2V2_21.set('fieldImages', {'fid': 'TextEdit', 'Objekt_id': 'TextEdit', 'SenesteInddateringsdato': 'DateTime', 'Lokalitetsnr': 'TextEdit', 'Lokalitetetsforureningsstatus': 'TextEdit', 'Lokalitetetsadresse': 'TextEdit', 'Regionsnavn': 'TextEdit', 'Lokalitetsejerlavkode': 'Range', 'Lokalitetsmatrikler': 'TextEdit', 'Kortlaegningsdato': 'DateTime', 'Jordforureningsattester': 'TextEdit', });
lyr_Jordforureningvidenniveau1V1_22.set('fieldImages', {'fid': 'TextEdit', 'Objekt_id': 'TextEdit', 'SenesteInddateringsdato': 'DateTime', 'Lokalitetsnr': 'TextEdit', 'Lokalitetetsforureningsstatus': 'TextEdit', 'Lokalitetetsadresse': 'TextEdit', 'Regionsnavn': 'TextEdit', 'Lokalitetsejerlavkode': 'Range', 'Lokalitetsmatrikler': 'TextEdit', 'Kortlaegningsdato': 'DateTime', 'Jordforureningsattester': 'TextEdit', });
lyr_RisikoforstningsskaderGEO_23.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_RisikoforoversvmmelseKystdirektoratet_24.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_Risikoforhavvandsindsivning_25.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_Rrlagtevandlb_26.set('fieldImages', {'fid': 'TextEdit', 'LED_OPSTROEMSKNUDE': 'TextEdit', 'LED_NEDSTROEMSKNUDE': 'TextEdit', 'BUNDLOEBSKOTEOPST': 'TextEdit', 'BUNDLOEBSKOTENEDST': 'TextEdit', 'LED_LAENGDE': 'TextEdit', 'FALD': 'TextEdit', 'LABELTEXT': 'TextEdit', 'EJERNAVN': 'TextEdit', 'EJERNAVN_DD': 'TextEdit', 'EJERANDEL': 'TextEdit', 'DRIFTANSVARLIG': 'TextEdit', 'STATUS_DD': 'TextEdit', 'KATEGORIAFLOEB': 'TextEdit', 'TYPEAFLOEB': 'TextEdit', 'LEDNFUNKTION': 'TextEdit', 'TRANSPORT': 'TextEdit', 'TILLADTILSLUT': 'TextEdit', 'DYK': 'TextEdit', 'ENTREPRENOER': 'TextEdit', 'LED_BEMAERKNING': 'TextEdit', 'SANERINGSMETODE': 'TextEdit', 'SANERINGSFIRMA': 'TextEdit', 'ETABLERETTIDL': 'TextEdit', 'DEL_DATOETABLERET': 'DateTime', 'DATOSANERING': 'DateTime', 'DATOOPDATERET': 'DateTime', 'LED_DATOHISTORISK': 'DateTime', 'STATUSDATO': 'DateTime', 'LOKALITETSNAVN': 'TextEdit', 'DOBBELTLEDNNR': 'Range', 'DEL_OPSTROEMSKNUDE': 'TextEdit', 'DEL_NEDSTROEMSKNUDE': 'TextEdit', 'DEL_LAENGDE': 'TextEdit', 'DEL_BEMAERKNING': 'TextEdit', 'MATERIALE': 'TextEdit', 'TVAERSNIT': 'TextEdit', 'HANDELSMAAL': 'Range', 'DIAMETERINDV': 'Range', 'FORING_DIAM_INDV': 'Range', 'HOEJDEINDV': 'Range', 'GODSTYKKELSE': 'Range', 'FORING_GODSTYKKELSE': 'Range', 'MUFFEBREDDE': 'Range', 'MUFFEHOEJDE': 'Range', 'MEDFOD': 'TextEdit', 'SDRKODE': 'Range', 'ROERBEMAERKNING': 'TextEdit', 'OPRIND_DIMENSION': 'TextEdit', 'OPRIND_OPSTROEMSKOTE': 'TextEdit', 'OPRIND_NEDSTROEMSKOTE': 'TextEdit', 'STATUSKODE': 'Range', 'TYPEAFLOEBKODE': 'Range', 'KATEGORIAFLOEBKODE': 'Range', 'LEDNINGID': 'Range', 'DELLEDNINGSID': 'Range', 'ROERKATALOGID': 'Range', 'EJERKODE': 'Range', 'EJERKODE_DD': 'Range', 'MI_STYLE2': 'TextEdit', 'THEME_ATTR1': 'TextEdit', });
lyr_Gammelkystlinje18701899_27.set('fieldImages', {'fid': 'TextEdit', });
lyr_EngeogMoser18701899_28.set('fieldImages', {'fid': 'TextEdit', });
lyr_Habitatomrder_29.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'Range', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'DateTime', 'Systid_til': 'DateTime', 'Oprettet': 'DateTime', 'Oprindkode': 'Range', 'Oprindelse': 'TextEdit', 'Statuskode': 'Range', 'Status': 'TextEdit', 'Off_kode': 'Range', 'Offentlig': 'TextEdit', 'CVR_kode': 'Range', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_length': 'TextEdit', 'Site_nr': 'Range', 'Objektnavn': 'TextEdit', 'Loc_ident': 'TextEdit', 'Site_ident': 'TextEdit', 'Gyldig_fra': 'DateTime', 'Gyldig_til': 'DateTime', });
lyr_Frededeomrder_30.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'Range', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'DateTime', 'Systid_til': 'DateTime', 'Oprettet': 'DateTime', 'Oprindkode': 'Range', 'Oprindelse': 'TextEdit', 'Statuskode': 'Range', 'Status': 'TextEdit', 'Off_kode': 'Range', 'Offentlig': 'TextEdit', 'CVR_kode': 'Range', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_length': 'TextEdit', 'Fred_tkode': 'Range', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'Range', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'Range', 'Gyldig_fra': 'DateTime', 'Gyldig_til': 'DateTime', });
lyr_Spildevandskloakeret_31.set('fieldImages', {'fid': 'TextEdit', 'doklink': 'TextEdit', 'uuid': 'TextEdit', 'temakode': 'Range', 'temanavn': 'TextEdit', 'objekt_id': 'Range', 'systid_fra': 'TextEdit', 'oprettet': 'TextEdit', 'oprindkode': 'Range', 'oprindelse': 'TextEdit', 'statuskode': 'Range', 'status': 'TextEdit', 'cvr_kode': 'TextEdit', 'cvrname': 'TextEdit', 'bruger_id': 'TextEdit', 'link': 'TextEdit', 'navn1201': 'TextEdit', 'type1201a': 'Range', 'vaerd1201a': 'TextEdit', 'type1201b': 'Range', 'vaerd1201b': 'TextEdit', 'staar1201': 'Range', 'sluaar1201': 'Range', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datostart': 'Range', 'datoslut': 'Range', });
lyr_Ingenkloakering_32.set('fieldImages', {'fid': 'TextEdit', 'doklink': 'TextEdit', 'uuid': 'TextEdit', 'temakode': 'Range', 'temanavn': 'TextEdit', 'objekt_id': 'Range', 'systid_fra': 'TextEdit', 'oprettet': 'TextEdit', 'oprindkode': 'Range', 'oprindelse': 'TextEdit', 'statuskode': 'Range', 'status': 'TextEdit', 'cvr_kode': 'TextEdit', 'cvrname': 'TextEdit', 'bruger_id': 'TextEdit', 'link': 'TextEdit', 'navn1201': 'TextEdit', 'type1201a': 'Range', 'vaerd1201a': 'TextEdit', 'type1201b': 'Range', 'vaerd1201b': 'TextEdit', 'staar1201': 'Range', 'sluaar1201': 'Range', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datostart': 'Range', 'datoslut': 'Range', 'CG_ID': 'Range', 'navn': 'TextEdit', 'regionskode': 'Range', 'udtraeksdato': 'DateTime', 'kommunekode': 'TextEdit', 'udenforkommuneinddeling': 'TextEdit', 'area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_VedtagetSeperatkloakering_33.set('fieldImages', {'fid': 'TextEdit', 'doklink': 'TextEdit', 'uuid': 'TextEdit', 'temakode': 'TextEdit', 'temanavn': 'TextEdit', 'objekt_id': 'TextEdit', 'systid_fra': 'TextEdit', 'oprettet': 'TextEdit', 'oprindkode': 'TextEdit', 'oprindelse': 'TextEdit', 'statuskode': 'TextEdit', 'status': 'TextEdit', 'cvr_kode': 'TextEdit', 'cvrname': 'TextEdit', 'bruger_id': 'TextEdit', 'link': 'TextEdit', 'navn1201': 'TextEdit', 'type1201a': 'TextEdit', 'vaerd1201a': 'TextEdit', 'type1201b': 'TextEdit', 'vaerd1201b': 'TextEdit', 'staar1201': 'TextEdit', 'sluaar1201': 'TextEdit', 'datoforsl': 'TextEdit', 'datovedt': 'TextEdit', 'datoaflyst': 'TextEdit', 'datoikraft': 'TextEdit', 'datostart': 'TextEdit', 'datoslut': 'TextEdit', });
lyr_Kbenhavn_34.set('fieldImages', {'fid': 'TextEdit', 'navn': 'TextEdit', });
lyr_Antropogentlandskab_2.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Bundmorneflade_3.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Ddislandskab_4.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Erosionsdal_5.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Marinflade_6.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Mose_7.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_S_8.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Trlagtmarintforland_9.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Isoverskredetrandmorne_10.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Vandlb100mbuffer_11.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vandlb20mbuffer_12.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vandlb10mbuffer_13.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vandlb2mbuffer_14.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vandlb_15.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Ser100mbuffer_16.set('fieldLabels', {'fid': 'no label', 'FOT_ID': 'no label', 'MOB_ID': 'no label', 'FEAT_KODE': 'no label', 'FEAT_TYPE': 'no label', 'FEATSTATUS': 'no label', 'GEOMSTATUS': 'no label', 'SOETYPE': 'no label', 'SALT_SOE': 'no label', 'TEMPORAER': 'no label', 'UNDER_MIN': 'no label', 'OE_UNDER': 'no label', 'TIMEOF_CRE': 'no label', 'TIMEOF_PUB': 'no label', 'TIMEOF_REV': 'no label', 'TIMEOF_EXP': 'no label', });
lyr_Ser20mbuffer_17.set('fieldLabels', {'fid': 'no label', 'FOT_ID': 'no label', 'MOB_ID': 'no label', 'FEAT_KODE': 'no label', 'FEAT_TYPE': 'no label', 'FEATSTATUS': 'no label', 'GEOMSTATUS': 'no label', 'SOETYPE': 'no label', 'SALT_SOE': 'no label', 'TEMPORAER': 'no label', 'UNDER_MIN': 'no label', 'OE_UNDER': 'no label', 'TIMEOF_CRE': 'no label', 'TIMEOF_PUB': 'no label', 'TIMEOF_REV': 'no label', 'TIMEOF_EXP': 'no label', });
lyr_Ser10mbuffer_18.set('fieldLabels', {'fid': 'no label', 'FOT_ID': 'no label', 'MOB_ID': 'no label', 'FEAT_KODE': 'no label', 'FEAT_TYPE': 'no label', 'FEATSTATUS': 'no label', 'GEOMSTATUS': 'no label', 'SOETYPE': 'no label', 'SALT_SOE': 'no label', 'TEMPORAER': 'no label', 'UNDER_MIN': 'no label', 'OE_UNDER': 'no label', 'TIMEOF_CRE': 'no label', 'TIMEOF_PUB': 'no label', 'TIMEOF_REV': 'no label', 'TIMEOF_EXP': 'no label', });
lyr_Ser2mbuffer_19.set('fieldLabels', {'fid': 'no label', 'FOT_ID': 'no label', 'MOB_ID': 'no label', 'FEAT_KODE': 'no label', 'FEAT_TYPE': 'no label', 'FEATSTATUS': 'no label', 'GEOMSTATUS': 'no label', 'SOETYPE': 'no label', 'SALT_SOE': 'no label', 'TEMPORAER': 'no label', 'UNDER_MIN': 'no label', 'OE_UNDER': 'no label', 'TIMEOF_CRE': 'no label', 'TIMEOF_PUB': 'no label', 'TIMEOF_REV': 'no label', 'TIMEOF_EXP': 'no label', });
lyr_Ser_20.set('fieldLabels', {'fid': 'no label', 'FOT_ID': 'no label', 'MOB_ID': 'no label', 'FEAT_KODE': 'no label', 'FEAT_TYPE': 'no label', 'FEATSTATUS': 'no label', 'GEOMSTATUS': 'no label', 'SOETYPE': 'no label', 'SALT_SOE': 'no label', 'TEMPORAER': 'no label', 'UNDER_MIN': 'no label', 'OE_UNDER': 'no label', 'TIMEOF_CRE': 'no label', 'TIMEOF_PUB': 'no label', 'TIMEOF_REV': 'no label', 'TIMEOF_EXP': 'no label', });
lyr_Jordforureningvidenniveau2V2_21.set('fieldLabels', {'fid': 'no label', 'Objekt_id': 'no label', 'SenesteInddateringsdato': 'no label', 'Lokalitetsnr': 'no label', 'Lokalitetetsforureningsstatus': 'no label', 'Lokalitetetsadresse': 'no label', 'Regionsnavn': 'no label', 'Lokalitetsejerlavkode': 'no label', 'Lokalitetsmatrikler': 'no label', 'Kortlaegningsdato': 'no label', 'Jordforureningsattester': 'no label', });
lyr_Jordforureningvidenniveau1V1_22.set('fieldLabels', {'fid': 'no label', 'Objekt_id': 'no label', 'SenesteInddateringsdato': 'no label', 'Lokalitetsnr': 'no label', 'Lokalitetetsforureningsstatus': 'no label', 'Lokalitetetsadresse': 'no label', 'Regionsnavn': 'no label', 'Lokalitetsejerlavkode': 'no label', 'Lokalitetsmatrikler': 'no label', 'Kortlaegningsdato': 'no label', 'Jordforureningsattester': 'no label', });
lyr_RisikoforstningsskaderGEO_23.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_RisikoforoversvmmelseKystdirektoratet_24.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Risikoforhavvandsindsivning_25.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Rrlagtevandlb_26.set('fieldLabels', {'fid': 'no label', 'LED_OPSTROEMSKNUDE': 'no label', 'LED_NEDSTROEMSKNUDE': 'no label', 'BUNDLOEBSKOTEOPST': 'no label', 'BUNDLOEBSKOTENEDST': 'no label', 'LED_LAENGDE': 'no label', 'FALD': 'no label', 'LABELTEXT': 'no label', 'EJERNAVN': 'no label', 'EJERNAVN_DD': 'no label', 'EJERANDEL': 'no label', 'DRIFTANSVARLIG': 'no label', 'STATUS_DD': 'no label', 'KATEGORIAFLOEB': 'no label', 'TYPEAFLOEB': 'no label', 'LEDNFUNKTION': 'no label', 'TRANSPORT': 'no label', 'TILLADTILSLUT': 'no label', 'DYK': 'no label', 'ENTREPRENOER': 'no label', 'LED_BEMAERKNING': 'no label', 'SANERINGSMETODE': 'no label', 'SANERINGSFIRMA': 'no label', 'ETABLERETTIDL': 'no label', 'DEL_DATOETABLERET': 'no label', 'DATOSANERING': 'no label', 'DATOOPDATERET': 'no label', 'LED_DATOHISTORISK': 'no label', 'STATUSDATO': 'no label', 'LOKALITETSNAVN': 'no label', 'DOBBELTLEDNNR': 'no label', 'DEL_OPSTROEMSKNUDE': 'no label', 'DEL_NEDSTROEMSKNUDE': 'no label', 'DEL_LAENGDE': 'no label', 'DEL_BEMAERKNING': 'no label', 'MATERIALE': 'no label', 'TVAERSNIT': 'no label', 'HANDELSMAAL': 'no label', 'DIAMETERINDV': 'no label', 'FORING_DIAM_INDV': 'no label', 'HOEJDEINDV': 'no label', 'GODSTYKKELSE': 'no label', 'FORING_GODSTYKKELSE': 'no label', 'MUFFEBREDDE': 'no label', 'MUFFEHOEJDE': 'no label', 'MEDFOD': 'no label', 'SDRKODE': 'no label', 'ROERBEMAERKNING': 'no label', 'OPRIND_DIMENSION': 'no label', 'OPRIND_OPSTROEMSKOTE': 'no label', 'OPRIND_NEDSTROEMSKOTE': 'no label', 'STATUSKODE': 'no label', 'TYPEAFLOEBKODE': 'no label', 'KATEGORIAFLOEBKODE': 'no label', 'LEDNINGID': 'no label', 'DELLEDNINGSID': 'no label', 'ROERKATALOGID': 'no label', 'EJERKODE': 'no label', 'EJERKODE_DD': 'no label', 'MI_STYLE2': 'no label', 'THEME_ATTR1': 'no label', });
lyr_Gammelkystlinje18701899_27.set('fieldLabels', {'fid': 'no label', });
lyr_EngeogMoser18701899_28.set('fieldLabels', {'fid': 'no label', });
lyr_Habitatomrder_29.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_length': 'no label', 'Site_nr': 'no label', 'Objektnavn': 'no label', 'Loc_ident': 'no label', 'Site_ident': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Frededeomrder_30.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_length': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Spildevandskloakeret_31.set('fieldLabels', {'fid': 'no label', 'doklink': 'no label', 'uuid': 'no label', 'temakode': 'no label', 'temanavn': 'no label', 'objekt_id': 'no label', 'systid_fra': 'no label', 'oprettet': 'no label', 'oprindkode': 'no label', 'oprindelse': 'no label', 'statuskode': 'no label', 'status': 'no label', 'cvr_kode': 'no label', 'cvrname': 'no label', 'bruger_id': 'no label', 'link': 'no label', 'navn1201': 'no label', 'type1201a': 'no label', 'vaerd1201a': 'no label', 'type1201b': 'no label', 'vaerd1201b': 'no label', 'staar1201': 'no label', 'sluaar1201': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datostart': 'no label', 'datoslut': 'no label', });
lyr_Ingenkloakering_32.set('fieldLabels', {'fid': 'no label', 'doklink': 'no label', 'uuid': 'no label', 'temakode': 'no label', 'temanavn': 'no label', 'objekt_id': 'no label', 'systid_fra': 'no label', 'oprettet': 'no label', 'oprindkode': 'no label', 'oprindelse': 'no label', 'statuskode': 'no label', 'status': 'no label', 'cvr_kode': 'no label', 'cvrname': 'no label', 'bruger_id': 'no label', 'link': 'no label', 'navn1201': 'no label', 'type1201a': 'no label', 'vaerd1201a': 'no label', 'type1201b': 'no label', 'vaerd1201b': 'no label', 'staar1201': 'no label', 'sluaar1201': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datostart': 'no label', 'datoslut': 'no label', 'CG_ID': 'no label', 'navn': 'no label', 'regionskode': 'no label', 'udtraeksdato': 'no label', 'kommunekode': 'no label', 'udenforkommuneinddeling': 'no label', 'area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_VedtagetSeperatkloakering_33.set('fieldLabels', {'fid': 'no label', 'doklink': 'no label', 'uuid': 'no label', 'temakode': 'no label', 'temanavn': 'no label', 'objekt_id': 'no label', 'systid_fra': 'no label', 'oprettet': 'no label', 'oprindkode': 'no label', 'oprindelse': 'no label', 'statuskode': 'no label', 'status': 'no label', 'cvr_kode': 'no label', 'cvrname': 'no label', 'bruger_id': 'no label', 'link': 'no label', 'navn1201': 'no label', 'type1201a': 'no label', 'vaerd1201a': 'no label', 'type1201b': 'no label', 'vaerd1201b': 'no label', 'staar1201': 'no label', 'sluaar1201': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datostart': 'no label', 'datoslut': 'no label', });
lyr_Kbenhavn_34.set('fieldLabels', {'fid': 'no label', 'navn': 'no label', });
lyr_Kbenhavn_34.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});