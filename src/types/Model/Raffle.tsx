export interface RafflesI {
  id: number;
  prize: Prize | number;
  tickets: [];
  name: string;
  description: string;
  image: string | null;
  ticket_number: number;
  ticket_price: number;
  realization_date: string;
  cause: Cause | number;
}

export interface Cause {
  image: string | null;
  id: number;
}
export interface Prize {
  id: number;
}
