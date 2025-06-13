"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Calendar, Clock, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const BlogSection = ({ data }) => {
  const [selectedType, setSelectedType] = useState("All")

  const blogTypes = ["All", ...new Set(data.map((item) => item.category))]
  const filteredBlogs = selectedType === "All" ? data : data.filter((blog) => blog.category === selectedType)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      y: -50,
      scale: 0.9,
      transition: {
        duration: 0.3,
      },
    },
  }

  const filterVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
      },
    },
  }

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="w-full bg-gradient-to-br from-[#14213D] via-[#1a2847] to-[#14213D] py-20 lg:py-32 min-h-screen">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[#FCA311] font-medium text-lg mb-4"
          >
            Our Latest Insights
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-4xl lg:text-6xl font-bold text-[#E5E5E5] mb-6"
          >
            Blog & <span className="text-[#FCA311]">Articles</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[#E5E5E5] text-lg lg:text-xl max-w-2xl mx-auto opacity-90"
          >
            Stay updated with the latest trends, tips, and insights from the world of digital marketing and web
            development.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {blogTypes.map((category, index) => (
            <motion.button
              key={category}
              variants={filterVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-full border-2 text-sm font-semibold cursor-pointer transition-all duration-300 ${
                selectedType === category
                  ? "bg-[#FCA311] text-[#14213D] border-[#FCA311] shadow-lg shadow-[#FCA311]/25"
                  : "bg-transparent text-[#E5E5E5] border-[#E5E5E5]/30 hover:border-[#FCA311] hover:text-[#FCA311]"
              }`}
              onClick={() => setSelectedType(category)}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedType}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredBlogs.map((blog, index) => (
              <motion.div
                key={`${blog.id}-${selectedType}`}
                variants={cardVariants}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="bg-[#1a2847] rounded-2xl overflow-hidden border border-[#2a3a5c] hover:border-[#FCA311]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-[#FCA311]/10">
                  {/* Image Container */}
                  <div className="relative overflow-hidden">
                    <motion.div variants={imageVariants} whileHover="hover">
                      <Image
                        src={blog.image || "/placeholder.svg"}
                        alt={blog.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>

                    {/* Category Badge */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 + 0.5 }}
                      className="absolute top-4 left-4"
                    >
                      <span className="bg-[#FCA311] text-[#14213D] px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                        <Tag size={12} />
                        {blog.category}
                      </span>
                    </motion.div>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14213D]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-[#E5E5E5]/70 text-xs mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar size={12} />
                        <span>{blog.date}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{blog.readTime || "5 min read"}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <motion.h2
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.6 }}
                      className="text-xl font-bold text-[#E5E5E5] mb-3 line-clamp-2 group-hover:text-[#FCA311] transition-colors duration-300"
                    >
                      {blog.title}
                    </motion.h2>

                    {/* Description */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.7 }}
                      className="text-[#E5E5E5]/80 text-sm mb-6 line-clamp-3 leading-relaxed"
                    >
                      {blog.description}
                    </motion.p>

                    {/* Read More Link */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                    >
                      <Link
                        href={`/blogs/${blog.id}/${encodeURIComponent(blog.title)}`}
                        className="inline-flex items-center gap-2 text-[#FCA311] font-semibold text-sm hover:gap-3 transition-all duration-300 group/link"
                      >
                        Read More
                        <ArrowRight
                          size={16}
                          className="group-hover/link:translate-x-1 transition-transform duration-300"
                        />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* No Results */}
        {filteredBlogs.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-2xl font-bold text-[#E5E5E5] mb-2">No Articles Found</h3>
            <p className="text-[#E5E5E5]/70">Try selecting a different category or check back later for new content.</p>
          </motion.div>
        )}

        {/* Load More Button (if needed) */}
        {filteredBlogs.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-[#FCA311] text-[#FCA311] hover:bg-[#FCA311] hover:text-[#14213D] px-8 py-4 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Load More Articles
              <ArrowRight size={16} />
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default BlogSection
