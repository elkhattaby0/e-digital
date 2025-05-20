"use client";

import { useState } from "react";
import { ArrowRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Blog = ({ data }) => {
  
  const [selectedType, setSelectedType] = useState("All");

  const blogTypes = ["All", ...new Set(data.map((item) => item.category))];

  const filteredBlogs = selectedType === "All" ? data : data.filter((blog) => blog.category === selectedType);

  return (
    <section className={Style.container}>
      <div className={Style.section}>

        <div className="flex flex-wrap gap-3">
          {blogTypes.map((category) => (
            <button
              key={category}
              className={`px-4 py-1 rounded-full border text-sm font-medium cursor-pointer ${
                selectedType === category ? "bg-[#FCA311] text-[#E5E5E5]" : "bg-white dark:bg-[#1F2A40] dark:text-[#E5E5E5] border-[#666666]"
              }`}
              onClick={() => setSelectedType(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 w-full">
          {filteredBlogs.map((n) => (
            <div
              key={n.id}
              className="p-3 rounded-xl border dark:border-[#666666] dark:bg-[#1F2A40] transition-all duration-300 ease-in-out group"
            >
              <Image
                src={n.image}
                alt={n.title}
                width={400}
                height={250}
                className="rounded-xl object-cover w-full h-auto"
              />
              <div className="pt-4 px-2 text-[#E5E5E5]">
                <div className="flex items-center justify-between text-sm mb-2">
                  <p className="bg-[#FCA311] py-1 px-2 rounded-full text-xs font-medium">{n.category}</p>
                  <p className="text-xs">{n.date}</p>
                </div>
                <h2 className="text-lg font-semibold mb-1">{n.title}</h2>
                <p className="text-sm mb-2 line-clamp-3">{n.description}</p>
                <Link
                  href={`/blogs/${n.id}/${encodeURIComponent(n.title)}`}
                  className="text-sm hover:text-[#FCA311] flex items-center justify-between w-[95px]"
                >
                  Read More
                  <ArrowRightIcon size="1em" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Style = {
    container: "w-full flex items-center justify-center max-md:pt-10 bg-[#FFFFFF] dark:bg-[#14213D]",
    section: "w-11/12 flex flex-col gap-8 items-center justify-center h-full",
  };

export default Blog;
