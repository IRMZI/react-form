import Container from "@mui/material/Container";
import { Box, Button } from "@mui/material";
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

  // Função para carregar empresas do localStorage
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

  useEffect(() => {
    loadCompanies();
  }, []);
  const clearStorage = () => {
    localStorage.removeItem("empresas");
    setCompanies([]);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      loadCompanies();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Typography variant="h6" component="div" gutterBottom>
        Empresas registradas:
      </Typography>
      {companies.map((company, index) => (
        <Box
          key={index}
          sx={{
            bgcolor: "background.paper",
            boxShadow: 3,
            borderRadius: 2,
            textAlign: "center",
            mt: 2,
          }}
        >
          <div>
            <h3>{company.FantasyName}</h3>
            <p>CNPJ: {company.UniqueID}</p>
          </div>
        </Box>
      ))}
      <Button variant="contained" color="primary" onClick={clearStorage}>
        Limpar
      </Button>
    </Container>
  );
}

export default CardComponent;
