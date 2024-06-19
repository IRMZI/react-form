import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "./map.css";

// Definição da estrutura de uma empresa
interface Company {
  Company: string;
  UniqueID: string;
  FantasyName: string;
  address: {
    ZipCode: string;
    Street: string;
    Number: string;
    District: string;
    Complement?: string;
    City: string;
    State: string;
    Country: string;
  };
  coordinates: [number, number];
}

function Map() {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    // Carregar empresas do localStorage ao montar o componente
    const loadCompanies = () => {
      try {
        const storedCompanies: Company[] = JSON.parse(
          localStorage.getItem("empresas") || "[]"
        );
        setCompanies(storedCompanies);
      } catch (error) {
        console.error("Erro ao carregar empresas do localStorage:", error);
      }
    };

    loadCompanies();
  }, []);

  return (
    <div className="map-container">
      <MapContainer
        center={[0, 0]}
        zoom={3}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Renderizar os marcadores para cada empresa */}
        {companies.map((company, index) => (
          <Marker key={index} position={company.coordinates}>
            <Popup>
              <div>
                <h3>{company.FantasyName}</h3>
                <p>CNPJ: {company.UniqueID}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default Map;
