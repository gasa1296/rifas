export interface authSliceModel {
  profile: null | { id: number; role: number; full_name: string };
  loading: boolean;
  authenticated: boolean;
}
