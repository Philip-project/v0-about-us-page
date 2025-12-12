import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedTooltip } from "@/components/ui/animated-tooltip"
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials"
import FloatingDockDemo from "@/components/floating-dock-demo"
import ThreeDMarqueeDemo from "@/components/3d-marquee-demo"

export const metadata = {
  title: "About Us",
  description: "Learn about our company, team, and mission",
}

const teamMembers = [
  {
    id: 1,
    name: "Sarah Chen",
    designation: "CEO & Founder",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    designation: "CTO",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 3,
    name: "Emily Watson",
    designation: "Head of Design",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "James Kim",
    designation: "Engineering Lead",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    designation: "VP of Product",
    image:
      "https://images.unsplash.com/photo-1472099644761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "David Park",
    designation: "Marketing Director",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
]

const testimonials = [
  {
    quote:
      "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Sarah Chen",
    designation: "Product Manager at TechFlow",
    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote: "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
    name: "James Kim",
    designation: "Engineering Lead at DataPro",
    src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    quote:
      "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
    name: "Lisa Thompson",
    designation: "VP of Technology at FutureNet",
    src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <ThemeToggle />

      {/* Hero Section */}
      <section className="relative overflow-hidden border-b border-border px-6 py-24 sm:px-12 sm:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl font-bold tracking-tight sm:text-6xl text-balance bg-gradient-to-r from-purple-bright to-lime text-transparent bg-clip-text">
                About Our Company
              </h1>
              <p className="mt-6 text-xl text-muted-foreground">
                We're building the future of digital innovation by combining cutting-edge technology with human-centered
                design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="border-b border-border px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To empower businesses and individuals by creating innovative solutions that transform the way people
                work and create. We believe technology should be intuitive, accessible, and powerful.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Our Values</h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-lime font-bold">→</span>
                  <span>Innovation and creativity in everything we do</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime font-bold">→</span>
                  <span>Customer-first approach to problem solving</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime font-bold">→</span>
                  <span>Commitment to quality and excellence</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-lime font-bold">→</span>
                  <span>Collaborative and inclusive culture</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="border-b border-border px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-5xl space-y-12">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Meet Our Team</h2>
            <p className="text-xl text-muted-foreground">
              Talented individuals united by a passion for innovation and excellence
            </p>
          </div>
          <div className="flex justify-center py-8">
            <AnimatedTooltip items={teamMembers} />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="border-b border-border px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by innovative companies around the world</p>
          </div>
          <AnimatedTestimonials testimonials={testimonials} />
        </div>
      </section>

      {/* Floating Dock Section */}
      <section className="border-b border-border px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Quick Navigation</h2>
            <p className="text-xl text-muted-foreground">Access our key features and resources</p>
          </div>
          <FloatingDockDemo />
        </div>
      </section>

      {/* 3D Marquee Section */}
      <section className="border-b border-border px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold tracking-tight mb-4">Our Amazing Components</h2>
            <p className="text-xl text-muted-foreground">Showcase of our innovative design elements</p>
          </div>
          <ThreeDMarqueeDemo />
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 sm:px-12">
        <div className="mx-auto max-w-5xl text-center space-y-8">
          <h2 className="text-4xl font-bold tracking-tight">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us on our journey to transform the digital landscape. Let's build something extraordinary together.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button
              className="px-8 py-3 bg-lime text-white rounded-lg font-semibold hover:opacity-90 transition shadow-lg hover:shadow-xl"
              style={{ backgroundColor: "var(--lime)" }}
            >
              Get in Touch
            </button>
            <button
              className="px-8 py-3 border-2 rounded-lg font-semibold transition hover:bg-purple-dark/10"
              style={{ borderColor: "var(--purple-bright)", color: "var(--purple-bright)" }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-12 sm:px-12">
        <div className="mx-auto max-w-5xl text-center text-muted-foreground">
          <p>© 2025 Our Company. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
