import React from "react";
import { motion } from "framer-motion";

const NewsAndBlogs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-bold text-gray-800 text-center mb-8"
        >
          📰 Latest News & Blogs
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Blog Card 1 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?w=400&h=200&fit=crop"
              alt="Web Development Trends"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                The Future of Web Development
              </h3>
              <p className="text-gray-600 mb-4">
                Discover the latest trends in web development, including new
                frameworks and tools shaping the industry.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium"
              >
                Read More →
              </a>
            </div>
          </motion.div>

          {/* Blog Card 2 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=400&h=200&fit=crop"
              alt="Remote Work Tips"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                Tips for Effective Remote Work
              </h3>
              <p className="text-gray-600 mb-4">
                Learn how to boost productivity and maintain work-life balance
                while working remotely.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium"
              >
                Read More →
              </a>
            </div>
          </motion.div>

          {/* Blog Card 3 */}
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src="https://images.unsplash.com/photo-1532009877282-3340270e0529?w=400&h=200&fit=crop"
              alt="UI/UX Design Trends"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                UI/UX Design Trends for 2024
              </h3>
              <p className="text-gray-600 mb-4">
                Explore the new UI/UX design trends that will enhance user
                experiences in 2024.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline font-medium"
              >
                Read More →
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NewsAndBlogs;
