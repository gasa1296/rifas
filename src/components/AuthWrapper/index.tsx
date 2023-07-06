import { ValidateSession } from "@/store/slices/auth";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

interface Props {
  children: JSX.Element;
}
export default function AuthWrapper({ children }: Props) {
  const [loading, setLoading] = useState(true);
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
    const timeoutId = setTimeout(() => getAuthSession(), 200);

    return () => clearTimeout(timeoutId);

    //eslint-disable-next-line
  }, []);

  if (loading) return <> </>;

  return <>{children}</>;
}
