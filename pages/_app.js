import GlobalStyle from "../styles.js";
import { SWRConfig } from "swr";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const fetcher = async (url) => {
  try {
    if (typeof url !== "string" || url.trim().length === 0) {
      throw new Error("Invalid URL");
    }

    const response = await fetch(url);

    if (!response.ok || response.status === 0) {
      throw new Error("Failed to fetch data");
    }

    return response.json();
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    throw new Error("An error occurred while fetching data: " + error.message);
  }
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher }}>
        <Component {...pageProps} />
        <ToastContainer
          position="bottom-left"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </SWRConfig>
    </>
  );
}
