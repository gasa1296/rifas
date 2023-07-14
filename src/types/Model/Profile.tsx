export interface Profile {
  name: string;
  email: string;
  enterprise: string;
  password: string;
  confirmPassword: string;
  accepted: string;
}
export interface Auth {
  email: string;
  password: string;
}

export interface Donation {

  prize_name: string;
  prize_description: string;
  prize_category: string;

}
export interface Donation2 {

  product_condition: string;
  prize_product: string;
  association_award: string;

}