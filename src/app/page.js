"use client";
import BookingSection from "@/components/BookingSection";
import ExpertiseSection from "@/components/ExpertiseSection";
import HowItWorks from "@/components/HowItWorks/HowItWork";
import ResumeSection from "@/components/ResumeSection";
import Spotlight from "@/components/Spotlight";
import StepContainer from "@/components/StepContainer/StepContainer";
import Timeline from "@/components/Timeline/Timeline";
import WorkSection from "@/components/WorkSection";
import { NextUIProvider } from "@nextui-org/react";
import "tailwindcss/tailwind.css";

export default function Home() {
  return (
    <>
      <NextUIProvider>
        <Spotlight />
        <Timeline />
        <ResumeSection />
        <ExpertiseSection />
        <StepContainer />
        {/* <HowItWorks/> */}
        <WorkSection />
        <BookingSection />
      </NextUIProvider>
    </>
  );
}
