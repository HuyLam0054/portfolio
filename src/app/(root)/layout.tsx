import RootNavbar from "@/components/navbar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quang Huy's Portfolio",
  description: "Wellcome to my Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <RootNavbar />
      <div className="w-full max-w-7xl mx-auto">{children}</div>
    </>
  );
}
