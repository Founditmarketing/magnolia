import React from "react";
import { useRouter } from "./utils";
import { Header, Footer } from "./components/Layout";
import { HomePage, CommercialPage, IndustrialPage, DumpstersPage, GalleryPage } from "./pages";
import { PricingPage, AboutPage, ContactPage, ResidentialPage } from "./pages/AdditionalPages";

export default function App() {
  const { path, page } = useRouter();

  return (
    <>
      <Header path={path} />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {page === "home" && <HomePage />}
        {page === "commercial" && <CommercialPage />}
        {page === "industrial" && <IndustrialPage />}
        {page === "dumpsters" && <DumpstersPage />}
        {page === "pricing" && <PricingPage />}
        {page === "about" && <AboutPage />}
        {page === "contact" && <ContactPage />}
        {page === "residential" && <ResidentialPage />}
        {page === "gallery" && <GalleryPage />}
      </main>
      <Footer />
    </>
  );
}
