import "@/styles/globals.css";
import { ThemeModeScript } from "flowbite-react";

export default function BaseLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <head>
        <ThemeModeScript />
      </head>
      <body>{children}</body>
    </html>
  );
}
