export interface RafflesI {
  id: number;
  prize: number | null;
  tickets: [];
  name: string;
  description: string;
  image: string | null;
  ticket_number: number;
  ticket_price: number;
  realization_date: string;
  cause: Cause;
}

export interface Cause {
  image: string | null;
}
