export interface authSliceModel {
  profile: null | {
    id: number;
    role: number;
    full_name: string;
    wallet: { value: number };
  };
  loading: boolean;
  authenticated: boolean;
}
