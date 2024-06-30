import "@/assets/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "PropertyHub | Find the Perfect Rental Property",
  description:
    "Find the perfect rental property with PropertyHub. Search for apartments, houses, condos, and more. Filter by price, bedrooms, bathrooms, and more.",
  keywords: "rental ,rental-house ,property",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
};

export default MainLayout;
