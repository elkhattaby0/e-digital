import { identify } from "@/app/layout"
import Image from "next/image"
import Link from "next/link"
import { getSingleBlog } from "@/app/lib/getSingleBlog"
import NotFound from "@/app/not-found"


function renderHTMLContent(text) {
  if (!text) return null;

  const parts = text.split(/(<[^>]+>)/g);
  const result = [];

  for (let i = 0; i < parts.length; i++) {
    const part = parts[i];

    if (part.startsWith("<") && part.endsWith(">")) {
      const tagMatch = part.match(/<(\/?)(\w+)([^>]*)>/);
      if (!tagMatch) {
        result.push(part);
        continue;
      }

      const [, isClosing, tagName, attributes] = tagMatch;
      const lowerTag = tagName.toLowerCase();

      if (isClosing) continue;

      const getContentUntilClosing = (closingTag) => {
        let content = "";
        let j = i + 1;

        while (j < parts.length && parts[j] !== `</${closingTag}>`) {
          content += parts[j];
          j++;
        }

        i = j; // Skip to after the closing tag
        return content;
      };

      switch (lowerTag) {
        case "a":
          const hrefMatch = attributes.match(/href=["']([^"']+)["']/);
          const href = hrefMatch ? hrefMatch[1] : "#";
          const linkContent = getContentUntilClosing("a");

          result.push(
            <Link
              key={i}
              href={href}
              className="text-[#FCA311] underline transition-colors font-medium"
            >
              {linkContent}
            </Link>
          );
          break;

        case "b":
        case "strong":
          result.push(
            <strong key={i} className="font-bold text-[#E5E5E5]">
              {getContentUntilClosing(lowerTag)}
            </strong>
          );
          break;

        case "i":
        case "em":
          result.push(
            <em key={i} className="italic text-[#E5E5E5]/90">
              {getContentUntilClosing(lowerTag)}
            </em>
          );
          break;

        case "u":
          result.push(
            <u key={i} className="underline text-[#E5E5E5]">
              {getContentUntilClosing(lowerTag)}
            </u>
          );
          break;

        case "mark":
          result.push(
            <mark key={i} className="bg-[#FCA311]/30 text-[#E5E5E5] px-1 rounded">
              {getContentUntilClosing(lowerTag)}
            </mark>
          );
          break;

        case "code":
          result.push(
            <code key={i} className="bg-[#14213D]/80 text-[#FCA311] px-2 py-1 rounded font-mono text-sm">
              {getContentUntilClosing(lowerTag)}
            </code>
          );
          break;

        case "br":
          result.push(<br key={i} />);
          break;

        default:
          result.push(part);
      }
    } else {
      // Plain text
      result.push(part);
    }
  }

  return result;
}

function calculateReadingTime(content) {
  if (!content) return 0
  const wordsPerMinute = 200
  const textContent = content.reduce((acc, block) => {
    switch (block.type) {
      case "paragraph":
      case "heading":
      case "heading3":
        return acc + block.text
      case "list":
        return acc + block.items.join(" ")
      case "table":
        return acc + block.rows.flat().join(" ")
      case "faq":
        return acc + block.items.map((faq) => faq.question + " " + faq.answer).join(" ")
      default:
        return acc
    }
  }, "")
  const wordCount = textContent.split(/\s+/).length
  return Math.ceil(wordCount / wordsPerMinute)
}

// Helper function to generate table of contents
function generateTableOfContents(content) {
  if (!content) return []
  return content
    .filter((block) => block.type === "heading" || block.type === "heading3")
    .map((block, index) => ({
      id: `heading-${index}`,
      text: block.text,
      level: block.type === "heading" ? 2 : 3,
    }))
}

export async function generateMetadata({ params }) {
  const [id, title] = params.params
  const article = getSingleBlog(id, decodeURIComponent(title))

  if (!article) {
    return {
      title: "Article Not Found - TWA",
      description: "This article does not exist.",
    }
  }

  const readingTime = calculateReadingTime(article.article.content)

  return {
    title: `${article.article.title} - TWA`,
    description: article.seo?.description || article.article.excerpt || "",
    keywords: article.seo?.keywords || "",
    authors: [{ name: article.article.author }],
    creator: article.article.author,
    publisher: identify,
    category: article.article.category || "Technology",
    openGraph: {
      title: article.article.title,
      description: article.seo?.description || article.article.excerpt,
      siteName: identify,
      url: `https://your-site.com/articles/${id}/${encodeURIComponent(title)}`,
      images: [
        {
          url: article.general?.image || article.article.image,
          width: 1200,
          height: 630,
          alt: article.article.title,
        },
      ],
      type: "article",
      publishedTime: article.article.publishedDate,
      modifiedTime: article.article.modifiedDate,
      authors: [article.article.author],
      section: article.article.category,
      tags: article.article.tags || [],
    },
    twitter: {
      card: "summary_large_image",
      title: article.article.title,
      description: article.seo?.description || article.article.excerpt,
      images: [article.general?.image || article.article.image],
      creator: article.article.twitterHandle || "@twa",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: `https://your-site.com/articles/${id}/${encodeURIComponent(title)}`,
    },
  }
}

export default function BlogPost({ params }) {
  const [id, title] = params.params
  const article = getSingleBlog(id, decodeURIComponent(title))

  if (!article) return <NotFound />

  const readingTime = calculateReadingTime(article.article.content)
  const tableOfContents = generateTableOfContents(article.article.content)

  // JSON-LD structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.article.title,
    description: article.seo?.description || article.article.excerpt,
    image: article.general?.image || article.article.image,
    author: {
      "@type": "Person",
      name: article.article.author,
    },
    publisher: {
      "@type": "Organization",
      name: identify,
    },
    datePublished: article.article.publishedDate,
    dateModified: article.article.modifiedDate || article.article.publishedDate,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://your-site.com/articles/${id}/${encodeURIComponent(title)}`,
    },
  }

  return (
    <>
      {/* JSON-LD structured data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 dark:bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300 ease-out"
          style={{ width: "0%" }}
        ></div>
      </div>

      {/* Hero Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900/20 -z-10"></div>

      <article className={Style.container}>
        <div className={Style.section}>
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="w-full max-w-6xl mb-8">
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-200/50 dark:border-gray-700/50">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link
                    href="/"
                    className="text-gray-600 dark:text-[#CCCCCC] hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    🏠 Home
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-3 text-gray-400">→</span>
                  <Link
                    href="/blog"
                    className="text-gray-600 dark:text-[#CCCCCC] hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
                  >
                    📝 Blog
                  </Link>
                </li>
                <li className="flex items-center">
                  <span className="mx-3 text-gray-400">→</span>
                  <span className="hidden max-md:flex text-gray-900 dark:text-white font-semibold truncate max-w-xs">
                    {article.article.title.slice(0,15)}...
                  </span>
                  <span className="max-md:hidden text-gray-900 dark:text-white font-semibold truncate max-w-xs">
                    {article.article.title}
                  </span>

                </li>
              </ol>
            </div>
          </nav>

          <div className="w-full max-w-6xl">
            {/* Article Header */}
            <header className="mb-12 text-center">
              {/* Category Badge */}
              {article.article.category && (
                <div className="mb-6">
                  <span className="inline-flex items-center px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    ✨ {article.article.category}
                  </span>
                </div>
              )}

              {/* Blog Title */}
              <h1 className="text-5xl md:text-7xl font-black text-[#E5E5E5] transparent bg-clip-text bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 mb-8 leading-tight tracking-tight">
                {article.article.title}
              </h1>

              {/* Article Excerpt */}
              {article.article.excerpt && (
                <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto font-light">
                  {article.article.excerpt}
                </p>
              )}

              {/* Author & Meta Info */}
              <div className="flex flex-wrap items-center justify-center gap-6 text-sm mb-8">
                <div className="flex items-center gap-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-200/50 dark:border-gray-700/50">
                  <div className="w-10 h-10 bg-[#FCA311]  rounded-full flex items-center justify-center text-white font-bold text-lg">
                    {article.article.author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="text-gray-600 dark:text-[#CCCCCC]">By</span>
                      <Link
                        href={`/author/${article.article.authorSlug || ""}`}
                        className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        {article.article.author}
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-sm border border-gray-200/50 dark:border-gray-700/50">
                  <div className="flex items-center gap-2 text-gray-600 dark:text-[#CCCCCC]">
                    <span>📅</span>
                    <time dateTime={article.article.publishedDate}>{article.article.date}</time>
                  </div>
                  <span className="text-gray-300 dark:text-gray-600">•</span>
                  <div className="flex items-center gap-2 text-gray-600 dark:text-[#CCCCCC]">
                    <span>⏱️</span>
                    <span>{readingTime} min read</span>
                  </div>
                </div>

                {article.article.tags && (
                  <div className="flex flex-wrap gap-2">
                    {article.article.tags.slice(0, 3).map((tag, index) => (
                      <Link
                        key={index}
                        href={`/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                        className="px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900/40 transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Social Share Buttons */}
              {/* <div className="flex items-center justify-center gap-4 mb-12">
                <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">Share this article:</span>
                <div className="flex gap-3">
                  {[
                    { name: "Twitter", icon: "🐦", color: "hover:bg-blue-500" },
                    { name: "Facebook", icon: "📘", color: "hover:bg-blue-600" },
                    { name: "LinkedIn", icon: "💼", color: "hover:bg-blue-700" },
                    { name: "Copy Link", icon: "🔗", color: "hover:bg-gray-600" },
                  ].map((social) => (
                    <button
                      key={social.name}
                      className={`w-12 h-12 rounded-full bg-white dark:bg-gray-800 shadow-lg border border-gray-200 dark:border-gray-700 flex items-center justify-center text-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${social.color} hover:text-white group`}
                      aria-label={`Share on ${social.name}`}
                    >
                      <span className="group-hover:scale-110 transition-transform">{social.icon}</span>
                    </button>
                  ))}
                </div>
              </div> */}
            </header>

            {/* Main Image */}
            <figure className="mb-16 relative group">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10"></div>
                <Image
                  src={article.article.image || article.image}
                  alt={article.article.title || identify}
                  width={1200}
                  height={600}
                  className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                  priority
                />
              </div>
              {article.article.imageCaption && (
                <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4 italic">
                  {article.article.imageCaption}
                </figcaption>
              )}
            </figure>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
              {/* Table of Contents - Sidebar */}
              {tableOfContents.length > 0 && (
                <aside className="lg:col-span-1 order-2 lg:order-1">
                  <div className="sticky top-8">
                    <nav className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                      <h2 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                        <span className="text-lg">📋</span>
                        Table of Contents
                      </h2>
                      <ul className="space-y-3 text-sm">
                        {tableOfContents.map((item, index) => (
                          <li key={index} className={item.level === 3 ? "ml-4" : ""}>
                            <a
                              href={`#${item.id}`}
                              className="block text-gray-600 dark:text-[#CCCCCC] hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2 px-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 font-medium"
                            >
                              {item.text}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </aside>
              )}

              {/* Main Content */}
              <main className={`${tableOfContents.length > 0 ? "lg:col-span-4" : "lg:col-span-5"} order-1 lg:order-2`}>
                <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                  <div className="prose prose-lg dark:prose-invert max-w-none">
                    {article.article.content?.map((block, index) => {
                      const headingId =
                        block.type === "heading" || block.type === "heading3"
                          ? `heading-${tableOfContents.findIndex((item) => item.text === block.text)}`
                          : undefined

                      switch (block.type) {
                        case "paragraph":
                          const paragraphs = block.text.split(/\n{2,}/)
                          return (
                            <div key={index} className="mb-8">
                              {paragraphs.map((p, i) => (
                                <p
                                  key={i}
                                  className="mb-6 text-gray-800 dark:text-gray-200 leading-relaxed text-lg font-light"
                                >
                                  {renderHTMLContent(p.trim())}
                                </p>
                              ))}
                            </div>
                          )

                        case "heading":
                          return (
                            <h2
                              key={index}
                              id={headingId}
                              className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 mt-16 mb-8 scroll-mt-8 relative"
                            >
                              <span className="absolute -left-4 top-0 text-blue-500 opacity-30 text-5xl font-black">
                                &quot;
                              </span>
                              {renderHTMLContent(block.text)}
                            </h2>
                          )

                        case "heading3":
                          return (
                            <h3
                              key={index}
                              id={headingId}
                              className="text-2xl font-bold text-gray-900 dark:text-white mt-12 mb-6 scroll-mt-8 flex items-center gap-3"
                            >
                              <span className="w-2 h-8 bg-[#FCA311] rounded-full"></span>
                              {block.text}
                            </h3>
                          )

                        case "list":
                          return (
                            <div key={index} className="mb-8">
                              <ul className="space-y-4">
                                {block.items.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-4 text-gray-800 dark:text-gray-200 text-lg"
                                  >
                                    <span className="flex-shrink-0 w-6 h-6 bg-[#FCA311] rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                                      -
                                    </span>
                                    <span className="leading-relaxed">{renderHTMLContent(item)}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )

                        case "orderedList":
                          return (
                            <div key={index} className="mb-8">
                              <ol className="space-y-4">
                                {block.items.map((item, i) => (
                                  <li
                                    key={i}
                                    className="flex items-start gap-4 text-gray-800 dark:text-gray-200 text-lg"
                                  >
                                    <span className="flex-shrink-0 w-8 h-8 bg-[#FCA311] rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">
                                      {i + 1}
                                    </span>
                                    <span className="leading-relaxed">{item}</span>
                                  </li>
                                ))}
                              </ol>
                            </div>
                          )

                        case "blockquote":
                          return (
                            <div key={index} className="my-12 relative">
                              <div className="absolute -left-4 -top-4 text-6xl text-blue-500/20 font-serif">&quot;</div>
                              <blockquote className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-l-4 border-gradient-to-b from-blue-500 to-purple-600 pl-8 pr-6 py-8 rounded-r-2xl shadow-lg">
                                <p className="text-xl italic text-gray-700 dark:text-gray-300 mb-4 leading-relaxed font-light">
                                  {block.text}
                                </p>
                                {block.author && (
                                  <cite className="text-sm text-gray-600 dark:text-gray-400 font-semibold">
                                    — {block.author}
                                  </cite>
                                )}
                              </blockquote>
                            </div>
                          )

                        case "code":
                          return (
                            <div key={index} className="my-12">
                              <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
                                <div className="flex items-center justify-between px-6 py-4 bg-gray-800 border-b border-gray-700">
                                  <div className="flex items-center gap-2">
                                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                                  </div>
                                  <span className="text-gray-400 text-sm font-mono">{block.language || "code"}</span>
                                </div>
                                <pre className="p-6 overflow-x-auto">
                                  <code className={`language-${block.language || "text"} text-gray-100`}>
                                    {block.text}
                                  </code>
                                </pre>
                              </div>
                            </div>
                          )

                        case "image":
                          return (
                            <figure key={index} className="my-12">
                              <div className="relative overflow-hidden rounded-2xl shadow-xl group">
                                <Image
                                  src={block.src || "/placeholder.svg"}
                                  alt={block.alt || ""}
                                  width={800}
                                  height={400}
                                  className="w-full transition-transform duration-500 group-hover:scale-105"
                                />
                              </div>
                              {block.caption && (
                                <figcaption className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4 italic">
                                  {block.caption}
                                </figcaption>
                              )}
                            </figure>
                          )

                        case "table":
                          return (
                            <div key={index} className="my-12">
                              <div className="overflow-hidden rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
                                <table className="w-full text-sm">
                                  <thead>
                                    <tr className="bg-[#FCA311] text-white">
                                      {block.headers.map((header, i) => (
                                        <th key={i} className="px-6 py-4 font-bold text-left">
                                          {header}
                                        </th>
                                      ))}
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {block.rows.map((row, rowIndex) => (
                                      <tr
                                        key={rowIndex}
                                        className={`${
                                          rowIndex % 2 === 0
                                            ? "bg-white dark:bg-gray-800"
                                            : "bg-gray-50 dark:bg-gray-700"
                                        } hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors`}
                                      >
                                        {row.map((cell, cellIndex) => (
                                          <td key={cellIndex} className="px-6 py-4 text-gray-800 dark:text-gray-200">
                                            {cell}
                                          </td>
                                        ))}
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          )

                        case "faq":
                          return (
                            <section key={index} className="my-16">
                              <div className="text-center mb-12">
                                <h3 className="text-4xl font-bold text-transparent bg-clip-text bg-[#FCA311] mb-4">
                                  Frequently Asked Questions
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400">Everything you need to know</p>
                              </div>
                              <div className="space-y-6">
                                {block.items.map((faq, i) => (
                                  <details
                                    key={i}
                                    className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-xl transition-all duration-300"
                                  >
                                    <summary className="flex justify-between items-center cursor-pointer p-8 font-semibold text-gray-900 dark:text-white hover:bg-[#FCA311] dark:hover:from-blue-900/20 dark:hover:to-purple-900/20 transition-all duration-300">
                                      <span className="text-lg">{faq.question}</span>
                                      <div className="flex-shrink-0 ml-4">
                                        <div className="w-8 h-8 bg-[#FCA311] rounded-full flex items-center justify-center text-white group-open:rotate-180 transition-transform duration-300">
                                          <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                          >
                                            <path
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              strokeWidth={2}
                                              d="M19 9l-7 7-7-7"
                                            />
                                          </svg>
                                        </div>
                                      </div>
                                    </summary>
                                    <div className="px-8 pb-8">
                                      <div className="pt-4 border-t border-gray-100 dark:border-gray-700">
                                        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                                          {faq.answer}
                                        </p>
                                      </div>
                                    </div>
                                  </details>
                                ))}
                              </div>
                            </section>
                          )

                        case "callout":
                          return (
                            <div
                              key={index}
                              className={`my-12 rounded-2xl shadow-lg overflow-hidden ${
                                block.type === "warning"
                                  ? "bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 border-l-4 border-yellow-400"
                                  : block.type === "error"
                                    ? "bg-gradient-to-r from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20 border-l-4 border-red-400"
                                    : "bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 border-l-4 border-blue-400"
                              }`}
                            >
                              <div className="p-8">
                                <div className="flex items-start gap-4">
                                  <div className="flex-shrink-0">
                                    <div
                                      className={`w-12 h-12 rounded-full flex items-center justify-center text-white text-xl ${
                                        block.type === "warning"
                                          ? "bg-yellow-500"
                                          : block.type === "error"
                                            ? "bg-red-500"
                                            : "bg-blue-500"
                                      }`}
                                    >
                                      {block.type === "warning" && "⚠️"}
                                      {block.type === "error" && "❌"}
                                      {block.type === "info" && "ℹ️"}
                                    </div>
                                  </div>
                                  <div className="flex-1">
                                    {block.title && (
                                      <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">
                                        {block.title}
                                      </h4>
                                    )}
                                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{block.text}</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )

                        default:
                          return null
                      }
                    })}
                  </div>
                </div>

                {/* Article Footer */}
                <footer className="mt-16">
                  {/* Tags */}
                  {article.article.tags && (
                    <div className="mb-12">
                      <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                        <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                          <span>🏷️</span>
                          Related Topics
                        </h4>
                        <div className="flex flex-wrap gap-3">
                          {article.article.tags.map((tag, index) => (
                            <Link
                              key={index}
                              href={`/tag/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                              className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium"
                            >
                              {tag}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Author Bio */}
                  {/* <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl p-8 shadow-xl border border-gray-200/50 dark:border-gray-700/50">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                          <span className="text-2xl font-bold text-white">{article.article.author.charAt(0)}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                          About {article.article.author}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg mb-4">
                          {article.article.authorBio ||
                            `${article.article.author} is a passionate writer and contributor to ${identify}, sharing insights and expertise with our community.`}
                        </p>
                        <div className="flex gap-3">
                          <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium">
                            Follow Author
                          </button>
                          <button className="px-6 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full border border-gray-300 dark:border-gray-600 hover:shadow-lg transition-all duration-300 transform hover:scale-105 font-medium">
                            View Profile
                          </button>
                        </div>
                      </div> */}
                    {/* </div> */}
                  {/* </div> */}

                  
                </footer>
              </main>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

const Style = {
  container: "relative w-full flex items-center justify-center pt-16 pb-24 min-h-screen",
  section: "w-11/12 max-w-7xl flex flex-col items-center justify-center relative z-10",
}
