import 'ol/ol.css';
import MVT from 'ol/format/MVT';
import Map from 'ol/Map';
import VectorTileLayer from 'ol/layer/VectorTile';
import VectorTileSource from 'ol/source/VectorTile';
import View from 'ol/View';
import {Fill, Stroke, Style} from 'ol/style';

const zoom = 14.493205628579398
const center = [-225002.55911738425, 1433313.650332927]

var country = new Style({
    stroke: new Stroke({
        color: 'red',
        width: 1,
    }),
    fill: new Fill({
        color: 'rgba(255,255,255,0.5)',
    }),
});
var vtLayer = new VectorTileLayer({

    source: new VectorTileSource({
        maxZoom: 15,
        format: new MVT({
            idProperty: 'iso_a3',
        }),
        url:
            'https://ahocevar.com/geoserver/gwc/service/tms/1.0.0/' +
            'ne:ne_10m_admin_0_countries@EPSG%3A900913@pbf/{z}/{x}/{-y}.pbf',
    }),
    style: country,
});

var map = new Map({
    layers: [vtLayer],
    target: 'map',
    view: new View({
        center, zoom
    }),
});
console.log('here')
setInterval(()=>console.log(map.getView().getZoom()),5000)