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
var format_PlanfladeSpildevand_2 = new ol.format.GeoJSON();
var features_PlanfladeSpildevand_2 = format_PlanfladeSpildevand_2.readFeatures(json_PlanfladeSpildevand_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanfladeSpildevand_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanfladeSpildevand_2.addFeatures(features_PlanfladeSpildevand_2);
var lyr_PlanfladeSpildevand_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanfladeSpildevand_2, 
                style: style_PlanfladeSpildevand_2,
                popuplayertitle: 'Planflade Spildevand',
                interactive: true,
    title: 'Planflade Spildevand<br />\
    <img src="styles/legend/PlanfladeSpildevand_2_0.png" /> Anlægsprojekter<br />\
    <img src="styles/legend/PlanfladeSpildevand_2_1.png" /> Masterplan<br />' });
var format_PlanfladeVand_3 = new ol.format.GeoJSON();
var features_PlanfladeVand_3 = format_PlanfladeVand_3.readFeatures(json_PlanfladeVand_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PlanfladeVand_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PlanfladeVand_3.addFeatures(features_PlanfladeVand_3);
var lyr_PlanfladeVand_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PlanfladeVand_3, 
                style: style_PlanfladeVand_3,
                popuplayertitle: 'Planflade Vand',
                interactive: true,
                title: '<img src="styles/legend/PlanfladeVand_3.png" /> Planflade Vand'
            });
var format_ProjektfladeSpildevand_4 = new ol.format.GeoJSON();
var features_ProjektfladeSpildevand_4 = format_ProjektfladeSpildevand_4.readFeatures(json_ProjektfladeSpildevand_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjektfladeSpildevand_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjektfladeSpildevand_4.addFeatures(features_ProjektfladeSpildevand_4);
var lyr_ProjektfladeSpildevand_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjektfladeSpildevand_4, 
                style: style_ProjektfladeSpildevand_4,
                popuplayertitle: 'Projektflade Spildevand',
                interactive: true,
                title: '<img src="styles/legend/ProjektfladeSpildevand_4.png" /> Projektflade Spildevand'
            });
var format_ProjektfladeVand_5 = new ol.format.GeoJSON();
var features_ProjektfladeVand_5 = format_ProjektfladeVand_5.readFeatures(json_ProjektfladeVand_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjektfladeVand_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjektfladeVand_5.addFeatures(features_ProjektfladeVand_5);
var lyr_ProjektfladeVand_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjektfladeVand_5, 
                style: style_ProjektfladeVand_5,
                popuplayertitle: 'Projektflade Vand',
                interactive: true,
                title: '<img src="styles/legend/ProjektfladeVand_5.png" /> Projektflade Vand'
            });
var format_ProjektfladeVarme_6 = new ol.format.GeoJSON();
var features_ProjektfladeVarme_6 = format_ProjektfladeVarme_6.readFeatures(json_ProjektfladeVarme_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjektfladeVarme_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjektfladeVarme_6.addFeatures(features_ProjektfladeVarme_6);
var lyr_ProjektfladeVarme_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjektfladeVarme_6, 
                style: style_ProjektfladeVarme_6,
                popuplayertitle: 'Projektflade Varme',
                interactive: true,
                title: '<img src="styles/legend/ProjektfladeVarme_6.png" /> Projektflade Varme'
            });
var format_Antropogentlandskab_7 = new ol.format.GeoJSON();
var features_Antropogentlandskab_7 = format_Antropogentlandskab_7.readFeatures(json_Antropogentlandskab_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Antropogentlandskab_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Antropogentlandskab_7.addFeatures(features_Antropogentlandskab_7);
var lyr_Antropogentlandskab_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Antropogentlandskab_7, 
                style: style_Antropogentlandskab_7,
                popuplayertitle: 'Antropogent landskab',
                interactive: true,
                title: '<img src="styles/legend/Antropogentlandskab_7.png" /> Antropogent landskab'
            });
var format_Bundmorneflade_8 = new ol.format.GeoJSON();
var features_Bundmorneflade_8 = format_Bundmorneflade_8.readFeatures(json_Bundmorneflade_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bundmorneflade_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bundmorneflade_8.addFeatures(features_Bundmorneflade_8);
var lyr_Bundmorneflade_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bundmorneflade_8, 
                style: style_Bundmorneflade_8,
                popuplayertitle: 'Bundmoræneflade',
                interactive: true,
                title: '<img src="styles/legend/Bundmorneflade_8.png" /> Bundmoræneflade'
            });
var format_Ddislandskab_9 = new ol.format.GeoJSON();
var features_Ddislandskab_9 = format_Ddislandskab_9.readFeatures(json_Ddislandskab_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ddislandskab_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ddislandskab_9.addFeatures(features_Ddislandskab_9);
var lyr_Ddislandskab_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ddislandskab_9, 
                style: style_Ddislandskab_9,
                popuplayertitle: 'Dødislandskab',
                interactive: true,
                title: '<img src="styles/legend/Ddislandskab_9.png" /> Dødislandskab'
            });
var format_Erosionsdal_10 = new ol.format.GeoJSON();
var features_Erosionsdal_10 = format_Erosionsdal_10.readFeatures(json_Erosionsdal_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Erosionsdal_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Erosionsdal_10.addFeatures(features_Erosionsdal_10);
var lyr_Erosionsdal_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Erosionsdal_10, 
                style: style_Erosionsdal_10,
                popuplayertitle: 'Erosionsdal',
                interactive: true,
                title: '<img src="styles/legend/Erosionsdal_10.png" /> Erosionsdal'
            });
var format_Marinflade_11 = new ol.format.GeoJSON();
var features_Marinflade_11 = format_Marinflade_11.readFeatures(json_Marinflade_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Marinflade_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Marinflade_11.addFeatures(features_Marinflade_11);
var lyr_Marinflade_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Marinflade_11, 
                style: style_Marinflade_11,
                popuplayertitle: 'Marin flade',
                interactive: true,
                title: '<img src="styles/legend/Marinflade_11.png" /> Marin flade'
            });
var format_Mose_12 = new ol.format.GeoJSON();
var features_Mose_12 = format_Mose_12.readFeatures(json_Mose_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Mose_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Mose_12.addFeatures(features_Mose_12);
var lyr_Mose_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Mose_12, 
                style: style_Mose_12,
                popuplayertitle: 'Mose',
                interactive: true,
                title: '<img src="styles/legend/Mose_12.png" /> Mose'
            });
var format_S_13 = new ol.format.GeoJSON();
var features_S_13 = format_S_13.readFeatures(json_S_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_S_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_S_13.addFeatures(features_S_13);
var lyr_S_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_S_13, 
                style: style_S_13,
                popuplayertitle: 'Sø',
                interactive: true,
                title: '<img src="styles/legend/S_13.png" /> Sø'
            });
var format_Trlagtmarintforland_14 = new ol.format.GeoJSON();
var features_Trlagtmarintforland_14 = format_Trlagtmarintforland_14.readFeatures(json_Trlagtmarintforland_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Trlagtmarintforland_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Trlagtmarintforland_14.addFeatures(features_Trlagtmarintforland_14);
var lyr_Trlagtmarintforland_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Trlagtmarintforland_14, 
                style: style_Trlagtmarintforland_14,
                popuplayertitle: 'Tørlagt marint forland',
                interactive: true,
                title: '<img src="styles/legend/Trlagtmarintforland_14.png" /> Tørlagt marint forland'
            });
var format_Isoverskredetrandmorne_15 = new ol.format.GeoJSON();
var features_Isoverskredetrandmorne_15 = format_Isoverskredetrandmorne_15.readFeatures(json_Isoverskredetrandmorne_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Isoverskredetrandmorne_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Isoverskredetrandmorne_15.addFeatures(features_Isoverskredetrandmorne_15);
var lyr_Isoverskredetrandmorne_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Isoverskredetrandmorne_15, 
                style: style_Isoverskredetrandmorne_15,
                popuplayertitle: 'Isoverskredet randmoræne',
                interactive: true,
                title: '<img src="styles/legend/Isoverskredetrandmorne_15.png" /> Isoverskredet randmoræne'
            });
var format_nedsivningsanlg_Valby_16 = new ol.format.GeoJSON();
var features_nedsivningsanlg_Valby_16 = format_nedsivningsanlg_Valby_16.readFeatures(json_nedsivningsanlg_Valby_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nedsivningsanlg_Valby_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nedsivningsanlg_Valby_16.addFeatures(features_nedsivningsanlg_Valby_16);
var lyr_nedsivningsanlg_Valby_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nedsivningsanlg_Valby_16, 
                style: style_nedsivningsanlg_Valby_16,
                popuplayertitle: 'nedsivningsanlæg_Valby',
                interactive: true,
                title: '<img src="styles/legend/nedsivningsanlg_Valby_16.png" /> nedsivningsanlæg_Valby'
            });
var format_nedsivningsanlg_Sundbyster_17 = new ol.format.GeoJSON();
var features_nedsivningsanlg_Sundbyster_17 = format_nedsivningsanlg_Sundbyster_17.readFeatures(json_nedsivningsanlg_Sundbyster_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nedsivningsanlg_Sundbyster_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nedsivningsanlg_Sundbyster_17.addFeatures(features_nedsivningsanlg_Sundbyster_17);
var lyr_nedsivningsanlg_Sundbyster_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nedsivningsanlg_Sundbyster_17, 
                style: style_nedsivningsanlg_Sundbyster_17,
                popuplayertitle: 'nedsivningsanlæg_Sundbyøster',
                interactive: true,
                title: '<img src="styles/legend/nedsivningsanlg_Sundbyster_17.png" /> nedsivningsanlæg_Sundbyøster'
            });
var format_nedsivningsanlg_Sundbyvester_18 = new ol.format.GeoJSON();
var features_nedsivningsanlg_Sundbyvester_18 = format_nedsivningsanlg_Sundbyvester_18.readFeatures(json_nedsivningsanlg_Sundbyvester_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nedsivningsanlg_Sundbyvester_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nedsivningsanlg_Sundbyvester_18.addFeatures(features_nedsivningsanlg_Sundbyvester_18);
var lyr_nedsivningsanlg_Sundbyvester_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nedsivningsanlg_Sundbyvester_18, 
                style: style_nedsivningsanlg_Sundbyvester_18,
                popuplayertitle: 'nedsivningsanlæg_Sundbyvester',
                interactive: true,
                title: '<img src="styles/legend/nedsivningsanlg_Sundbyvester_18.png" /> nedsivningsanlæg_Sundbyvester'
            });
var format_nedsivningsanlg_Nrrebro_19 = new ol.format.GeoJSON();
var features_nedsivningsanlg_Nrrebro_19 = format_nedsivningsanlg_Nrrebro_19.readFeatures(json_nedsivningsanlg_Nrrebro_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nedsivningsanlg_Nrrebro_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nedsivningsanlg_Nrrebro_19.addFeatures(features_nedsivningsanlg_Nrrebro_19);
var lyr_nedsivningsanlg_Nrrebro_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nedsivningsanlg_Nrrebro_19, 
                style: style_nedsivningsanlg_Nrrebro_19,
                popuplayertitle: 'nedsivningsanlæg_Nørrebro',
                interactive: true,
                title: '<img src="styles/legend/nedsivningsanlg_Nrrebro_19.png" /> nedsivningsanlæg_Nørrebro'
            });
var format_nedsivningsanlg_Indre_By_20 = new ol.format.GeoJSON();
var features_nedsivningsanlg_Indre_By_20 = format_nedsivningsanlg_Indre_By_20.readFeatures(json_nedsivningsanlg_Indre_By_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nedsivningsanlg_Indre_By_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nedsivningsanlg_Indre_By_20.addFeatures(features_nedsivningsanlg_Indre_By_20);
var lyr_nedsivningsanlg_Indre_By_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nedsivningsanlg_Indre_By_20, 
                style: style_nedsivningsanlg_Indre_By_20,
                popuplayertitle: 'nedsivningsanlæg_Indre_By',
                interactive: true,
                title: '<img src="styles/legend/nedsivningsanlg_Indre_By_20.png" /> nedsivningsanlæg_Indre_By'
            });
var format_nedsivningsanlg_Brnshj_21 = new ol.format.GeoJSON();
var features_nedsivningsanlg_Brnshj_21 = format_nedsivningsanlg_Brnshj_21.readFeatures(json_nedsivningsanlg_Brnshj_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nedsivningsanlg_Brnshj_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nedsivningsanlg_Brnshj_21.addFeatures(features_nedsivningsanlg_Brnshj_21);
var lyr_nedsivningsanlg_Brnshj_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nedsivningsanlg_Brnshj_21, 
                style: style_nedsivningsanlg_Brnshj_21,
                popuplayertitle: 'nedsivningsanlæg_Brønshøj',
                interactive: true,
                title: '<img src="styles/legend/nedsivningsanlg_Brnshj_21.png" /> nedsivningsanlæg_Brønshøj'
            });
var format_nedsivningsanlg_Bispebjerg_22 = new ol.format.GeoJSON();
var features_nedsivningsanlg_Bispebjerg_22 = format_nedsivningsanlg_Bispebjerg_22.readFeatures(json_nedsivningsanlg_Bispebjerg_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nedsivningsanlg_Bispebjerg_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nedsivningsanlg_Bispebjerg_22.addFeatures(features_nedsivningsanlg_Bispebjerg_22);
var lyr_nedsivningsanlg_Bispebjerg_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nedsivningsanlg_Bispebjerg_22, 
                style: style_nedsivningsanlg_Bispebjerg_22,
                popuplayertitle: 'nedsivningsanlæg_Bispebjerg',
                interactive: true,
                title: '<img src="styles/legend/nedsivningsanlg_Bispebjerg_22.png" /> nedsivningsanlæg_Bispebjerg'
            });
var format_nedsivningsanlg_sterbro_23 = new ol.format.GeoJSON();
var features_nedsivningsanlg_sterbro_23 = format_nedsivningsanlg_sterbro_23.readFeatures(json_nedsivningsanlg_sterbro_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nedsivningsanlg_sterbro_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nedsivningsanlg_sterbro_23.addFeatures(features_nedsivningsanlg_sterbro_23);
var lyr_nedsivningsanlg_sterbro_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nedsivningsanlg_sterbro_23, 
                style: style_nedsivningsanlg_sterbro_23,
                popuplayertitle: 'nedsivningsanlæg_Østerbro',
                interactive: true,
                title: '<img src="styles/legend/nedsivningsanlg_sterbro_23.png" /> nedsivningsanlæg_Østerbro'
            });
var format_nedsivningsanlg_Vesterbro_24 = new ol.format.GeoJSON();
var features_nedsivningsanlg_Vesterbro_24 = format_nedsivningsanlg_Vesterbro_24.readFeatures(json_nedsivningsanlg_Vesterbro_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nedsivningsanlg_Vesterbro_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nedsivningsanlg_Vesterbro_24.addFeatures(features_nedsivningsanlg_Vesterbro_24);
var lyr_nedsivningsanlg_Vesterbro_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nedsivningsanlg_Vesterbro_24, 
                style: style_nedsivningsanlg_Vesterbro_24,
                popuplayertitle: 'nedsivningsanlæg_Vesterbro',
                interactive: true,
                title: '<img src="styles/legend/nedsivningsanlg_Vesterbro_24.png" /> nedsivningsanlæg_Vesterbro'
            });
var format_matrikler_med_data_dran_1_sterbro_25 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_sterbro_25 = format_matrikler_med_data_dran_1_sterbro_25.readFeatures(json_matrikler_med_data_dran_1_sterbro_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_sterbro_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_sterbro_25.addFeatures(features_matrikler_med_data_dran_1_sterbro_25);
var lyr_matrikler_med_data_dran_1_sterbro_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_sterbro_25, 
                style: style_matrikler_med_data_dran_1_sterbro_25,
                popuplayertitle: 'matrikler_med_data_dran_1_Østerbro',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Østerbro<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_sterbro_25_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_Vesterbro_26 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_Vesterbro_26 = format_matrikler_med_data_dran_1_Vesterbro_26.readFeatures(json_matrikler_med_data_dran_1_Vesterbro_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_Vesterbro_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_Vesterbro_26.addFeatures(features_matrikler_med_data_dran_1_Vesterbro_26);
var lyr_matrikler_med_data_dran_1_Vesterbro_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_Vesterbro_26, 
                style: style_matrikler_med_data_dran_1_Vesterbro_26,
                popuplayertitle: 'matrikler_med_data_dran_1_Vesterbro',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Vesterbro<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_Vesterbro_26_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_Valby_27 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_Valby_27 = format_matrikler_med_data_dran_1_Valby_27.readFeatures(json_matrikler_med_data_dran_1_Valby_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_Valby_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_Valby_27.addFeatures(features_matrikler_med_data_dran_1_Valby_27);
var lyr_matrikler_med_data_dran_1_Valby_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_Valby_27, 
                style: style_matrikler_med_data_dran_1_Valby_27,
                popuplayertitle: 'matrikler_med_data_dran_1_Valby',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Valby<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_Valby_27_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_Sundbyster_28 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_Sundbyster_28 = format_matrikler_med_data_dran_1_Sundbyster_28.readFeatures(json_matrikler_med_data_dran_1_Sundbyster_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_Sundbyster_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_Sundbyster_28.addFeatures(features_matrikler_med_data_dran_1_Sundbyster_28);
var lyr_matrikler_med_data_dran_1_Sundbyster_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_Sundbyster_28, 
                style: style_matrikler_med_data_dran_1_Sundbyster_28,
                popuplayertitle: 'matrikler_med_data_dran_1_Sundbyøster',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Sundbyøster<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_Sundbyster_28_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_Sundbyvester_29 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_Sundbyvester_29 = format_matrikler_med_data_dran_1_Sundbyvester_29.readFeatures(json_matrikler_med_data_dran_1_Sundbyvester_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_Sundbyvester_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_Sundbyvester_29.addFeatures(features_matrikler_med_data_dran_1_Sundbyvester_29);
var lyr_matrikler_med_data_dran_1_Sundbyvester_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_Sundbyvester_29, 
                style: style_matrikler_med_data_dran_1_Sundbyvester_29,
                popuplayertitle: 'matrikler_med_data_dran_1_Sundbyvester',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Sundbyvester<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_Sundbyvester_29_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_Nrrebro_30 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_Nrrebro_30 = format_matrikler_med_data_dran_1_Nrrebro_30.readFeatures(json_matrikler_med_data_dran_1_Nrrebro_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_Nrrebro_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_Nrrebro_30.addFeatures(features_matrikler_med_data_dran_1_Nrrebro_30);
var lyr_matrikler_med_data_dran_1_Nrrebro_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_Nrrebro_30, 
                style: style_matrikler_med_data_dran_1_Nrrebro_30,
                popuplayertitle: 'matrikler_med_data_dran_1_Nørrebro',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Nørrebro<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_Nrrebro_30_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_Indre_By_31 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_Indre_By_31 = format_matrikler_med_data_dran_1_Indre_By_31.readFeatures(json_matrikler_med_data_dran_1_Indre_By_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_Indre_By_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_Indre_By_31.addFeatures(features_matrikler_med_data_dran_1_Indre_By_31);
var lyr_matrikler_med_data_dran_1_Indre_By_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_Indre_By_31, 
                style: style_matrikler_med_data_dran_1_Indre_By_31,
                popuplayertitle: 'matrikler_med_data_dran_1_Indre_By',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Indre_By<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_Indre_By_31_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_Brnshj_32 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_Brnshj_32 = format_matrikler_med_data_dran_1_Brnshj_32.readFeatures(json_matrikler_med_data_dran_1_Brnshj_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_Brnshj_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_Brnshj_32.addFeatures(features_matrikler_med_data_dran_1_Brnshj_32);
var lyr_matrikler_med_data_dran_1_Brnshj_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_Brnshj_32, 
                style: style_matrikler_med_data_dran_1_Brnshj_32,
                popuplayertitle: 'matrikler_med_data_dran_1_Brønshøj',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Brønshøj<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_Brnshj_32_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_Bispebjerg_33 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_Bispebjerg_33 = format_matrikler_med_data_dran_1_Bispebjerg_33.readFeatures(json_matrikler_med_data_dran_1_Bispebjerg_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_Bispebjerg_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_Bispebjerg_33.addFeatures(features_matrikler_med_data_dran_1_Bispebjerg_33);
var lyr_matrikler_med_data_dran_1_Bispebjerg_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_Bispebjerg_33, 
                style: style_matrikler_med_data_dran_1_Bispebjerg_33,
                popuplayertitle: 'matrikler_med_data_dran_1_Bispebjerg',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Bispebjerg<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_Bispebjerg_33_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_sterbro_34 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_sterbro_34 = format_matrikler_med_data_dran_1_sterbro_34.readFeatures(json_matrikler_med_data_dran_1_sterbro_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_sterbro_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_sterbro_34.addFeatures(features_matrikler_med_data_dran_1_sterbro_34);
var lyr_matrikler_med_data_dran_1_sterbro_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_sterbro_34, 
                style: style_matrikler_med_data_dran_1_sterbro_34,
                popuplayertitle: 'matrikler_med_data_dran_1_Østerbro',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Østerbro<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_sterbro_34_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_Vesterbro_35 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_Vesterbro_35 = format_matrikler_med_data_dran_1_Vesterbro_35.readFeatures(json_matrikler_med_data_dran_1_Vesterbro_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_Vesterbro_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_Vesterbro_35.addFeatures(features_matrikler_med_data_dran_1_Vesterbro_35);
var lyr_matrikler_med_data_dran_1_Vesterbro_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_Vesterbro_35, 
                style: style_matrikler_med_data_dran_1_Vesterbro_35,
                popuplayertitle: 'matrikler_med_data_dran_1_Vesterbro',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Vesterbro<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_Vesterbro_35_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_Valby_36 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_Valby_36 = format_matrikler_med_data_dran_1_Valby_36.readFeatures(json_matrikler_med_data_dran_1_Valby_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_Valby_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_Valby_36.addFeatures(features_matrikler_med_data_dran_1_Valby_36);
var lyr_matrikler_med_data_dran_1_Valby_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_Valby_36, 
                style: style_matrikler_med_data_dran_1_Valby_36,
                popuplayertitle: 'matrikler_med_data_dran_1_Valby',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Valby<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_Valby_36_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_Sundbyster_37 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_Sundbyster_37 = format_matrikler_med_data_dran_1_Sundbyster_37.readFeatures(json_matrikler_med_data_dran_1_Sundbyster_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_Sundbyster_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_Sundbyster_37.addFeatures(features_matrikler_med_data_dran_1_Sundbyster_37);
var lyr_matrikler_med_data_dran_1_Sundbyster_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_Sundbyster_37, 
                style: style_matrikler_med_data_dran_1_Sundbyster_37,
                popuplayertitle: 'matrikler_med_data_dran_1_Sundbyøster',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Sundbyøster<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_Sundbyster_37_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_Sundbyvester_38 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_Sundbyvester_38 = format_matrikler_med_data_dran_1_Sundbyvester_38.readFeatures(json_matrikler_med_data_dran_1_Sundbyvester_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_Sundbyvester_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_Sundbyvester_38.addFeatures(features_matrikler_med_data_dran_1_Sundbyvester_38);
var lyr_matrikler_med_data_dran_1_Sundbyvester_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_Sundbyvester_38, 
                style: style_matrikler_med_data_dran_1_Sundbyvester_38,
                popuplayertitle: 'matrikler_med_data_dran_1_Sundbyvester',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Sundbyvester<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_Sundbyvester_38_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_Nrrebro_39 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_Nrrebro_39 = format_matrikler_med_data_dran_1_Nrrebro_39.readFeatures(json_matrikler_med_data_dran_1_Nrrebro_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_Nrrebro_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_Nrrebro_39.addFeatures(features_matrikler_med_data_dran_1_Nrrebro_39);
var lyr_matrikler_med_data_dran_1_Nrrebro_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_Nrrebro_39, 
                style: style_matrikler_med_data_dran_1_Nrrebro_39,
                popuplayertitle: 'matrikler_med_data_dran_1_Nørrebro',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Nørrebro<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_Nrrebro_39_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_Indre_By_40 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_Indre_By_40 = format_matrikler_med_data_dran_1_Indre_By_40.readFeatures(json_matrikler_med_data_dran_1_Indre_By_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_Indre_By_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_Indre_By_40.addFeatures(features_matrikler_med_data_dran_1_Indre_By_40);
var lyr_matrikler_med_data_dran_1_Indre_By_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_Indre_By_40, 
                style: style_matrikler_med_data_dran_1_Indre_By_40,
                popuplayertitle: 'matrikler_med_data_dran_1_Indre_By',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Indre_By<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_Indre_By_40_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_Brnshj_41 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_Brnshj_41 = format_matrikler_med_data_dran_1_Brnshj_41.readFeatures(json_matrikler_med_data_dran_1_Brnshj_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_Brnshj_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_Brnshj_41.addFeatures(features_matrikler_med_data_dran_1_Brnshj_41);
var lyr_matrikler_med_data_dran_1_Brnshj_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_Brnshj_41, 
                style: style_matrikler_med_data_dran_1_Brnshj_41,
                popuplayertitle: 'matrikler_med_data_dran_1_Brønshøj',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Brønshøj<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_Brnshj_41_0.png" /> <br />' });
var format_matrikler_med_data_dran_1_Bispebjerg_42 = new ol.format.GeoJSON();
var features_matrikler_med_data_dran_1_Bispebjerg_42 = format_matrikler_med_data_dran_1_Bispebjerg_42.readFeatures(json_matrikler_med_data_dran_1_Bispebjerg_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_matrikler_med_data_dran_1_Bispebjerg_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_matrikler_med_data_dran_1_Bispebjerg_42.addFeatures(features_matrikler_med_data_dran_1_Bispebjerg_42);
var lyr_matrikler_med_data_dran_1_Bispebjerg_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_matrikler_med_data_dran_1_Bispebjerg_42, 
                style: style_matrikler_med_data_dran_1_Bispebjerg_42,
                popuplayertitle: 'matrikler_med_data_dran_1_Bispebjerg',
                interactive: true,
    title: 'matrikler_med_data_dran_1_Bispebjerg<br />\
    <img src="styles/legend/matrikler_med_data_dran_1_Bispebjerg_42_0.png" /> <br />' });
var format_RisikoforoversvmmelseKystdirektoratet_43 = new ol.format.GeoJSON();
var features_RisikoforoversvmmelseKystdirektoratet_43 = format_RisikoforoversvmmelseKystdirektoratet_43.readFeatures(json_RisikoforoversvmmelseKystdirektoratet_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RisikoforoversvmmelseKystdirektoratet_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RisikoforoversvmmelseKystdirektoratet_43.addFeatures(features_RisikoforoversvmmelseKystdirektoratet_43);
var lyr_RisikoforoversvmmelseKystdirektoratet_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RisikoforoversvmmelseKystdirektoratet_43, 
                style: style_RisikoforoversvmmelseKystdirektoratet_43,
                popuplayertitle: 'Risiko for oversvømmelse (Kystdirektoratet)',
                interactive: true,
                title: '<img src="styles/legend/RisikoforoversvmmelseKystdirektoratet_43.png" /> Risiko for oversvømmelse (Kystdirektoratet)'
            });
var format_Risikoforhavvandsindsivning_44 = new ol.format.GeoJSON();
var features_Risikoforhavvandsindsivning_44 = format_Risikoforhavvandsindsivning_44.readFeatures(json_Risikoforhavvandsindsivning_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Risikoforhavvandsindsivning_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Risikoforhavvandsindsivning_44.addFeatures(features_Risikoforhavvandsindsivning_44);
var lyr_Risikoforhavvandsindsivning_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Risikoforhavvandsindsivning_44, 
                style: style_Risikoforhavvandsindsivning_44,
                popuplayertitle: 'Risiko for havvandsindsivning',
                interactive: true,
    title: '<img src="styles/legend/Risikoforhavvandsindsivning_44_0.png" /> Risiko for havvandsindsivning<br />'
     });
var format_RisikoforstningsskaderGEO_45 = new ol.format.GeoJSON();
var features_RisikoforstningsskaderGEO_45 = format_RisikoforstningsskaderGEO_45.readFeatures(json_RisikoforstningsskaderGEO_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RisikoforstningsskaderGEO_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RisikoforstningsskaderGEO_45.addFeatures(features_RisikoforstningsskaderGEO_45);
var lyr_RisikoforstningsskaderGEO_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RisikoforstningsskaderGEO_45, 
                style: style_RisikoforstningsskaderGEO_45,
                popuplayertitle: 'Risiko for sætningsskader (GEO)',
                interactive: true,
    title: 'Risiko for sætningsskader (GEO)<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_45_0.png" /> 0-0,01<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_45_1.png" /> 0,01-0,02<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_45_2.png" /> 0,02-0,05<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_45_3.png" /> 0,05-0,1<br />\
    <img src="styles/legend/RisikoforstningsskaderGEO_45_4.png" /> >0,1<br />' });
var format_Boringerdybdeim_46 = new ol.format.GeoJSON();
var features_Boringerdybdeim_46 = format_Boringerdybdeim_46.readFeatures(json_Boringerdybdeim_46, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Boringerdybdeim_46 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Boringerdybdeim_46.addFeatures(features_Boringerdybdeim_46);
var lyr_Boringerdybdeim_46 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Boringerdybdeim_46, 
                style: style_Boringerdybdeim_46,
                popuplayertitle: 'Boringer (dybde i m)',
                interactive: true,
    title: 'Boringer (dybde i m)<br />\
    <img src="styles/legend/Boringerdybdeim_46_0.png" /> 0 m - 0 m<br />\
    <img src="styles/legend/Boringerdybdeim_46_1.png" /> 0 m - 6 m<br />\
    <img src="styles/legend/Boringerdybdeim_46_2.png" /> 6 m - 12 m<br />\
    <img src="styles/legend/Boringerdybdeim_46_3.png" /> 12 m - 18 m<br />\
    <img src="styles/legend/Boringerdybdeim_46_4.png" /> 18 m+<br />' });
var format_TerrnnrtgrundvandsommermiddelmunderterrnHIP_47 = new ol.format.GeoJSON();
var features_TerrnnrtgrundvandsommermiddelmunderterrnHIP_47 = format_TerrnnrtgrundvandsommermiddelmunderterrnHIP_47.readFeatures(json_TerrnnrtgrundvandsommermiddelmunderterrnHIP_47, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerrnnrtgrundvandsommermiddelmunderterrnHIP_47 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerrnnrtgrundvandsommermiddelmunderterrnHIP_47.addFeatures(features_TerrnnrtgrundvandsommermiddelmunderterrnHIP_47);
var lyr_TerrnnrtgrundvandsommermiddelmunderterrnHIP_47 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerrnnrtgrundvandsommermiddelmunderterrnHIP_47, 
                style: style_TerrnnrtgrundvandsommermiddelmunderterrnHIP_47,
                popuplayertitle: 'Terrænnært grundvand sommermiddel [m under terræn] (HIP)',
                interactive: true,
    title: 'Terrænnært grundvand sommermiddel [m under terræn] (HIP)<br />\
    <img src="styles/legend/TerrnnrtgrundvandsommermiddelmunderterrnHIP_47_0.png" /> 0-1 m<br />\
    <img src="styles/legend/TerrnnrtgrundvandsommermiddelmunderterrnHIP_47_1.png" /> 1-2 m<br />\
    <img src="styles/legend/TerrnnrtgrundvandsommermiddelmunderterrnHIP_47_2.png" /> 2-3 m<br />\
    <img src="styles/legend/TerrnnrtgrundvandsommermiddelmunderterrnHIP_47_3.png" /> 3-7 m<br />' });
var format_TerrnnrtgrundvandvintermiddelmunderterrnHIP_48 = new ol.format.GeoJSON();
var features_TerrnnrtgrundvandvintermiddelmunderterrnHIP_48 = format_TerrnnrtgrundvandvintermiddelmunderterrnHIP_48.readFeatures(json_TerrnnrtgrundvandvintermiddelmunderterrnHIP_48, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TerrnnrtgrundvandvintermiddelmunderterrnHIP_48 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TerrnnrtgrundvandvintermiddelmunderterrnHIP_48.addFeatures(features_TerrnnrtgrundvandvintermiddelmunderterrnHIP_48);
var lyr_TerrnnrtgrundvandvintermiddelmunderterrnHIP_48 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TerrnnrtgrundvandvintermiddelmunderterrnHIP_48, 
                style: style_TerrnnrtgrundvandvintermiddelmunderterrnHIP_48,
                popuplayertitle: 'Terrænnært grundvand vintermiddel [m under terræn] (HIP)',
                interactive: true,
    title: 'Terrænnært grundvand vintermiddel [m under terræn] (HIP)<br />\
    <img src="styles/legend/TerrnnrtgrundvandvintermiddelmunderterrnHIP_48_0.png" /> 0-1 m<br />\
    <img src="styles/legend/TerrnnrtgrundvandvintermiddelmunderterrnHIP_48_1.png" /> 1-2 m<br />\
    <img src="styles/legend/TerrnnrtgrundvandvintermiddelmunderterrnHIP_48_2.png" /> 2-3 m<br />\
    <img src="styles/legend/TerrnnrtgrundvandvintermiddelmunderterrnHIP_48_3.png" /> 3-7 m<br />' });
var format_Bygninger_damage_cost_Bispebjerg_49 = new ol.format.GeoJSON();
var features_Bygninger_damage_cost_Bispebjerg_49 = format_Bygninger_damage_cost_Bispebjerg_49.readFeatures(json_Bygninger_damage_cost_Bispebjerg_49, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bygninger_damage_cost_Bispebjerg_49 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bygninger_damage_cost_Bispebjerg_49.addFeatures(features_Bygninger_damage_cost_Bispebjerg_49);
var lyr_Bygninger_damage_cost_Bispebjerg_49 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bygninger_damage_cost_Bispebjerg_49, 
                style: style_Bygninger_damage_cost_Bispebjerg_49,
                popuplayertitle: 'Bispebjerg',
                interactive: true,
    title: 'Bispebjerg<br />\
    <img src="styles/legend/Bygninger_damage_cost_Bispebjerg_49_0.png" /> 0 - 20000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Bispebjerg_49_1.png" /> 20000 - 40000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Bispebjerg_49_2.png" /> 40000 - 60000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Bispebjerg_49_3.png" /> 60000 - 80000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Bispebjerg_49_4.png" /> 80000 - 100000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Bispebjerg_49_5.png" /> 100000 - 120000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Bispebjerg_49_6.png" /> 120000 +<br />' });
var format_Bygninger_damage_cost_Brnshj_50 = new ol.format.GeoJSON();
var features_Bygninger_damage_cost_Brnshj_50 = format_Bygninger_damage_cost_Brnshj_50.readFeatures(json_Bygninger_damage_cost_Brnshj_50, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bygninger_damage_cost_Brnshj_50 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bygninger_damage_cost_Brnshj_50.addFeatures(features_Bygninger_damage_cost_Brnshj_50);
var lyr_Bygninger_damage_cost_Brnshj_50 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bygninger_damage_cost_Brnshj_50, 
                style: style_Bygninger_damage_cost_Brnshj_50,
                popuplayertitle: 'Brønshøj',
                interactive: true,
    title: 'Brønshøj<br />\
    <img src="styles/legend/Bygninger_damage_cost_Brnshj_50_0.png" /> 0 - 20000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Brnshj_50_1.png" /> 20000 - 40000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Brnshj_50_2.png" /> 40000 - 60000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Brnshj_50_3.png" /> 60000 - 80000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Brnshj_50_4.png" /> 80000 - 100000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Brnshj_50_5.png" /> 100000 - 120000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Brnshj_50_6.png" /> 120000 +<br />' });
var format_Bygninger_damage_cost_Indre_By_51 = new ol.format.GeoJSON();
var features_Bygninger_damage_cost_Indre_By_51 = format_Bygninger_damage_cost_Indre_By_51.readFeatures(json_Bygninger_damage_cost_Indre_By_51, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bygninger_damage_cost_Indre_By_51 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bygninger_damage_cost_Indre_By_51.addFeatures(features_Bygninger_damage_cost_Indre_By_51);
var lyr_Bygninger_damage_cost_Indre_By_51 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bygninger_damage_cost_Indre_By_51, 
                style: style_Bygninger_damage_cost_Indre_By_51,
                popuplayertitle: 'Indre By',
                interactive: true,
    title: 'Indre By<br />\
    <img src="styles/legend/Bygninger_damage_cost_Indre_By_51_0.png" /> 0 - 20000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Indre_By_51_1.png" /> 20000 - 40000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Indre_By_51_2.png" /> 40000 - 60000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Indre_By_51_3.png" /> 60000 - 80000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Indre_By_51_4.png" /> 80000 - 100000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Indre_By_51_5.png" /> 100000 - 120000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Indre_By_51_6.png" /> 120000 +<br />' });
var format_Bygninger_damage_cost_Nrrebro_52 = new ol.format.GeoJSON();
var features_Bygninger_damage_cost_Nrrebro_52 = format_Bygninger_damage_cost_Nrrebro_52.readFeatures(json_Bygninger_damage_cost_Nrrebro_52, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bygninger_damage_cost_Nrrebro_52 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bygninger_damage_cost_Nrrebro_52.addFeatures(features_Bygninger_damage_cost_Nrrebro_52);
var lyr_Bygninger_damage_cost_Nrrebro_52 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bygninger_damage_cost_Nrrebro_52, 
                style: style_Bygninger_damage_cost_Nrrebro_52,
                popuplayertitle: 'Nørrebro',
                interactive: true,
    title: 'Nørrebro<br />\
    <img src="styles/legend/Bygninger_damage_cost_Nrrebro_52_0.png" /> 0 - 20000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Nrrebro_52_1.png" /> 20000 - 40000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Nrrebro_52_2.png" /> 40000 - 60000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Nrrebro_52_3.png" /> 60000 - 80000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Nrrebro_52_4.png" /> 80000 - 100000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Nrrebro_52_5.png" /> 100000 - 120000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Nrrebro_52_6.png" /> 120000 +<br />' });
var format_Bygninger_damage_cost_Sundbyvester_53 = new ol.format.GeoJSON();
var features_Bygninger_damage_cost_Sundbyvester_53 = format_Bygninger_damage_cost_Sundbyvester_53.readFeatures(json_Bygninger_damage_cost_Sundbyvester_53, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bygninger_damage_cost_Sundbyvester_53 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bygninger_damage_cost_Sundbyvester_53.addFeatures(features_Bygninger_damage_cost_Sundbyvester_53);
var lyr_Bygninger_damage_cost_Sundbyvester_53 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bygninger_damage_cost_Sundbyvester_53, 
                style: style_Bygninger_damage_cost_Sundbyvester_53,
                popuplayertitle: 'Sundbyvester',
                interactive: true,
    title: 'Sundbyvester<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyvester_53_0.png" /> 0 - 20000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyvester_53_1.png" /> 20000 - 40000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyvester_53_2.png" /> 40000 - 60000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyvester_53_3.png" /> 60000 - 80000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyvester_53_4.png" /> 80000 - 100000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyvester_53_5.png" /> 100000 - 120000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyvester_53_6.png" /> 120000 +<br />' });
var format_Bygninger_damage_cost_Sundbyster_54 = new ol.format.GeoJSON();
var features_Bygninger_damage_cost_Sundbyster_54 = format_Bygninger_damage_cost_Sundbyster_54.readFeatures(json_Bygninger_damage_cost_Sundbyster_54, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bygninger_damage_cost_Sundbyster_54 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bygninger_damage_cost_Sundbyster_54.addFeatures(features_Bygninger_damage_cost_Sundbyster_54);
var lyr_Bygninger_damage_cost_Sundbyster_54 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bygninger_damage_cost_Sundbyster_54, 
                style: style_Bygninger_damage_cost_Sundbyster_54,
                popuplayertitle: 'Sundbyøster',
                interactive: true,
    title: 'Sundbyøster<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyster_54_0.png" /> 0 - 20000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyster_54_1.png" /> 20000 - 40000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyster_54_2.png" /> 40000 - 60000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyster_54_3.png" /> 60000 - 80000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyster_54_4.png" /> 80000 - 100000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyster_54_5.png" /> 100000 - 120000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyster_54_6.png" /> 120000 +<br />' });
var format_Bygninger_damage_cost_Valby_55 = new ol.format.GeoJSON();
var features_Bygninger_damage_cost_Valby_55 = format_Bygninger_damage_cost_Valby_55.readFeatures(json_Bygninger_damage_cost_Valby_55, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bygninger_damage_cost_Valby_55 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bygninger_damage_cost_Valby_55.addFeatures(features_Bygninger_damage_cost_Valby_55);
var lyr_Bygninger_damage_cost_Valby_55 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bygninger_damage_cost_Valby_55, 
                style: style_Bygninger_damage_cost_Valby_55,
                popuplayertitle: 'Valby',
                interactive: true,
    title: 'Valby<br />\
    <img src="styles/legend/Bygninger_damage_cost_Valby_55_0.png" /> 0 - 20000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Valby_55_1.png" /> 20000 - 40000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Valby_55_2.png" /> 40000 - 60000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Valby_55_3.png" /> 60000 - 80000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Valby_55_4.png" /> 80000 - 100000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Valby_55_5.png" /> 100000 - 120000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Valby_55_6.png" /> 120000 +<br />',
    fold: 'close',
});
var format_Bygninger_damage_cost_Vesterbro_56 = new ol.format.GeoJSON();
var features_Bygninger_damage_cost_Vesterbro_56 = format_Bygninger_damage_cost_Vesterbro_56.readFeatures(json_Bygninger_damage_cost_Vesterbro_56, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bygninger_damage_cost_Vesterbro_56 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bygninger_damage_cost_Vesterbro_56.addFeatures(features_Bygninger_damage_cost_Vesterbro_56);
var lyr_Bygninger_damage_cost_Vesterbro_56 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bygninger_damage_cost_Vesterbro_56, 
                style: style_Bygninger_damage_cost_Vesterbro_56,
                popuplayertitle: 'Vesterbro',
                interactive: true,
    title: 'Vesterbro<br />\
    <img src="styles/legend/Bygninger_damage_cost_Vesterbro_56_0.png" /> 0 - 20000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Vesterbro_56_1.png" /> 20000 - 40000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Vesterbro_56_2.png" /> 40000 - 60000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Vesterbro_56_3.png" /> 60000 - 80000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Vesterbro_56_4.png" /> 80000 - 100000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Vesterbro_56_5.png" /> 100000 - 120000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Vesterbro_56_6.png" /> 120000 +<br />' });
var format_Bygninger_damage_cost_sterbro_57 = new ol.format.GeoJSON();
var features_Bygninger_damage_cost_sterbro_57 = format_Bygninger_damage_cost_sterbro_57.readFeatures(json_Bygninger_damage_cost_sterbro_57, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bygninger_damage_cost_sterbro_57 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bygninger_damage_cost_sterbro_57.addFeatures(features_Bygninger_damage_cost_sterbro_57);
var lyr_Bygninger_damage_cost_sterbro_57 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bygninger_damage_cost_sterbro_57, 
                style: style_Bygninger_damage_cost_sterbro_57,
                popuplayertitle: 'Østerbro',
                interactive: true,
                
    title: 'Østerbro<br />\
    <img src="styles/legend/Bygninger_damage_cost_sterbro_57_0.png" /> 0 - 20000<br />\
    <img src="styles/legend/Bygninger_damage_cost_sterbro_57_1.png" /> 20000 - 40000<br />\
    <img src="styles/legend/Bygninger_damage_cost_sterbro_57_2.png" /> 40000 - 60000<br />\
    <img src="styles/legend/Bygninger_damage_cost_sterbro_57_3.png" /> 60000 - 80000<br />\
    <img src="styles/legend/Bygninger_damage_cost_sterbro_57_4.png" /> 80000 - 100000<br />\
    <img src="styles/legend/Bygninger_damage_cost_sterbro_57_5.png" /> 100000 - 120000<br />\
    <img src="styles/legend/Bygninger_damage_cost_sterbro_57_6.png" /> 120000 +<br />' });
var format_Vandlb100mbuffer_58 = new ol.format.GeoJSON();
var features_Vandlb100mbuffer_58 = format_Vandlb100mbuffer_58.readFeatures(json_Vandlb100mbuffer_58, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb100mbuffer_58 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb100mbuffer_58.addFeatures(features_Vandlb100mbuffer_58);
var lyr_Vandlb100mbuffer_58 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb100mbuffer_58, 
                style: style_Vandlb100mbuffer_58,
                popuplayertitle: 'Vandløb 100m buffer',
                interactive: true,
                title: '<img src="styles/legend/Vandlb100mbuffer_58.png" /> Vandløb 100m buffer'
            });
var format_Vandlb20mbuffer_59 = new ol.format.GeoJSON();
var features_Vandlb20mbuffer_59 = format_Vandlb20mbuffer_59.readFeatures(json_Vandlb20mbuffer_59, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb20mbuffer_59 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb20mbuffer_59.addFeatures(features_Vandlb20mbuffer_59);
var lyr_Vandlb20mbuffer_59 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb20mbuffer_59, 
                style: style_Vandlb20mbuffer_59,
                popuplayertitle: 'Vandløb 20m buffer',
                interactive: true,
                title: '<img src="styles/legend/Vandlb20mbuffer_59.png" /> Vandløb 20m buffer'
            });
var format_Vandlb10mbuffer_60 = new ol.format.GeoJSON();
var features_Vandlb10mbuffer_60 = format_Vandlb10mbuffer_60.readFeatures(json_Vandlb10mbuffer_60, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb10mbuffer_60 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb10mbuffer_60.addFeatures(features_Vandlb10mbuffer_60);
var lyr_Vandlb10mbuffer_60 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb10mbuffer_60, 
                style: style_Vandlb10mbuffer_60,
                popuplayertitle: 'Vandløb 10m buffer',
                interactive: true,
                title: '<img src="styles/legend/Vandlb10mbuffer_60.png" /> Vandløb 10m buffer'
            });
var format_Vandlb2mbuffer_61 = new ol.format.GeoJSON();
var features_Vandlb2mbuffer_61 = format_Vandlb2mbuffer_61.readFeatures(json_Vandlb2mbuffer_61, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb2mbuffer_61 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb2mbuffer_61.addFeatures(features_Vandlb2mbuffer_61);
var lyr_Vandlb2mbuffer_61 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb2mbuffer_61, 
                style: style_Vandlb2mbuffer_61,
                popuplayertitle: 'Vandløb 2m buffer',
                interactive: true,
                title: '<img src="styles/legend/Vandlb2mbuffer_61.png" /> Vandløb 2m buffer'
            });
var format_Vandlb_62 = new ol.format.GeoJSON();
var features_Vandlb_62 = format_Vandlb_62.readFeatures(json_Vandlb_62, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Vandlb_62 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Vandlb_62.addFeatures(features_Vandlb_62);
var lyr_Vandlb_62 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Vandlb_62, 
                style: style_Vandlb_62,
                popuplayertitle: 'Vandløb',
                interactive: true,
                title: '<img src="styles/legend/Vandlb_62.png" /> Vandløb'
            });
var format_Ser100mbuffer_63 = new ol.format.GeoJSON();
var features_Ser100mbuffer_63 = format_Ser100mbuffer_63.readFeatures(json_Ser100mbuffer_63, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser100mbuffer_63 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser100mbuffer_63.addFeatures(features_Ser100mbuffer_63);
var lyr_Ser100mbuffer_63 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser100mbuffer_63, 
                style: style_Ser100mbuffer_63,
                popuplayertitle: 'Søer 100m buffer',
                interactive: true,
                title: '<img src="styles/legend/Ser100mbuffer_63.png" /> Søer 100m buffer'
            });
var format_Ser20mbuffer_64 = new ol.format.GeoJSON();
var features_Ser20mbuffer_64 = format_Ser20mbuffer_64.readFeatures(json_Ser20mbuffer_64, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser20mbuffer_64 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser20mbuffer_64.addFeatures(features_Ser20mbuffer_64);
var lyr_Ser20mbuffer_64 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser20mbuffer_64, 
                style: style_Ser20mbuffer_64,
                popuplayertitle: 'Søer 20m buffer',
                interactive: true,
                title: '<img src="styles/legend/Ser20mbuffer_64.png" /> Søer 20m buffer'
            });
var format_Ser10mbuffer_65 = new ol.format.GeoJSON();
var features_Ser10mbuffer_65 = format_Ser10mbuffer_65.readFeatures(json_Ser10mbuffer_65, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser10mbuffer_65 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser10mbuffer_65.addFeatures(features_Ser10mbuffer_65);
var lyr_Ser10mbuffer_65 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser10mbuffer_65, 
                style: style_Ser10mbuffer_65,
                popuplayertitle: 'Søer 10m buffer',
                interactive: true,
                title: '<img src="styles/legend/Ser10mbuffer_65.png" /> Søer 10m buffer'
            });
var format_Ser2mbuffer_66 = new ol.format.GeoJSON();
var features_Ser2mbuffer_66 = format_Ser2mbuffer_66.readFeatures(json_Ser2mbuffer_66, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser2mbuffer_66 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser2mbuffer_66.addFeatures(features_Ser2mbuffer_66);
var lyr_Ser2mbuffer_66 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser2mbuffer_66, 
                style: style_Ser2mbuffer_66,
                popuplayertitle: 'Søer 2m buffer',
                interactive: true,
                title: '<img src="styles/legend/Ser2mbuffer_66.png" /> Søer 2m buffer'
            });
var format_Ser_67 = new ol.format.GeoJSON();
var features_Ser_67 = format_Ser_67.readFeatures(json_Ser_67, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ser_67 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ser_67.addFeatures(features_Ser_67);
var lyr_Ser_67 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ser_67, 
                style: style_Ser_67,
                popuplayertitle: 'Søer',
                interactive: true,
                title: '<img src="styles/legend/Ser_67.png" /> Søer'
            });
var format_Jordforureningvidenniveau2V2_68 = new ol.format.GeoJSON();
var features_Jordforureningvidenniveau2V2_68 = format_Jordforureningvidenniveau2V2_68.readFeatures(json_Jordforureningvidenniveau2V2_68, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jordforureningvidenniveau2V2_68 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jordforureningvidenniveau2V2_68.addFeatures(features_Jordforureningvidenniveau2V2_68);
var lyr_Jordforureningvidenniveau2V2_68 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jordforureningvidenniveau2V2_68, 
                style: style_Jordforureningvidenniveau2V2_68,
                popuplayertitle: 'Jordforurening videnniveau 2 (V2)',
                interactive: true,
                title: '<img src="styles/legend/Jordforureningvidenniveau2V2_68.png" /> Jordforurening videnniveau 2 (V2)'
            });
var format_Jordforureningvidenniveau1V1_69 = new ol.format.GeoJSON();
var features_Jordforureningvidenniveau1V1_69 = format_Jordforureningvidenniveau1V1_69.readFeatures(json_Jordforureningvidenniveau1V1_69, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Jordforureningvidenniveau1V1_69 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Jordforureningvidenniveau1V1_69.addFeatures(features_Jordforureningvidenniveau1V1_69);
var lyr_Jordforureningvidenniveau1V1_69 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Jordforureningvidenniveau1V1_69, 
                style: style_Jordforureningvidenniveau1V1_69,
                popuplayertitle: 'Jordforurening videnniveau 1 (V1)',
                interactive: true,
                title: '<img src="styles/legend/Jordforureningvidenniveau1V1_69.png" /> Jordforurening videnniveau 1 (V1)'
            });
var format_Rrlagtevandlb_70 = new ol.format.GeoJSON();
var features_Rrlagtevandlb_70 = format_Rrlagtevandlb_70.readFeatures(json_Rrlagtevandlb_70, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rrlagtevandlb_70 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rrlagtevandlb_70.addFeatures(features_Rrlagtevandlb_70);
var lyr_Rrlagtevandlb_70 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rrlagtevandlb_70, 
                style: style_Rrlagtevandlb_70,
                popuplayertitle: 'Rørlagte vandløb',
                interactive: true,
                title: '<img src="styles/legend/Rrlagtevandlb_70.png" /> Rørlagte vandløb'
            });
var format_Gammelkystlinje18701899_71 = new ol.format.GeoJSON();
var features_Gammelkystlinje18701899_71 = format_Gammelkystlinje18701899_71.readFeatures(json_Gammelkystlinje18701899_71, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Gammelkystlinje18701899_71 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Gammelkystlinje18701899_71.addFeatures(features_Gammelkystlinje18701899_71);
var lyr_Gammelkystlinje18701899_71 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Gammelkystlinje18701899_71, 
                style: style_Gammelkystlinje18701899_71,
                popuplayertitle: 'Gammel kystlinje (1870-1899)',
                interactive: true,
                title: '<img src="styles/legend/Gammelkystlinje18701899_71.png" /> Gammel kystlinje (1870-1899)'
            });
var format_EngeogMoser18701899_72 = new ol.format.GeoJSON();
var features_EngeogMoser18701899_72 = format_EngeogMoser18701899_72.readFeatures(json_EngeogMoser18701899_72, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EngeogMoser18701899_72 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EngeogMoser18701899_72.addFeatures(features_EngeogMoser18701899_72);
var lyr_EngeogMoser18701899_72 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EngeogMoser18701899_72, 
                style: style_EngeogMoser18701899_72,
                popuplayertitle: 'Enge og Moser (1870-1899)',
                interactive: true,
                title: '<img src="styles/legend/EngeogMoser18701899_72.png" /> Enge og Moser (1870-1899)'
            });
var format_Habitatomrder_73 = new ol.format.GeoJSON();
var features_Habitatomrder_73 = format_Habitatomrder_73.readFeatures(json_Habitatomrder_73, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Habitatomrder_73 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Habitatomrder_73.addFeatures(features_Habitatomrder_73);
var lyr_Habitatomrder_73 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Habitatomrder_73, 
                style: style_Habitatomrder_73,
                popuplayertitle: 'Habitat områder',
                interactive: true,
                title: '<img src="styles/legend/Habitatomrder_73.png" /> Habitat områder'
            });
var format_Frededeomrder_74 = new ol.format.GeoJSON();
var features_Frededeomrder_74 = format_Frededeomrder_74.readFeatures(json_Frededeomrder_74, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Frededeomrder_74 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Frededeomrder_74.addFeatures(features_Frededeomrder_74);
var lyr_Frededeomrder_74 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Frededeomrder_74, 
                style: style_Frededeomrder_74,
                popuplayertitle: 'Fredede områder',
                interactive: true,
                title: '<img src="styles/legend/Frededeomrder_74.png" /> Fredede områder'
            });
var format_Spildevandskloakeret_75 = new ol.format.GeoJSON();
var features_Spildevandskloakeret_75 = format_Spildevandskloakeret_75.readFeatures(json_Spildevandskloakeret_75, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Spildevandskloakeret_75 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Spildevandskloakeret_75.addFeatures(features_Spildevandskloakeret_75);
var lyr_Spildevandskloakeret_75 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Spildevandskloakeret_75, 
                style: style_Spildevandskloakeret_75,
                popuplayertitle: 'Spildevandskloakeret',
                interactive: true,
                title: '<img src="styles/legend/Spildevandskloakeret_75.png" /> Spildevandskloakeret'
            });
var format_Ingenkloakering_76 = new ol.format.GeoJSON();
var features_Ingenkloakering_76 = format_Ingenkloakering_76.readFeatures(json_Ingenkloakering_76, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ingenkloakering_76 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ingenkloakering_76.addFeatures(features_Ingenkloakering_76);
var lyr_Ingenkloakering_76 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ingenkloakering_76, 
                style: style_Ingenkloakering_76,
                popuplayertitle: 'Ingen kloakering',
                interactive: true,
                title: '<img src="styles/legend/Ingenkloakering_76.png" /> Ingen kloakering'
            });
var format_VedtagetSeperatkloakering_77 = new ol.format.GeoJSON();
var features_VedtagetSeperatkloakering_77 = format_VedtagetSeperatkloakering_77.readFeatures(json_VedtagetSeperatkloakering_77, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VedtagetSeperatkloakering_77 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VedtagetSeperatkloakering_77.addFeatures(features_VedtagetSeperatkloakering_77);
var lyr_VedtagetSeperatkloakering_77 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VedtagetSeperatkloakering_77, 
                style: style_VedtagetSeperatkloakering_77,
                popuplayertitle: 'Vedtaget Seperatkloakering',
                interactive: true,
                title: '<img src="styles/legend/VedtagetSeperatkloakering_77.png" /> Vedtaget Seperatkloakering'
            });
var format_Kbenhavn_78 = new ol.format.GeoJSON();
var features_Kbenhavn_78 = format_Kbenhavn_78.readFeatures(json_Kbenhavn_78, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kbenhavn_78 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kbenhavn_78.addFeatures(features_Kbenhavn_78);
var lyr_Kbenhavn_78 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kbenhavn_78, 
                style: style_Kbenhavn_78,
                popuplayertitle: 'København',
                interactive: true,
                title: '<img src="styles/legend/Kbenhavn_78.png" /> København'
            });


var group_Bygninger_damage_cost_Bispebjerg = new ol.layer.Group({
    layers: [
        lyr_Bygninger_damage_cost_Bispebjerg_49
    ],
    title: 'Bispebjerg',
    fold: 'close'
});

var group_Bygninger_damage_cost_Brnshj = new ol.layer.Group({
    layers: [
        lyr_Bygninger_damage_cost_Brnshj_50
    ],
    title: 'Brønshøj',
    fold: 'close'
});

var group_Bygninger_damage_cost_Indre_By = new ol.layer.Group({
    layers: [
        lyr_Bygninger_damage_cost_Indre_By_51
    ],
    title: 'Indre By',
    fold: 'close'
});

var group_Bygninger_damage_cost_Nrrebro = new ol.layer.Group({
    layers: [
        lyr_Bygninger_damage_cost_Nrrebro_52
    ],
    title: 'Nørrebro',
    fold: 'close'
});

var group_Bygninger_damage_cost_Sundbyster = new ol.layer.Group({
    layers: [
        lyr_Bygninger_damage_cost_Sundbyster_54
    ],
    title: 'Sundby Øster',
    fold: 'close'
});

var group_Bygninger_damage_cost_Sundbyvester = new ol.layer.Group({
    layers: [
        lyr_Bygninger_damage_cost_Sundbyvester_53
    ],
    title: 'Sundby Vester',
    fold: 'close'
});

var group_Bygninger_damage_cost_Valby = new ol.layer.Group({
    layers: [
        lyr_Bygninger_damage_cost_Valby_55
    ],
    title: 'Valby',
    fold: 'close'
});

var group_Bygninger_damage_cost_Vesterbro = new ol.layer.Group({
    layers: [
        lyr_Bygninger_damage_cost_Vesterbro_56
    ],
    title: 'Vesterbro',
    fold: 'close'
});

var group_Bygninger_damage_cost_sterbro = new ol.layer.Group({
    layers: [
        lyr_Bygninger_damage_cost_sterbro_57
    ],
    title: 'Østerbro',
    fold: 'close'
});



var group_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr =
new ol.layer.Group({
    layers: [
        group_Bygninger_damage_cost_Bispebjerg,
        group_Bygninger_damage_cost_Brnshj,
        group_Bygninger_damage_cost_Indre_By,
        group_Bygninger_damage_cost_Nrrebro,
        group_Bygninger_damage_cost_Sundbyster,
        group_Bygninger_damage_cost_Sundbyvester,
        group_Bygninger_damage_cost_Valby,
        group_Bygninger_damage_cost_Vesterbro,
        group_Bygninger_damage_cost_sterbro
    ],
    title: 'Indledende skadesberegninger – Gennemsnitlig skadesomkostninger før tiltag [DKK/år]<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyvester_53_0.png" /> 0 - 20000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyvester_53_1.png" /> 20000 - 40000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyvester_53_2.png" /> 40000 - 60000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyvester_53_3.png" /> 60000 - 80000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyvester_53_4.png" /> 80000 - 100000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyvester_53_5.png" /> 100000 - 120000<br />\
    <img src="styles/legend/Bygninger_damage_cost_Sundbyvester_53_6.png" /> 120000 + ',
    fold: 'open',
});


var group_Nedsivningsanlaeg = new ol.layer.Group({
    layers: [
        lyr_nedsivningsanlg_Bispebjerg_22,
        lyr_nedsivningsanlg_Brnshj_21,
        lyr_nedsivningsanlg_Indre_By_20,
        lyr_nedsivningsanlg_Nrrebro_19,
        lyr_nedsivningsanlg_Sundbyster_17,
        lyr_nedsivningsanlg_Sundbyvester_18,
        lyr_nedsivningsanlg_Vesterbro_24,
        lyr_nedsivningsanlg_sterbro_23
    ],
    title: '<img src="styles/legend/nedsivningsanlg_Vesterbro_24.png" /> Matrikler med nedsivningsanlæg '
});
group_Nedsivningsanlaeg.getLayers().forEach(function (lyr) {
    lyr.set('title', null);
});

var group_Matriklermedlokalnedsivning = new ol.layer.Group({
    layers: [
        lyr_matrikler_med_data_dran_1_sterbro_25,
        lyr_matrikler_med_data_dran_1_Vesterbro_26,
        lyr_matrikler_med_data_dran_1_Valby_27,
        lyr_matrikler_med_data_dran_1_Sundbyster_28,
        lyr_matrikler_med_data_dran_1_Sundbyvester_29,
        lyr_matrikler_med_data_dran_1_Nrrebro_30,
        lyr_matrikler_med_data_dran_1_Indre_By_31,
        lyr_matrikler_med_data_dran_1_Brnshj_32,
        lyr_matrikler_med_data_dran_1_Bispebjerg_33
    ],
    title: ' <img src="styles/legend/matrikler_med_data_dran_1_Indre_By_31_0.png" /> Matrikler med lokal nedsivning'
});



group_Matriklermedlokalnedsivning.getLayers().forEach(function (lyr) {
    lyr.set('title', null);
});

var group_Matriklermeddrn = new ol.layer.Group({
    layers: [
        lyr_matrikler_med_data_dran_1_sterbro_34,
        lyr_matrikler_med_data_dran_1_Vesterbro_35,
        lyr_matrikler_med_data_dran_1_Valby_36,
        lyr_matrikler_med_data_dran_1_Sundbyster_37,
        lyr_matrikler_med_data_dran_1_Sundbyvester_38,
        lyr_matrikler_med_data_dran_1_Nrrebro_39,
        lyr_matrikler_med_data_dran_1_Indre_By_40,
        lyr_matrikler_med_data_dran_1_Brnshj_41,
        lyr_matrikler_med_data_dran_1_Bispebjerg_42
    ],
    title: '<img src="styles/legend/matrikler_med_data_dran_1_Brnshj_41_0.png" /> Matrikler med dræn' // nok ikke titlen
});
group_Matriklermeddrn.getLayers().forEach(function (lyr) {
    lyr.set('title', null);
});

// Ikke Kort
//definer undergrupper først, dernæst overgruppen
var group_kloakering = new ol.layer.Group({
    layers: [
        lyr_VedtagetSeperatkloakering_77,
        lyr_Spildevandskloakeret_75,
        lyr_Ingenkloakering_76,
    ],
    fold: 'open',
    title: 'Kloakering'
})
var group_IKKEkort = new ol.layer.Group({
    layers: [
        group_kloakering
    ],
    fold: 'open',
    title: '"IKKE" kort'
})

// Måske ikke kort
//definer undergrupper først, dernæst overgruppen

var group_soer = new ol.layer.Group({
    layers: [
        lyr_Ser_67,
        lyr_Ser2mbuffer_66,
        lyr_Ser10mbuffer_65,
        lyr_Ser20mbuffer_64,
        lyr_Ser100mbuffer_63,
    ],
    fold: 'close',
    title: 'Søer'
})


var group_vandlb = new ol.layer.Group({
    layers: [
        lyr_Vandlb_62,
        lyr_Vandlb2mbuffer_61,
        lyr_Vandlb10mbuffer_60,
        lyr_Vandlb20mbuffer_59,
        lyr_Vandlb100mbuffer_58,
    ],
    fold: 'close',
    title: 'Vandløb'
})

var group_jordforurening = new ol.layer.Group({
    layers: [
        lyr_Jordforureningvidenniveau1V1_69,
        lyr_Jordforureningvidenniveau2V2_68,
    ],
    fold: 'close',
    title: 'Jordforurening'
})


var group_MaskeIKKEkort = new ol.layer.Group({
    layers: [
        group_soer,
        group_vandlb,
        group_jordforurening,
	    lyr_Rrlagtevandlb_70,
        lyr_Gammelkystlinje18701899_71,
        lyr_EngeogMoser18701899_72,
        lyr_Habitatomrder_73,
        lyr_Frededeomrder_74,
    ],
    fold: 'open',
    title: '"MÅSKE IKKE" kort'
})

// Projekt- og Planfalder
var group_projektogplanflader = new ol.layer.Group({
    layers: [
        lyr_PlanfladeSpildevand_2,
        lyr_PlanfladeVand_3,
        lyr_ProjektfladeSpildevand_4,
        lyr_ProjektfladeVand_5,
        lyr_ProjektfladeVarme_6,
    ],
    fold: 'close',
    title: 'Projekt- og Planfalder'
})

//Analyser og anden data
var group_geomorfologi = new ol.layer.Group({
    layers: [
        lyr_Bundmorneflade_8,
        lyr_Erosionsdal_10,
        lyr_Isoverskredetrandmorne_15,
        lyr_Mose_12,
        lyr_Ddislandskab_9,
        lyr_S_13,
	    lyr_Trlagtmarintforland_14,
	    lyr_Marinflade_11,
	    lyr_Antropogentlandskab_7
    ],
    fold: 'close',
    title: 'Geomorfologi (GEUS)'
})

var group_Lokaldrningognedsivning = new ol.layer.Group({
    layers: [
        group_Matriklermeddrn,
	    group_Matriklermedlokalnedsivning,
	    group_Nedsivningsanlaeg,
    ],
    fold: 'close',
    title: 'Lokal dræning og nedsivning'
})

var group_Terrnnrtgrundvand = new ol.layer.Group({
    layers: [
        lyr_TerrnnrtgrundvandvintermiddelmunderterrnHIP_48,
        lyr_TerrnnrtgrundvandsommermiddelmunderterrnHIP_47,
    ],
    fold: 'close',
    title: 'Terrænnært grundvand sommer- og vintermiddel [m under terræn] (HIP)'
})



var group_RisikoforstningsskaderGEO = new ol.layer.Group({
    layers: [
        lyr_RisikoforstningsskaderGEO_45,
    ],
    fold: 'close',
    title: 'Risiko for sætningsskader (GEO)'
})

var group_Boringerdybdeim = new ol.layer.Group({
    layers: [
        lyr_Boringerdybdeim_46,
    ],
    fold: 'close',
    title: 'Boringer (dybde i m)'
})

var group_analyserogandendata = new ol.layer.Group({
    layers: [
        group_geomorfologi,
	    lyr_RisikoforoversvmmelseKystdirektoratet_43,
	    lyr_Risikoforhavvandsindsivning_44,
	    group_Lokaldrningognedsivning,
        group_RisikoforstningsskaderGEO,
        group_Boringerdybdeim,
	    group_Terrnnrtgrundvand,
	    group_IndledendeskadesberegningerGennemsnitligskadesomkostningerfrtiltagDKKr,
    ],
    fold: 'open',
    title: 'Analyser og anden data'
})

// baggrundskort

var group_baggrundskort = new ol.layer.Group({
    layers: [
        lyr_ESRIGraylight_0,
        lyr_OpenStreetMap_1,
    ],
    fold: 'close',
    title: 'Baggrundskort'
})




lyr_ESRIGraylight_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_PlanfladeSpildevand_2.setVisible(false);lyr_PlanfladeVand_3.setVisible(false);lyr_ProjektfladeSpildevand_4.setVisible(false);lyr_ProjektfladeVand_5.setVisible(false);lyr_ProjektfladeVarme_6.setVisible(false);lyr_Antropogentlandskab_7.setVisible(false);lyr_Bundmorneflade_8.setVisible(false);lyr_Ddislandskab_9.setVisible(false);lyr_Erosionsdal_10.setVisible(false);lyr_Marinflade_11.setVisible(false);lyr_Mose_12.setVisible(false);lyr_S_13.setVisible(false);lyr_Trlagtmarintforland_14.setVisible(false);lyr_Isoverskredetrandmorne_15.setVisible(false);lyr_nedsivningsanlg_Valby_16.setVisible(false);lyr_nedsivningsanlg_Sundbyster_17.setVisible(false);lyr_nedsivningsanlg_Sundbyvester_18.setVisible(false);lyr_nedsivningsanlg_Nrrebro_19.setVisible(false);lyr_nedsivningsanlg_Indre_By_20.setVisible(false);lyr_nedsivningsanlg_Brnshj_21.setVisible(false);lyr_nedsivningsanlg_Bispebjerg_22.setVisible(false);lyr_nedsivningsanlg_sterbro_23.setVisible(false);lyr_nedsivningsanlg_Vesterbro_24.setVisible(false);lyr_matrikler_med_data_dran_1_sterbro_25.setVisible(false);lyr_matrikler_med_data_dran_1_Vesterbro_26.setVisible(false);lyr_matrikler_med_data_dran_1_Valby_27.setVisible(false);lyr_matrikler_med_data_dran_1_Sundbyster_28.setVisible(false);lyr_matrikler_med_data_dran_1_Sundbyvester_29.setVisible(false);lyr_matrikler_med_data_dran_1_Nrrebro_30.setVisible(false);lyr_matrikler_med_data_dran_1_Indre_By_31.setVisible(false);lyr_matrikler_med_data_dran_1_Brnshj_32.setVisible(false);lyr_matrikler_med_data_dran_1_Bispebjerg_33.setVisible(false);lyr_matrikler_med_data_dran_1_sterbro_34.setVisible(false);lyr_matrikler_med_data_dran_1_Vesterbro_35.setVisible(false);lyr_matrikler_med_data_dran_1_Valby_36.setVisible(false);lyr_matrikler_med_data_dran_1_Sundbyster_37.setVisible(false);lyr_matrikler_med_data_dran_1_Sundbyvester_38.setVisible(false);lyr_matrikler_med_data_dran_1_Nrrebro_39.setVisible(false);lyr_matrikler_med_data_dran_1_Indre_By_40.setVisible(false);lyr_matrikler_med_data_dran_1_Brnshj_41.setVisible(false);lyr_matrikler_med_data_dran_1_Bispebjerg_42.setVisible(false);lyr_RisikoforoversvmmelseKystdirektoratet_43.setVisible(false);lyr_Risikoforhavvandsindsivning_44.setVisible(false);lyr_RisikoforstningsskaderGEO_45.setVisible(false);lyr_Boringerdybdeim_46.setVisible(false);lyr_TerrnnrtgrundvandsommermiddelmunderterrnHIP_47.setVisible(false);lyr_TerrnnrtgrundvandvintermiddelmunderterrnHIP_48.setVisible(false);lyr_Bygninger_damage_cost_Bispebjerg_49.setVisible(false);lyr_Bygninger_damage_cost_Brnshj_50.setVisible(false);lyr_Bygninger_damage_cost_Indre_By_51.setVisible(true);lyr_Bygninger_damage_cost_Nrrebro_52.setVisible(false);lyr_Bygninger_damage_cost_Sundbyvester_53.setVisible(false);lyr_Bygninger_damage_cost_Sundbyster_54.setVisible(false);lyr_Bygninger_damage_cost_Valby_55.setVisible(false);lyr_Bygninger_damage_cost_Vesterbro_56.setVisible(false);lyr_Bygninger_damage_cost_sterbro_57.setVisible(false);lyr_Vandlb100mbuffer_58.setVisible(false);lyr_Vandlb20mbuffer_59.setVisible(false);lyr_Vandlb10mbuffer_60.setVisible(false);lyr_Vandlb2mbuffer_61.setVisible(false);lyr_Vandlb_62.setVisible(false);lyr_Ser100mbuffer_63.setVisible(false);lyr_Ser20mbuffer_64.setVisible(false);lyr_Ser10mbuffer_65.setVisible(false);lyr_Ser2mbuffer_66.setVisible(false);lyr_Ser_67.setVisible(false);lyr_Jordforureningvidenniveau2V2_68.setVisible(false);lyr_Jordforureningvidenniveau1V1_69.setVisible(false);lyr_Rrlagtevandlb_70.setVisible(false);lyr_Gammelkystlinje18701899_71.setVisible(false);lyr_EngeogMoser18701899_72.setVisible(false);lyr_Habitatomrder_73.setVisible(false);lyr_Frededeomrder_74.setVisible(false);lyr_Spildevandskloakeret_75.setVisible(true);lyr_Ingenkloakering_76.setVisible(true);lyr_VedtagetSeperatkloakering_77.setVisible(true);lyr_Kbenhavn_78.setVisible(true);
var layersList = [group_baggrundskort, group_projektogplanflader, group_analyserogandendata, group_MaskeIKKEkort, group_IKKEkort];lyr_PlanfladeSpildevand_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'PLANNAVN': 'PLANNAVN', 'PROJEKTNUM': 'PROJEKTNUM', 'STATUS': 'STATUS', 'FASE': 'FASE', 'STYLE_REGE': 'STYLE_REGE', 'PLANLAGTST': 'PLANLAGTST', 'PLANLAGTSL': 'PLANLAGTSL', 'PLANLÆGGER': 'PLANLÆGGER', 'PROJEKTCHE': 'PROJEKTCHE', 'PROJEKTEJE': 'PROJEKTEJE', 'PROJEKTLED': 'PROJEKTLED', 'BEM': 'BEM', 'TYPE': 'TYPE', 'CVR_KOMBIN': 'CVR_KOMBIN', 'FORSYNINGS': 'FORSYNINGS', 'TEMAER_KOM': 'TEMAER_KOM', 'SIDSTOPDAT': 'SIDSTOPDAT', 'INITIALER': 'INITIALER', 'KI_LINK': 'KI_LINK', });
lyr_PlanfladeVand_3.set('fieldAliases', {'fid': 'fid', });
lyr_ProjektfladeSpildevand_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'PROJEKTNAV': 'PROJEKTNAV', 'PROJEKTNUM': 'PROJEKTNUM', 'UNDERPROJE': 'UNDERPROJE', 'STATUS': 'STATUS', 'FASE': 'FASE', 'PLANLAGTST': 'PLANLAGTST', 'FORVENTETS': 'FORVENTETS', 'FORVENTE_1': 'FORVENTE_1', 'PROJEKTLED': 'PROJEKTLED', 'TEGNER': 'TEGNER', 'TILSYN': 'TILSYN', 'BEM': 'BEM', 'PROJEKT_DO': 'PROJEKT_DO', 'PROJEKTERI': 'PROJEKTERI', 'PPL_CODE_V': 'PPL_CODE_V', 'CVR_KOMBIN': 'CVR_KOMBIN', 'FORSYNINGS': 'FORSYNINGS', 'TEMAER_KOM': 'TEMAER_KOM', 'SIDSTOPDAT': 'SIDSTOPDAT', 'INITIALER': 'INITIALER', 'layer': 'layer', 'path': 'path', });
lyr_ProjektfladeVand_5.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'PROJEKTNAV': 'PROJEKTNAV', 'PROJEKTNUM': 'PROJEKTNUM', 'UNDERPROJE': 'UNDERPROJE', 'STATUS': 'STATUS', 'FASE': 'FASE', 'PLANLAGTST': 'PLANLAGTST', 'FORVENTETS': 'FORVENTETS', 'FORVENTE_1': 'FORVENTE_1', 'PROJEKTLED': 'PROJEKTLED', 'TEGNER': 'TEGNER', 'TILSYN': 'TILSYN', 'BEM': 'BEM', 'PROJEKT_DO': 'PROJEKT_DO', 'PROJEKTERI': 'PROJEKTERI', 'PPL_CODE_V': 'PPL_CODE_V', 'CVR_KOMBIN': 'CVR_KOMBIN', 'FORSYNINGS': 'FORSYNINGS', 'TEMAER_KOM': 'TEMAER_KOM', 'SIDSTOPDAT': 'SIDSTOPDAT', 'INITIALER': 'INITIALER', 'layer': 'layer', 'path': 'path', });
lyr_ProjektfladeVarme_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'PROJEKTNAV': 'PROJEKTNAV', 'PROJEKTNUM': 'PROJEKTNUM', 'UNDERPROJE': 'UNDERPROJE', 'STATUS': 'STATUS', 'FASE': 'FASE', 'PLANLAGTST': 'PLANLAGTST', 'FORVENTETS': 'FORVENTETS', 'FORVENTE_1': 'FORVENTE_1', 'PROJEKTLED': 'PROJEKTLED', 'TEGNER': 'TEGNER', 'TILSYN': 'TILSYN', 'BEM': 'BEM', 'PROJEKT_DO': 'PROJEKT_DO', 'PROJEKTERI': 'PROJEKTERI', 'PPL_CODE_V': 'PPL_CODE_V', 'CVR_KOMBIN': 'CVR_KOMBIN', 'FORSYNINGS': 'FORSYNINGS', 'TEMAER_KOM': 'TEMAER_KOM', 'SIDSTOPDAT': 'SIDSTOPDAT', 'INITIALER': 'INITIALER', 'layer': 'layer', 'path': 'path', });
lyr_Antropogentlandskab_7.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Bundmorneflade_8.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Ddislandskab_9.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Erosionsdal_10.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Marinflade_11.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Mose_12.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_S_13.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Trlagtmarintforland_14.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_Isoverskredetrandmorne_15.set('fieldAliases', {'fid': 'fid', 'tsym': 'tsym', 'version': 'version', 'landscape': 'landscape', 'landskab': 'landskab', 'shape_leng': 'shape_leng', 'ruleid': 'ruleid', 'overfoerse': 'overfoerse', 'st_area_sh': 'st_area_sh', 'st_perimet': 'st_perimet', });
lyr_nedsivningsanlg_Valby_16.set('fieldAliases', {'fid': 'fid', 'link_byggesag': 'link_byggesag', 'link_miljoesag': 'link_miljoesag', 'adresse': 'adresse', 'matr_nr': 'matr_nr', 'afkoblet_areal_m2': 'afkoblet_areal_m2', 'afkoblet_pct': 'afkoblet_pct', 'udtraadt_af_forsyningen': 'udtraadt_af_forsyningen', 'tilladelse_taget_i_brug': 'tilladelse_taget_i_brug', 'vand': 'vand', 'tilladelse': 'tilladelse', 'afledning_type': 'afledning_type', 'bemaerkninger': 'bemaerkninger', 'tilladelse_udloebet': 'tilladelse_udloebet', 'nedsivningsevne': 'nedsivningsevne', 'ogc_fid': 'ogc_fid', });
lyr_nedsivningsanlg_Sundbyster_17.set('fieldAliases', {'fid': 'fid', 'link_byggesag': 'link_byggesag', 'link_miljoesag': 'link_miljoesag', 'adresse': 'adresse', 'matr_nr': 'matr_nr', 'afkoblet_areal_m2': 'afkoblet_areal_m2', 'afkoblet_pct': 'afkoblet_pct', 'udtraadt_af_forsyningen': 'udtraadt_af_forsyningen', 'tilladelse_taget_i_brug': 'tilladelse_taget_i_brug', 'vand': 'vand', 'tilladelse': 'tilladelse', 'afledning_type': 'afledning_type', 'bemaerkninger': 'bemaerkninger', 'tilladelse_udloebet': 'tilladelse_udloebet', 'nedsivningsevne': 'nedsivningsevne', 'ogc_fid': 'ogc_fid', });
lyr_nedsivningsanlg_Sundbyvester_18.set('fieldAliases', {'fid': 'fid', 'link_byggesag': 'link_byggesag', 'link_miljoesag': 'link_miljoesag', 'adresse': 'adresse', 'matr_nr': 'matr_nr', 'afkoblet_areal_m2': 'afkoblet_areal_m2', 'afkoblet_pct': 'afkoblet_pct', 'udtraadt_af_forsyningen': 'udtraadt_af_forsyningen', 'tilladelse_taget_i_brug': 'tilladelse_taget_i_brug', 'vand': 'vand', 'tilladelse': 'tilladelse', 'afledning_type': 'afledning_type', 'bemaerkninger': 'bemaerkninger', 'tilladelse_udloebet': 'tilladelse_udloebet', 'nedsivningsevne': 'nedsivningsevne', 'ogc_fid': 'ogc_fid', });
lyr_nedsivningsanlg_Nrrebro_19.set('fieldAliases', {'fid': 'fid', 'link_byggesag': 'link_byggesag', 'link_miljoesag': 'link_miljoesag', 'adresse': 'adresse', 'matr_nr': 'matr_nr', 'afkoblet_areal_m2': 'afkoblet_areal_m2', 'afkoblet_pct': 'afkoblet_pct', 'udtraadt_af_forsyningen': 'udtraadt_af_forsyningen', 'tilladelse_taget_i_brug': 'tilladelse_taget_i_brug', 'vand': 'vand', 'tilladelse': 'tilladelse', 'afledning_type': 'afledning_type', 'bemaerkninger': 'bemaerkninger', 'tilladelse_udloebet': 'tilladelse_udloebet', 'nedsivningsevne': 'nedsivningsevne', 'ogc_fid': 'ogc_fid', });
lyr_nedsivningsanlg_Indre_By_20.set('fieldAliases', {'fid': 'fid', 'link_byggesag': 'link_byggesag', 'link_miljoesag': 'link_miljoesag', 'adresse': 'adresse', 'matr_nr': 'matr_nr', 'afkoblet_areal_m2': 'afkoblet_areal_m2', 'afkoblet_pct': 'afkoblet_pct', 'udtraadt_af_forsyningen': 'udtraadt_af_forsyningen', 'tilladelse_taget_i_brug': 'tilladelse_taget_i_brug', 'vand': 'vand', 'tilladelse': 'tilladelse', 'afledning_type': 'afledning_type', 'bemaerkninger': 'bemaerkninger', 'tilladelse_udloebet': 'tilladelse_udloebet', 'nedsivningsevne': 'nedsivningsevne', 'ogc_fid': 'ogc_fid', });
lyr_nedsivningsanlg_Brnshj_21.set('fieldAliases', {'fid': 'fid', 'link_byggesag': 'link_byggesag', 'link_miljoesag': 'link_miljoesag', 'adresse': 'adresse', 'matr_nr': 'matr_nr', 'afkoblet_areal_m2': 'afkoblet_areal_m2', 'afkoblet_pct': 'afkoblet_pct', 'udtraadt_af_forsyningen': 'udtraadt_af_forsyningen', 'tilladelse_taget_i_brug': 'tilladelse_taget_i_brug', 'vand': 'vand', 'tilladelse': 'tilladelse', 'afledning_type': 'afledning_type', 'bemaerkninger': 'bemaerkninger', 'tilladelse_udloebet': 'tilladelse_udloebet', 'nedsivningsevne': 'nedsivningsevne', 'ogc_fid': 'ogc_fid', });
lyr_nedsivningsanlg_Bispebjerg_22.set('fieldAliases', {'fid': 'fid', 'link_byggesag': 'link_byggesag', 'link_miljoesag': 'link_miljoesag', 'adresse': 'adresse', 'matr_nr': 'matr_nr', 'afkoblet_areal_m2': 'afkoblet_areal_m2', 'afkoblet_pct': 'afkoblet_pct', 'udtraadt_af_forsyningen': 'udtraadt_af_forsyningen', 'tilladelse_taget_i_brug': 'tilladelse_taget_i_brug', 'vand': 'vand', 'tilladelse': 'tilladelse', 'afledning_type': 'afledning_type', 'bemaerkninger': 'bemaerkninger', 'tilladelse_udloebet': 'tilladelse_udloebet', 'nedsivningsevne': 'nedsivningsevne', 'ogc_fid': 'ogc_fid', });
lyr_nedsivningsanlg_sterbro_23.set('fieldAliases', {'fid': 'fid', 'link_byggesag': 'link_byggesag', 'link_miljoesag': 'link_miljoesag', 'adresse': 'adresse', 'matr_nr': 'matr_nr', 'afkoblet_areal_m2': 'afkoblet_areal_m2', 'afkoblet_pct': 'afkoblet_pct', 'udtraadt_af_forsyningen': 'udtraadt_af_forsyningen', 'tilladelse_taget_i_brug': 'tilladelse_taget_i_brug', 'vand': 'vand', 'tilladelse': 'tilladelse', 'afledning_type': 'afledning_type', 'bemaerkninger': 'bemaerkninger', 'tilladelse_udloebet': 'tilladelse_udloebet', 'nedsivningsevne': 'nedsivningsevne', 'ogc_fid': 'ogc_fid', });
lyr_nedsivningsanlg_Vesterbro_24.set('fieldAliases', {'fid': 'fid', 'link_byggesag': 'link_byggesag', 'link_miljoesag': 'link_miljoesag', 'adresse': 'adresse', 'matr_nr': 'matr_nr', 'afkoblet_areal_m2': 'afkoblet_areal_m2', 'afkoblet_pct': 'afkoblet_pct', 'udtraadt_af_forsyningen': 'udtraadt_af_forsyningen', 'tilladelse_taget_i_brug': 'tilladelse_taget_i_brug', 'vand': 'vand', 'tilladelse': 'tilladelse', 'afledning_type': 'afledning_type', 'bemaerkninger': 'bemaerkninger', 'tilladelse_udloebet': 'tilladelse_udloebet', 'nedsivningsevne': 'nedsivningsevne', 'ogc_fid': 'ogc_fid', });
lyr_matrikler_med_data_dran_1_sterbro_25.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_Vesterbro_26.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_Valby_27.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_Sundbyster_28.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_Sundbyvester_29.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_Nrrebro_30.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_Indre_By_31.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_Brnshj_32.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_Bispebjerg_33.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_sterbro_34.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_Vesterbro_35.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_Valby_36.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_Sundbyster_37.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_Sundbyvester_38.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_Nrrebro_39.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_Indre_By_40.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_Brnshj_41.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_matrikler_med_data_dran_1_Bispebjerg_42.set('fieldAliases', {'fid': 'fid', 'ejendommen': 'ejendommen', 'ejendomsnu': 'ejendomsnu', 'husnummer': 'husnummer', 'id': 'id', 'matrikelnu': 'matrikelnu', 'ejerlavsko': 'ejerlavsko', 'sognekode': 'sognekode', 'UID': 'UID', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Draning — Ark1_LANDSEJERLAVSKODE', 'Draning — Ark1_MATRIKELNR': 'Draning — Ark1_MATRIKELNR', 'Draning — Ark1_UDLAGTVEJ': 'Draning — Ark1_UDLAGTVEJ', 'Draning — Ark1_JERNBANE': 'Draning — Ark1_JERNBANE', 'Draning — Ark1_STED': 'Draning — Ark1_STED', 'Draning — Ark1_HOJVANDLUK': 'Draning — Ark1_HOJVANDLUK', 'Draning — Ark1_OLIEUDSKILLER': 'Draning — Ark1_OLIEUDSKILLER', 'Draning — Ark1_BENZINUDSKILLER': 'Draning — Ark1_BENZINUDSKILLER', 'Draning — Ark1_FEDTUDSKILLER': 'Draning — Ark1_FEDTUDSKILLER', 'Draning — Ark1_ANDET': 'Draning — Ark1_ANDET', 'Draning — Ark1_SPVMWC': 'Draning — Ark1_SPVMWC', 'Draning — Ark1_SPVUWC': 'Draning — Ark1_SPVUWC', 'Draning — Ark1_DRAEN': 'Draning — Ark1_DRAEN', 'Draning — Ark1_DRAENVENTIL': 'Draning — Ark1_DRAENVENTIL', 'Draning — Ark1_DRAENKOTE': 'Draning — Ark1_DRAENKOTE', 'Draning — Ark1_FAELLES': 'Draning — Ark1_FAELLES', 'Draning — Ark1_SEPARAT': 'Draning — Ark1_SEPARAT', 'Draning — Ark1_NEDSIVNING': 'Draning — Ark1_NEDSIVNING', 'Draning — Ark1_SAMLETANK': 'Draning — Ark1_SAMLETANK', 'Draning — Ark1_DRAENUDENPUMPE': 'Draning — Ark1_DRAENUDENPUMPE', 'Draning — Ark1_DRAENUDENKOTE': 'Draning — Ark1_DRAENUDENKOTE', 'Draning — Ark1_ARKIV': 'Draning — Ark1_ARKIV', 'Draning — Ark1_KAELDERGULVKOTE': 'Draning — Ark1_KAELDERGULVKOTE', 'Draning — Ark1_HOJVANDSKOTE': 'Draning — Ark1_HOJVANDSKOTE', 'Draning — Ark1_BEMAERKNING': 'Draning — Ark1_BEMAERKNING', 'Draning — Ark1_DEKLARATIONKODE': 'Draning — Ark1_DEKLARATIONKODE', 'Draning — Ark1_NATURFREDNING': 'Draning — Ark1_NATURFREDNING', });
lyr_RisikoforoversvmmelseKystdirektoratet_43.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Risikoforhavvandsindsivning_44.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_RisikoforstningsskaderGEO_45.set('fieldAliases', {'fid': 'fid', 'DN': 'DN', });
lyr_Boringerdybdeim_46.set('fieldAliases', {'fid': 'fid', 'dgunr': 'dgunr', 'url': 'url', 'kode': 'kode', 'kode_tekst': 'kode_tekst', 'postnr': 'postnr', 'boringsby': 'boringsby', 'sted1': 'sted1', 'komnr': 'komnr', 'kommunenav': 'kommunenav', 'region': 'region', 'region_tek': 'region_tek', 'dybde': 'dybde', 'dybde_num': 'dybde_num', 'dato': 'dato', 'aar': 'aar', 'aar_num': 'aar_num', 'formaal': 'formaal', 'formaal_te': 'formaal_te', 'anvendelse': 'anvendelse', 'anvendel_1': 'anvendel_1', 'formanv': 'formanv', 'formanv_te': 'formanv_te', 'id': 'id', 'borid': 'borid', 'broendbore': 'broendbore', 'cyklogram': 'cyklogram', 'dataejer': 'dataejer', 'anlaegid': 'anlaegid', 'anlaegnr': 'anlaegnr', 'anlaegsnav': 'anlaegsnav', 'journr': 'journr', 'virktyp': 'virktyp', 'virktypt': 'virktypt', 'hovedtype': 'hovedtype', 'xutm': 'xutm', 'yutm': 'yutm', 'terraen_ko': 'terraen_ko', 'dgunr_org': 'dgunr_org', 'txt_search': 'txt_search', 'symbol_out': 'symbol_out', 'rgb': 'rgb', });
lyr_TerrnnrtgrundvandsommermiddelmunderterrnHIP_47.set('fieldAliases', {'fid': 'fid', 'class': 'class', 'class_range': 'class_range', });
lyr_TerrnnrtgrundvandvintermiddelmunderterrnHIP_48.set('fieldAliases', {'fid': 'fid', 'class': 'class', 'class_range': 'class_range', });
lyr_Bygninger_damage_cost_Bispebjerg_49.set('fieldAliases', {'fid': 'fid', 'Adresse': 'Adresse', 'byg007Bygningsnummer': 'byg007Bygningsnummer', 'BBRLink': 'BBRLink', 'byg026Opførelsesår': 'byg026Opførelsesår', 'byg027OmTilbygningsår': 'byg027OmTilbygningsår', 'AntalOpgange': 'AntalOpgange', '_sc_AntalEtager': '_sc_AntalEtager', 'byg054AntalEtager': 'byg054AntalEtager', 'byg041BebyggetAreal': 'byg041BebyggetAreal', 'Kælderareal1': 'Kælderareal1', 'Kælderareal2': 'Kælderareal2', '_sc_basement': '_sc_basement', 'byg021BygningensAnvendelse': 'byg021BygningensAnvendelse', 'bbruuid': 'bbruuid', 'Areal_beregnet': 'Areal_beregnet', 'BID': 'BID', 'Kaelderareal': 'Kaelderareal', 'Omkreds_stue': 'Omkreds_stue', 'Omkreds_kaelder': 'Omkreds_kaelder', 'Afvaergeforanstaltning': 'Afvaergeforanstaltning', 'Kaelder_j/n': 'Kaelder_j/n', 'Stue_areal': 'Stue_areal', 'AutoUID': 'AutoUID', '_row_index': '_row_index', '_col_index': '_col_index', '_ROW_COL': '_ROW_COL', '_AUTO': '_AUTO', '_BID': '_BID', '_Mean_annual_damage_cost': '_Mean_annual_damage_cost', '_AutoUID': '_AutoUID', 'Sum_damage_cost': 'Sum_damage_cost', });
lyr_Bygninger_damage_cost_Brnshj_50.set('fieldAliases', {'fid': 'fid', 'Adresse': 'Adresse', 'byg007Bygningsnummer': 'byg007Bygningsnummer', 'BBRLink': 'BBRLink', 'byg026Opførelsesår': 'byg026Opførelsesår', 'byg027OmTilbygningsår': 'byg027OmTilbygningsår', 'AntalOpgange': 'AntalOpgange', '_sc_AntalEtager': '_sc_AntalEtager', 'byg054AntalEtager': 'byg054AntalEtager', 'byg041BebyggetAreal': 'byg041BebyggetAreal', 'Kælderareal1': 'Kælderareal1', 'Kælderareal2': 'Kælderareal2', '_sc_basement': '_sc_basement', 'byg021BygningensAnvendelse': 'byg021BygningensAnvendelse', 'bbruuid': 'bbruuid', 'Areal_beregnet': 'Areal_beregnet', 'BID': 'BID', 'Kaelderareal': 'Kaelderareal', 'Omkreds_stue': 'Omkreds_stue', 'Omkreds_kaelder': 'Omkreds_kaelder', 'Afvaergeforanstaltning': 'Afvaergeforanstaltning', 'Kaelder_j/n': 'Kaelder_j/n', 'Stue_areal': 'Stue_areal', 'AutoUID': 'AutoUID', '_row_index': '_row_index', '_col_index': '_col_index', '_ROW_COL': '_ROW_COL', '_AUTO': '_AUTO', '_BID': '_BID', '_Mean_annual_damage_cost': '_Mean_annual_damage_cost', '_AutoUID': '_AutoUID', 'Sum_damage_cost': 'Sum_damage_cost', });
lyr_Bygninger_damage_cost_Indre_By_51.set('fieldAliases', {'fid': 'fid', 'Adresse': 'Adresse', 'byg007Bygningsnummer': 'byg007Bygningsnummer', 'BBRLink': 'BBRLink', 'byg026Opførelsesår': 'byg026Opførelsesår', 'byg027OmTilbygningsår': 'byg027OmTilbygningsår', 'AntalOpgange': 'AntalOpgange', '_sc_AntalEtager': '_sc_AntalEtager', 'byg054AntalEtager': 'byg054AntalEtager', 'byg041BebyggetAreal': 'byg041BebyggetAreal', 'Kælderareal1': 'Kælderareal1', 'Kælderareal2': 'Kælderareal2', '_sc_basement': '_sc_basement', 'byg021BygningensAnvendelse': 'byg021BygningensAnvendelse', 'bbruuid': 'bbruuid', 'Areal_beregnet': 'Areal_beregnet', 'BID': 'BID', 'Kaelderareal': 'Kaelderareal', 'Omkreds_stue': 'Omkreds_stue', 'Omkreds_kaelder': 'Omkreds_kaelder', 'Afvaergeforanstaltning': 'Afvaergeforanstaltning', 'Kaelder_j/n': 'Kaelder_j/n', 'Stue_areal': 'Stue_areal', 'AutoUID': 'AutoUID', '_row_index': '_row_index', '_col_index': '_col_index', '_ROW_COL': '_ROW_COL', '_AUTO': '_AUTO', '_BID': '_BID', '_Mean_annual_damage_cost': '_Mean_annual_damage_cost', '_AutoUID': '_AutoUID', 'Sum_damage_cost': 'Sum_damage_cost', });
lyr_Bygninger_damage_cost_Nrrebro_52.set('fieldAliases', {'fid': 'fid', 'Adresse': 'Adresse', 'byg007Bygningsnummer': 'byg007Bygningsnummer', 'BBRLink': 'BBRLink', 'byg026Opførelsesår': 'byg026Opførelsesår', 'byg027OmTilbygningsår': 'byg027OmTilbygningsår', 'AntalOpgange': 'AntalOpgange', '_sc_AntalEtager': '_sc_AntalEtager', 'byg054AntalEtager': 'byg054AntalEtager', 'byg041BebyggetAreal': 'byg041BebyggetAreal', 'Kælderareal1': 'Kælderareal1', 'Kælderareal2': 'Kælderareal2', '_sc_basement': '_sc_basement', 'byg021BygningensAnvendelse': 'byg021BygningensAnvendelse', 'bbruuid': 'bbruuid', 'Areal_beregnet': 'Areal_beregnet', 'BID': 'BID', 'Kaelderareal': 'Kaelderareal', 'Omkreds_stue': 'Omkreds_stue', 'Omkreds_kaelder': 'Omkreds_kaelder', 'Afvaergeforanstaltning': 'Afvaergeforanstaltning', 'Kaelder_j/n': 'Kaelder_j/n', 'Stue_areal': 'Stue_areal', 'AutoUID': 'AutoUID', '_row_index': '_row_index', '_col_index': '_col_index', '_ROW_COL': '_ROW_COL', '_AUTO': '_AUTO', '_BID': '_BID', '_Mean_annual_damage_cost': '_Mean_annual_damage_cost', '_AutoUID': '_AutoUID', 'Sum_damage_cost': 'Sum_damage_cost', });
lyr_Bygninger_damage_cost_Sundbyvester_53.set('fieldAliases', {'fid': 'fid', 'Adresse': 'Adresse', 'byg007Bygningsnummer': 'byg007Bygningsnummer', 'BBRLink': 'BBRLink', 'byg026Opførelsesår': 'byg026Opførelsesår', 'byg027OmTilbygningsår': 'byg027OmTilbygningsår', 'AntalOpgange': 'AntalOpgange', '_sc_AntalEtager': '_sc_AntalEtager', 'byg054AntalEtager': 'byg054AntalEtager', 'byg041BebyggetAreal': 'byg041BebyggetAreal', 'Kælderareal1': 'Kælderareal1', 'Kælderareal2': 'Kælderareal2', '_sc_basement': '_sc_basement', 'byg021BygningensAnvendelse': 'byg021BygningensAnvendelse', 'bbruuid': 'bbruuid', 'Areal_beregnet': 'Areal_beregnet', 'BID': 'BID', 'Kaelderareal': 'Kaelderareal', 'Omkreds_stue': 'Omkreds_stue', 'Omkreds_kaelder': 'Omkreds_kaelder', 'Afvaergeforanstaltning': 'Afvaergeforanstaltning', 'Kaelder_j/n': 'Kaelder_j/n', 'Stue_areal': 'Stue_areal', 'AutoUID': 'AutoUID', '_row_index': '_row_index', '_col_index': '_col_index', '_ROW_COL': '_ROW_COL', '_AUTO': '_AUTO', '_BID': '_BID', '_Mean_annual_damage_cost': '_Mean_annual_damage_cost', '_AutoUID': '_AutoUID', 'Sum_damage_cost': 'Sum_damage_cost', });
lyr_Bygninger_damage_cost_Sundbyster_54.set('fieldAliases', {'fid': 'fid', 'Adresse': 'Adresse', 'byg007Bygningsnummer': 'byg007Bygningsnummer', 'BBRLink': 'BBRLink', 'byg026Opførelsesår': 'byg026Opførelsesår', 'byg027OmTilbygningsår': 'byg027OmTilbygningsår', 'AntalOpgange': 'AntalOpgange', '_sc_AntalEtager': '_sc_AntalEtager', 'byg054AntalEtager': 'byg054AntalEtager', 'byg041BebyggetAreal': 'byg041BebyggetAreal', 'Kælderareal1': 'Kælderareal1', 'Kælderareal2': 'Kælderareal2', '_sc_basement': '_sc_basement', 'byg021BygningensAnvendelse': 'byg021BygningensAnvendelse', 'bbruuid': 'bbruuid', 'Areal_beregnet': 'Areal_beregnet', 'BID': 'BID', 'Kaelderareal': 'Kaelderareal', 'Omkreds_stue': 'Omkreds_stue', 'Omkreds_kaelder': 'Omkreds_kaelder', 'Afvaergeforanstaltning': 'Afvaergeforanstaltning', 'Kaelder_j/n': 'Kaelder_j/n', 'Stue_areal': 'Stue_areal', 'AutoUID': 'AutoUID', '_row_index': '_row_index', '_col_index': '_col_index', '_ROW_COL': '_ROW_COL', '_AUTO': '_AUTO', '_BID': '_BID', '_Mean_annual_damage_cost': '_Mean_annual_damage_cost', '_AutoUID': '_AutoUID', 'Sum_damage_cost': 'Sum_damage_cost', });
lyr_Bygninger_damage_cost_Valby_55.set('fieldAliases', {'fid': 'fid', 'Adresse': 'Adresse', 'byg007Bygningsnummer': 'byg007Bygningsnummer', 'BBRLink': 'BBRLink', 'byg026Opførelsesår': 'byg026Opførelsesår', 'byg027OmTilbygningsår': 'byg027OmTilbygningsår', 'AntalOpgange': 'AntalOpgange', '_sc_AntalEtager': '_sc_AntalEtager', 'byg054AntalEtager': 'byg054AntalEtager', 'byg041BebyggetAreal': 'byg041BebyggetAreal', 'Kælderareal1': 'Kælderareal1', 'Kælderareal2': 'Kælderareal2', '_sc_basement': '_sc_basement', 'byg021BygningensAnvendelse': 'byg021BygningensAnvendelse', 'bbruuid': 'bbruuid', 'Areal_beregnet': 'Areal_beregnet', 'BID': 'BID', 'Kaelderareal': 'Kaelderareal', 'Omkreds_stue': 'Omkreds_stue', 'Omkreds_kaelder': 'Omkreds_kaelder', 'Afvaergeforanstaltning': 'Afvaergeforanstaltning', 'Kaelder_j/n': 'Kaelder_j/n', 'Stue_areal': 'Stue_areal', 'AutoUID': 'AutoUID', '_row_index': '_row_index', '_col_index': '_col_index', '_ROW_COL': '_ROW_COL', '_AUTO': '_AUTO', '_BID': '_BID', '_Mean_annual_damage_cost': '_Mean_annual_damage_cost', '_AutoUID': '_AutoUID', 'Sum_damage_cost': 'Sum_damage_cost', });
lyr_Bygninger_damage_cost_Vesterbro_56.set('fieldAliases', {'fid': 'fid', 'Adresse': 'Adresse', 'byg007Bygningsnummer': 'byg007Bygningsnummer', 'BBRLink': 'BBRLink', 'byg026Opførelsesår': 'byg026Opførelsesår', 'byg027OmTilbygningsår': 'byg027OmTilbygningsår', 'AntalOpgange': 'AntalOpgange', '_sc_AntalEtager': '_sc_AntalEtager', 'byg054AntalEtager': 'byg054AntalEtager', 'byg041BebyggetAreal': 'byg041BebyggetAreal', 'Kælderareal1': 'Kælderareal1', 'Kælderareal2': 'Kælderareal2', '_sc_basement': '_sc_basement', 'byg021BygningensAnvendelse': 'byg021BygningensAnvendelse', 'bbruuid': 'bbruuid', 'Areal_beregnet': 'Areal_beregnet', 'BID': 'BID', 'Kaelderareal': 'Kaelderareal', 'Omkreds_stue': 'Omkreds_stue', 'Omkreds_kaelder': 'Omkreds_kaelder', 'Afvaergeforanstaltning': 'Afvaergeforanstaltning', 'Kaelder_j/n': 'Kaelder_j/n', 'Stue_areal': 'Stue_areal', 'AutoUID': 'AutoUID', '_row_index': '_row_index', '_col_index': '_col_index', '_ROW_COL': '_ROW_COL', '_AUTO': '_AUTO', '_BID': '_BID', '_Mean_annual_damage_cost': '_Mean_annual_damage_cost', '_AutoUID': '_AutoUID', 'Sum_damage_cost': 'Sum_damage_cost', });
lyr_Bygninger_damage_cost_sterbro_57.set('fieldAliases', {'fid': 'fid', 'Adresse': 'Adresse', 'byg007Bygningsnummer': 'byg007Bygningsnummer', 'BBRLink': 'BBRLink', 'byg026Opførelsesår': 'byg026Opførelsesår', 'byg027OmTilbygningsår': 'byg027OmTilbygningsår', 'AntalOpgange': 'AntalOpgange', '_sc_AntalEtager': '_sc_AntalEtager', 'byg054AntalEtager': 'byg054AntalEtager', 'byg041BebyggetAreal': 'byg041BebyggetAreal', 'Kælderareal1': 'Kælderareal1', 'Kælderareal2': 'Kælderareal2', '_sc_basement': '_sc_basement', 'byg021BygningensAnvendelse': 'byg021BygningensAnvendelse', 'bbruuid': 'bbruuid', 'Areal_beregnet': 'Areal_beregnet', 'BID': 'BID', 'Kaelderareal': 'Kaelderareal', 'Omkreds_stue': 'Omkreds_stue', 'Omkreds_kaelder': 'Omkreds_kaelder', 'Afvaergeforanstaltning': 'Afvaergeforanstaltning', 'Kaelder_j/n': 'Kaelder_j/n', 'Stue_areal': 'Stue_areal', 'AutoUID': 'AutoUID', '_row_index': '_row_index', '_col_index': '_col_index', '_ROW_COL': '_ROW_COL', '_AUTO': '_AUTO', '_BID': '_BID', '_Mean_annual_damage_cost': '_Mean_annual_damage_cost', '_AutoUID': '_AutoUID', 'Sum_damage_cost': 'Sum_damage_cost', });
lyr_Vandlb100mbuffer_58.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Vandlb20mbuffer_59.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Vandlb10mbuffer_60.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Vandlb2mbuffer_61.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Vandlb_62.set('fieldAliases', {'fid': 'fid', 'status': 'status', 'geometristatus': 'geometristatus', 'registreringsspecifikation': 'registreringsspecifikation', 'dataansvar': 'dataansvar', 'forretningshaendelse': 'forretningshaendelse', 'forretningsomraade': 'forretningsomraade', 'forretningsproces': 'forretningsproces', 'registreringsaktoer': 'registreringsaktoer', 'registreringfra': 'registreringfra', 'registreringtil': 'registreringtil', 'virkningsaktoer': 'virkningsaktoer', 'virkningfra': 'virkningfra', 'virkningtil': 'virkningtil', 'plannoejagtighed': 'plannoejagtighed', 'planstedfaestelsesmetode': 'planstedfaestelsesmetode', 'vertikalnoejagtighed': 'vertikalnoejagtighed', 'vertikalstedfaestelsesmetode': 'vertikalstedfaestelsesmetode', 'applikation': 'applikation', 'kommentar': 'kommentar', 'vandloebstype': 'vandloebstype', 'vanduuid': 'vanduuid', 'fraknude': 'fraknude', 'tilknude': 'tilknude', 'faldretning': 'faldretning', 'netvaerk': 'netvaerk', 'midtebredde': 'midtebredde', 'synligvandloebsmidte': 'synligvandloebsmidte', 'link': 'link', 'CG_ID': 'CG_ID', 'synligvandloebskant': 'synligvandloebskant', 'underminimumvandkant': 'underminimumvandkant', 'layer': 'layer', 'path': 'path', });
lyr_Ser100mbuffer_63.set('fieldAliases', {'fid': 'fid', 'FOT_ID': 'FOT_ID', 'MOB_ID': 'MOB_ID', 'FEAT_KODE': 'FEAT_KODE', 'FEAT_TYPE': 'FEAT_TYPE', 'FEATSTATUS': 'FEATSTATUS', 'GEOMSTATUS': 'GEOMSTATUS', 'SOETYPE': 'SOETYPE', 'SALT_SOE': 'SALT_SOE', 'TEMPORAER': 'TEMPORAER', 'UNDER_MIN': 'UNDER_MIN', 'OE_UNDER': 'OE_UNDER', 'TIMEOF_CRE': 'TIMEOF_CRE', 'TIMEOF_PUB': 'TIMEOF_PUB', 'TIMEOF_REV': 'TIMEOF_REV', 'TIMEOF_EXP': 'TIMEOF_EXP', });
lyr_Ser20mbuffer_64.set('fieldAliases', {'fid': 'fid', 'FOT_ID': 'FOT_ID', 'MOB_ID': 'MOB_ID', 'FEAT_KODE': 'FEAT_KODE', 'FEAT_TYPE': 'FEAT_TYPE', 'FEATSTATUS': 'FEATSTATUS', 'GEOMSTATUS': 'GEOMSTATUS', 'SOETYPE': 'SOETYPE', 'SALT_SOE': 'SALT_SOE', 'TEMPORAER': 'TEMPORAER', 'UNDER_MIN': 'UNDER_MIN', 'OE_UNDER': 'OE_UNDER', 'TIMEOF_CRE': 'TIMEOF_CRE', 'TIMEOF_PUB': 'TIMEOF_PUB', 'TIMEOF_REV': 'TIMEOF_REV', 'TIMEOF_EXP': 'TIMEOF_EXP', });
lyr_Ser10mbuffer_65.set('fieldAliases', {'fid': 'fid', 'FOT_ID': 'FOT_ID', 'MOB_ID': 'MOB_ID', 'FEAT_KODE': 'FEAT_KODE', 'FEAT_TYPE': 'FEAT_TYPE', 'FEATSTATUS': 'FEATSTATUS', 'GEOMSTATUS': 'GEOMSTATUS', 'SOETYPE': 'SOETYPE', 'SALT_SOE': 'SALT_SOE', 'TEMPORAER': 'TEMPORAER', 'UNDER_MIN': 'UNDER_MIN', 'OE_UNDER': 'OE_UNDER', 'TIMEOF_CRE': 'TIMEOF_CRE', 'TIMEOF_PUB': 'TIMEOF_PUB', 'TIMEOF_REV': 'TIMEOF_REV', 'TIMEOF_EXP': 'TIMEOF_EXP', });
lyr_Ser2mbuffer_66.set('fieldAliases', {'fid': 'fid', 'FOT_ID': 'FOT_ID', 'MOB_ID': 'MOB_ID', 'FEAT_KODE': 'FEAT_KODE', 'FEAT_TYPE': 'FEAT_TYPE', 'FEATSTATUS': 'FEATSTATUS', 'GEOMSTATUS': 'GEOMSTATUS', 'SOETYPE': 'SOETYPE', 'SALT_SOE': 'SALT_SOE', 'TEMPORAER': 'TEMPORAER', 'UNDER_MIN': 'UNDER_MIN', 'OE_UNDER': 'OE_UNDER', 'TIMEOF_CRE': 'TIMEOF_CRE', 'TIMEOF_PUB': 'TIMEOF_PUB', 'TIMEOF_REV': 'TIMEOF_REV', 'TIMEOF_EXP': 'TIMEOF_EXP', });
lyr_Ser_67.set('fieldAliases', {'fid': 'fid', 'FOT_ID': 'FOT_ID', 'MOB_ID': 'MOB_ID', 'FEAT_KODE': 'FEAT_KODE', 'FEAT_TYPE': 'FEAT_TYPE', 'FEATSTATUS': 'FEATSTATUS', 'GEOMSTATUS': 'GEOMSTATUS', 'SOETYPE': 'SOETYPE', 'SALT_SOE': 'SALT_SOE', 'TEMPORAER': 'TEMPORAER', 'UNDER_MIN': 'UNDER_MIN', 'OE_UNDER': 'OE_UNDER', 'TIMEOF_CRE': 'TIMEOF_CRE', 'TIMEOF_PUB': 'TIMEOF_PUB', 'TIMEOF_REV': 'TIMEOF_REV', 'TIMEOF_EXP': 'TIMEOF_EXP', });
lyr_Jordforureningvidenniveau2V2_68.set('fieldAliases', {'fid': 'fid', 'Objekt_id': 'Objekt_id', 'SenesteInddateringsdato': 'SenesteInddateringsdato', 'Lokalitetsnr': 'Lokalitetsnr', 'Lokalitetetsforureningsstatus': 'Lokalitetetsforureningsstatus', 'Lokalitetetsadresse': 'Lokalitetetsadresse', 'Regionsnavn': 'Regionsnavn', 'Lokalitetsejerlavkode': 'Lokalitetsejerlavkode', 'Lokalitetsmatrikler': 'Lokalitetsmatrikler', 'Kortlaegningsdato': 'Kortlaegningsdato', 'Jordforureningsattester': 'Jordforureningsattester', });
lyr_Jordforureningvidenniveau1V1_69.set('fieldAliases', {'fid': 'fid', 'Objekt_id': 'Objekt_id', 'SenesteInddateringsdato': 'SenesteInddateringsdato', 'Lokalitetsnr': 'Lokalitetsnr', 'Lokalitetetsforureningsstatus': 'Lokalitetetsforureningsstatus', 'Lokalitetetsadresse': 'Lokalitetetsadresse', 'Regionsnavn': 'Regionsnavn', 'Lokalitetsejerlavkode': 'Lokalitetsejerlavkode', 'Lokalitetsmatrikler': 'Lokalitetsmatrikler', 'Kortlaegningsdato': 'Kortlaegningsdato', 'Jordforureningsattester': 'Jordforureningsattester', });
lyr_Rrlagtevandlb_70.set('fieldAliases', {'fid': 'fid', 'LED_OPSTROEMSKNUDE': 'LED_OPSTROEMSKNUDE', 'LED_NEDSTROEMSKNUDE': 'LED_NEDSTROEMSKNUDE', 'BUNDLOEBSKOTEOPST': 'BUNDLOEBSKOTEOPST', 'BUNDLOEBSKOTENEDST': 'BUNDLOEBSKOTENEDST', 'LED_LAENGDE': 'LED_LAENGDE', 'FALD': 'FALD', 'LABELTEXT': 'LABELTEXT', 'EJERNAVN': 'EJERNAVN', 'EJERNAVN_DD': 'EJERNAVN_DD', 'EJERANDEL': 'EJERANDEL', 'DRIFTANSVARLIG': 'DRIFTANSVARLIG', 'STATUS_DD': 'STATUS_DD', 'KATEGORIAFLOEB': 'KATEGORIAFLOEB', 'TYPEAFLOEB': 'TYPEAFLOEB', 'LEDNFUNKTION': 'LEDNFUNKTION', 'TRANSPORT': 'TRANSPORT', 'TILLADTILSLUT': 'TILLADTILSLUT', 'DYK': 'DYK', 'ENTREPRENOER': 'ENTREPRENOER', 'LED_BEMAERKNING': 'LED_BEMAERKNING', 'SANERINGSMETODE': 'SANERINGSMETODE', 'SANERINGSFIRMA': 'SANERINGSFIRMA', 'ETABLERETTIDL': 'ETABLERETTIDL', 'DEL_DATOETABLERET': 'DEL_DATOETABLERET', 'DATOSANERING': 'DATOSANERING', 'DATOOPDATERET': 'DATOOPDATERET', 'LED_DATOHISTORISK': 'LED_DATOHISTORISK', 'STATUSDATO': 'STATUSDATO', 'LOKALITETSNAVN': 'LOKALITETSNAVN', 'DOBBELTLEDNNR': 'DOBBELTLEDNNR', 'DEL_OPSTROEMSKNUDE': 'DEL_OPSTROEMSKNUDE', 'DEL_NEDSTROEMSKNUDE': 'DEL_NEDSTROEMSKNUDE', 'DEL_LAENGDE': 'DEL_LAENGDE', 'DEL_BEMAERKNING': 'DEL_BEMAERKNING', 'MATERIALE': 'MATERIALE', 'TVAERSNIT': 'TVAERSNIT', 'HANDELSMAAL': 'HANDELSMAAL', 'DIAMETERINDV': 'DIAMETERINDV', 'FORING_DIAM_INDV': 'FORING_DIAM_INDV', 'HOEJDEINDV': 'HOEJDEINDV', 'GODSTYKKELSE': 'GODSTYKKELSE', 'FORING_GODSTYKKELSE': 'FORING_GODSTYKKELSE', 'MUFFEBREDDE': 'MUFFEBREDDE', 'MUFFEHOEJDE': 'MUFFEHOEJDE', 'MEDFOD': 'MEDFOD', 'SDRKODE': 'SDRKODE', 'ROERBEMAERKNING': 'ROERBEMAERKNING', 'OPRIND_DIMENSION': 'OPRIND_DIMENSION', 'OPRIND_OPSTROEMSKOTE': 'OPRIND_OPSTROEMSKOTE', 'OPRIND_NEDSTROEMSKOTE': 'OPRIND_NEDSTROEMSKOTE', 'STATUSKODE': 'STATUSKODE', 'TYPEAFLOEBKODE': 'TYPEAFLOEBKODE', 'KATEGORIAFLOEBKODE': 'KATEGORIAFLOEBKODE', 'LEDNINGID': 'LEDNINGID', 'DELLEDNINGSID': 'DELLEDNINGSID', 'ROERKATALOGID': 'ROERKATALOGID', 'EJERKODE': 'EJERKODE', 'EJERKODE_DD': 'EJERKODE_DD', 'MI_STYLE2': 'MI_STYLE2', 'THEME_ATTR1': 'THEME_ATTR1', });
lyr_Gammelkystlinje18701899_71.set('fieldAliases', {'fid': 'fid', });
lyr_EngeogMoser18701899_72.set('fieldAliases', {'fid': 'fid', });
lyr_Habitatomrder_73.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_length': 'Shape_length', 'Site_nr': 'Site_nr', 'Objektnavn': 'Objektnavn', 'Loc_ident': 'Loc_ident', 'Site_ident': 'Site_ident', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Frededeomrder_74.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_length': 'Shape_length', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_Spildevandskloakeret_75.set('fieldAliases', {'fid': 'fid', 'doklink': 'doklink', 'uuid': 'uuid', 'temakode': 'temakode', 'temanavn': 'temanavn', 'objekt_id': 'objekt_id', 'systid_fra': 'systid_fra', 'oprettet': 'oprettet', 'oprindkode': 'oprindkode', 'oprindelse': 'oprindelse', 'statuskode': 'statuskode', 'status': 'status', 'cvr_kode': 'cvr_kode', 'cvrname': 'cvrname', 'bruger_id': 'bruger_id', 'link': 'link', 'navn1201': 'navn1201', 'type1201a': 'type1201a', 'vaerd1201a': 'vaerd1201a', 'type1201b': 'type1201b', 'vaerd1201b': 'vaerd1201b', 'staar1201': 'staar1201', 'sluaar1201': 'sluaar1201', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datostart': 'datostart', 'datoslut': 'datoslut', });
lyr_Ingenkloakering_76.set('fieldAliases', {'fid': 'fid', 'doklink': 'doklink', 'uuid': 'uuid', 'temakode': 'temakode', 'temanavn': 'temanavn', 'objekt_id': 'objekt_id', 'systid_fra': 'systid_fra', 'oprettet': 'oprettet', 'oprindkode': 'oprindkode', 'oprindelse': 'oprindelse', 'statuskode': 'statuskode', 'status': 'status', 'cvr_kode': 'cvr_kode', 'cvrname': 'cvrname', 'bruger_id': 'bruger_id', 'link': 'link', 'navn1201': 'navn1201', 'type1201a': 'type1201a', 'vaerd1201a': 'vaerd1201a', 'type1201b': 'type1201b', 'vaerd1201b': 'vaerd1201b', 'staar1201': 'staar1201', 'sluaar1201': 'sluaar1201', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datostart': 'datostart', 'datoslut': 'datoslut', 'CG_ID': 'CG_ID', 'navn': 'navn', 'regionskode': 'regionskode', 'udtraeksdato': 'udtraeksdato', 'kommunekode': 'kommunekode', 'udenforkommuneinddeling': 'udenforkommuneinddeling', 'area': 'area', 'layer': 'layer', 'path': 'path', });
lyr_VedtagetSeperatkloakering_77.set('fieldAliases', {'fid': 'fid', 'doklink': 'doklink', 'uuid': 'uuid', 'temakode': 'temakode', 'temanavn': 'temanavn', 'objekt_id': 'objekt_id', 'systid_fra': 'systid_fra', 'oprettet': 'oprettet', 'oprindkode': 'oprindkode', 'oprindelse': 'oprindelse', 'statuskode': 'statuskode', 'status': 'status', 'cvr_kode': 'cvr_kode', 'cvrname': 'cvrname', 'bruger_id': 'bruger_id', 'link': 'link', 'navn1201': 'navn1201', 'type1201a': 'type1201a', 'vaerd1201a': 'vaerd1201a', 'type1201b': 'type1201b', 'vaerd1201b': 'vaerd1201b', 'staar1201': 'staar1201', 'sluaar1201': 'sluaar1201', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datostart': 'datostart', 'datoslut': 'datoslut', });
lyr_Kbenhavn_78.set('fieldAliases', {'fid': 'fid', 'navn': 'navn', });
lyr_PlanfladeSpildevand_2.set('fieldImages', {'fid': '', 'ID': 'Range', 'PLANNAVN': 'TextEdit', 'PROJEKTNUM': 'TextEdit', 'STATUS': 'TextEdit', 'FASE': 'TextEdit', 'STYLE_REGE': 'TextEdit', 'PLANLAGTST': 'Range', 'PLANLAGTSL': 'Range', 'PLANLÆGGER': 'TextEdit', 'PROJEKTCHE': 'TextEdit', 'PROJEKTEJE': 'TextEdit', 'PROJEKTLED': 'TextEdit', 'BEM': 'TextEdit', 'TYPE': 'TextEdit', 'CVR_KOMBIN': 'TextEdit', 'FORSYNINGS': 'TextEdit', 'TEMAER_KOM': 'TextEdit', 'SIDSTOPDAT': 'DateTime', 'INITIALER': 'TextEdit', 'KI_LINK': 'TextEdit', });
lyr_PlanfladeVand_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_ProjektfladeSpildevand_4.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'PROJEKTNAV': 'TextEdit', 'PROJEKTNUM': 'TextEdit', 'UNDERPROJE': 'TextEdit', 'STATUS': 'TextEdit', 'FASE': 'TextEdit', 'PLANLAGTST': 'TextEdit', 'FORVENTETS': 'DateTime', 'FORVENTE_1': 'DateTime', 'PROJEKTLED': 'TextEdit', 'TEGNER': 'TextEdit', 'TILSYN': 'TextEdit', 'BEM': 'TextEdit', 'PROJEKT_DO': 'DateTime', 'PROJEKTERI': 'TextEdit', 'PPL_CODE_V': 'TextEdit', 'CVR_KOMBIN': 'TextEdit', 'FORSYNINGS': 'TextEdit', 'TEMAER_KOM': 'TextEdit', 'SIDSTOPDAT': 'DateTime', 'INITIALER': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ProjektfladeVand_5.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'PROJEKTNAV': 'TextEdit', 'PROJEKTNUM': 'TextEdit', 'UNDERPROJE': 'TextEdit', 'STATUS': 'TextEdit', 'FASE': 'TextEdit', 'PLANLAGTST': 'TextEdit', 'FORVENTETS': 'DateTime', 'FORVENTE_1': 'DateTime', 'PROJEKTLED': 'TextEdit', 'TEGNER': 'TextEdit', 'TILSYN': 'TextEdit', 'BEM': 'TextEdit', 'PROJEKT_DO': 'DateTime', 'PROJEKTERI': 'TextEdit', 'PPL_CODE_V': 'TextEdit', 'CVR_KOMBIN': 'TextEdit', 'FORSYNINGS': 'TextEdit', 'TEMAER_KOM': 'TextEdit', 'SIDSTOPDAT': 'DateTime', 'INITIALER': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_ProjektfladeVarme_6.set('fieldImages', {'fid': 'TextEdit', 'ID': 'TextEdit', 'PROJEKTNAV': 'TextEdit', 'PROJEKTNUM': 'TextEdit', 'UNDERPROJE': 'TextEdit', 'STATUS': 'TextEdit', 'FASE': 'TextEdit', 'PLANLAGTST': 'TextEdit', 'FORVENTETS': 'DateTime', 'FORVENTE_1': 'DateTime', 'PROJEKTLED': 'TextEdit', 'TEGNER': 'TextEdit', 'TILSYN': 'TextEdit', 'BEM': 'TextEdit', 'PROJEKT_DO': 'DateTime', 'PROJEKTERI': 'TextEdit', 'PPL_CODE_V': 'TextEdit', 'CVR_KOMBIN': 'TextEdit', 'FORSYNINGS': 'TextEdit', 'TEMAER_KOM': 'TextEdit', 'SIDSTOPDAT': 'DateTime', 'INITIALER': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Antropogentlandskab_7.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'Range', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Bundmorneflade_8.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'TextEdit', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Ddislandskab_9.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'TextEdit', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Erosionsdal_10.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'TextEdit', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Marinflade_11.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'TextEdit', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Mose_12.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'Range', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_S_13.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'Range', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Trlagtmarintforland_14.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'TextEdit', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_Isoverskredetrandmorne_15.set('fieldImages', {'fid': 'TextEdit', 'tsym': 'TextEdit', 'version': 'TextEdit', 'landscape': 'TextEdit', 'landskab': 'TextEdit', 'shape_leng': 'TextEdit', 'ruleid': 'TextEdit', 'overfoerse': 'DateTime', 'st_area_sh': 'TextEdit', 'st_perimet': 'TextEdit', });
lyr_nedsivningsanlg_Valby_16.set('fieldImages', {'fid': 'TextEdit', 'link_byggesag': 'TextEdit', 'link_miljoesag': 'TextEdit', 'adresse': 'TextEdit', 'matr_nr': 'TextEdit', 'afkoblet_areal_m2': 'TextEdit', 'afkoblet_pct': 'Range', 'udtraadt_af_forsyningen': 'TextEdit', 'tilladelse_taget_i_brug': 'TextEdit', 'vand': 'TextEdit', 'tilladelse': 'TextEdit', 'afledning_type': 'TextEdit', 'bemaerkninger': 'TextEdit', 'tilladelse_udloebet': 'TextEdit', 'nedsivningsevne': 'TextEdit', 'ogc_fid': 'TextEdit', });
lyr_nedsivningsanlg_Sundbyster_17.set('fieldImages', {'fid': 'TextEdit', 'link_byggesag': 'TextEdit', 'link_miljoesag': 'TextEdit', 'adresse': 'TextEdit', 'matr_nr': 'TextEdit', 'afkoblet_areal_m2': 'TextEdit', 'afkoblet_pct': 'Range', 'udtraadt_af_forsyningen': 'TextEdit', 'tilladelse_taget_i_brug': 'TextEdit', 'vand': 'TextEdit', 'tilladelse': 'TextEdit', 'afledning_type': 'TextEdit', 'bemaerkninger': 'TextEdit', 'tilladelse_udloebet': 'TextEdit', 'nedsivningsevne': 'TextEdit', 'ogc_fid': 'TextEdit', });
lyr_nedsivningsanlg_Sundbyvester_18.set('fieldImages', {'fid': 'TextEdit', 'link_byggesag': 'TextEdit', 'link_miljoesag': 'TextEdit', 'adresse': 'TextEdit', 'matr_nr': 'TextEdit', 'afkoblet_areal_m2': 'TextEdit', 'afkoblet_pct': 'Range', 'udtraadt_af_forsyningen': 'TextEdit', 'tilladelse_taget_i_brug': 'TextEdit', 'vand': 'TextEdit', 'tilladelse': 'TextEdit', 'afledning_type': 'TextEdit', 'bemaerkninger': 'TextEdit', 'tilladelse_udloebet': 'TextEdit', 'nedsivningsevne': 'TextEdit', 'ogc_fid': 'TextEdit', });
lyr_nedsivningsanlg_Nrrebro_19.set('fieldImages', {'fid': 'TextEdit', 'link_byggesag': 'TextEdit', 'link_miljoesag': 'TextEdit', 'adresse': 'TextEdit', 'matr_nr': 'TextEdit', 'afkoblet_areal_m2': 'TextEdit', 'afkoblet_pct': 'Range', 'udtraadt_af_forsyningen': 'TextEdit', 'tilladelse_taget_i_brug': 'TextEdit', 'vand': 'TextEdit', 'tilladelse': 'TextEdit', 'afledning_type': 'TextEdit', 'bemaerkninger': 'TextEdit', 'tilladelse_udloebet': 'TextEdit', 'nedsivningsevne': 'TextEdit', 'ogc_fid': 'TextEdit', });
lyr_nedsivningsanlg_Indre_By_20.set('fieldImages', {'fid': 'TextEdit', 'link_byggesag': 'TextEdit', 'link_miljoesag': 'TextEdit', 'adresse': 'TextEdit', 'matr_nr': 'TextEdit', 'afkoblet_areal_m2': 'TextEdit', 'afkoblet_pct': 'Range', 'udtraadt_af_forsyningen': 'TextEdit', 'tilladelse_taget_i_brug': 'TextEdit', 'vand': 'TextEdit', 'tilladelse': 'TextEdit', 'afledning_type': 'TextEdit', 'bemaerkninger': 'TextEdit', 'tilladelse_udloebet': 'TextEdit', 'nedsivningsevne': 'TextEdit', 'ogc_fid': 'TextEdit', });
lyr_nedsivningsanlg_Brnshj_21.set('fieldImages', {'fid': 'TextEdit', 'link_byggesag': 'TextEdit', 'link_miljoesag': 'TextEdit', 'adresse': 'TextEdit', 'matr_nr': 'TextEdit', 'afkoblet_areal_m2': 'TextEdit', 'afkoblet_pct': 'Range', 'udtraadt_af_forsyningen': 'TextEdit', 'tilladelse_taget_i_brug': 'TextEdit', 'vand': 'TextEdit', 'tilladelse': 'TextEdit', 'afledning_type': 'TextEdit', 'bemaerkninger': 'TextEdit', 'tilladelse_udloebet': 'TextEdit', 'nedsivningsevne': 'TextEdit', 'ogc_fid': 'TextEdit', });
lyr_nedsivningsanlg_Bispebjerg_22.set('fieldImages', {'fid': 'TextEdit', 'link_byggesag': 'TextEdit', 'link_miljoesag': 'TextEdit', 'adresse': 'TextEdit', 'matr_nr': 'TextEdit', 'afkoblet_areal_m2': 'TextEdit', 'afkoblet_pct': 'Range', 'udtraadt_af_forsyningen': 'TextEdit', 'tilladelse_taget_i_brug': 'TextEdit', 'vand': 'TextEdit', 'tilladelse': 'TextEdit', 'afledning_type': 'TextEdit', 'bemaerkninger': 'TextEdit', 'tilladelse_udloebet': 'TextEdit', 'nedsivningsevne': 'TextEdit', 'ogc_fid': 'TextEdit', });
lyr_nedsivningsanlg_sterbro_23.set('fieldImages', {'fid': 'TextEdit', 'link_byggesag': 'TextEdit', 'link_miljoesag': 'TextEdit', 'adresse': 'TextEdit', 'matr_nr': 'TextEdit', 'afkoblet_areal_m2': 'TextEdit', 'afkoblet_pct': 'Range', 'udtraadt_af_forsyningen': 'TextEdit', 'tilladelse_taget_i_brug': 'TextEdit', 'vand': 'TextEdit', 'tilladelse': 'TextEdit', 'afledning_type': 'TextEdit', 'bemaerkninger': 'TextEdit', 'tilladelse_udloebet': 'TextEdit', 'nedsivningsevne': 'TextEdit', 'ogc_fid': 'TextEdit', });
lyr_nedsivningsanlg_Vesterbro_24.set('fieldImages', {'fid': 'TextEdit', 'link_byggesag': 'TextEdit', 'link_miljoesag': 'TextEdit', 'adresse': 'TextEdit', 'matr_nr': 'TextEdit', 'afkoblet_areal_m2': 'TextEdit', 'afkoblet_pct': 'Range', 'udtraadt_af_forsyningen': 'TextEdit', 'tilladelse_taget_i_brug': 'TextEdit', 'vand': 'TextEdit', 'tilladelse': 'TextEdit', 'afledning_type': 'TextEdit', 'bemaerkninger': 'TextEdit', 'tilladelse_udloebet': 'TextEdit', 'nedsivningsevne': 'TextEdit', 'ogc_fid': 'TextEdit', });
lyr_matrikler_med_data_dran_1_sterbro_25.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_Vesterbro_26.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_Valby_27.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_Sundbyster_28.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_Sundbyvester_29.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_Nrrebro_30.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_Indre_By_31.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_Brnshj_32.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_Bispebjerg_33.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_sterbro_34.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_Vesterbro_35.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_Valby_36.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_Sundbyster_37.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_Sundbyvester_38.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_Nrrebro_39.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_Indre_By_40.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_Brnshj_41.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_matrikler_med_data_dran_1_Bispebjerg_42.set('fieldImages', {'fid': 'TextEdit', 'ejendommen': 'TextEdit', 'ejendomsnu': 'TextEdit', 'husnummer': 'TextEdit', 'id': 'TextEdit', 'matrikelnu': 'TextEdit', 'ejerlavsko': 'TextEdit', 'sognekode': 'TextEdit', 'UID': 'TextEdit', 'Draning — Ark1_LANDSEJERLAVSKODE': 'Range', 'Draning — Ark1_MATRIKELNR': 'TextEdit', 'Draning — Ark1_UDLAGTVEJ': 'TextEdit', 'Draning — Ark1_JERNBANE': 'TextEdit', 'Draning — Ark1_STED': 'TextEdit', 'Draning — Ark1_HOJVANDLUK': 'TextEdit', 'Draning — Ark1_OLIEUDSKILLER': 'TextEdit', 'Draning — Ark1_BENZINUDSKILLER': 'TextEdit', 'Draning — Ark1_FEDTUDSKILLER': 'TextEdit', 'Draning — Ark1_ANDET': 'TextEdit', 'Draning — Ark1_SPVMWC': 'TextEdit', 'Draning — Ark1_SPVUWC': 'TextEdit', 'Draning — Ark1_DRAEN': 'TextEdit', 'Draning — Ark1_DRAENVENTIL': 'TextEdit', 'Draning — Ark1_DRAENKOTE': 'TextEdit', 'Draning — Ark1_FAELLES': 'TextEdit', 'Draning — Ark1_SEPARAT': 'TextEdit', 'Draning — Ark1_NEDSIVNING': 'TextEdit', 'Draning — Ark1_SAMLETANK': 'TextEdit', 'Draning — Ark1_DRAENUDENPUMPE': 'TextEdit', 'Draning — Ark1_DRAENUDENKOTE': 'TextEdit', 'Draning — Ark1_ARKIV': 'TextEdit', 'Draning — Ark1_KAELDERGULVKOTE': 'TextEdit', 'Draning — Ark1_HOJVANDSKOTE': 'TextEdit', 'Draning — Ark1_BEMAERKNING': 'TextEdit', 'Draning — Ark1_DEKLARATIONKODE': 'Range', 'Draning — Ark1_NATURFREDNING': 'TextEdit', });
lyr_RisikoforoversvmmelseKystdirektoratet_43.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_Risikoforhavvandsindsivning_44.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_RisikoforstningsskaderGEO_45.set('fieldImages', {'fid': 'TextEdit', 'DN': 'Range', });
lyr_Boringerdybdeim_46.set('fieldImages', {'fid': 'TextEdit', 'dgunr': 'TextEdit', 'url': 'TextEdit', 'kode': 'TextEdit', 'kode_tekst': 'TextEdit', 'postnr': 'Range', 'boringsby': 'TextEdit', 'sted1': 'TextEdit', 'komnr': 'Range', 'kommunenav': 'TextEdit', 'region': 'Range', 'region_tek': 'TextEdit', 'dybde': 'TextEdit', 'dybde_num': 'TextEdit', 'dato': 'DateTime', 'aar': 'TextEdit', 'aar_num': 'Range', 'formaal': 'TextEdit', 'formaal_te': 'TextEdit', 'anvendelse': 'TextEdit', 'anvendel_1': 'TextEdit', 'formanv': 'TextEdit', 'formanv_te': 'TextEdit', 'id': 'Range', 'borid': 'Range', 'broendbore': 'TextEdit', 'cyklogram': 'TextEdit', 'dataejer': 'TextEdit', 'anlaegid': 'Range', 'anlaegnr': 'TextEdit', 'anlaegsnav': 'TextEdit', 'journr': 'TextEdit', 'virktyp': 'TextEdit', 'virktypt': 'TextEdit', 'hovedtype': 'TextEdit', 'xutm': 'TextEdit', 'yutm': 'TextEdit', 'terraen_ko': 'TextEdit', 'dgunr_org': 'TextEdit', 'txt_search': 'TextEdit', 'symbol_out': 'TextEdit', 'rgb': 'TextEdit', });
lyr_TerrnnrtgrundvandsommermiddelmunderterrnHIP_47.set('fieldImages', {'fid': 'TextEdit', 'class': 'TextEdit', 'class_range': 'TextEdit', });
lyr_TerrnnrtgrundvandvintermiddelmunderterrnHIP_48.set('fieldImages', {'fid': 'TextEdit', 'class': 'TextEdit', 'class_range': 'TextEdit', });
lyr_Bygninger_damage_cost_Bispebjerg_49.set('fieldImages', {'fid': 'TextEdit', 'Adresse': 'TextEdit', 'byg007Bygningsnummer': 'TextEdit', 'BBRLink': 'TextEdit', 'byg026Opførelsesår': 'TextEdit', 'byg027OmTilbygningsår': 'TextEdit', 'AntalOpgange': 'TextEdit', '_sc_AntalEtager': 'TextEdit', 'byg054AntalEtager': 'TextEdit', 'byg041BebyggetAreal': 'TextEdit', 'Kælderareal1': 'TextEdit', 'Kælderareal2': 'TextEdit', '_sc_basement': 'TextEdit', 'byg021BygningensAnvendelse': 'TextEdit', 'bbruuid': 'TextEdit', 'Areal_beregnet': 'TextEdit', 'BID': 'TextEdit', 'Kaelderareal': 'Range', 'Omkreds_stue': 'Range', 'Omkreds_kaelder': 'Range', 'Afvaergeforanstaltning': 'Range', 'Kaelder_j/n': 'Range', 'Stue_areal': 'Range', 'AutoUID': 'TextEdit', '_row_index': 'TextEdit', '_col_index': 'TextEdit', '_ROW_COL': 'TextEdit', '_AUTO': 'TextEdit', '_BID': 'TextEdit', '_Mean_annual_damage_cost': 'Range', '_AutoUID': 'TextEdit', 'Sum_damage_cost': 'Range', });
lyr_Bygninger_damage_cost_Brnshj_50.set('fieldImages', {'fid': 'TextEdit', 'Adresse': 'TextEdit', 'byg007Bygningsnummer': 'TextEdit', 'BBRLink': 'TextEdit', 'byg026Opførelsesår': 'TextEdit', 'byg027OmTilbygningsår': 'TextEdit', 'AntalOpgange': 'TextEdit', '_sc_AntalEtager': 'TextEdit', 'byg054AntalEtager': 'TextEdit', 'byg041BebyggetAreal': 'TextEdit', 'Kælderareal1': 'TextEdit', 'Kælderareal2': 'TextEdit', '_sc_basement': 'TextEdit', 'byg021BygningensAnvendelse': 'TextEdit', 'bbruuid': 'TextEdit', 'Areal_beregnet': 'TextEdit', 'BID': 'TextEdit', 'Kaelderareal': 'Range', 'Omkreds_stue': 'Range', 'Omkreds_kaelder': 'Range', 'Afvaergeforanstaltning': 'Range', 'Kaelder_j/n': 'Range', 'Stue_areal': 'Range', 'AutoUID': 'TextEdit', '_row_index': 'TextEdit', '_col_index': 'TextEdit', '_ROW_COL': 'TextEdit', '_AUTO': 'TextEdit', '_BID': 'TextEdit', '_Mean_annual_damage_cost': 'Range', '_AutoUID': 'TextEdit', 'Sum_damage_cost': 'Range', });
lyr_Bygninger_damage_cost_Indre_By_51.set('fieldImages', {'fid': 'TextEdit', 'Adresse': 'TextEdit', 'byg007Bygningsnummer': 'TextEdit', 'BBRLink': 'TextEdit', 'byg026Opførelsesår': 'TextEdit', 'byg027OmTilbygningsår': 'TextEdit', 'AntalOpgange': 'TextEdit', '_sc_AntalEtager': 'TextEdit', 'byg054AntalEtager': 'TextEdit', 'byg041BebyggetAreal': 'TextEdit', 'Kælderareal1': 'TextEdit', 'Kælderareal2': 'TextEdit', '_sc_basement': 'TextEdit', 'byg021BygningensAnvendelse': 'TextEdit', 'bbruuid': 'TextEdit', 'Areal_beregnet': 'TextEdit', 'BID': 'TextEdit', 'Kaelderareal': 'Range', 'Omkreds_stue': 'Range', 'Omkreds_kaelder': 'Range', 'Afvaergeforanstaltning': 'Range', 'Kaelder_j/n': 'Range', 'Stue_areal': 'Range', 'AutoUID': 'TextEdit', '_row_index': 'TextEdit', '_col_index': 'TextEdit', '_ROW_COL': 'TextEdit', '_AUTO': 'TextEdit', '_BID': 'TextEdit', '_Mean_annual_damage_cost': 'Range', '_AutoUID': 'TextEdit', 'Sum_damage_cost': 'Range', });
lyr_Bygninger_damage_cost_Nrrebro_52.set('fieldImages', {'fid': 'TextEdit', 'Adresse': 'TextEdit', 'byg007Bygningsnummer': 'TextEdit', 'BBRLink': 'TextEdit', 'byg026Opførelsesår': 'TextEdit', 'byg027OmTilbygningsår': 'TextEdit', 'AntalOpgange': 'TextEdit', '_sc_AntalEtager': 'TextEdit', 'byg054AntalEtager': 'TextEdit', 'byg041BebyggetAreal': 'TextEdit', 'Kælderareal1': 'TextEdit', 'Kælderareal2': 'TextEdit', '_sc_basement': 'TextEdit', 'byg021BygningensAnvendelse': 'TextEdit', 'bbruuid': 'TextEdit', 'Areal_beregnet': 'TextEdit', 'BID': 'TextEdit', 'Kaelderareal': 'Range', 'Omkreds_stue': 'Range', 'Omkreds_kaelder': 'Range', 'Afvaergeforanstaltning': 'Range', 'Kaelder_j/n': 'Range', 'Stue_areal': 'Range', 'AutoUID': 'TextEdit', '_row_index': 'TextEdit', '_col_index': 'TextEdit', '_ROW_COL': 'TextEdit', '_AUTO': 'TextEdit', '_BID': 'TextEdit', '_Mean_annual_damage_cost': 'Range', '_AutoUID': 'TextEdit', 'Sum_damage_cost': 'Range', });
lyr_Bygninger_damage_cost_Sundbyvester_53.set('fieldImages', {'fid': 'TextEdit', 'Adresse': 'TextEdit', 'byg007Bygningsnummer': 'TextEdit', 'BBRLink': 'TextEdit', 'byg026Opførelsesår': 'TextEdit', 'byg027OmTilbygningsår': 'TextEdit', 'AntalOpgange': 'TextEdit', '_sc_AntalEtager': 'TextEdit', 'byg054AntalEtager': 'TextEdit', 'byg041BebyggetAreal': 'TextEdit', 'Kælderareal1': 'TextEdit', 'Kælderareal2': 'TextEdit', '_sc_basement': 'TextEdit', 'byg021BygningensAnvendelse': 'TextEdit', 'bbruuid': 'TextEdit', 'Areal_beregnet': 'TextEdit', 'BID': 'TextEdit', 'Kaelderareal': 'Range', 'Omkreds_stue': 'Range', 'Omkreds_kaelder': 'Range', 'Afvaergeforanstaltning': 'Range', 'Kaelder_j/n': 'Range', 'Stue_areal': 'Range', 'AutoUID': 'TextEdit', '_row_index': 'TextEdit', '_col_index': 'TextEdit', '_ROW_COL': 'TextEdit', '_AUTO': 'TextEdit', '_BID': 'TextEdit', '_Mean_annual_damage_cost': 'Range', '_AutoUID': 'TextEdit', 'Sum_damage_cost': 'Range', });
lyr_Bygninger_damage_cost_Sundbyster_54.set('fieldImages', {'fid': 'TextEdit', 'Adresse': 'TextEdit', 'byg007Bygningsnummer': 'TextEdit', 'BBRLink': 'TextEdit', 'byg026Opførelsesår': 'TextEdit', 'byg027OmTilbygningsår': 'TextEdit', 'AntalOpgange': 'TextEdit', '_sc_AntalEtager': 'TextEdit', 'byg054AntalEtager': 'TextEdit', 'byg041BebyggetAreal': 'TextEdit', 'Kælderareal1': 'TextEdit', 'Kælderareal2': 'TextEdit', '_sc_basement': 'TextEdit', 'byg021BygningensAnvendelse': 'TextEdit', 'bbruuid': 'TextEdit', 'Areal_beregnet': 'TextEdit', 'BID': 'TextEdit', 'Kaelderareal': 'Range', 'Omkreds_stue': 'Range', 'Omkreds_kaelder': 'Range', 'Afvaergeforanstaltning': 'Range', 'Kaelder_j/n': 'Range', 'Stue_areal': 'Range', 'AutoUID': 'TextEdit', '_row_index': 'TextEdit', '_col_index': 'TextEdit', '_ROW_COL': 'TextEdit', '_AUTO': 'TextEdit', '_BID': 'TextEdit', '_Mean_annual_damage_cost': 'Range', '_AutoUID': 'TextEdit', 'Sum_damage_cost': 'Range', });
lyr_Bygninger_damage_cost_Valby_55.set('fieldImages', {'fid': 'TextEdit', 'Adresse': 'TextEdit', 'byg007Bygningsnummer': 'TextEdit', 'BBRLink': 'TextEdit', 'byg026Opførelsesår': 'TextEdit', 'byg027OmTilbygningsår': 'TextEdit', 'AntalOpgange': 'TextEdit', '_sc_AntalEtager': 'TextEdit', 'byg054AntalEtager': 'TextEdit', 'byg041BebyggetAreal': 'TextEdit', 'Kælderareal1': 'TextEdit', 'Kælderareal2': 'TextEdit', '_sc_basement': 'TextEdit', 'byg021BygningensAnvendelse': 'TextEdit', 'bbruuid': 'TextEdit', 'Areal_beregnet': 'TextEdit', 'BID': 'TextEdit', 'Kaelderareal': 'Range', 'Omkreds_stue': 'Range', 'Omkreds_kaelder': 'Range', 'Afvaergeforanstaltning': 'Range', 'Kaelder_j/n': 'Range', 'Stue_areal': 'Range', 'AutoUID': 'TextEdit', '_row_index': 'TextEdit', '_col_index': 'TextEdit', '_ROW_COL': 'TextEdit', '_AUTO': 'TextEdit', '_BID': 'TextEdit', '_Mean_annual_damage_cost': 'Range', '_AutoUID': 'TextEdit', 'Sum_damage_cost': 'Range', });
lyr_Bygninger_damage_cost_Vesterbro_56.set('fieldImages', {'fid': 'TextEdit', 'Adresse': 'TextEdit', 'byg007Bygningsnummer': 'TextEdit', 'BBRLink': 'TextEdit', 'byg026Opførelsesår': 'TextEdit', 'byg027OmTilbygningsår': 'TextEdit', 'AntalOpgange': 'TextEdit', '_sc_AntalEtager': 'TextEdit', 'byg054AntalEtager': 'TextEdit', 'byg041BebyggetAreal': 'TextEdit', 'Kælderareal1': 'TextEdit', 'Kælderareal2': 'TextEdit', '_sc_basement': 'TextEdit', 'byg021BygningensAnvendelse': 'TextEdit', 'bbruuid': 'TextEdit', 'Areal_beregnet': 'TextEdit', 'BID': 'TextEdit', 'Kaelderareal': 'Range', 'Omkreds_stue': 'Range', 'Omkreds_kaelder': 'Range', 'Afvaergeforanstaltning': 'Range', 'Kaelder_j/n': 'Range', 'Stue_areal': 'Range', 'AutoUID': 'TextEdit', '_row_index': 'TextEdit', '_col_index': 'TextEdit', '_ROW_COL': 'TextEdit', '_AUTO': 'TextEdit', '_BID': 'TextEdit', '_Mean_annual_damage_cost': 'Range', '_AutoUID': 'TextEdit', 'Sum_damage_cost': 'Range', });
lyr_Bygninger_damage_cost_sterbro_57.set('fieldImages', {'fid': 'TextEdit', 'Adresse': 'TextEdit', 'byg007Bygningsnummer': 'TextEdit', 'BBRLink': 'TextEdit', 'byg026Opførelsesår': 'TextEdit', 'byg027OmTilbygningsår': 'TextEdit', 'AntalOpgange': 'TextEdit', '_sc_AntalEtager': 'TextEdit', 'byg054AntalEtager': 'TextEdit', 'byg041BebyggetAreal': 'TextEdit', 'Kælderareal1': 'TextEdit', 'Kælderareal2': 'TextEdit', '_sc_basement': 'TextEdit', 'byg021BygningensAnvendelse': 'TextEdit', 'bbruuid': 'TextEdit', 'Areal_beregnet': 'TextEdit', 'BID': 'TextEdit', 'Kaelderareal': 'Range', 'Omkreds_stue': 'Range', 'Omkreds_kaelder': 'Range', 'Afvaergeforanstaltning': 'Range', 'Kaelder_j/n': 'Range', 'Stue_areal': 'Range', 'AutoUID': 'TextEdit', '_row_index': 'TextEdit', '_col_index': 'TextEdit', '_ROW_COL': 'TextEdit', '_AUTO': 'TextEdit', '_BID': 'TextEdit', '_Mean_annual_damage_cost': 'Range', '_AutoUID': 'TextEdit', 'Sum_damage_cost': 'Range', });
lyr_Vandlb100mbuffer_58.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vandlb20mbuffer_59.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vandlb10mbuffer_60.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vandlb2mbuffer_61.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Vandlb_62.set('fieldImages', {'fid': 'TextEdit', 'status': 'TextEdit', 'geometristatus': 'TextEdit', 'registreringsspecifikation': 'TextEdit', 'dataansvar': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'forretningsomraade': 'TextEdit', 'forretningsproces': 'TextEdit', 'registreringsaktoer': 'TextEdit', 'registreringfra': 'TextEdit', 'registreringtil': 'TextEdit', 'virkningsaktoer': 'TextEdit', 'virkningfra': 'TextEdit', 'virkningtil': 'TextEdit', 'plannoejagtighed': 'TextEdit', 'planstedfaestelsesmetode': 'TextEdit', 'vertikalnoejagtighed': 'TextEdit', 'vertikalstedfaestelsesmetode': 'TextEdit', 'applikation': 'TextEdit', 'kommentar': 'TextEdit', 'vandloebstype': 'TextEdit', 'vanduuid': 'TextEdit', 'fraknude': 'TextEdit', 'tilknude': 'TextEdit', 'faldretning': 'TextEdit', 'netvaerk': 'TextEdit', 'midtebredde': 'TextEdit', 'synligvandloebsmidte': 'TextEdit', 'link': 'TextEdit', 'CG_ID': 'TextEdit', 'synligvandloebskant': 'TextEdit', 'underminimumvandkant': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Ser100mbuffer_63.set('fieldImages', {'fid': 'TextEdit', 'FOT_ID': 'Range', 'MOB_ID': 'Range', 'FEAT_KODE': 'Range', 'FEAT_TYPE': 'TextEdit', 'FEATSTATUS': 'TextEdit', 'GEOMSTATUS': 'TextEdit', 'SOETYPE': 'TextEdit', 'SALT_SOE': 'TextEdit', 'TEMPORAER': 'TextEdit', 'UNDER_MIN': 'TextEdit', 'OE_UNDER': 'TextEdit', 'TIMEOF_CRE': 'DateTime', 'TIMEOF_PUB': 'DateTime', 'TIMEOF_REV': 'DateTime', 'TIMEOF_EXP': 'DateTime', });
lyr_Ser20mbuffer_64.set('fieldImages', {'fid': 'TextEdit', 'FOT_ID': 'Range', 'MOB_ID': 'Range', 'FEAT_KODE': 'Range', 'FEAT_TYPE': 'TextEdit', 'FEATSTATUS': 'TextEdit', 'GEOMSTATUS': 'TextEdit', 'SOETYPE': 'TextEdit', 'SALT_SOE': 'TextEdit', 'TEMPORAER': 'TextEdit', 'UNDER_MIN': 'TextEdit', 'OE_UNDER': 'TextEdit', 'TIMEOF_CRE': 'DateTime', 'TIMEOF_PUB': 'DateTime', 'TIMEOF_REV': 'DateTime', 'TIMEOF_EXP': 'DateTime', });
lyr_Ser10mbuffer_65.set('fieldImages', {'fid': 'TextEdit', 'FOT_ID': 'Range', 'MOB_ID': 'Range', 'FEAT_KODE': 'Range', 'FEAT_TYPE': 'TextEdit', 'FEATSTATUS': 'TextEdit', 'GEOMSTATUS': 'TextEdit', 'SOETYPE': 'TextEdit', 'SALT_SOE': 'TextEdit', 'TEMPORAER': 'TextEdit', 'UNDER_MIN': 'TextEdit', 'OE_UNDER': 'TextEdit', 'TIMEOF_CRE': 'DateTime', 'TIMEOF_PUB': 'DateTime', 'TIMEOF_REV': 'DateTime', 'TIMEOF_EXP': 'DateTime', });
lyr_Ser2mbuffer_66.set('fieldImages', {'fid': 'TextEdit', 'FOT_ID': 'Range', 'MOB_ID': 'Range', 'FEAT_KODE': 'Range', 'FEAT_TYPE': 'TextEdit', 'FEATSTATUS': 'TextEdit', 'GEOMSTATUS': 'TextEdit', 'SOETYPE': 'TextEdit', 'SALT_SOE': 'TextEdit', 'TEMPORAER': 'TextEdit', 'UNDER_MIN': 'TextEdit', 'OE_UNDER': 'TextEdit', 'TIMEOF_CRE': 'DateTime', 'TIMEOF_PUB': 'DateTime', 'TIMEOF_REV': 'DateTime', 'TIMEOF_EXP': 'DateTime', });
lyr_Ser_67.set('fieldImages', {'fid': 'TextEdit', 'FOT_ID': 'Range', 'MOB_ID': 'Range', 'FEAT_KODE': 'Range', 'FEAT_TYPE': 'TextEdit', 'FEATSTATUS': 'TextEdit', 'GEOMSTATUS': 'TextEdit', 'SOETYPE': 'TextEdit', 'SALT_SOE': 'TextEdit', 'TEMPORAER': 'TextEdit', 'UNDER_MIN': 'TextEdit', 'OE_UNDER': 'TextEdit', 'TIMEOF_CRE': 'DateTime', 'TIMEOF_PUB': 'DateTime', 'TIMEOF_REV': 'DateTime', 'TIMEOF_EXP': 'DateTime', });
lyr_Jordforureningvidenniveau2V2_68.set('fieldImages', {'fid': 'TextEdit', 'Objekt_id': 'TextEdit', 'SenesteInddateringsdato': 'DateTime', 'Lokalitetsnr': 'TextEdit', 'Lokalitetetsforureningsstatus': 'TextEdit', 'Lokalitetetsadresse': 'TextEdit', 'Regionsnavn': 'TextEdit', 'Lokalitetsejerlavkode': 'Range', 'Lokalitetsmatrikler': 'TextEdit', 'Kortlaegningsdato': 'DateTime', 'Jordforureningsattester': 'TextEdit', });
lyr_Jordforureningvidenniveau1V1_69.set('fieldImages', {'fid': 'TextEdit', 'Objekt_id': 'TextEdit', 'SenesteInddateringsdato': 'DateTime', 'Lokalitetsnr': 'TextEdit', 'Lokalitetetsforureningsstatus': 'TextEdit', 'Lokalitetetsadresse': 'TextEdit', 'Regionsnavn': 'TextEdit', 'Lokalitetsejerlavkode': 'Range', 'Lokalitetsmatrikler': 'TextEdit', 'Kortlaegningsdato': 'DateTime', 'Jordforureningsattester': 'TextEdit', });
lyr_Rrlagtevandlb_70.set('fieldImages', {'fid': 'TextEdit', 'LED_OPSTROEMSKNUDE': 'TextEdit', 'LED_NEDSTROEMSKNUDE': 'TextEdit', 'BUNDLOEBSKOTEOPST': 'TextEdit', 'BUNDLOEBSKOTENEDST': 'TextEdit', 'LED_LAENGDE': 'TextEdit', 'FALD': 'TextEdit', 'LABELTEXT': 'TextEdit', 'EJERNAVN': 'TextEdit', 'EJERNAVN_DD': 'TextEdit', 'EJERANDEL': 'TextEdit', 'DRIFTANSVARLIG': 'TextEdit', 'STATUS_DD': 'TextEdit', 'KATEGORIAFLOEB': 'TextEdit', 'TYPEAFLOEB': 'TextEdit', 'LEDNFUNKTION': 'TextEdit', 'TRANSPORT': 'TextEdit', 'TILLADTILSLUT': 'TextEdit', 'DYK': 'TextEdit', 'ENTREPRENOER': 'TextEdit', 'LED_BEMAERKNING': 'TextEdit', 'SANERINGSMETODE': 'TextEdit', 'SANERINGSFIRMA': 'TextEdit', 'ETABLERETTIDL': 'TextEdit', 'DEL_DATOETABLERET': 'DateTime', 'DATOSANERING': 'DateTime', 'DATOOPDATERET': 'DateTime', 'LED_DATOHISTORISK': 'DateTime', 'STATUSDATO': 'DateTime', 'LOKALITETSNAVN': 'TextEdit', 'DOBBELTLEDNNR': 'Range', 'DEL_OPSTROEMSKNUDE': 'TextEdit', 'DEL_NEDSTROEMSKNUDE': 'TextEdit', 'DEL_LAENGDE': 'TextEdit', 'DEL_BEMAERKNING': 'TextEdit', 'MATERIALE': 'TextEdit', 'TVAERSNIT': 'TextEdit', 'HANDELSMAAL': 'Range', 'DIAMETERINDV': 'Range', 'FORING_DIAM_INDV': 'Range', 'HOEJDEINDV': 'Range', 'GODSTYKKELSE': 'Range', 'FORING_GODSTYKKELSE': 'Range', 'MUFFEBREDDE': 'Range', 'MUFFEHOEJDE': 'Range', 'MEDFOD': 'TextEdit', 'SDRKODE': 'Range', 'ROERBEMAERKNING': 'TextEdit', 'OPRIND_DIMENSION': 'TextEdit', 'OPRIND_OPSTROEMSKOTE': 'TextEdit', 'OPRIND_NEDSTROEMSKOTE': 'TextEdit', 'STATUSKODE': 'Range', 'TYPEAFLOEBKODE': 'Range', 'KATEGORIAFLOEBKODE': 'Range', 'LEDNINGID': 'Range', 'DELLEDNINGSID': 'Range', 'ROERKATALOGID': 'Range', 'EJERKODE': 'Range', 'EJERKODE_DD': 'Range', 'MI_STYLE2': 'TextEdit', 'THEME_ATTR1': 'TextEdit', });
lyr_Gammelkystlinje18701899_71.set('fieldImages', {'fid': 'TextEdit', });
lyr_EngeogMoser18701899_72.set('fieldImages', {'fid': 'TextEdit', });
lyr_Habitatomrder_73.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'Range', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'DateTime', 'Systid_til': 'DateTime', 'Oprettet': 'DateTime', 'Oprindkode': 'Range', 'Oprindelse': 'TextEdit', 'Statuskode': 'Range', 'Status': 'TextEdit', 'Off_kode': 'Range', 'Offentlig': 'TextEdit', 'CVR_kode': 'Range', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_length': 'TextEdit', 'Site_nr': 'Range', 'Objektnavn': 'TextEdit', 'Loc_ident': 'TextEdit', 'Site_ident': 'TextEdit', 'Gyldig_fra': 'DateTime', 'Gyldig_til': 'DateTime', });
lyr_Frededeomrder_74.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'Range', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'DateTime', 'Systid_til': 'DateTime', 'Oprettet': 'DateTime', 'Oprindkode': 'Range', 'Oprindelse': 'TextEdit', 'Statuskode': 'Range', 'Status': 'TextEdit', 'Off_kode': 'Range', 'Offentlig': 'TextEdit', 'CVR_kode': 'Range', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_length': 'TextEdit', 'Fred_tkode': 'Range', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'Range', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'Range', 'Gyldig_fra': 'DateTime', 'Gyldig_til': 'DateTime', });
lyr_Spildevandskloakeret_75.set('fieldImages', {'fid': 'TextEdit', 'doklink': 'TextEdit', 'uuid': 'TextEdit', 'temakode': 'Range', 'temanavn': 'TextEdit', 'objekt_id': 'Range', 'systid_fra': 'TextEdit', 'oprettet': 'TextEdit', 'oprindkode': 'Range', 'oprindelse': 'TextEdit', 'statuskode': 'Range', 'status': 'TextEdit', 'cvr_kode': 'TextEdit', 'cvrname': 'TextEdit', 'bruger_id': 'TextEdit', 'link': 'TextEdit', 'navn1201': 'TextEdit', 'type1201a': 'Range', 'vaerd1201a': 'TextEdit', 'type1201b': 'Range', 'vaerd1201b': 'TextEdit', 'staar1201': 'Range', 'sluaar1201': 'Range', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datostart': 'Range', 'datoslut': 'Range', });
lyr_Ingenkloakering_76.set('fieldImages', {'fid': 'TextEdit', 'doklink': 'TextEdit', 'uuid': 'TextEdit', 'temakode': 'Range', 'temanavn': 'TextEdit', 'objekt_id': 'Range', 'systid_fra': 'TextEdit', 'oprettet': 'TextEdit', 'oprindkode': 'Range', 'oprindelse': 'TextEdit', 'statuskode': 'Range', 'status': 'TextEdit', 'cvr_kode': 'TextEdit', 'cvrname': 'TextEdit', 'bruger_id': 'TextEdit', 'link': 'TextEdit', 'navn1201': 'TextEdit', 'type1201a': 'Range', 'vaerd1201a': 'TextEdit', 'type1201b': 'Range', 'vaerd1201b': 'TextEdit', 'staar1201': 'Range', 'sluaar1201': 'Range', 'datoforsl': 'Range', 'datovedt': 'Range', 'datoaflyst': 'Range', 'datoikraft': 'Range', 'datostart': 'Range', 'datoslut': 'Range', 'CG_ID': 'Range', 'navn': 'TextEdit', 'regionskode': 'Range', 'udtraeksdato': 'DateTime', 'kommunekode': 'TextEdit', 'udenforkommuneinddeling': 'TextEdit', 'area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_VedtagetSeperatkloakering_77.set('fieldImages', {'fid': 'TextEdit', 'doklink': 'TextEdit', 'uuid': 'TextEdit', 'temakode': 'TextEdit', 'temanavn': 'TextEdit', 'objekt_id': 'TextEdit', 'systid_fra': 'TextEdit', 'oprettet': 'TextEdit', 'oprindkode': 'TextEdit', 'oprindelse': 'TextEdit', 'statuskode': 'TextEdit', 'status': 'TextEdit', 'cvr_kode': 'TextEdit', 'cvrname': 'TextEdit', 'bruger_id': 'TextEdit', 'link': 'TextEdit', 'navn1201': 'TextEdit', 'type1201a': 'TextEdit', 'vaerd1201a': 'TextEdit', 'type1201b': 'TextEdit', 'vaerd1201b': 'TextEdit', 'staar1201': 'TextEdit', 'sluaar1201': 'TextEdit', 'datoforsl': 'TextEdit', 'datovedt': 'TextEdit', 'datoaflyst': 'TextEdit', 'datoikraft': 'TextEdit', 'datostart': 'TextEdit', 'datoslut': 'TextEdit', });
lyr_Kbenhavn_78.set('fieldImages', {'fid': 'TextEdit', 'navn': 'TextEdit', });
lyr_PlanfladeSpildevand_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'PLANNAVN': 'no label', 'PROJEKTNUM': 'no label', 'STATUS': 'no label', 'FASE': 'no label', 'STYLE_REGE': 'no label', 'PLANLAGTST': 'no label', 'PLANLAGTSL': 'no label', 'PLANLÆGGER': 'no label', 'PROJEKTCHE': 'no label', 'PROJEKTEJE': 'no label', 'PROJEKTLED': 'no label', 'BEM': 'no label', 'TYPE': 'no label', 'CVR_KOMBIN': 'no label', 'FORSYNINGS': 'no label', 'TEMAER_KOM': 'no label', 'SIDSTOPDAT': 'no label', 'INITIALER': 'no label', 'KI_LINK': 'no label', });
lyr_PlanfladeVand_3.set('fieldLabels', {'fid': 'no label', });
lyr_ProjektfladeSpildevand_4.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'PROJEKTNAV': 'no label', 'PROJEKTNUM': 'no label', 'UNDERPROJE': 'no label', 'STATUS': 'no label', 'FASE': 'no label', 'PLANLAGTST': 'no label', 'FORVENTETS': 'no label', 'FORVENTE_1': 'no label', 'PROJEKTLED': 'no label', 'TEGNER': 'no label', 'TILSYN': 'no label', 'BEM': 'no label', 'PROJEKT_DO': 'no label', 'PROJEKTERI': 'no label', 'PPL_CODE_V': 'no label', 'CVR_KOMBIN': 'no label', 'FORSYNINGS': 'no label', 'TEMAER_KOM': 'no label', 'SIDSTOPDAT': 'no label', 'INITIALER': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ProjektfladeVand_5.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'PROJEKTNAV': 'no label', 'PROJEKTNUM': 'no label', 'UNDERPROJE': 'no label', 'STATUS': 'no label', 'FASE': 'no label', 'PLANLAGTST': 'no label', 'FORVENTETS': 'no label', 'FORVENTE_1': 'no label', 'PROJEKTLED': 'no label', 'TEGNER': 'no label', 'TILSYN': 'no label', 'BEM': 'no label', 'PROJEKT_DO': 'no label', 'PROJEKTERI': 'no label', 'PPL_CODE_V': 'no label', 'CVR_KOMBIN': 'no label', 'FORSYNINGS': 'no label', 'TEMAER_KOM': 'no label', 'SIDSTOPDAT': 'no label', 'INITIALER': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_ProjektfladeVarme_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'PROJEKTNAV': 'no label', 'PROJEKTNUM': 'no label', 'UNDERPROJE': 'no label', 'STATUS': 'no label', 'FASE': 'no label', 'PLANLAGTST': 'no label', 'FORVENTETS': 'no label', 'FORVENTE_1': 'no label', 'PROJEKTLED': 'no label', 'TEGNER': 'no label', 'TILSYN': 'no label', 'BEM': 'no label', 'PROJEKT_DO': 'no label', 'PROJEKTERI': 'no label', 'PPL_CODE_V': 'no label', 'CVR_KOMBIN': 'no label', 'FORSYNINGS': 'no label', 'TEMAER_KOM': 'no label', 'SIDSTOPDAT': 'no label', 'INITIALER': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Antropogentlandskab_7.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Bundmorneflade_8.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Ddislandskab_9.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Erosionsdal_10.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Marinflade_11.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Mose_12.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_S_13.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Trlagtmarintforland_14.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_Isoverskredetrandmorne_15.set('fieldLabels', {'fid': 'no label', 'tsym': 'no label', 'version': 'no label', 'landscape': 'no label', 'landskab': 'no label', 'shape_leng': 'no label', 'ruleid': 'no label', 'overfoerse': 'no label', 'st_area_sh': 'no label', 'st_perimet': 'no label', });
lyr_nedsivningsanlg_Valby_16.set('fieldLabels', {'fid': 'no label', 'link_byggesag': 'no label', 'link_miljoesag': 'no label', 'adresse': 'no label', 'matr_nr': 'no label', 'afkoblet_areal_m2': 'no label', 'afkoblet_pct': 'no label', 'udtraadt_af_forsyningen': 'no label', 'tilladelse_taget_i_brug': 'no label', 'vand': 'no label', 'tilladelse': 'no label', 'afledning_type': 'no label', 'bemaerkninger': 'no label', 'tilladelse_udloebet': 'no label', 'nedsivningsevne': 'no label', 'ogc_fid': 'no label', });
lyr_nedsivningsanlg_Sundbyster_17.set('fieldLabels', {'fid': 'no label', 'link_byggesag': 'no label', 'link_miljoesag': 'no label', 'adresse': 'no label', 'matr_nr': 'no label', 'afkoblet_areal_m2': 'no label', 'afkoblet_pct': 'no label', 'udtraadt_af_forsyningen': 'no label', 'tilladelse_taget_i_brug': 'no label', 'vand': 'no label', 'tilladelse': 'no label', 'afledning_type': 'no label', 'bemaerkninger': 'no label', 'tilladelse_udloebet': 'no label', 'nedsivningsevne': 'no label', 'ogc_fid': 'no label', });
lyr_nedsivningsanlg_Sundbyvester_18.set('fieldLabels', {'fid': 'no label', 'link_byggesag': 'no label', 'link_miljoesag': 'no label', 'adresse': 'no label', 'matr_nr': 'no label', 'afkoblet_areal_m2': 'no label', 'afkoblet_pct': 'no label', 'udtraadt_af_forsyningen': 'no label', 'tilladelse_taget_i_brug': 'no label', 'vand': 'no label', 'tilladelse': 'no label', 'afledning_type': 'no label', 'bemaerkninger': 'no label', 'tilladelse_udloebet': 'no label', 'nedsivningsevne': 'no label', 'ogc_fid': 'no label', });
lyr_nedsivningsanlg_Nrrebro_19.set('fieldLabels', {'fid': 'no label', 'link_byggesag': 'no label', 'link_miljoesag': 'no label', 'adresse': 'no label', 'matr_nr': 'no label', 'afkoblet_areal_m2': 'no label', 'afkoblet_pct': 'no label', 'udtraadt_af_forsyningen': 'no label', 'tilladelse_taget_i_brug': 'no label', 'vand': 'no label', 'tilladelse': 'no label', 'afledning_type': 'no label', 'bemaerkninger': 'no label', 'tilladelse_udloebet': 'no label', 'nedsivningsevne': 'no label', 'ogc_fid': 'no label', });
lyr_nedsivningsanlg_Indre_By_20.set('fieldLabels', {'fid': 'no label', 'link_byggesag': 'no label', 'link_miljoesag': 'no label', 'adresse': 'no label', 'matr_nr': 'no label', 'afkoblet_areal_m2': 'no label', 'afkoblet_pct': 'no label', 'udtraadt_af_forsyningen': 'no label', 'tilladelse_taget_i_brug': 'no label', 'vand': 'no label', 'tilladelse': 'no label', 'afledning_type': 'no label', 'bemaerkninger': 'no label', 'tilladelse_udloebet': 'no label', 'nedsivningsevne': 'no label', 'ogc_fid': 'no label', });
lyr_nedsivningsanlg_Brnshj_21.set('fieldLabels', {'fid': 'no label', 'link_byggesag': 'no label', 'link_miljoesag': 'no label', 'adresse': 'no label', 'matr_nr': 'no label', 'afkoblet_areal_m2': 'no label', 'afkoblet_pct': 'no label', 'udtraadt_af_forsyningen': 'no label', 'tilladelse_taget_i_brug': 'no label', 'vand': 'no label', 'tilladelse': 'no label', 'afledning_type': 'no label', 'bemaerkninger': 'no label', 'tilladelse_udloebet': 'no label', 'nedsivningsevne': 'no label', 'ogc_fid': 'no label', });
lyr_nedsivningsanlg_Bispebjerg_22.set('fieldLabels', {'fid': 'no label', 'link_byggesag': 'no label', 'link_miljoesag': 'no label', 'adresse': 'no label', 'matr_nr': 'no label', 'afkoblet_areal_m2': 'no label', 'afkoblet_pct': 'no label', 'udtraadt_af_forsyningen': 'no label', 'tilladelse_taget_i_brug': 'no label', 'vand': 'no label', 'tilladelse': 'no label', 'afledning_type': 'no label', 'bemaerkninger': 'no label', 'tilladelse_udloebet': 'no label', 'nedsivningsevne': 'no label', 'ogc_fid': 'no label', });
lyr_nedsivningsanlg_sterbro_23.set('fieldLabels', {'fid': 'no label', 'link_byggesag': 'no label', 'link_miljoesag': 'no label', 'adresse': 'no label', 'matr_nr': 'no label', 'afkoblet_areal_m2': 'no label', 'afkoblet_pct': 'no label', 'udtraadt_af_forsyningen': 'no label', 'tilladelse_taget_i_brug': 'no label', 'vand': 'no label', 'tilladelse': 'no label', 'afledning_type': 'no label', 'bemaerkninger': 'no label', 'tilladelse_udloebet': 'no label', 'nedsivningsevne': 'no label', 'ogc_fid': 'no label', });
lyr_nedsivningsanlg_Vesterbro_24.set('fieldLabels', {'fid': 'no label', 'link_byggesag': 'no label', 'link_miljoesag': 'no label', 'adresse': 'no label', 'matr_nr': 'no label', 'afkoblet_areal_m2': 'no label', 'afkoblet_pct': 'no label', 'udtraadt_af_forsyningen': 'no label', 'tilladelse_taget_i_brug': 'no label', 'vand': 'no label', 'tilladelse': 'no label', 'afledning_type': 'no label', 'bemaerkninger': 'no label', 'tilladelse_udloebet': 'no label', 'nedsivningsevne': 'no label', 'ogc_fid': 'no label', });
lyr_matrikler_med_data_dran_1_sterbro_25.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_Vesterbro_26.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_Valby_27.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_Sundbyster_28.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_Sundbyvester_29.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_Nrrebro_30.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_Indre_By_31.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_Brnshj_32.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_Bispebjerg_33.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_sterbro_34.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_Vesterbro_35.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_Valby_36.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_Sundbyster_37.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_Sundbyvester_38.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_Nrrebro_39.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_Indre_By_40.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_Brnshj_41.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_matrikler_med_data_dran_1_Bispebjerg_42.set('fieldLabels', {'fid': 'no label', 'ejendommen': 'no label', 'ejendomsnu': 'no label', 'husnummer': 'no label', 'id': 'no label', 'matrikelnu': 'no label', 'ejerlavsko': 'no label', 'sognekode': 'no label', 'UID': 'no label', 'Draning — Ark1_LANDSEJERLAVSKODE': 'no label', 'Draning — Ark1_MATRIKELNR': 'no label', 'Draning — Ark1_UDLAGTVEJ': 'no label', 'Draning — Ark1_JERNBANE': 'no label', 'Draning — Ark1_STED': 'no label', 'Draning — Ark1_HOJVANDLUK': 'no label', 'Draning — Ark1_OLIEUDSKILLER': 'no label', 'Draning — Ark1_BENZINUDSKILLER': 'no label', 'Draning — Ark1_FEDTUDSKILLER': 'no label', 'Draning — Ark1_ANDET': 'no label', 'Draning — Ark1_SPVMWC': 'no label', 'Draning — Ark1_SPVUWC': 'no label', 'Draning — Ark1_DRAEN': 'no label', 'Draning — Ark1_DRAENVENTIL': 'no label', 'Draning — Ark1_DRAENKOTE': 'no label', 'Draning — Ark1_FAELLES': 'no label', 'Draning — Ark1_SEPARAT': 'no label', 'Draning — Ark1_NEDSIVNING': 'no label', 'Draning — Ark1_SAMLETANK': 'no label', 'Draning — Ark1_DRAENUDENPUMPE': 'no label', 'Draning — Ark1_DRAENUDENKOTE': 'no label', 'Draning — Ark1_ARKIV': 'no label', 'Draning — Ark1_KAELDERGULVKOTE': 'no label', 'Draning — Ark1_HOJVANDSKOTE': 'no label', 'Draning — Ark1_BEMAERKNING': 'no label', 'Draning — Ark1_DEKLARATIONKODE': 'no label', 'Draning — Ark1_NATURFREDNING': 'no label', });
lyr_RisikoforoversvmmelseKystdirektoratet_43.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Risikoforhavvandsindsivning_44.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_RisikoforstningsskaderGEO_45.set('fieldLabels', {'fid': 'no label', 'DN': 'no label', });
lyr_Boringerdybdeim_46.set('fieldLabels', {'fid': 'no label', 'dgunr': 'no label', 'url': 'no label', 'kode': 'no label', 'kode_tekst': 'no label', 'postnr': 'no label', 'boringsby': 'no label', 'sted1': 'no label', 'komnr': 'no label', 'kommunenav': 'no label', 'region': 'no label', 'region_tek': 'no label', 'dybde': 'no label', 'dybde_num': 'no label', 'dato': 'no label', 'aar': 'no label', 'aar_num': 'no label', 'formaal': 'no label', 'formaal_te': 'no label', 'anvendelse': 'no label', 'anvendel_1': 'no label', 'formanv': 'no label', 'formanv_te': 'no label', 'id': 'no label', 'borid': 'no label', 'broendbore': 'no label', 'cyklogram': 'no label', 'dataejer': 'no label', 'anlaegid': 'no label', 'anlaegnr': 'no label', 'anlaegsnav': 'no label', 'journr': 'no label', 'virktyp': 'no label', 'virktypt': 'no label', 'hovedtype': 'no label', 'xutm': 'no label', 'yutm': 'no label', 'terraen_ko': 'no label', 'dgunr_org': 'no label', 'txt_search': 'no label', 'symbol_out': 'no label', 'rgb': 'no label', });
lyr_TerrnnrtgrundvandsommermiddelmunderterrnHIP_47.set('fieldLabels', {'fid': 'no label', 'class': 'no label', 'class_range': 'no label', });
lyr_TerrnnrtgrundvandvintermiddelmunderterrnHIP_48.set('fieldLabels', {'fid': 'no label', 'class': 'no label', 'class_range': 'no label', });
lyr_Bygninger_damage_cost_Bispebjerg_49.set('fieldLabels', {'fid': 'hidden field', 'Adresse': 'no label', 'byg007Bygningsnummer': 'hidden field', 'BBRLink': 'hidden field', 'byg026Opførelsesår': 'hidden field', 'byg027OmTilbygningsår': 'hidden field', 'AntalOpgange': 'hidden field', '_sc_AntalEtager': 'hidden field', 'byg054AntalEtager': 'hidden field', 'byg041BebyggetAreal': 'hidden field', 'Kælderareal1': 'hidden field', 'Kælderareal2': 'hidden field', '_sc_basement': 'hidden field', 'byg021BygningensAnvendelse': 'hidden field', 'bbruuid': 'hidden field', 'Areal_beregnet': 'hidden field', 'BID': 'hidden field', 'Kaelderareal': 'hidden field', 'Omkreds_stue': 'hidden field', 'Omkreds_kaelder': 'hidden field', 'Afvaergeforanstaltning': 'hidden field', 'Kaelder_j/n': 'hidden field', 'Stue_areal': 'hidden field', 'AutoUID': 'hidden field', '_row_index': 'hidden field', '_col_index': 'hidden field', '_ROW_COL': 'hidden field', '_AUTO': 'hidden field', '_BID': 'hidden field', '_Mean_annual_damage_cost': 'inline label - visible with data', '_AutoUID': 'hidden field', 'Sum_damage_cost': 'hidden field', });
lyr_Bygninger_damage_cost_Brnshj_50.set('fieldLabels', {'fid': 'hidden field', 'Adresse': 'no label', 'byg007Bygningsnummer': 'hidden field', 'BBRLink': 'hidden field', 'byg026Opførelsesår': 'hidden field', 'byg027OmTilbygningsår': 'hidden field', 'AntalOpgange': 'hidden field', '_sc_AntalEtager': 'hidden field', 'byg054AntalEtager': 'hidden field', 'byg041BebyggetAreal': 'hidden field', 'Kælderareal1': 'hidden field', 'Kælderareal2': 'hidden field', '_sc_basement': 'hidden field', 'byg021BygningensAnvendelse': 'hidden field', 'bbruuid': 'hidden field', 'Areal_beregnet': 'hidden field', 'BID': 'hidden field', 'Kaelderareal': 'hidden field', 'Omkreds_stue': 'hidden field', 'Omkreds_kaelder': 'hidden field', 'Afvaergeforanstaltning': 'hidden field', 'Kaelder_j/n': 'hidden field', 'Stue_areal': 'hidden field', 'AutoUID': 'hidden field', '_row_index': 'hidden field', '_col_index': 'hidden field', '_ROW_COL': 'hidden field', '_AUTO': 'hidden field', '_BID': 'hidden field', '_Mean_annual_damage_cost': 'inline label - visible with data', '_AutoUID': 'hidden field', 'Sum_damage_cost': 'hidden field', });
lyr_Bygninger_damage_cost_Indre_By_51.set('fieldLabels', {'fid': 'hidden field', 'Adresse': 'no label', 'byg007Bygningsnummer': 'hidden field', 'BBRLink': 'hidden field', 'byg026Opførelsesår': 'hidden field', 'byg027OmTilbygningsår': 'hidden field', 'AntalOpgange': 'hidden field', '_sc_AntalEtager': 'hidden field', 'byg054AntalEtager': 'hidden field', 'byg041BebyggetAreal': 'hidden field', 'Kælderareal1': 'hidden field', 'Kælderareal2': 'hidden field', '_sc_basement': 'hidden field', 'byg021BygningensAnvendelse': 'hidden field', 'bbruuid': 'hidden field', 'Areal_beregnet': 'hidden field', 'BID': 'hidden field', 'Kaelderareal': 'hidden field', 'Omkreds_stue': 'hidden field', 'Omkreds_kaelder': 'hidden field', 'Afvaergeforanstaltning': 'hidden field', 'Kaelder_j/n': 'hidden field', 'Stue_areal': 'hidden field', 'AutoUID': 'hidden field', '_row_index': 'hidden field', '_col_index': 'hidden field', '_ROW_COL': 'hidden field', '_AUTO': 'hidden field', '_BID': 'hidden field', '_Mean_annual_damage_cost': 'inline label - visible with data', '_AutoUID': 'hidden field', 'Sum_damage_cost': 'hidden field', });
lyr_Bygninger_damage_cost_Nrrebro_52.set('fieldLabels', {'fid': 'hidden field', 'Adresse': 'no label', 'byg007Bygningsnummer': 'hidden field', 'BBRLink': 'hidden field', 'byg026Opførelsesår': 'hidden field', 'byg027OmTilbygningsår': 'hidden field', 'AntalOpgange': 'hidden field', '_sc_AntalEtager': 'hidden field', 'byg054AntalEtager': 'hidden field', 'byg041BebyggetAreal': 'hidden field', 'Kælderareal1': 'hidden field', 'Kælderareal2': 'hidden field', '_sc_basement': 'hidden field', 'byg021BygningensAnvendelse': 'hidden field', 'bbruuid': 'hidden field', 'Areal_beregnet': 'hidden field', 'BID': 'hidden field', 'Kaelderareal': 'hidden field', 'Omkreds_stue': 'hidden field', 'Omkreds_kaelder': 'hidden field', 'Afvaergeforanstaltning': 'hidden field', 'Kaelder_j/n': 'hidden field', 'Stue_areal': 'hidden field', 'AutoUID': 'hidden field', '_row_index': 'hidden field', '_col_index': 'hidden field', '_ROW_COL': 'hidden field', '_AUTO': 'hidden field', '_BID': 'hidden field', '_Mean_annual_damage_cost': 'inline label - visible with data', '_AutoUID': 'hidden field', 'Sum_damage_cost': 'hidden field', });
lyr_Bygninger_damage_cost_Sundbyvester_53.set('fieldLabels', {'fid': 'hidden field', 'Adresse': 'no label', 'byg007Bygningsnummer': 'hidden field', 'BBRLink': 'hidden field', 'byg026Opførelsesår': 'hidden field', 'byg027OmTilbygningsår': 'hidden field', 'AntalOpgange': 'hidden field', '_sc_AntalEtager': 'hidden field', 'byg054AntalEtager': 'hidden field', 'byg041BebyggetAreal': 'hidden field', 'Kælderareal1': 'hidden field', 'Kælderareal2': 'hidden field', '_sc_basement': 'hidden field', 'byg021BygningensAnvendelse': 'hidden field', 'bbruuid': 'hidden field', 'Areal_beregnet': 'hidden field', 'BID': 'hidden field', 'Kaelderareal': 'hidden field', 'Omkreds_stue': 'hidden field', 'Omkreds_kaelder': 'hidden field', 'Afvaergeforanstaltning': 'hidden field', 'Kaelder_j/n': 'hidden field', 'Stue_areal': 'hidden field', 'AutoUID': 'hidden field', '_row_index': 'hidden field', '_col_index': 'hidden field', '_ROW_COL': 'hidden field', '_AUTO': 'hidden field', '_BID': 'hidden field', '_Mean_annual_damage_cost': 'inline label - visible with data', '_AutoUID': 'hidden field', 'Sum_damage_cost': 'hidden field', });
lyr_Bygninger_damage_cost_Sundbyster_54.set('fieldLabels', {'fid': 'hidden field', 'Adresse': 'no label', 'byg007Bygningsnummer': 'hidden field', 'BBRLink': 'hidden field', 'byg026Opførelsesår': 'hidden field', 'byg027OmTilbygningsår': 'hidden field', 'AntalOpgange': 'hidden field', '_sc_AntalEtager': 'hidden field', 'byg054AntalEtager': 'hidden field', 'byg041BebyggetAreal': 'hidden field', 'Kælderareal1': 'hidden field', 'Kælderareal2': 'hidden field', '_sc_basement': 'hidden field', 'byg021BygningensAnvendelse': 'hidden field', 'bbruuid': 'hidden field', 'Areal_beregnet': 'hidden field', 'BID': 'hidden field', 'Kaelderareal': 'hidden field', 'Omkreds_stue': 'hidden field', 'Omkreds_kaelder': 'hidden field', 'Afvaergeforanstaltning': 'hidden field', 'Kaelder_j/n': 'hidden field', 'Stue_areal': 'hidden field', 'AutoUID': 'hidden field', '_row_index': 'hidden field', '_col_index': 'hidden field', '_ROW_COL': 'hidden field', '_AUTO': 'hidden field', '_BID': 'hidden field', '_Mean_annual_damage_cost': 'inline label - visible with data', '_AutoUID': 'hidden field', 'Sum_damage_cost': 'hidden field', });
lyr_Bygninger_damage_cost_Valby_55.set('fieldLabels', {'fid': 'hidden field', 'Adresse': 'no label', 'byg007Bygningsnummer': 'hidden field', 'BBRLink': 'hidden field', 'byg026Opførelsesår': 'hidden field', 'byg027OmTilbygningsår': 'hidden field', 'AntalOpgange': 'hidden field', '_sc_AntalEtager': 'hidden field', 'byg054AntalEtager': 'hidden field', 'byg041BebyggetAreal': 'hidden field', 'Kælderareal1': 'hidden field', 'Kælderareal2': 'hidden field', '_sc_basement': 'hidden field', 'byg021BygningensAnvendelse': 'hidden field', 'bbruuid': 'hidden field', 'Areal_beregnet': 'hidden field', 'BID': 'hidden field', 'Kaelderareal': 'hidden field', 'Omkreds_stue': 'hidden field', 'Omkreds_kaelder': 'hidden field', 'Afvaergeforanstaltning': 'hidden field', 'Kaelder_j/n': 'hidden field', 'Stue_areal': 'hidden field', 'AutoUID': 'hidden field', '_row_index': 'hidden field', '_col_index': 'hidden field', '_ROW_COL': 'hidden field', '_AUTO': 'hidden field', '_BID': 'hidden field', '_Mean_annual_damage_cost': 'inline label - visible with data', '_AutoUID': 'hidden field', 'Sum_damage_cost': 'hidden field', });
lyr_Bygninger_damage_cost_Vesterbro_56.set('fieldLabels', {'fid': 'hidden field', 'Adresse': 'no label', 'byg007Bygningsnummer': 'hidden field', 'BBRLink': 'hidden field', 'byg026Opførelsesår': 'hidden field', 'byg027OmTilbygningsår': 'hidden field', 'AntalOpgange': 'hidden field', '_sc_AntalEtager': 'hidden field', 'byg054AntalEtager': 'hidden field', 'byg041BebyggetAreal': 'hidden field', 'Kælderareal1': 'hidden field', 'Kælderareal2': 'hidden field', '_sc_basement': 'hidden field', 'byg021BygningensAnvendelse': 'hidden field', 'bbruuid': 'hidden field', 'Areal_beregnet': 'hidden field', 'BID': 'hidden field', 'Kaelderareal': 'hidden field', 'Omkreds_stue': 'hidden field', 'Omkreds_kaelder': 'hidden field', 'Afvaergeforanstaltning': 'hidden field', 'Kaelder_j/n': 'hidden field', 'Stue_areal': 'hidden field', 'AutoUID': 'hidden field', '_row_index': 'hidden field', '_col_index': 'hidden field', '_ROW_COL': 'hidden field', '_AUTO': 'hidden field', '_BID': 'hidden field', '_Mean_annual_damage_cost': 'inline label - visible with data', '_AutoUID': 'hidden field', 'Sum_damage_cost': 'hidden field', });
lyr_Bygninger_damage_cost_sterbro_57.set('fieldLabels', {'fid': 'hidden field', 'Adresse': 'no label', 'byg007Bygningsnummer': 'hidden field', 'BBRLink': 'hidden field', 'byg026Opførelsesår': 'hidden field', 'byg027OmTilbygningsår': 'hidden field', 'AntalOpgange': 'hidden field', '_sc_AntalEtager': 'hidden field', 'byg054AntalEtager': 'hidden field', 'byg041BebyggetAreal': 'hidden field', 'Kælderareal1': 'hidden field', 'Kælderareal2': 'hidden field', '_sc_basement': 'hidden field', 'byg021BygningensAnvendelse': 'hidden field', 'bbruuid': 'hidden field', 'Areal_beregnet': 'hidden field', 'BID': 'hidden field', 'Kaelderareal': 'hidden field', 'Omkreds_stue': 'hidden field', 'Omkreds_kaelder': 'hidden field', 'Afvaergeforanstaltning': 'hidden field', 'Kaelder_j/n': 'hidden field', 'Stue_areal': 'hidden field', 'AutoUID': 'hidden field', '_row_index': 'hidden field', '_col_index': 'hidden field', '_ROW_COL': 'hidden field', '_AUTO': 'hidden field', '_BID': 'hidden field', '_Mean_annual_damage_cost': 'inline label - visible with data', '_AutoUID': 'hidden field', 'Sum_damage_cost': 'hidden field', });
lyr_Vandlb100mbuffer_58.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vandlb20mbuffer_59.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vandlb10mbuffer_60.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vandlb2mbuffer_61.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Vandlb_62.set('fieldLabels', {'fid': 'no label', 'status': 'no label', 'geometristatus': 'no label', 'registreringsspecifikation': 'no label', 'dataansvar': 'no label', 'forretningshaendelse': 'no label', 'forretningsomraade': 'no label', 'forretningsproces': 'no label', 'registreringsaktoer': 'no label', 'registreringfra': 'no label', 'registreringtil': 'no label', 'virkningsaktoer': 'no label', 'virkningfra': 'no label', 'virkningtil': 'no label', 'plannoejagtighed': 'no label', 'planstedfaestelsesmetode': 'no label', 'vertikalnoejagtighed': 'no label', 'vertikalstedfaestelsesmetode': 'no label', 'applikation': 'no label', 'kommentar': 'no label', 'vandloebstype': 'no label', 'vanduuid': 'no label', 'fraknude': 'no label', 'tilknude': 'no label', 'faldretning': 'no label', 'netvaerk': 'no label', 'midtebredde': 'no label', 'synligvandloebsmidte': 'no label', 'link': 'no label', 'CG_ID': 'no label', 'synligvandloebskant': 'no label', 'underminimumvandkant': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Ser100mbuffer_63.set('fieldLabels', {'fid': 'no label', 'FOT_ID': 'no label', 'MOB_ID': 'no label', 'FEAT_KODE': 'no label', 'FEAT_TYPE': 'no label', 'FEATSTATUS': 'no label', 'GEOMSTATUS': 'no label', 'SOETYPE': 'no label', 'SALT_SOE': 'no label', 'TEMPORAER': 'no label', 'UNDER_MIN': 'no label', 'OE_UNDER': 'no label', 'TIMEOF_CRE': 'no label', 'TIMEOF_PUB': 'no label', 'TIMEOF_REV': 'no label', 'TIMEOF_EXP': 'no label', });
lyr_Ser20mbuffer_64.set('fieldLabels', {'fid': 'no label', 'FOT_ID': 'no label', 'MOB_ID': 'no label', 'FEAT_KODE': 'no label', 'FEAT_TYPE': 'no label', 'FEATSTATUS': 'no label', 'GEOMSTATUS': 'no label', 'SOETYPE': 'no label', 'SALT_SOE': 'no label', 'TEMPORAER': 'no label', 'UNDER_MIN': 'no label', 'OE_UNDER': 'no label', 'TIMEOF_CRE': 'no label', 'TIMEOF_PUB': 'no label', 'TIMEOF_REV': 'no label', 'TIMEOF_EXP': 'no label', });
lyr_Ser10mbuffer_65.set('fieldLabels', {'fid': 'no label', 'FOT_ID': 'no label', 'MOB_ID': 'no label', 'FEAT_KODE': 'no label', 'FEAT_TYPE': 'no label', 'FEATSTATUS': 'no label', 'GEOMSTATUS': 'no label', 'SOETYPE': 'no label', 'SALT_SOE': 'no label', 'TEMPORAER': 'no label', 'UNDER_MIN': 'no label', 'OE_UNDER': 'no label', 'TIMEOF_CRE': 'no label', 'TIMEOF_PUB': 'no label', 'TIMEOF_REV': 'no label', 'TIMEOF_EXP': 'no label', });
lyr_Ser2mbuffer_66.set('fieldLabels', {'fid': 'no label', 'FOT_ID': 'no label', 'MOB_ID': 'no label', 'FEAT_KODE': 'no label', 'FEAT_TYPE': 'no label', 'FEATSTATUS': 'no label', 'GEOMSTATUS': 'no label', 'SOETYPE': 'no label', 'SALT_SOE': 'no label', 'TEMPORAER': 'no label', 'UNDER_MIN': 'no label', 'OE_UNDER': 'no label', 'TIMEOF_CRE': 'no label', 'TIMEOF_PUB': 'no label', 'TIMEOF_REV': 'no label', 'TIMEOF_EXP': 'no label', });
lyr_Ser_67.set('fieldLabels', {'fid': 'no label', 'FOT_ID': 'no label', 'MOB_ID': 'no label', 'FEAT_KODE': 'no label', 'FEAT_TYPE': 'no label', 'FEATSTATUS': 'no label', 'GEOMSTATUS': 'no label', 'SOETYPE': 'no label', 'SALT_SOE': 'no label', 'TEMPORAER': 'no label', 'UNDER_MIN': 'no label', 'OE_UNDER': 'no label', 'TIMEOF_CRE': 'no label', 'TIMEOF_PUB': 'no label', 'TIMEOF_REV': 'no label', 'TIMEOF_EXP': 'no label', });
lyr_Jordforureningvidenniveau2V2_68.set('fieldLabels', {'fid': 'no label', 'Objekt_id': 'no label', 'SenesteInddateringsdato': 'no label', 'Lokalitetsnr': 'no label', 'Lokalitetetsforureningsstatus': 'no label', 'Lokalitetetsadresse': 'no label', 'Regionsnavn': 'no label', 'Lokalitetsejerlavkode': 'no label', 'Lokalitetsmatrikler': 'no label', 'Kortlaegningsdato': 'no label', 'Jordforureningsattester': 'no label', });
lyr_Jordforureningvidenniveau1V1_69.set('fieldLabels', {'fid': 'no label', 'Objekt_id': 'no label', 'SenesteInddateringsdato': 'no label', 'Lokalitetsnr': 'no label', 'Lokalitetetsforureningsstatus': 'no label', 'Lokalitetetsadresse': 'no label', 'Regionsnavn': 'no label', 'Lokalitetsejerlavkode': 'no label', 'Lokalitetsmatrikler': 'no label', 'Kortlaegningsdato': 'no label', 'Jordforureningsattester': 'no label', });
lyr_Rrlagtevandlb_70.set('fieldLabels', {'fid': 'no label', 'LED_OPSTROEMSKNUDE': 'no label', 'LED_NEDSTROEMSKNUDE': 'no label', 'BUNDLOEBSKOTEOPST': 'no label', 'BUNDLOEBSKOTENEDST': 'no label', 'LED_LAENGDE': 'no label', 'FALD': 'no label', 'LABELTEXT': 'no label', 'EJERNAVN': 'no label', 'EJERNAVN_DD': 'no label', 'EJERANDEL': 'no label', 'DRIFTANSVARLIG': 'no label', 'STATUS_DD': 'no label', 'KATEGORIAFLOEB': 'no label', 'TYPEAFLOEB': 'no label', 'LEDNFUNKTION': 'no label', 'TRANSPORT': 'no label', 'TILLADTILSLUT': 'no label', 'DYK': 'no label', 'ENTREPRENOER': 'no label', 'LED_BEMAERKNING': 'no label', 'SANERINGSMETODE': 'no label', 'SANERINGSFIRMA': 'no label', 'ETABLERETTIDL': 'no label', 'DEL_DATOETABLERET': 'no label', 'DATOSANERING': 'no label', 'DATOOPDATERET': 'no label', 'LED_DATOHISTORISK': 'no label', 'STATUSDATO': 'no label', 'LOKALITETSNAVN': 'no label', 'DOBBELTLEDNNR': 'no label', 'DEL_OPSTROEMSKNUDE': 'no label', 'DEL_NEDSTROEMSKNUDE': 'no label', 'DEL_LAENGDE': 'no label', 'DEL_BEMAERKNING': 'no label', 'MATERIALE': 'no label', 'TVAERSNIT': 'no label', 'HANDELSMAAL': 'no label', 'DIAMETERINDV': 'no label', 'FORING_DIAM_INDV': 'no label', 'HOEJDEINDV': 'no label', 'GODSTYKKELSE': 'no label', 'FORING_GODSTYKKELSE': 'no label', 'MUFFEBREDDE': 'no label', 'MUFFEHOEJDE': 'no label', 'MEDFOD': 'no label', 'SDRKODE': 'no label', 'ROERBEMAERKNING': 'no label', 'OPRIND_DIMENSION': 'no label', 'OPRIND_OPSTROEMSKOTE': 'no label', 'OPRIND_NEDSTROEMSKOTE': 'no label', 'STATUSKODE': 'no label', 'TYPEAFLOEBKODE': 'no label', 'KATEGORIAFLOEBKODE': 'no label', 'LEDNINGID': 'no label', 'DELLEDNINGSID': 'no label', 'ROERKATALOGID': 'no label', 'EJERKODE': 'no label', 'EJERKODE_DD': 'no label', 'MI_STYLE2': 'no label', 'THEME_ATTR1': 'no label', });
lyr_Gammelkystlinje18701899_71.set('fieldLabels', {'fid': 'no label', });
lyr_EngeogMoser18701899_72.set('fieldLabels', {'fid': 'no label', });
lyr_Habitatomrder_73.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_length': 'no label', 'Site_nr': 'no label', 'Objektnavn': 'no label', 'Loc_ident': 'no label', 'Site_ident': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Frededeomrder_74.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_length': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_Spildevandskloakeret_75.set('fieldLabels', {'fid': 'no label', 'doklink': 'no label', 'uuid': 'no label', 'temakode': 'no label', 'temanavn': 'no label', 'objekt_id': 'no label', 'systid_fra': 'no label', 'oprettet': 'no label', 'oprindkode': 'no label', 'oprindelse': 'no label', 'statuskode': 'no label', 'status': 'no label', 'cvr_kode': 'no label', 'cvrname': 'no label', 'bruger_id': 'no label', 'link': 'no label', 'navn1201': 'no label', 'type1201a': 'no label', 'vaerd1201a': 'no label', 'type1201b': 'no label', 'vaerd1201b': 'no label', 'staar1201': 'no label', 'sluaar1201': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datostart': 'no label', 'datoslut': 'no label', });
lyr_Ingenkloakering_76.set('fieldLabels', {'fid': 'no label', 'doklink': 'no label', 'uuid': 'no label', 'temakode': 'no label', 'temanavn': 'no label', 'objekt_id': 'no label', 'systid_fra': 'no label', 'oprettet': 'no label', 'oprindkode': 'no label', 'oprindelse': 'no label', 'statuskode': 'no label', 'status': 'no label', 'cvr_kode': 'no label', 'cvrname': 'no label', 'bruger_id': 'no label', 'link': 'no label', 'navn1201': 'no label', 'type1201a': 'no label', 'vaerd1201a': 'no label', 'type1201b': 'no label', 'vaerd1201b': 'no label', 'staar1201': 'no label', 'sluaar1201': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datostart': 'no label', 'datoslut': 'no label', 'CG_ID': 'no label', 'navn': 'no label', 'regionskode': 'no label', 'udtraeksdato': 'no label', 'kommunekode': 'no label', 'udenforkommuneinddeling': 'no label', 'area': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_VedtagetSeperatkloakering_77.set('fieldLabels', {'fid': 'no label', 'doklink': 'no label', 'uuid': 'no label', 'temakode': 'no label', 'temanavn': 'no label', 'objekt_id': 'no label', 'systid_fra': 'no label', 'oprettet': 'no label', 'oprindkode': 'no label', 'oprindelse': 'no label', 'statuskode': 'no label', 'status': 'no label', 'cvr_kode': 'no label', 'cvrname': 'no label', 'bruger_id': 'no label', 'link': 'no label', 'navn1201': 'no label', 'type1201a': 'no label', 'vaerd1201a': 'no label', 'type1201b': 'no label', 'vaerd1201b': 'no label', 'staar1201': 'no label', 'sluaar1201': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datostart': 'no label', 'datoslut': 'no label', });
lyr_Kbenhavn_78.set('fieldLabels', {'fid': 'no label', 'navn': 'no label', });
lyr_Kbenhavn_78.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});