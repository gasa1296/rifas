import { ActionReducerMapBuilder } from "@reduxjs/toolkit";
import { CreateAsociacion, Login, Register, UpdateProfile } from "../thunks";

export const REGISTER_EXTRA_REDUCERS = (
  builder: ActionReducerMapBuilder<any>
): void => {
  builder.addCase(Register.pending, (state) => {
    state.loading = true;
  });

  builder.addCase(Register.fulfilled, (state, action) => {
    if (action.payload) {
      //
    }

    state.loading = false;
  });

  builder.addCase(Login.pending, (state) => {
    state.loading = true;
  });

  builder.addCase(Login.fulfilled, (state, action) => {
    if (action.payload) {
      state.authenticated = true;
      state.profile = action.payload;
    }
    state.loading = false;
  });

  builder.addCase(UpdateProfile.pending, (state) => {
    state.loading = true;
  });

  builder.addCase(UpdateProfile.fulfilled, (state, action) => {
    if (action.payload) {
      state.authenticated = true;
      state.profile = action.payload;
    }
    state.loading = false;
  });

  builder.addCase(CreateAsociacion.pending, (state) => {
    state.loading = true;
  });

  builder.addCase(CreateAsociacion.fulfilled, (state, action) => {
    if (action.payload) {
      state.profile = { ...state.profile, hasAssociation: true };
    }
    state.loading = false;
  });
};
