import { motion } from "framer-motion";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Best Price Guarantee",
      desc: "We offer the most competitive pricing in the resale market.",
      icon: "💰",
    },
    {
      title: "Secure Transactions",
      desc: "All exchanges are encrypted and verified.",
      icon: "🔒",
    },
    {
      title: "Instant Valuation",
      desc: "Get your software license value in real-time.",
      icon: "⚡",
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
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="why-choose-us"
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900 text-center"
    >
      <motion.h2
        className="text-3xl font-bold text-gray-900 dark:text-white mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Why Choose Us
      </motion.h2>

      <motion.div
        className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg fflex flex-col items-center"
            variants={itemVariants}
          >
            {feature.icon}
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {feature.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
