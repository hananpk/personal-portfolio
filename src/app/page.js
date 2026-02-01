"use client";
import BookingSection from "@/components/BookingSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import Footer from "@/components/Footer";
import ResumeSection from "@/components/ResumeSection";
import Spotlight from "@/components/Spotlight";
import StepContainer from "@/components/StepContainer/StepContainer";
import WorkSection from "@/components/WorkSection";
import { NextUIProvider } from "@nextui-org/react";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Spotlight />
        <ResumeSection />
        <ExpertiseSection />
        <StepContainer />
        <WorkSection />
        <BookingSection />
      </NextUIProvider>
    </>
  );
}
