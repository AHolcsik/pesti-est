"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import places from "../../utils/places.json";
import { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ initialData }) {
  const [data, setData] = useState(initialData);
  return (
    <div>
      <MapContainer
        style={{ height: "750px" }}
        center={[47.497913, 19.040236]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {places.map((marker) => {
          return (
            <Marker position={[marker.location.lat, marker.location.lng]}>
              <Popup>{marker.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
