import "@/styles/globals.css";
import Theme from "@/theme";
import type { AppProps } from "next/app";

import "../languages/i18n";
import { Provider } from "react-redux";
import { store } from "@/store";
import { Toaster } from "react-hot-toast";
import AuthWrapper from "@/components/AuthWrapper";

import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Theme>
        <>
          <Toaster />
          <AuthWrapper>
            <Component {...pageProps} />
          </AuthWrapper>
        </>
      </Theme>
    </Provider>
  );
}
