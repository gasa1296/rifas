import { selectAuthState } from "@/store/slices/auth";
import { selectRaffleState } from "@/store/slices/raffles";

import { useSelector } from "react-redux";

export default function useTotalValue() {
  const { raffle, selectedTickets, selectedWallet, coupon } =
    useSelector(selectRaffleState);
  const { profile } = useSelector(selectAuthState);

  const walletAccount = selectedWallet ? Number(profile?.wallet.value) : 0;

  const totalPrice =
    selectedTickets.length * (Number(raffle?.ticket_price) || 0);

  let totalPay = walletAccount > totalPrice ? 0 : totalPrice - walletAccount;

  if (coupon)
    totalPay =
      totalPay -
      (coupon.type === 1 ? (totalPay * coupon.value) / 100 : coupon.value);

  return { totalPay, totalPrice, coupon, selectedWallet, walletAccount };
}
