import { useForm, Controller } from "react-hook-form";
import { Button, TextField, Typography } from "@material-ui/core";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useState } from "react";
// ///////
// objetos
// ///////

const schema = z.object({
  Company: z.string().min(1, "Nome da empresa é obrigatório"),
  UniqueID: z
    .string()
    .min(1, "CNPJ é obrigatório")
    .max(14, "Máximo de 14 dígitos"),
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
    City: z.string().min(1, "Cidade é obrigatório"),
    State: z.string().min(1, "Estado é obrigatório"),
    Country: z.string().min(1, "País é obrigatório"),
    Number: z.string().min(1, "Numero é obrigatório"),
  }),
});
//////
//Define o props do forms como a tipagem do schema
/////

type FormProps = z.infer<typeof schema>;

function Form() {
  // Devolve o formstate de errors, e o useform utiliza a tipagem do schema
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormProps>({
    resolver: zodResolver(schema),
  });

  const [coordinates, setCoordinates] = useState<[number, number] | null>(null);

  const handleFormSubmit = async (data: FormProps) => {
    // mostra a informação vinda do formulario apartir do schema
    console.log("Informação atual do formulario", data);

    const companyAddress = `${data.address.Number}, ${data.address.Street}, ${data.address.City}, ${data.address.State}, ${data.address.ZipCode}`;

    console.log("O endereço do usuário é:", companyAddress);

    try {
      const response = await axios.get(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: companyAddress,
            format: "json",
            addressdetails: 1,
          },
        }
      );

      if (response.data.length > 0) {
        const { lat, lon } = response.data[0];
        setCoordinates([parseFloat(lat), parseFloat(lon)]);
      } else {
        console.error("No coordinates found for the address.");
        setCoordinates(null);
      }
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      setCoordinates(null);
    }
  };

  // mostra a informação dos erros
  console.log("esses são os erros", errors);
  return (
    <div>
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
              error={!!errors.Company}
              helperText={errors?.Company?.message}
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
              helperText={errors?.UniqueID?.message}
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
          name="address.ZipCode"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="CEP"
              variant="outlined"
              error={!!errors.address?.ZipCode}
              helperText={errors?.address?.ZipCode?.message}
              fullWidth
              margin="normal"
              inputProps={{ maxLength: 9 }}
            />
          )}
        />
        <Controller
          name="address.Street"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Rua"
              variant="outlined"
              error={!!errors.address?.Street}
              helperText={errors?.address?.Street?.message}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="address.Number"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Numero"
              variant="outlined"
              error={!!errors.address?.Number}
              helperText={errors?.address?.Number?.message}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="address.District"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Bairro"
              variant="outlined"
              error={!!errors.address?.District}
              helperText={errors?.address?.District?.message}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="address.Complement"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Complemento"
              variant="outlined"
              error={!!errors.address?.Complement}
              helperText={errors?.address?.Complement?.message}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="address.City"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Cidade"
              variant="outlined"
              error={!!errors.address?.City}
              helperText={errors?.address?.City?.message}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="address.State"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="Estado"
              variant="outlined"
              error={!!errors.address?.State}
              helperText={errors?.address?.State?.message}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Controller
          name="address.Country"
          control={control}
          defaultValue=""
          render={({ field }) => (
            <TextField
              {...field}
              label="País"
              variant="outlined"
              error={!!errors.address?.Country}
              helperText={errors?.address?.Country?.message}
              fullWidth
              margin="normal"
            />
          )}
        />
        <Button type="submit" variant="contained" color="primary">
          Enviar
        </Button>
      </form>
    </div>
  );
}

export default Form;
