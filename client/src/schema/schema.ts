import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string()
    .max(200, "Máximo de 200 caracteres")
    .required("Campo obrigatório"),
  lastname: yup
    .string()
    .max(200, "Máximo de 200 caracteres")
    .required("Campo obrigatório"),
  email: yup
    .string()
    .email("Este email não é válido")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min(8, "Mínimo de 8 dígitos")
    .required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  cellphone: yup.string().required("Campo obrigatório"),
});

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .email("Este email não é válido")
    .required("Campo obrigatório"),
  password: yup
    .string()
    .min(8, "Mínimo de 8 dígitos")
    .required("Campo obrigatório"),
});

export const contactSchema = yup.object().shape({
  name: yup
    .string()
    .max(200, "Máximo de 200 caracteres")
    .required("Campo obrigatório"),
  lastname: yup
    .string()
    .max(200, "Máximo de 200 caracteres")
    .required("Campo obrigatório"),
  email: yup
    .string()
    .email("Este email não é válido")
    .required("Campo obrigatório"),
  phone: yup.string().required("Campo obrigatório"),
  cellphone: yup.string().required("Campo obrigatório"),
});
