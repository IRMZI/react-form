import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";
function Map() {
  var companyGeolocation = localStorage.getItem("companyGeolocation");
  const coordinates = JSON.parse(companyGeolocation);
  return (
    <div>
      <MapContainer center={coordinates} zoom={13}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}

export default Map;
