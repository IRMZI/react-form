import "./App.css";
import Form from "./Components/Formpage";
import { useEffect } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";
import Container from "@mui/material/Container";
import { CssBaseline } from "@material-ui/core";
import { Box } from "@mui/material";

function App() {
  const defaultTheme = createTheme();

  useEffect(() => {
    document.title = "Formulário";
  }, []);
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Container
          maxWidth="xs"
          sx={{
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <CssBaseline />
          <Box
            sx={{
              width: 400, // Define a largura do fundo quadrado
              bgcolor: "background.paper", // Define a cor de fundo branca
              boxShadow: 3, // Adiciona uma sombra ao fundo
              p: 3, // Adiciona padding
              borderRadius: 2, // Adiciona bordas arredondadas (opcional)
              mt: 4, // Adiciona margem no topo
              textAlign: "center",
            }}
          >
            <Form />
          </Box>
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
