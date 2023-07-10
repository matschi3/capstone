import GlobalStyle from "../styles.js";
import { SWRConfig } from "swr";

const fetcher = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    // if all good, return response
    return response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <SWRConfig value={{ fetcher, refreshInterval: 1000 }}>
        <Component {...pageProps} />
      </SWRConfig>
    </>
  );
}
