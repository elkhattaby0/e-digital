import Space from "@/component/Space";
import Blog from "./Blogs"
import { getBlogs } from "../lib/getBlogs";

export const metadata = {
    title: "Trusted Web Agency - Blog Articles, News, and Ideas for Digital Growth",
    description: "Read articles about web development, design trends, app building, and digital tools. Learn from real examples, ideas, and updates that matter to your online presence.",
    keywords:[ 
        "Web Development Blog",
        "Tech News",
        "Digital Tips",
        "Design Articles",
        "App Development",
        "Online Business Growth",
        "Website Strategy",
        "Frontend and Backend Ideas" 
    ]
  
} 

const Blogslayout = () => {
    const blogs = getBlogs();
    return (
        <main>
            <section className="w-full flex items-center justify-center bg-[#FFFFFF] dark:bg-[#14213d]">
                <div className="w-11/12 p-6 rounded-xl h-[50lvh] max-md:min-h-[25lvh] my-6 relative overflow-hidden">
                    <div className="relative z-10 flex flex-col items-center justify-center h-full">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-7xl font-extrabold leading-tight tracking-tigh text-[#E5E5E5] text-center">
                            Explore our Blogs
                        </h1>
                        <Space />
                        <p className="text-sm sm:text-base md:text-base lg:text-lg xl:text-lg 2xl:text-lg font-normal leading-relaxed text-[#E5E5E5] text-center">
                            Explore fresh ideas, real stories, and helpful insights on everything from tech and design to business and beyond. We write in a way that’s clear, useful, and worth your time.
                        </p>
                    </div>
                </div>
            </section>
            


            <Blog data={blogs} />
        </main>
    )
}

export default Blogslayout;