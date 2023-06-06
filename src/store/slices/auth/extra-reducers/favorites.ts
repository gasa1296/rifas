import {ActionReducerMapBuilder} from "@reduxjs/toolkit";
import {getAuth} from "../thunks";

export const FAVORITES_EXTRA_REDUCERS = (
  builder: ActionReducerMapBuilder<any>
): void => {
  builder.addCase(getAuth.pending, (state) => {
    state.favorites.gettingProjectsError = false;
  });

  builder.addCase(getAuth.fulfilled, (state, action) => {
    if (action.payload) {
      state.favorites.gettingProjects = false;
      state.favorites.body = action.payload;
    } else {
      state.favorites.gettingProjectsError = true;
    }
  });
};
