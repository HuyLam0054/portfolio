import type { Metadata } from "next";
import "./styles/globals.css";
import { Montserrat } from "next/font/google";
import { SpeedDial_1 } from "./components/speed dial/sd_1";
import { RootFooter, RootHeader } from "./components/layout";

export const metadata: Metadata = {
  title: "HuyLam's Portfolio",
  description: "Generated by create next app",
};
const montserrat = Montserrat({ subsets: ["latin"] });
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} overflow-y-scroll overflow-x-hidden`}
      >
        <RootHeader />
        <SpeedDial_1 />
        {children}
        <RootFooter />
      </body>
    </html>
  );
}
