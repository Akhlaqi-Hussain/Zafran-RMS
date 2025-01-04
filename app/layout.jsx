import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";
import { CartProvider } from "./components/CartProvider";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  weight: ["200", "400", "700", "900"],
  subsets: ["latin"], // Add subsets here
});

export const metadata = {
  title: "Zafran",
  description: "Delightful toys and hassle-free checkout",
};

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <body className={poppins.className}>
          <ToastContainer position="top-right" autoClose={3000} />
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </CartProvider>
  );
}
