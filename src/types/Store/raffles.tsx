import { Association } from "../Model/Association";
import { Donation } from "../Model/Profile";
import { RafflesI } from "../Model/Raffle";

export interface RaffleInitialState {
  loading: boolean;
  raffles: RafflesI[];
  raffle: null | RafflesI;
  donationForm1: Donation | {};
  donationFrom2: any;
  associations: Association[];
  causesCategories: { id: number; name: string }[];
  prizesCategories: { id: number; name: string }[];
}
