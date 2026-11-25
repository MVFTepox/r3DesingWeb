import "./App.css";

import {
  Hero,
  ServiceSection,
  HowItWorksSection,
  Proyectsfavorite,
  ContactUs,
} from "./sections";

import { Footer } from "./Components";
import { Analytics } from "@vercel/analytics/react";

export default function App() {
  return (
    <>
      <div className="">
        <Hero />
        <ServiceSection />
        <HowItWorksSection />
        <Proyectsfavorite />
        <ContactUs />
      </div>
      {/* Footer */}
      <div>
        <Footer />
      </div>
      <Analytics />
    </>
  );
}
