"use client"

import { useState } from "react"
import { ArrowRight, Mail, MapPin, Loader2 } from "lucide-react"
import { BsWhatsapp } from "react-icons/bs"
import { FaFacebookF, FaInstagram } from "react-icons/fa"
import ReCAPTCHA from "react-google-recaptcha"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  })

  const [isCaptchaValid, setIsCaptchaValid] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const contactInfo = [
    {
      name: "Location",
      value: "Based In Agadir",
      subValue: "86000 Agadir, Morocco",
      href: "https://maps.google.com/?q=Agadir,Morocco",
      icon: <MapPin size={24} className="text-[#FCA311]" />,
    },
    {
      name: "WhatsApp",
      value: "+212 709 872 603",
      subValue: "Available 24/7",
      href: "https://wa.me/212709872603",
      icon: <BsWhatsapp size={24} className="text-[#FCA311]" />,
    },
    {
      name: "Email",
      value: "trustedwebagencyofficial@gmail.com",
      subValue: "Get in touch",
      href: "mailto:trustedwebagencyofficial@gmail.com",
      icon: <Mail size={24} className="text-[#FCA311]" />,
    },
  ]

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61576069447823",
      icon: <FaFacebookF size={20} />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/trustedwebagency/",
      icon: <FaInstagram size={20} />,
    },
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error when user starts typing
    if (error) setError("")
  }

  const handleCaptcha = (value) => {
    setIsCaptchaValid(!!value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!isCaptchaValid) {
      setError("Please complete the CAPTCHA verification")
      return
    }

    setIsLoading(true)
    setError("")

    try {
      const response = await fetch("https://formspree.io/f/xyzwkjoa", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setIsSubmitted(true)
        setFormData({ name: "", subject: "", email: "", message: "" })
        // Reset form after 5 seconds
        setTimeout(() => setIsSubmitted(false), 5000)
      } else {
        throw new Error("Failed to send message")
      }
    } catch (err) {
      setError("Failed to send message. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="w-full bg-[#14213D] py-20 lg:py-32">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#FCA311] font-medium text-lg mb-4">Based In Agadir</p>
          <h1 className="text-4xl lg:text-6xl font-bold text-[#E5E5E5] mb-6">
            Let&apos;s Work <span className="text-[#FCA311]">Together</span>
          </h1>
          <p className="text-[#E5E5E5] text-lg lg:text-xl max-w-2xl mx-auto opacity-90">
            Ready to start your next project? Contact us today for a free consultation and let&apos;s bring your digital
            vision to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-[#E5E5E5] mb-8">
                Get In <span className="text-[#FCA311]">Touch</span>
              </h2>

              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#1a2847] hover:bg-[#1f2d52] transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-[#14213D] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-[#E5E5E5] font-semibold text-lg mb-1">{item.name}</h3>
                      <p className="text-[#FCA311] font-medium mb-1">{item.value}</p>
                      <p className="text-[#E5E5E5] opacity-70 text-sm">{item.subValue}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-xl font-semibold text-[#E5E5E5] mb-4">
                Follow <span className="text-[#FCA311]">Us</span>
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#1a2847] hover:bg-[#FCA311] rounded-lg flex items-center justify-center text-[#E5E5E5] hover:text-[#14213D] transition-all duration-300 hover:scale-110"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#1a2847] rounded-2xl p-8 lg:p-10">
            <h2 className="text-2xl lg:text-3xl font-bold text-[#E5E5E5] mb-2">
              Send Us a <span className="text-[#FCA311]">Message</span>
            </h2>
            <p className="text-[#E5E5E5] opacity-70 mb-8">
              Fill out the form below and we&apos;ll get back to you within 24 hours.
            </p>

            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-[#FCA311] rounded-full flex items-center justify-center mx-auto mb-4">
                  <ArrowRight size={24} className="text-[#14213D]" />
                </div>
                <h3 className="text-xl font-semibold text-[#E5E5E5] mb-2">Message Sent Successfully!</h3>
                <p className="text-[#E5E5E5] opacity-70">Thank you for reaching out. We&apos;ll get back to you soon.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                    <p className="text-red-400 text-sm">{error}</p>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-[#E5E5E5] font-medium mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your full name"
                      className="w-full px-4 py-3 bg-[#14213D] border border-[#2a3a5c] rounded-lg text-[#E5E5E5] placeholder-[#E5E5E5]/50 focus:border-[#FCA311] focus:outline-none transition-colors duration-300"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-[#E5E5E5] font-medium mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="w-full px-4 py-3 bg-[#14213D] border border-[#2a3a5c] rounded-lg text-[#E5E5E5] placeholder-[#E5E5E5]/50 focus:border-[#FCA311] focus:outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-[#E5E5E5] font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 bg-[#14213D] border border-[#2a3a5c] rounded-lg text-[#E5E5E5] placeholder-[#E5E5E5]/50 focus:border-[#FCA311] focus:outline-none transition-colors duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-[#E5E5E5] font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 bg-[#14213D] border border-[#2a3a5c] rounded-lg text-[#E5E5E5] placeholder-[#E5E5E5]/50 focus:border-[#FCA311] focus:outline-none transition-colors duration-300 resize-vertical"
                  />
                </div>

                <div className="flex justify-center">
                  <ReCAPTCHA sitekey="6LeLnSgrAAAAAG5o-pobI4__kpSAw3LSlCZkE2H2" onChange={handleCaptcha} theme="dark" />
                </div>

                <button
                  type="submit"
                  disabled={!isCaptchaValid || isLoading}
                  className="w-full bg-[#FCA311] hover:bg-[#e8920f] disabled:bg-[#FCA311]/50 text-[#14213D] font-semibold py-4 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
