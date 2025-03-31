import "./ui/globals.css";
import { mainFont } from "./ui/fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${mainFont.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
