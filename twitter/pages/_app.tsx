import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/layout";
import LoginModal from "@/components/modals/loginModal";
import RegisterModal from "@/components/modals/registerModal";
// import Modal from "@/components/modal";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <RegisterModal/>
    <LoginModal/> 
    {/* <Modal isOpen title="Test Modal" actionLabel="Submit"/> */}
      <Layout>
      <Component {...pageProps} />;
    </Layout>
    </>
  
  );
}
