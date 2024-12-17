import React from "react";
import { motion } from "framer-motion";

const WeAreHiring = () => {
  return (
    <section className="bg-blue-50 py-12 mb-5">
      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-blue-600 mb-6"
        >
          🚀 We Are Hiring!
        </motion.h2>
        <p className="text-gray-700 text-lg mb-8 max-w-2xl">
          Join our dynamic team and be part of a growing organization that
          values innovation, creativity, and passion. Check out our job
          openings and take the next step in your career!
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            href="#"
            className="btn bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg shadow-md"
          >
            Explore Open Positions
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            href="#"
            className="btn bg-gray-300 text-gray-800 hover:bg-gray-400 px-6 py-3 rounded-lg shadow-md"
          >
            Contact HR
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default WeAreHiring;
