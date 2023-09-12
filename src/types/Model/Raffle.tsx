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
  prizeData: null | Prize;
  ticket_number: string;
  ticket_price: string;
  category: string;
}

export interface Cause {
  image: string | null;
  id: number;
}
export interface Prize {
  id: number;
  name: string;
  description: string;
  image: string | null;
}
