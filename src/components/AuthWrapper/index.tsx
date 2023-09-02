import { ValidateSession, selectAuthState } from "@/store/slices/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validateAuthPath } from "./helper";
import { useNotificationStore } from "@/store/zustand/NotificationStore";
import { useCausesStore } from "@/store/zustand/CausesStore";
import { usePremioStore } from "@/store/zustand/PremioStore";

interface Props {
  children: JSX.Element;
}
export default function AuthWrapper({ children }: Props) {
  const [loading, setLoading] = useState(true);
  const { authenticated } = useSelector(selectAuthState);
  const getNotifications = useNotificationStore(
    (state) => state.getNotifications
  );
  const getCauses = useCausesStore(
    (state) => state.getCauses
  );
  const getPremio = usePremioStore(
    (state) => state.getPremio
  );

  const router = useRouter();

  const dispatch = useDispatch();

  const getAuthSession = async () => {
    const token = await localStorage.getItem("sessionToken");
    if (!token) {
      return setLoading(false);
    }

    const { payload } = await dispatch(ValidateSession({}) as any);
    setTimeout(() => setLoading(false), 200);
  };

  useEffect(() => {
    if (validateAuthPath(router.pathname, authenticated)) router.push("/");

    //eslint-disable-next-line
  }, [router.pathname, authenticated]);

  useEffect(() => {
    const timeoutId = setTimeout(() => getAuthSession(), 200);

    return () => clearTimeout(timeoutId);

    //eslint-disable-next-line
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      authenticated && getNotifications();
    }, 200);

    return () => clearTimeout(timeoutId);

    //eslint-disable-next-line
  }, [authenticated]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      authenticated && getCauses();
    }, 200);

    return () => clearTimeout(timeoutId);

    //eslint-disable-next-line
  }, [authenticated]);


  useEffect(() => {
    const timeoutId = setTimeout(() => {
      authenticated && getPremio();
    }, 200);

    return () => clearTimeout(timeoutId);

    //eslint-disable-next-line
  }, [authenticated]);

  console.log("loading", loading);

  if (loading) return <> </>;

  return <>{children}</>;
}
