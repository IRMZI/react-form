import Form from "./Components/Formpage";
import Map from "./Components/Map";
import CardComponent from "./Components/Cards";
import Container from "@mui/material/Container";
import { CssBaseline } from "@material-ui/core";
import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";

function App() {
  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="xl"
        sx={{
          bgcolor: "background.paper",
          boxShadow: 3,
          p: 3,
          borderRadius: 2,
          mt: 4,
          mb: 4,
        }}
      >
        <Grid container spacing={3}>
          {/* Formulário */}
          <Grid item xs={12} sm={6} md={4}>
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 3,
                p: 3,
                borderRadius: 2,
                mt: 4,
                mb: 4,
                textAlign: "center",
              }}
            >
              <Form />
            </Box>
          </Grid>

          {/* Mapa */}
          <Grid item xs={12} sm={6} md={8}>
            <Box
              sx={{
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
            <Box
              sx={{
                bgcolor: "background.paper",
                boxShadow: 3,
                p: 3,
                borderRadius: 2,
                mt: 4,
                textAlign: "center",
              }}
            >
              <CardComponent />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
