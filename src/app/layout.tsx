import type { Metadata } from "next";
import StoreProvider from "./StoreProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pesti Est",
  description: "Web site created to explore Budapest",
};

export default function RootLayout({
  children,
  dashboard,
  map,
}: {
  children: React.ReactNode;
  dashboard: React.ReactNode;
  map: React.ReactNode;
}) {
  return (
    <StoreProvider>
      <html lang="en">
        <body>
          <header className="h-10 bg-slate-600">header</header>
          <div id="root">{children}</div>
          <div className="flex">
            {map}
            {dashboard}
          </div>
          <footer className="h-10">footer</footer>
        </body>
      </html>
    </StoreProvider>
  );
}
