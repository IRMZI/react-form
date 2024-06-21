import Container from "@mui/material/Container";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
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

function CardComponent() {
  const [companies, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
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

  const clearStorage = () => {
    localStorage.removeItem("empresas");
    setCompanies([]);
  };

  return (
    <Container>
      <Typography variant="h6" component="div" gutterBottom>
        Empresas registradas:
      </Typography>
      {companies.map((company, index) => (
        <Box
          sx={{
            bgcolor: "background.paper",
            boxShadow: 3,
            borderRadius: 2,
            textAlign: "center",
          }}
        >
          <div>
            <h3>{company.FantasyName}</h3>
            <p>CNPJ: {company.UniqueID}</p>
          </div>
        </Box>
      ))}
      <button onClick={clearStorage}>Limpar Dados</button>
    </Container>
  );
}

export default CardComponent;
