import { useForm, Controller } from "react-hook-form";

import { Box, Button, TextField } from "@material-ui/core";

function Form() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const handleFormSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <h2>Olá, bem vindo</h2>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <form onSubmit={handleSubmit(handleFormSubmit)}>
          <Controller
            name="Company"
            control={control}
            defaultValue=""
            rules={{ required: "Nome da empresa é obrigatório" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="Nome da empresa"
                variant="outlined"
                error={!!errors.company}
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="uniqueID"
            control={control}
            defaultValue=""
            rules={{ required: "CNPJ é obrigatório" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="CNPJ"
                variant="outlined"
                error={!!errors.uniqueID}
                fullWidth
                margin="normal"
              />
            )}
          />
          <Controller
            name="fantasyName"
            control={control}
            defaultValue=""
            rules={{ required: "CNPJ é obrigatório" }}
            render={({ field }) => (
              <TextField
                {...field}
                label="fantasyName"
                variant="outlined"
                error={!!errors.uniqueID}
                fullWidth
                margin="normal"
              />
            )}
          />
        </form>
      </Box>
    </>
  );
}

export default Form;
