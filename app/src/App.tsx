import Form from "./Components/Formpage";
import Map from "./Components/Map";
import { useEffect } from "react";
import Container from "@mui/material/Container";
import { CssBaseline } from "@material-ui/core";
import { Box } from "@mui/material";
function App() {
  useEffect(() => {
    document.title = "Formulário";
  }, []);
  return (
    <>
      <Container
        maxWidth="xl"
        sx={{ display: "flex", alignItems: "flex-start" }}
      >
        <Container maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              width: 400,
              bgcolor: "background.paper",
              boxShadow: 3,
              p: 3,
              borderRadius: 2,
              mt: 4,
              textAlign: "center",
            }}
          >
            <Form />
          </Box>
        </Container>
        <Container>
          <Box
            sx={{
              width: 600,
              bgcolor: "background.paper",
              boxShadow: 3,
              p: 3,
              borderRadius: 2,
              mt: 4,
              textAlign: "center",
            }}
          >
            <Map />
          </Box>
        </Container>
      </Container>
    </>
  );
}

export default App;
