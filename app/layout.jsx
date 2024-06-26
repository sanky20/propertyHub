import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "PropertyPulse | Find the Perfect Rental Property",
  description:
    "Find the perfect rental property with PropertyPulse. Search for apartments, houses, condos, and more. Filter by price, bedrooms, bathrooms, and more.",
  keywords: "rental ,rental-house ,property",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
