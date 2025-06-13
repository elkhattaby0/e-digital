import Space from "@/component/Space";
import Blog from "./Blogs"
import { getBlogs } from "../lib/getBlogs";
import img from "../../../public/assets/trusted_web_agency.png"

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
    ],
    openGraph: {
        title: "Trusted Web Agency - Blog Articles, News, and Ideas for Digital Growth",
        description: "Read articles about web development, design trends, app building, and digital tools. Learn from real examples, ideas, and updates that matter to your online presence.",
        url: "https://trustedwebagency.com/blogs",
        siteName: "Trusted Web Agency",
        images: [
            {
            url: img.src,
            width: 1200,
            height: 630,
            alt: "Trusted Web Agency",
            }
        ],
        type: "article",
        }
  
} 

const Blogslayout = () => {
    const blogs = getBlogs();
    return (
        <main>
            <Blog data={blogs} />
        </main>
    )
}

export default Blogslayout;