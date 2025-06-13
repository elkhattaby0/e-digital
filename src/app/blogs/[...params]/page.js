import { identify } from "@/app/layout";
import Space from "@/component/Space";
import Image from "next/image";
import Link from "next/link";
import { getSingleBlog } from "@/app/lib/getSingleBlog";
import NotFound from "@/app/not-found";

export function generateMetadata({ params }) {
    const [id, title] = params.params;
    const article = getSingleBlog(id, decodeURIComponent(title));

    if (!article) {
        return {
            title: "Article Not Found - TWA",
            description: "This article does not exist.",
        };
    }

    return {
        title: `TWA - ${article.article.title}`,
        description: article.seo?.description || "",
        keywords: article.seo?.keywords || "",
        openGraph: {
            title: article.article.title,
            description: article.seo?.description,
            siteName: identify,
            url: `https://your-site.com/articles/${id}/${encodeURIComponent(title)}`,
            images: [
                {
                    url: article.general?.image,
                    width: 1200,
                    height: 630,
                    alt: article.article.title,
                },
            ],
            type: "article"
        },
        
    };
}

export default function BlogPost({ params }) {
    const [id, title] = params.params;
    const article = getSingleBlog(id, decodeURIComponent(title));

    if (!article) return <NotFound />;

    return (
        <section className={Style.container}>
            <div className={Style.section}>
                <div className="w-full mt-8 max-w-3xl">
                    {/* Blog Title */}
                    <h1 className="text-4xl md:text-4xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">
                        {article.article.title}
                    </h1>

                    {/* Author & Date */}
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                        By <Link href="/" className="font-medium text-primary-600 hover:underline">
                            {article.article.author}
                        </Link> on {article.article.date}
                    </p>

                    <Space />

                    {/* Main Image */}
                    <Image 
                        src={article.article.image || article.image}
                        alt={article.article.title || identify} 
                        width={800}
                        height={400}
                        className="w-full rounded-xl object-cover border shadow-sm dark:border-gray-700 bg-gray-100 dark:bg-[#1F2A40]" 
                    />

                    {/* Main Content */}
                    <div className="mt-6 max-w-3xl space-y-6 text-lg leading-relaxed text-gray-800 dark:text-gray-300">

                        {article.article.content?.map((block, index) => {
                            switch (block.type) {
                                case "paragraph":
                                    const paragraphs = block.text.split(/\n{2,}/);
                                    return (
                                    <div key={index}>
                                        {paragraphs.map((p, i) => (
                                        <p key={i} className="mb-4">{p.trim()}</p>
                                        ))}
                                    </div>
                                    );


                                case "heading":
                                    return (
                                        <h2 
                                            key={index} 
                                            className="text-3xl font-semibold text-gray-900 dark:text-[#e5e5e5] mt-10"
                                        >
                                            {block.text}
                                        </h2>
                                    );

                                case "list":
                                    return (
                                        <ul key={index} className="list-disc list-inside ml-6">
                                            {block.items.map((item, i) => (
                                                <li key={i}>{item}</li>
                                            ))}
                                        </ul>
                                    );
                                case "table":
                                    return (
                                        <div key={index} className="overflow-x-auto">
                                            <table className="w-full border border-gray-300 dark:border-[#666666] text-left text-sm">
                                            <thead className="bg-gray-100 dark:bg-[#1F2A40]">
                                                <tr>
                                                {block.headers.map((header, i) => (
                                                    <th key={i} className="border px-4 py-2 dark:text-[#e5e5e5]">{header}</th>
                                                ))}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {block.rows.map((row, rowIndex) => (
                                                <tr key={rowIndex} className="border-t dark:border-gray-700">
                                                    {row.map((cell, cellIndex) => (
                                                    <td key={cellIndex} className="border px-4 py-2 dark:text-gray-300">{cell}</td>
                                                    ))}
                                                </tr>
                                                ))}
                                            </tbody>
                                            </table>
                                        </div>
                                        );
                                case "faq":
                                    return (
                                        <div key={index} className="mt-10">
                                        <h3 className="text-2xl font-semibold text-center text-gray-900 dark:text-[#e5e5e5] mb-4">FAQs</h3>
                                        <div className="space-y-4">
                                            {block.items.map((faq, i) => (
                                            <details key={i} className="group border border-gray-300 dark:border-[#666666] rounded-lg outline-none p-4 bg-[#1F2A40]">
                                                <summary className="font-medium cursor-pointer text-gray-800 dark:text-[#e5e5e5] outline-none">
                                                {faq.question}
                                                </summary>
                                                <p className="mt-2 text-gray-700 dark:text-gray-400">{faq.answer}</p>
                                            </details>
                                            ))}
                                        </div>
                                        </div>
                                    );
                                default:
                                    return null;
                            }
                        })}

                    </div>
                </div>
            </div>
        </section>
    );
}

const Style = {
    container: "w-full flex items-center justify-center pt-10 pb-20 bg-[#FFFFFF] dark:bg-[#14213D]",
    section: "w-11/12 flex flex-col items-center justify-center",
};
