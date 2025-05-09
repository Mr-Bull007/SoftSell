import { motion } from "framer-motion";
import Navbar from "./Navbar";

const Hero = () => {
  return (
    <>
      <Navbar />
      <section className="pt-24 bg-gray-50 dark:bg-gray-900 py-16 py-16 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Sell Your Unused Software Licenses
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Turn your unused software into cash in just a few steps.
        </motion.p>
        <motion.button
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl transition"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          Sell My License
        </motion.button>
      </section>
    </>
  );
};

export default Hero;
