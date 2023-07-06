import { getUserProfile, loginUser, refreshToken, registerUser } from "@/services/auth";
import {RootState} from "@/store";
import { Auth, Profile } from "@/types/Model/Profile";
import { handleError } from "@/utils/handleError";
import {createAsyncThunk} from "@reduxjs/toolkit";
const PREFIX: string = "auth";
export const Register = createAsyncThunk(
  `${PREFIX}/register`,
  async (
    Profile: Profile,
    thunkAPI
  ): Promise<{test: boolean} | undefined> => {

    try {

      const {data} = await registerUser(Profile)
      return data
    } catch (error) {
      handleError(error)
    }
  }
);
export const Login = createAsyncThunk(
  `${PREFIX}/login`,
  async (
    auth: Auth,
    thunkAPI
  ): Promise<{test: boolean} | undefined> => {

    try {

      const {data} = await loginUser(auth)
      await localStorage.setItem('sessionToken', data.access)
      await localStorage.setItem('sessionTokenRefresh', data.refresh)

      const profile = await getUserProfile()
      

      return {...data, ...profile.data}
    } catch (error) {
      handleError(error)
    }
  }
);
export const ValidateSession = createAsyncThunk(
  `${PREFIX}/login`,
  async (
    auth: any,
    thunkAPI
  ): Promise<{test: boolean} | undefined> => {

    try {

      const access = await localStorage.getItem("sessionToken")
      const refresh = await localStorage.getItem("sessionTokenRefresh")

      const profile = await getUserProfile()
      //const {data} = await refreshToken(refresh || '')

      const data ={refresh, access}

      return {...data, ...profile.data}
    } catch (error) {
      //handleError(error)
      await localStorage.removeItem("sessionToken")
      await localStorage.removeItem("sessionTokenRefresh")
    }
  }
);
