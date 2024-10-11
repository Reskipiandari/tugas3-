// ============== Layer Group ==========================
const sekolahGroup = L.layerGroup();
const masjidGroup = L.layerGroup();
const tokoGroup = L.layerGroup();
const puskesmasGroup = L.layerGroup();
const pasarGroup = L.layerGroup();
// ======================================================



// ====================== Icon ==========================
const iconSekolah = L.icon({
    iconUrl: 'asset/leaflet/images/sekolah1.png ',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconmasjid = L.icon({
    iconUrl: 'asset/leaflet/images/masjid1.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconToko = L.icon({
    iconUrl: 'asset/leaflet/images/toko.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconpuskesmas = L.icon({
    iconUrl: 'asset/leaflet/images/puskesmas.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
// =======================================================




// ===================== Marker ===========================
var masjid = [
    L.marker([-8.7877562, 116.4803336], { icon: iconmasjid }).addTo(masjidGroup).bindPopup(`masjid Darul Al-Muhajirin<img src="asset/leaflet/images/masjid1.jpg"> >`),
    // Tambahkan Kornat jika lebih dari 1
];

var sekolah = [
    L.marker([-8.78713860801498, 116.48171631151862], { icon: iconSekolah }).addTo(sekolahGroup).bindPopup(` <img src="asset/leaflet/images/sekolah1.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];
var puskesmas = [
    L.marker([-8.794998245673339, 116.48346175037402], { icon: iconpuskesmas }).addTo(puskesmasGroup).bindPopup(`puskesmas jerowaru<img src="asset/leaflet/images/puskesmas1.png">`),
    // Tambahkan Kornat jika lebih dari 1
];
var toko = [
    L.marker([-8.790035727699102, 116.48145537280428], { icon: iconToko }).addTo(tokoGroup),
    // Tambahkan Kornat jika lebih dari 1
];

var streets = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    id: 'mapbox.streets',
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var satelit = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    id: 'mapbox.streets',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

const map = L.map('map', {
    center: [-8.805767160537458, 116.4695320549471],
    zoom: 13,
    layers: [satelit, sekolahGroup, masjidGroup, tokoGroup, puskesmasGroup]
});
// =======================================================


const baseLayers = {
    'streets': streets,
    'satelit': satelit,

};

const overlays = {
    'Sekolah': sekolahGroup,
    'Masjid': masjidGroup,
    'Toko': tokoGroup,
    'puskesmas': puskesmasGroup,
};

const layerControl = L.control.layers(baseLayers, overlays).addTo(map);



//  Menampilkan geojSON
L.geoJSON(gis).addTo(map);