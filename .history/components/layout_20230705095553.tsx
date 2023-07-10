import Navbar from "./navbar";
import Footer from "./footer";

type Props {
    children: any
}

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
