import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className="bg-white dark:bg-gray-900 py-4 fixed top-0 w-full z-50 shadow-md">
      <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <img
            src="/src/assets/favicon.ico"
            alt="SoftSell Logo"
            className="h-10"
          />
          <span className="font-bold text-lg text-gray-900 dark:text-white">
            SoftSell
          </span>
        </a>

        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-700 dark:text-gray-300">
          <li>
            <a
              href="#how-it-works"
              className="hover:text-blue-600 dark:text-white"
            >
              How It Works
            </a>
          </li>
          <li>
            <a href="#why-choose-us" className="hover:text-blue-600">
              Why Choose Us
            </a>
          </li>
          <li>
            <a href="#testimonials" className="hover:text-blue-600">
              Testimonials
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600">
              Contact
            </a>
          </li>
          <ThemeToggle />
        </ul>
        {/* Mobile Menu (optional for now) */}
        <button
          className="md:hidden text-gray-800 dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 shadow-lg px-4 pb-4">
          <ul className="flex flex-col gap-4 text-sm font-medium text-gray-700 dark:text-gray-300">
            <li>
              <a href="#how-it-works" onClick={() => setIsOpen(false)}>
                How It Works
              </a>
            </li>
            <li>
              <a href="#why-choose-us" onClick={() => setIsOpen(false)}>
                Why Choose Us
              </a>
            </li>
            <li>
              <a href="#testimonials" onClick={() => setIsOpen(false)}>
                Testimonials
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>
            </li>
            <ThemeToggle />
          </ul>
        </div>
      )}
    </section>
  );
};

export default Navbar;
