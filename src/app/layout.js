import Header from "@/components/Header";
import "./globals.css";
import localFont from "next/font/local";
import Footer from "@/components/Footer";
import Script from "next/script";


const zalandoSans = localFont({
  src: [
    {
      path: "../../public/assets/fonts/ZalandoSansExpanded-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/ZalandoSansExpanded-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/assets/fonts/ZalandoSansExpanded-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});
export const metadata = {
  title: {
    default: "Hanan — Frontend Engineer & UI/UX Designer",
    template: "%s | Hanan",
  },
  description:
    "Creative Frontend Engineer and UI/UX Designer specializing in modern web experiences using React, Next.js, and design systems.",

  keywords: [
    "Hanan",
    "Frontend Engineer",
    "UI UX Designer",
    "React Developer",
    "Next.js Developer",
    "Web Designer",
    "Portfolio",
  ],

  authors: [{ name: "Hanan" }],
  creator: "Hanan",

  openGraph: {
    title: "Hanan — Frontend Engineer & UI/UX Designer",
    description:
      "Explore Hanan’s portfolio showcasing modern web applications, UI/UX design, and interactive experiences.",
    url: "https://hanaan.me",
    siteName: "Hanan Portfolio",
    images: [
      {
        url: "https://hanaan.me/og-image.png",
        width: 1200,
        height: 630,
        alt: "Hanan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hanan — Frontend Engineer & UI/UX Designer",
    description:
      "Frontend Engineer crafting premium web experiences with React and Next.js.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-66R9RDLSM8"
          strategy="afterInteractive"
        />

        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag("js", new Date());
      gtag("config", "G-66R9RDLSM8");
    `,
          }}
        />

      </head>
      <body className={zalandoSans.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
