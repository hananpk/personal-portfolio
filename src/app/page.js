"use client";
import Footer from "@/components/Footer";
import Spotlight from "@/components/Spotlight";
import WorkSection from "@/components/WorkSection";
import { NextUIProvider } from "@nextui-org/react";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Spotlight />
        <WorkSection />
        <Footer />
      </NextUIProvider>
    </>
  );
}
