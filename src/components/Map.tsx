import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import places from "../../utils/places.json";

console.log(places);
function Map() {
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
        <Marker position={[51.505, -0.09]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
