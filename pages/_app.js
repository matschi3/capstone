import GlobalStyle from "../styles.js";
import { SWRConfig } from "swr";

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
      </SWRConfig>
    </>
  );
}
