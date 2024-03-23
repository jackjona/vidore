import React, { useEffect } from "react";
import Head from "next/head";

const Meta = (props) => {
  const title = `Vidore ${
    props.title
      ? `- ${props.title}`
      : "- A Free Modern Video Discovery & Streaming Site"
  }  `;
  const description = `${
    props.desc
      ? `${props.desc}`
      : "Vidore - A free modern video discovery and streaming website that includes everything you'll ever need."
  }`;

  const version = "2024.03.23";

  useEffect(() => {
    if (typeof sessionStorage !== "undefined") {
      if (!sessionStorage.getItem("version")) {
        console.log(`%c Version: ${version}`, `color:green`);
        sessionStorage.setItem("version", version ? version : "true");
      }
    } else {
      console.error(
        "Error: sessionStorage is not available or not defined in this browser."
      );
    }
  }, []);

  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link type="text/plain" rel="author" href="/humans.txt" />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#121212" />
      <link rel="manifest" href="/manifest.webmanifest" />
      <meta name="msapplication-TileColor" content="#121212" />
      <meta name="theme-color" content="#1681CC" />
      <meta property="og:title" content="Vidore" />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Vidore" />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:description" content={description} />
      {process.env.NEXT_PUBLIC_HOST_URL && (
        <meta
          property="og:image"
          content={`${process.env.NEXT_PUBLIC_HOST_URL}/share.png`}
        />
      )}
    </Head>
  );
};

export default Meta;
