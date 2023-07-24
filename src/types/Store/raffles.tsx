import { Association } from "../Model/Association";
import { Donation } from "../Model/Profile";
import { Raffles } from "../Model/Raffle";

export interface RaffleInitialState {
  loading: boolean;
  raffles: Raffles[];
  raffle: null | Raffles;
  donationForm1: Donation | {};
  donationFrom2: any;
  associations: Association[];
}
