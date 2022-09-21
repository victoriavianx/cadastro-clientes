export interface IClientRequest {
  name: string;
  lastname: string;
  email: string;
  password: string;
  phone: number;
  cellphone: number;
}

export interface IClient extends IClientRequest {
  id: string;
  registry_date: string;
}
