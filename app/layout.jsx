import Header from "./components/Header";
import Footer from "./components/Footer";
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["200", "400", "700", "900"],
});

export const metadata = {
  title: "Zafran",
  description: "Delightful toys and hassle-free checkout",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
