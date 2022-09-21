export interface IContactRequest {
  name: string;
  lastname: string;
  phone: number;
  cellphone: number;
}

export interface IContact extends IContactRequest {
  id: string;
  client: string;
}
