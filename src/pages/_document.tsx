import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  const url = `${process.env.NEXT_PUBLIC_FRONTEND_URL}`;

  return (
    <Html lang="en">
      <Head />
      <title>Rifa con causa</title>

      {/* Metatags de Open Graph / Facebook */}
      <meta property="og:title" content="Rifa con causa" />
      <meta
        property="og:description"
        content="¡Ayudanos para hacer realidad las historias con las que te puedes rifar !"
      />
      <meta property="og:image" content={`${url}/logo.jpg`} />
      <meta property="og:url" content={`${url}`} />

      {/* Metatags de Twitter */}
      <meta property="twitter:title" content="Rifa con causa" />
      <meta
        property="twitter:description"
        content="¡Ayudanos para hacer realidad las historias con las que te puedes rifar !"
      />
      <meta property="twitter:image" content={`${url}/logo.jpg`} />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
