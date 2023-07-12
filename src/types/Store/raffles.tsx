import { Raffles } from "../Model/Raffle";

export interface RaffleInitialState {
  loading: boolean;
  raffles: Raffles[];
  raffle: null | Raffles;
}
