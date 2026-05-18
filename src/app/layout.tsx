import "@/styles/globals.css";
import { ThemeModeScript } from "flowbite-react";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning className="scroll-smooth">
      <head>
        <ThemeModeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
