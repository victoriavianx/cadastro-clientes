export interface IClient {
  name: string;
  lastname: string;
  email: string;
  password: string;
  phone: string;
  cellphone: string;
}

export interface IFullClient extends IClient {
  id: string;
  registered_date: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export interface IModal {
  isOpen: boolean;
  onClose: () => void;
}
