import React from "react";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { BsFacebook } from "react-icons/bs";
export default function LoginWithFacebook() {
  const handleFacebookResponse = (response: any) => {
    console.log(response);
  };

  return (
    <FacebookLogin
      appId="679244714108869"
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
