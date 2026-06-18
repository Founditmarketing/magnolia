import React from "react";
import { useRouter } from "./utils";
import { Header, Footer } from "./components/Layout";
import { NotFound } from "./components/Shared";
import { HomePage, CommercialPage, IndustrialPage, DumpstersPage, GalleryPage, RoofingPage } from "./pages";
import { PricingPage, AboutPage, ContactPage, ResidentialPage, LicensesPage } from "./pages/AdditionalPages";

export default function App() {
  const { path, page } = useRouter();

  return (
    <>
      <Header path={path} />
      <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
        {page === "home" && <HomePage />}
        {page === "commercial" && <CommercialPage />}
        {page === "industrial" && <IndustrialPage />}
        {page === "roofing" && <RoofingPage />}
        {page === "dumpsters" && <DumpstersPage />}
        {page === "pricing" && <PricingPage />}
        {page === "about" && <AboutPage />}
        {page === "contact" && <ContactPage />}
        {page === "residential" && <ResidentialPage />}
        {page === "licenses" && <LicensesPage />}
        {page === "gallery" && <GalleryPage />}
        {page === "notfound" && <NotFound />}
      </main>
      <Footer />
    </>
  );
}
