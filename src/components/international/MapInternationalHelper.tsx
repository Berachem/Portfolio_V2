import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

// Icône par défaut pour Leaflet (corrige un problème d'affichage dans certains cas)

const countryIcon = new L.Icon({
  iconUrl: "https://i.postimg.cc/FFJWRnMS/point-map.png",
  iconSize: [30, 31], // Taille ajustée
  iconAnchor: [15, 31], // Ancre ajustée
  popupAnchor: [1, -34],
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [31, 31],
});

// Type pour les données
type MapComponentProps = {
  data: Array<any>;
};

const countryCoordinates: { [key: string]: [number, number] } = {
  "CANADA": [56.1304, -106.3468],
  "ÉTATS-UNIS": [37.0902, -95.7129],
  "BRÉSIL": [-14.235, -51.9253],
  "CHILI": [-35.6751, -71.543],
  "MEXIQUE": [23.6345, -102.5528],
  "CHINE": [35.8617, 104.1954],
  "COREE DU SUD": [35.9078, 127.7669],
  "JAPON": [36.2048, 138.2529],
  "MALAISIE": [4.2105, 101.9758],
  "TAIWAN": [23.6978, 120.9605],
  "THAILANDE": [15.870, 100.9925],
  "ALBANIE": [41.1533, 20.1683],
  "ALLEMAGNE": [51.1657, 10.4515],
  "AUTRICHE": [47.5162, 14.5501],
  "BELGIQUE": [50.5039, 4.4699],
  "CHYPRE": [35.1264, 33.4299],
  "ESPAGNE": [40.4637, -3.7492],
  "HONGRIE": [47.1625, 19.5033],
  "ITALIE": [41.8719, 12.5674],
  "LETTONIE": [56.8796, 24.6032],
  "NORVÈGE": [60.472, 8.4689],
  "PAYS-BAS": [52.1326, 5.2913],
  "POLOGNE": [51.9194, 19.1451],
  "PORTUGAL": [39.3999, -8.2245],
  "RÉPUBLIQUE TCHÈQUE": [49.8175, 15.473],
  "ROUMANIE": [45.9432, 24.9668],
  "ROYAUME-UNI": [55.3781, -3.436],
  "SLOVAQUIE": [48.669, 19.699],
  "SUÈDE": [60.128, 18.6435],
  "TURQUIE": [38.9637, 35.2433],
  "EMIRATS ARABES UNIS": [23.4241, 53.8478],
};

const MapInternationalHelper: React.FC<MapComponentProps> = ({ data }) => {
  return (
    <div style={{ height: "500px", width: "100%", marginTop: "20px" }}>
      <MapContainer center={[20, 0]} zoom={2} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        {/* Tile Layer */}
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {/* Markers */}
        {data.map((row, index) => {
          const coordinates = countryCoordinates[row.PAYS?.toUpperCase()];
          if (coordinates) {
            return (
              <Marker position={coordinates} key={`${row.PAYS}-${index}`} icon={countryIcon}>
                <Popup>
                  <strong>{row.PAYS}</strong>
                  <br />
                  {row.VILLE || "Ville inconnue"}
                  <br />
                  <b>at</b> {row["UNIVERSITE PARTENAIRE OFFRE DE SÉJOUR"] || "Université inconnue"}

                </Popup>
              </Marker>
            );
          }
          return null;
        })}
      </MapContainer>
    </div>
  );
};

export default MapInternationalHelper
