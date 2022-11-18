import axios from "axios";
import { getEnvVariables } from "../helpers/getEnvVariables";

const { REACT_APP_API_URL } = getEnvVariables();

// Esto hago que cada vez que uso calendarApi es como usar el axios pero con el url configurado.
const calendarApi = axios.create({
  baseURL: REACT_APP_API_URL,
});

// Todo: Configurar interceptores

export default calendarApi;
