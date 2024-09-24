import "./styles/globals.css";
import Header from "./components/header.js";
import Navbar from "./components/navbar.js";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header>
          <Navbar></Navbar>
        </Header>
        <main>{children}</main>
      </body>
    </html>
  );
}
