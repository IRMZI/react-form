import { useForm, Controller } from "react-hook-form";
import { Button, TextField, Typography } from "@material-ui/core";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

// cria o schema
const schema = z.object({
  Company: z.string().min(1, "Nome da empresa é obrigatório"),
  UniqueID: z.string().min(1, "CNPJ é obrigatório"),
  FantasyName: z.string(),
  //Cria objeto endereço como um json aparte
  address: z.object({
    ZipCode: z
      .string()
      .min(1, "CEP é obrigatório")
      .max(9, "Máximo de 9 dígitos"),
    Street: z.string().min(1, "Rua é obrigatória"),
    District: z.string().min(1, "Bairro é obrigatório"),
    Complement: z.string(),
    City: z.string().min(1, "Cidade é obrigatória"),
    State: z.string().min(1, "Estado é obrigatória"),
    Number: z.string().min(1, "Numero é obrigatória"),
  }),
});

//Define o props do forms como a tipagem do schema
type FormProps = z.infer<typeof schema>;

function Form() {
  // Devolve o formstate de errors, e o useform utiliza a tipagem do schema
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormProps>({
    criteriaMode: "all",
    mode: "all",
    resolver: zodResolver(schema),
  });
  // mostra a informação vinda do formulario apartir do schema
  const handleFormSubmit = (data: FormProps) => {
    console.log("Informação atual do formulario", data);
  };
  // mostra a informação dos erros
  console.log("esses são os erros", errors);
  return (
    <>
      <Typography variant="h6" component="div" gutterBottom>
        Olá, bem vindo
      </Typography>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <Controller
          name="Company"
          control={control}
          defaultValue=""
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
          name="UniqueID"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="CNPJ"
              variant="outlined"
              error={!!errors.UniqueID}
              fullWidth
              inputProps={{ maxLength: 14 }}
              margin="normal"
            />
          )}
        />
        <Controller
          name="FantasyName"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Nome fantasia"
              variant="outlined"
              error={!!errors.FantasyName}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="ZipCode"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="CEP"
              variant="outlined"
              error={!!errors.ZipCode}
              fullWidth
              margin="normal"
              inputProps={{ maxLength: 9 }}
            />
          )}
        />
        <Controller
          name="Street"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Rua"
              variant="outlined"
              error={!!errors.Street}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="District"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Bairro"
              variant="outlined"
              error={!!errors.District}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="Complement"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Complemento"
              variant="outlined"
              error={!!errors.Complement}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="City"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Cidade"
              variant="outlined"
              error={!!errors.City}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="State"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Estado"
              variant="outlined"
              error={!!errors.State}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="Number"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Numero"
              variant="outlined"
              error={!!errors.Number}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </>
  );
}

export default Form;
