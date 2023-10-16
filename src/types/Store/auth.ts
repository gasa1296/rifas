export interface authSliceModel {
  profile: null | {
    id: number;
    role: number;
    full_name: string;
    wallet: { value: number };
    email: string;
  };
  loading: boolean;
  authenticated: boolean;
}
