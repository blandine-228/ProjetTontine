import { Profil } from './profil';
export type WSResponse<T> = {
  success: String;
  data: Array<T>;
};
export type WSResponseError = {
  success: String;
  data: string;
};
const BASE_URL = "http://localhost:3000/api/";
