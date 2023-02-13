import { Roboto } from "@next/font/google";
import Layout from "@/components/Layouts/layout";
import "@/styles/globals.css";

const roboto = Roboto({ subsets: ["latin"], weight: "100" });

export default function App({ Component, pageProps }) {
  return (
    <main className={roboto.className}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
