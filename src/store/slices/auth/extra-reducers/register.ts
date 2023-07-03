import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {Register} from "../thunks";

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

    state.loading = false
  });
};
