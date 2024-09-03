import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import geojson from "../../../utils/geojson.json";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useAppDispatch } from "../../../lib/hooks";
import {
  venueState,
  toggleActive,
} from "../../../lib/features/venue/venueSlice";

export default function Map() {
  // const venues = useAppSelector((state: { venue: venueState }) => state.venue);
  const dispatch = useAppDispatch();

  return (
    <>
      <MapContainer
        style={{ height: "90vh" }}
        center={[47.497913, 19.040236]}
        zoom={13}
        scrollWheelZoom={false}
        className="w-3/5"
        key="mapcontainer"
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/dataviz/{z}/{x}/{y}.png?key=1Ft0Hp1m1i3X67hNyMM9"
        />
        {geojson.features.map((marker) => {
          return (
            <Marker
              position={[
                marker.geometry.coordinates[1],
                marker.geometry.coordinates[0],
              ]}
              // for some reason theres an error originating from here?
              eventHandlers={{
                click: () => {
                  dispatch(toggleActive());
                },
              }}
              key={marker.id}
            >
              <Popup>{marker.properties.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
}
