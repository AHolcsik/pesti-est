import type { Metadata } from "next";
import StoreProvider from "./StoreProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pesti Est",
  description: "Web site created to explore Budapest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <header className="mx-2 bg-slate-600">header</header>
          <div id="root">{children}</div>
          <footer>footer</footer>
        </body>
      </html>
    </StoreProvider>
  );
}
