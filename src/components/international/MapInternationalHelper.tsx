import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

// Icône pour la localisation de l'utilisateur
const userLocationIcon = new L.Icon({
    iconUrl:
        'https://cdn4.iconfinder.com/data/icons/real-estate-flat-style-1/128/Real_Estate_1_-_Flat_Style_-_9-01-2-512.png',
    iconSize: [35, 35],
    iconAnchor: [17, 35],
    popupAnchor: [1, -34]
});

// Définir le type des données
type RowData = {
    PAYS?: string;
    ['UNIVERSITE PARTENAIRE OFFRE DE SÉJOUR']?: string;
};

type MapComponentProps = {
    data: Array<RowData>;
};

const countryCoordinates: { [key: string]: [number, number] } = {
    CANADA: [56.1304, -106.3468],
    'ÉTATS-UNIS': [37.0902, -95.7129],
    BRÉSIL: [-14.235, -51.9253],
    CHILI: [-35.6751, -71.543],
    MEXIQUE: [23.6345, -102.5528],
    CHINE: [35.8617, 104.1954],
    'COREE DU SUD': [35.9078, 127.7669],
    JAPON: [36.2048, 138.2529],
    MALAISIE: [4.2105, 101.9758],
    TAIWAN: [23.6978, 120.9605],
    THAILANDE: [15.87, 100.9925],
    ALBANIE: [41.1533, 20.1683],
    ALLEMAGNE: [51.1657, 10.4515],
    AUTRICHE: [47.5162, 14.5501],
    BELGIQUE: [50.5039, 4.4699],
    CHYPRE: [35.1264, 33.4299],
    ESPAGNE: [40.4637, -3.7492],
    HONGRIE: [47.1625, 19.5033],
    ITALIE: [41.8719, 12.5674],
    LETTONIE: [56.8796, 24.6032],
    NORVÈGE: [60.472, 8.4689],
    'PAYS-BAS': [52.1326, 5.2913],
    POLOGNE: [51.9194, 19.1451],
    PORTUGAL: [39.3999, -8.2245],
    'RÉPUBLIQUE TCHÈQUE': [49.8175, 15.473],
    ROUMANIE: [45.9432, 24.9668],
    'ROYAUME-UNI': [55.3781, -3.436],
    SLOVAQUIE: [48.669, 19.699],
    SUÈDE: [60.128, 18.6435],
    TURQUIE: [38.9637, 35.2433],
    'EMIRATS ARABES UNIS': [23.4241, 53.8478]
};

const MapInternationalHelper: React.FC<MapComponentProps> = ({ data }) => {
    const [userLocation, setUserLocation] = useState<[number, number] | null>(
        null
    );

    // Obtenir la localisation de l'utilisateur
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setUserLocation([
                        position.coords.latitude,
                        position.coords.longitude
                    ]);
                },
                (error) => {
                    console.error(
                        'Erreur lors de la récupération de la localisation :',
                        error
                    );
                }
            );
        }
    }, []);

    // Regrouper les universités par pays
    const universitiesByCountry = data.reduce(
        (acc, row) => {
            const country = row.PAYS?.toUpperCase();
            if (country) {
                if (!acc[country]) {
                    acc[country] = [];
                }
                acc[country].push(row);
            }
            return acc;
        },
        {} as { [key: string]: Array<RowData> }
    );

    return (
        <div style={{ height: '500px', width: '100%', marginTop: '20px' }}>
            <MapContainer
                center={[20, 0]}
                zoom={2}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
            >
                {/* Tile Layer */}
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Marqueurs pour chaque pays */}
                {Object.entries(universitiesByCountry).map(
                    ([country, universities]) => {
                        const coordinates = countryCoordinates[country];
                        if (coordinates) {
                            // Créer un divIcon si le nombre d'universités est supérieur à 1
                            const markerIcon =
                                universities.length > 1
                                    ? L.divIcon({
                                          html: `<div style="position: relative; text-align: center;">
                                <img src="https://i.postimg.cc/FFJWRnMS/point-map.png" style="width: 30px;" />
                                <span style="position: absolute; top: 0; left: 22px; width: 100%; font-weight: italic; font-size: 18px; color: #1100FA;">x${universities.length}</span>
                             </div>`,
                                          className: '',
                                          iconSize: [30, 31],
                                          iconAnchor: [15, 31],
                                          popupAnchor: [1, -34]
                                      })
                                    : new L.Icon({
                                          iconUrl:
                                              'https://i.postimg.cc/FFJWRnMS/point-map.png',
                                          iconSize: [30, 31],
                                          iconAnchor: [15, 31],
                                          popupAnchor: [1, -34]
                                      });

                            return (
                                <Marker
                                    position={coordinates}
                                    key={country}
                                    icon={markerIcon}
                                >
                                    <Popup>
                                        <strong>{country}</strong>
                                        <br />
                                        {universities.length} université(s)
                                        <ul>
                                            {universities.map((uni, index) => (
                                                <li key={index}>
                                                    🏛️{' '}
                                                    {uni[
                                                        'UNIVERSITE PARTENAIRE OFFRE DE SÉJOUR'
                                                    ] || 'Université inconnue'}
                                                </li>
                                            ))}
                                        </ul>
                                    </Popup>
                                </Marker>
                            );
                        }
                        return null;
                    }
                )}

                {/* Marqueur pour la localisation de l'utilisateur */}
                {userLocation && (
                    <Marker position={userLocation} icon={userLocationIcon}>
                        <Popup>Vous êtes ici</Popup>
                    </Marker>
                )}
            </MapContainer>
        </div>
    );
};

export default MapInternationalHelper;
