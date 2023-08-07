import { LoginGoogle } from "@/store/slices/auth";
import { GoogleAuth } from "@/types/Model/Profile";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

interface Props {
  handleClose: () => void;
}

export const LoginWithGoogle = ({ handleClose }: Props) => {
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    //eslint-disable-next-line
    (window as any).onGoogleSuccess = (response: any) => {
      submitData(response);
      // hit your backend, passing up response.credential
    };

    // Inject the google provided script
    // (an importable module would be nicer here)
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // clean up for react lifecycle
      (window as any).onGoogleSuccess = undefined;
      document.body.removeChild(script);
    };
  }, []);

  const submitData = async (data: GoogleAuth) => {
    const { payload } = await dispatch(LoginGoogle(data) as any);
    if (payload) {
      handleClose();
      router.push("/");
    }
  };

  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="388797586221-62o9ph0f22lokf6i4c4apjkstr7t775c.apps.googleusercontent.com"
        data-callback="onGoogleSuccess" // as defined above
        data-context="signin"
        data-ux_mode="popup"
        data-auto_prompt="false"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      ></div>
    </>
  );
};
