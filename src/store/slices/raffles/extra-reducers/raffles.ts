import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import { Raffles } from "../thunks";

export const RAFFLES_EXTRA_REDUCERS = (
  builder: ActionReducerMapBuilder<any>
): void => {
  builder.addCase(Raffles.pending, (state) => {
    state.loading = true;
  });

  builder.addCase(Raffles.fulfilled, (state, action) => {
    if (action.payload) {
      state.raffles = action.payload;
    }

    state.loading = false
  });


  

};
