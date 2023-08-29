export interface RafflesI {
  id: number;
  prize: Prize | string;
  tickets: [];
  name: string;
  description: string;
  realization_date: string;
  cause: Cause | string;
  association: string;
  banner: any;
  image: any;
  start_date: string;
  end_date: string;
  delivery_type: string;
  short_description: string;
  price: string;
  ticket_number: string;
  ticket_price: string;
}

export interface Cause {
  image: string | null;
  id: number;
}
export interface Prize {
  id: number;
}
