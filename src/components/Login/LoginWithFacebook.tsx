import { LoginFacebook } from "@/store/slices/auth";
import { useRouter } from "next/router";
import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { BsFacebook } from "react-icons/bs";
import { useDispatch } from "react-redux";

interface Props {
  handleClose: () => void;
}

export default function LoginWithFacebook({ handleClose }: Props) {
  const dispatch = useDispatch();
  const router = useRouter();
  const handleFacebookResponse = async (response: any) => {
    const { payload } = await dispatch(
      LoginFacebook({
        token: response.accessToken,
      }) as any
    );
    if (payload) {
      handleClose();
      router.push("/");
    }
  };

  return (
    <FacebookLogin
      appId={process.env.NEXT_PUBLIC_FACEBOOK_ID || ""}
      fields="name,email,picture"
      callback={handleFacebookResponse}
      render={(renderProps: any) => (
        <button
          onClick={() => {
            renderProps.onClick();
          }}
          className="btn btn-primary "
          style={{
            backgroundColor: "#3b5998",
            border: "none",
          }}
        >
          <BsFacebook size={18} className="me-2 me-lg-3" />
          Continuar con facebook
        </button>
      )}
    />
  );
}
