import "./styles/globals.css";
import Header from "./components/Header/header.js";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <UserProvider>
        <body>
          <Header></Header>
          {children}
        </body>
      </UserProvider>
    </html>
  );
}
