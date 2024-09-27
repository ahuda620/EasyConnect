import "./styles/globals.css";
import Header from "./components/Header/header.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header></Header>
        <main>{children}</main>
      </body>
    </html>
  );
}
