import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/images/logo.png"


const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-200 py-4 mt-24">
      <div
        className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4"
      >
        <div className="mb-4 md:mb-0">
          <Image src={logo} alt="Logo" className="h-8 w-auto" />
        </div>
        <div
          className="flex flex-wrap justify-center md:justify-start mb-4 md:mb-0"
        >
          <ul className="flex space-x-1">
            <li>&copy; {currentYear}. PropertyHub.</li>
            <li>All rights reserved.</li>
         
          </ul>
        </div>
        <div>
          <h1 className="">
             Made with❤️by Sanky !!!
          </h1>
        </div>
      </div>
    </footer>

  )
}

export default Footer