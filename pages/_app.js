import "../styles/globals.css";
import Head from "next/head";
import { useState } from "react";
import Navbar from "../components/Navbar";
function MyApp({ Component, pageProps }) {
  const [a, b] = useState("en");
  const [isaLightOn, setIsaLightOn] = useState(true);
  function clicked(lang) {
    b(lang);
  }
  function toggleLight() {
    setIsaLightOn((e) => !e);
  }

  return (
    <>
      <Head>
        <link rel="shortcut icon" href="favi icon.ico" />
        <title>Alireza s website</title>
        <meta
          name="description"
          content="its a web site that i build to show my skills and that i can create a website from 0 to 100"
        />
      </Head>
      <Navbar
        func={clicked}
        a={a}
        toggleLight={toggleLight}
        isaLightOn={isaLightOn}
      />
      <Component {...pageProps} a={a} isaLightOn={isaLightOn} />
    </>
  );
}

export default MyApp;
