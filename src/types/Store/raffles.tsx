import { Association } from "../Model/Association";
import { CouponI } from "../Model/Coupon";
import { Donation } from "../Model/Profile";
import { RafflesI } from "../Model/Raffle";
type Imethods = "paypal" | "mercadopago";
export interface RaffleInitialState {
  loading: boolean;
  raffles: RafflesI[];
  raffle: null | RafflesI;
  donationForm1: Donation | {};
  donationFrom2: any;
  associations: Association[];
  causesCategories: { id: number; name: string }[];
  prizesCategories: { id: number; name: string }[];
  selectedTickets: number[];
  selectedPaymentMethod: Imethods | null;
  selectedWallet: boolean;
  coupon: null | CouponI;
  reserveTime: number;
}
