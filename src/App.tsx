import "./App.css";

import {
  Hero,
  ServiceSection,
  HowItWorksSection,
  Proyectsfavorite,
  ContactUs,
} from "./sections";

import { Footer } from "./Components";

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
    </>
  );
}
