"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  DollarSign,
  Users,
  Zap,
  CheckCircle,
  Lightbulb,
  Package,
  Rocket,
  TrendingUp,
  Star,
  Mail,
  Instagram,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function QuietBrandsLanding() {
  const scrollToBooking = () => {
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })
  }

  const testimonials = [
    {
      name: "Sarah Chen",
      handle: "@sarahlifestyle • 850K followers",
      quote:
        "I went from making $3K/month on sponsorships to $25K/month with my own product line. QuietBrands handled everything while I kept creating. Game changer.",
      avatar: "/sarah.JPG?height=60&width=60",
    },
    {
      name: "Luca Martinez",
      handle: "@fitwithluca • 1.2M followers",
      quote:
        "Launching with QuietBrands was hands-off and seamless. They sourced the product, branded it, built the store—now I’ve got real passive income.",
      avatar: "/luca.JPG?height=60&width=60",
    },
    {
      name: "Maya Bloom",
      handle: "@bloomskin • 430K followers",
      quote:
        "I was hesitant at first, but they nailed everything. My skincare line launched in 5 weeks and it’s already outperforming my affiliate deals.",
      avatar: "/maya.JPG?height=60&width=60",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // FAQ data + accordion state
  const faqs = [
    {
      q: "How much does it cost to get started?",
      a: "Start from $2,995 setup + $500/mo for a fast launch with made-to-order products. If you want stock in a warehouse for higher margins, it starts from $5,500 setup + $1,000/mo. A $500 deposit holds your spot and goes toward setup.",
    },
    {
      q: "How long until my first product is live?",
      a: "For made-to-order/dropship, your first product goes live in 5–7 business days after intake and approvals. If you want stock with a 3PL, expect 14–21 days depending on receiving and labels.",
    },
    {
      q: "What exactly is a “quiet brand”?",
      a: "A quiet brand is your product line run under its own brand identity. You choose whether or not to publicly attach your name. We handle the backend (manufacturing, fulfillment, support) so you can stay behind the scenes and keep creating.",
    },
    {
      q: "Do I have to show my face or put my name on the label?",
      a: "No. You can keep it anonymous. Your audience sees a premium brand that fits your content—without you becoming the public face (unless you want to).",
    },
    {
      q: "Who owns the brand, IP, and customer data?",
      a: "You do. Trademarks, domains, creative, and the customer list are yours. We operate the backend under a services agreement; you keep the equity and the data.",
    },
    {
      q: "How do you handle quality, compliance, and support?",
      a: "We pre-vet suppliers, order samples before launch, and monitor a <2% defect/return target; for consumables we use certified manufacturers (GMP/COAs), lock compliant labels/claims, and pre-approve payment gateways and ship-to countries. Our team runs support with a 12h first-reply and 72h resolution target, processes returns per your policy, and files chargeback evidence within 48h—looping you in only when needed.",
    },
    {
      q: "What size audience do I need?",
      a: "Best results come with 50k+ followers or a smaller but highly engaged niche. We’re niche-agnostic, but our fastest wins are in fitness, wellness, beauty, home décor, and supplements via vetted partners. We start with a small, low-risk drop to validate demand before scaling.",
    },
  ]

  const [open, setOpen] = useState<Set<number>>(new Set())
  const toggle = (i: number) => {
    setOpen(prev => {
      const next = new Set(prev)
      next.has(i) ? next.delete(i) : next.add(i) // allow multiple open
      return next
    })
  }


  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
        <header className="sticky top-0 z-50 bg-white shadow-sm">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            {/* Logo / Brand Name */}
            <a href="#hero">
              <Image
                src="/quietbrands-logo.png"
                alt="QuietBrands Logo"
                width={160}
                height={40}
              />
            </a>

            <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
              <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How it Works</a>
              <a href="#testimonials" className="hover:text-gray-900 transition-colors">Testimonials</a>
              <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
            </nav>

            <button
              onClick={() => document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" })}
              className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-blue-700 transition"
            >
              Book a Call
            </button>
          </div>
        </header>
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
        <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 px-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="text-sm font-medium">
                  For Content Creators with 50K+ Followers
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                  You’ve been selling for other brands.
                  <span className="text-blue-600"> Time to sell your own.</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  Stop depending on brand deals. We build fully-managed, anonymous product lines
                  for creators so you can earn like a founder without being the face of it.
                </p>
              </div>
              <Button
                onClick={scrollToBooking}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
              >
                Book Free Strategy Call
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  15-minute call
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  No commitment
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                  Custom strategy
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/main_img_spplts.png?height=600&width=500"
                alt="Content creator success"
                width={500}
                height={600}
                sizes="(max-width: 1024px) 100vw, 500px"
                className="w-full h-auto rounded-2xl shadow-2xl"
                priority={false}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Pain → Solution Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Burned Out from Sponsorships?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              You're not alone. Most creators are stuck chasing low-paying deals just to stay afloat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Problems */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-red-600 mb-6">The Harsh Reality of Sponsorships</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <DollarSign className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Unstable, inconsistent cashflow</h4>
                    <p className="text-gray-600">Brands pay cents for your reach. No deal? No income.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">No creative ownership</h4>
                    <p className="text-gray-600">You're selling someone else’s product, not building your own legacy.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Zap className="h-4 w-4 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Always chasing the next brand deal</h4>
                    <p className="text-gray-600">Every month starts at zero. No compounding growth. No real asset.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-green-600 mb-6">The QuietBrands Alternative</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Recurring revenue, 24/7</h4>
                    <p className="text-gray-600">Sell your own branded products every day, even while you sleep.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Package className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">You stay the creator, we do the rest</h4>
                    <p className="text-gray-600">
                      We handle sourcing, fulfillment, and customer service under your brand. You keep control and focus on content.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Rocket className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Build something real</h4>
                    <p className="text-gray-600">
                      Grow an actual business with equity, long-term value, and income that scales with your audience—not one-off deals.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 md:py-24 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">From Idea to Ownership in 4 Clear Steps</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We handle everything—from market fit to fulfillment — so you can focus on content and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <div className="w-8 h-1 bg-blue-600 mx-auto"></div>
              <h3 className="text-xl font-bold text-gray-900">Research & Positioning</h3>
              <p className="text-gray-600">We analyze your audience and pick high-converting product categories.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Package className="h-8 w-8 text-blue-600" />
              </div>
              <div className="w-8 h-1 bg-blue-600 mx-auto"></div>
              <h3 className="text-xl font-bold text-gray-900">Brand & Build</h3>
              <p className="text-gray-600">We create your product, branding, store, and content assets.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <Rocket className="h-8 w-8 text-blue-600" />
              </div>
              <div className="w-8 h-1 bg-blue-600 mx-auto"></div>
              <h3 className="text-xl font-bold text-gray-900">Launch & Fulfill</h3>
              <p className="text-gray-600">
                We find manufacturers, help with storage, fulfillment, and support while you go live.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                <TrendingUp className="h-8 w-8 text-blue-600" />
              </div>
              <div className="w-8 h-1 bg-blue-600 mx-auto"></div>
              <h3 className="text-xl font-bold text-gray-900">Optimize & Scale</h3>
              <p className="text-gray-600">
                We help scale your brand with data-driven upsells and logistics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="testimonials" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">Trusted by Top Creators</h2>

            {/* Testimonial */}
            <Card className="max-w-4xl mx-auto mb-12">
              <CardContent className="p-8">
                <div className="flex items-center justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl md:text-2xl text-gray-700 italic mb-6">
                  “{testimonials[activeIndex].quote}”
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={testimonials[activeIndex].avatar}
                    alt={testimonials[activeIndex].name}
                    width={60}
                    height={60}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-900">{testimonials[activeIndex].name}</div>
                    <div className="text-gray-600">{testimonials[activeIndex].handle}</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-center gap-4 mb-12">
              <button onClick={handlePrev} className="p-2 bg-white rounded-full shadow">
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button onClick={handleNext} className="p-2 bg-white rounded-full shadow">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Platforms / Tools */}
              <div className="space-y-4">
                <p className="text-gray-600 font-medium text-center">Runs on trusted commerce infrastructure</p>

                <div className="relative overflow-hidden">
                  {/* The moving track */}
                  <div className="flex items-center gap-12 animate-marquee will-change-transform">
                    {/* Row 1 */}
                    {[
                      { src: "/logos/shopify.svg", alt: "Shopify" },
                      { src: "/logos/stripe.svg", alt: "Stripe" },
                      { src: "/logos/Meta_Platforms.svg", alt: "Meta" },
                      { src: "/logos/TikTok_logo.svg", alt: "TikTok Shop" },
                      { src: "/logos/Klaviyo_primary_logo.svg", alt: "Klaviyo" },
                      { src: "/logos/paypal-logo.svg", alt: "PayPal" },
                      { src: "/logos/shipbob.svg", alt: "ShipBob" },
                    ].map((logo, i) => (
                      <Image
                        key={`row1-${i}`}
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={40}
                        className="logo mx-auto"
                      />
                    ))}

                    {/* Row 2 (duplicate for seamless loop) */}
                    {[
                      { src: "/logos/shopify.svg", alt: "Shopify" },
                      { src: "/logos/stripe.svg", alt: "Stripe" },
                      { src: "/logos/Meta_Platforms.svg", alt: "Meta" },
                      { src: "/logos/TikTok_logo.svg", alt: "TikTok Shop" },
                      { src: "/logos/Klaviyo_primary_logo.svg", alt: "Klaviyo" },
                      { src: "/logos/paypal-logo.svg", alt: "PayPal" },
                      { src: "/logos/shipbob.svg", alt: "ShipBob" },
                    ].map((logo, i) => (
                      <Image
                        key={`row2-${i}`}
                        src={logo.src}
                        alt={logo.alt}
                        width={120}
                        height={40}
                        className="logo mx-auto"
                      />
                    ))}
                  </div>
                </div>

                {/* Local styles for marquee + hover effects */}
                <style jsx>{`
                  @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                  .animate-marquee {
                    animation: marquee 30s linear infinite;
                  }
                  .logo {
                    filter: grayscale(1) opacity(0.6);
                    transition: filter 200ms ease;
                  }
                  .logo:hover {
                    filter: grayscale(0) opacity(1);
                  }
                `}</style>
              </div>

          </div>
        </div>
      </section>

      {/* Calendly Booking Section */}
      <section id="booking" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Have Your Own Quiet Brand?</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Book a free 15-minute call. We'll analyze your audience and show you exactly how to turn them
              into customers.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="p-0 overflow-hidden">
              <CardContent className="p-0">
                <div className="relative w-full" style={{ height: 780 }}>
                  <iframe
                    src="https://calendly.com/quietbrands/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=2563eb"
                    title="QuietBrands — Book a 30‑minute call"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    loading="lazy"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 md:py-24 bg-gray-50 scroll-mt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Short answers now. Deeper details on your discovery call.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqs.map((item, i) => {
              const isOpen = open.has(i)
              return (
                <Card key={i} className="overflow-hidden">
                  {/* Header row */}
                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between text-left px-6 min-h-[64px]"
                  >
                    <span className="text-base md:text-lg font-semibold text-gray-900">
                      {item.q}
                    </span>
                    <ChevronRight
                      className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                        isOpen ? "rotate-90" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  {/* Collapsible body (no padding when closed, padding only when open) */}
                  <CardContent
                    className={`pt-0 px-0 border-t border-gray-100/80 ${
                      isOpen ? "px-6 pb-6" : "px-6 pb-0"
                    }`}
                  >
                    <div
                      className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
                        isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden text-gray-600 leading-relaxed">
                        {item.a}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>



      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <a href="#hero">
                <Image
                  src="/quietbrands-logo-wh.png"
                  alt="QuietBrands Logo"
                  width={160} // adjust as needed
                  height={40}
                />
              </a>
              <p className="text-gray-400 py-2 mb-4">
                Launch fast. Stay lean. Own everything.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>contact@quietbrands.xyz</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4">
                <Link href="https://www.instagram.com/quietbrands"  target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="https://www.linkedin.com/company/quitebrands" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} quietbrands. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
