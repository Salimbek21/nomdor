import Layout from "@/public";
import "@/styles/globals.css";
import { useEffect, useState } from "react";
import DotLoader from "react-spinners/DotLoader";

export default function App({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  }, []);

  return (
    <>
      {loading ? (
        <>
          <div className="loader">
            <DotLoader size={60} color={"#713D8D"} loading={loading} />
          </div>
        </>
      ) : (
        <>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </>
      )}
    </>
  );
}
