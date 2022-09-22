export interface IContactRequest {
  name: string;
  lastname: string;
  email: string;
  phone: string;
  cellphone: string;
}

export interface IContact extends IContactRequest {
  id: string;
}

export interface IContactUpdate {
  name?: string;
  lastname?: string;
  email?: string;
  phone?: string;
  cellphone?: string;
}
