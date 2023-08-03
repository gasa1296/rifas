import { useEffect } from "react";

export const LoginWithGoogle = () => {
  useEffect(() => {
    window.onGoogleSuccess = (response: any) => {
      console.log("response", response);
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
      window.onGoogleSuccess = undefined;
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div
        id="g_id_onload"
        data-client_id="388797586221-62o9ph0f22lokf6i4c4apjkstr7t775c.apps.googleusercontent.com"
        data-callback="onGoogleSuccess" // as defined above
        data-context="signin"
        data-ux_mode="popup"
        data-auto_prompt="false"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="filled_blue"
        data-text="signin_with"
        data-size="large"
        data-logo_alignment="left"
      ></div>
    </>
  );
};
