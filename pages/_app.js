import GlobalStyle from "../styles.js";
import { SWRConfig } from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

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
