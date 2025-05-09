import {
  FaCloudUploadAlt,
  FaSearchDollar,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaCloudUploadAlt className="text-4xl text-blue-600" />,
      title: "Upload License",
      description: "Provide license details via our secure form.",
    },
    {
      icon: <FaSearchDollar className="text-4xl text-blue-600" />,
      title: "Get Valuation",
      description: "We evaluate the resale value quickly.",
    },
    {
      icon: <FaMoneyCheckAlt className="text-4xl text-blue-600" />,
      title: "Get Paid",
      description: "Receive your payment after confirmation.",
    },
  ];

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="how-it-works"
      className="py-16 px-4 bg-white dark:bg-gray-800 text-center"
    >
      <motion.h2
        className="text-3xl font-bold text-gray-900 dark:text-white mb-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        How It Works
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 dark:bg-gray-700 p-6 rounded-xl shadow-md flex flex-col items-center"
            variants={itemVariants}
          >
            {step.icon}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default HowItWorks;
