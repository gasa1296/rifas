export interface authSliceModel {
  profile: null | { id: number; role: number };
  loading: boolean;
  authenticated: boolean;
}
