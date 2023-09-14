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
        token:
          "EAAJpxPvmZA8UBO8XlnZBlct4H0BJl6zc8ceTKg5hF333lAS2VMgMp64KogSvc736lsukZAnZBS4bUALwAW62if9x7DPQNhWQBtX2Ec2oIbvCl9NqMyVNGPXhQ92qhV5tpoW0PtTZABTa0z39HkoSN8cybkgokREZAbCSsW8sviQXFkGOnTuOQc2TZCFH3qy0IRrm8SHyS0elN9Oa7UcOcoHbhch23mq",
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
