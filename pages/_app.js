import "../styles/globals.css";
import Layout from "../layouts/layout";

import "../public/fonts//AirbnbCerealBold.woff";
import "../public/fonts//AirbnbCerealLight.woff";
import "../public/fonts//AirbnbCerealMedium.woff";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "aos/dist/aos.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      {" "}
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
