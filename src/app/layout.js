import "./globals.css";
import localFont from "next/font/local";

const zalandoSans = localFont({
  src: [
    {
      path: "../../public/fonts/ZalandoSansExpanded-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/ZalandoSansExpanded-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

export const metadata = {
  title: "Hanan",
  description: "Frontend Engineer & UI/UX Designer Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={zalandoSans.className}>{children}</body>
    </html>
  );
}
