import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "./style.css";

const map = L.map("map").setView([43.6047, 1.4442], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
}).addTo(map);

const lieux = [
    { nom: "Place du Capitole", lat: 43.6044, lng: 1.4437 },
    { nom: "Jardin des Plantes", lat: 43.5929, lng: 1.4520 },
    { nom: "Cité de l'espace", lat: 43.5866, lng: 1.4934 }
];

const iconeRouge = L.icon({
    iconUrl: "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png",
    shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png"
});

L.marker([lieux[0].lat, lieux[0].lng])
    .addTo(map)
    .bindPopup(`<b>${lieux[0].nom}</b><br>Lat : ${lieux[0].lat}, Lng : ${lieux[0].lng}`);

L.marker([lieux[1].lat, lieux[1].lng])
    .addTo(map)
    .bindPopup(`<b>${lieux[1].nom}</b><br>Lat : ${lieux[1].lat}, Lng : ${lieux[1].lng}`);

L.marker([lieux[2].lat, lieux[2].lng], { icon: iconeRouge })
    .addTo(map)
    .bindPopup(`<b>${lieux[2].nom}</b><br>Lat : ${lieux[2].lat}, Lng : ${lieux[2].lng}`);
