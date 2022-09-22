export interface IClientRequest {
  name: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  cellphone: string;
}

export interface IClient extends IClientRequest {
  id: string;
  registry_date: string;
}

export interface IClientLogin {
  email: string;
  password: string;
}

export interface IClientUpdate {
  name?: string;
  lastname?: string;
  email?: string;
  password?: string;
  phone?: string;
  cellphone?: string;
}
