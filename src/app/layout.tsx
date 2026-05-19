import "@/styles/globals.css";
import { ThemeModeScript } from "flowbite-react";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <ThemeModeScript mode="auto" />
      </head>
      <body>{children}</body>
    </html>
  );
}
