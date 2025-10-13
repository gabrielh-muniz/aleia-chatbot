import {
  Bot,
  Menu,
  X,
  Sparkles,
  ArrowRight,
  Calendar,
  MessageSquare,
  Phone,
  FileText,
  Clock,
  BarChart3,
  CheckCircle2,
  Users,
} from "lucide-react";
import { NAVIGATION_LANDING_DATA } from "@/constants/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import HeroImage from "@/assets/hero_image.png";
import { Link } from "react-router-dom";

function LandingPage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="relative min-h-screen bg-[#EDFBFF]">
      {/* Header */}
      <header className="border-border/40 sticky top-0 z-10 bg-[#EDFBFF]/80 backdrop-blur-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Brand */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-2"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-400">
                <Bot className="text-primary-foreground h-5 w-5" />
              </div>
              <span className="text-foreground text-xl font-semibold">
                ALE<span className="text-blue-400">IA</span>
              </span>
            </motion.div>

            {/* Navigation Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden items-center gap-8 md:flex"
            >
              {NAVIGATION_LANDING_DATA.map((item) => (
                <a
                  key={item.id}
                  className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                  href={item.url}
                >
                  {item.title}
                </a>
              ))}
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center gap-3"
            >
              <Button
                size="sm"
                className="bg-blue-400 text-sm font-medium hover:bg-blue-500"
              >
                <Link to="/auth/login">Login</Link>
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="rounded-md p-2 transition-colors duration-200 hover:bg-slate-100"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <div className="relative h-6 w-6">
                  <Menu
                    className={`absolute inset-0 transition-all duration-200 ${
                      isMobileMenuOpen
                        ? "rotate-180 opacity-0"
                        : "rotate-0 opacity-100"
                    }`}
                  />
                  <X
                    className={`absolute inset-0 transition-all duration-200 ${
                      isMobileMenuOpen
                        ? "rotate-0 opacity-100"
                        : "rotate-180 opacity-0"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`absolute z-10 w-full overflow-hidden bg-white shadow-lg transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="px-8 py-4">
          <ul className="flex flex-col gap-4">
            {NAVIGATION_LANDING_DATA.map((nav, index) => (
              <li
                key={nav.id}
                className={`transform transition-all duration-300 ease-in-out ${
                  isMobileMenuOpen
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen
                    ? `${index * 100}ms`
                    : "0ms",
                }}
              >
                <a
                  href={nav.url}
                  className="text-muted-foreground hover:text-foreground block rounded-md px-2 py-2 text-sm font-medium transition-all duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {nav.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Hero Section */}
      <section id="product" className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-12">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="inline-flex">
                <Badge
                  variant="secondary"
                  className="gap-1.5 px-3 py-1.5 text-xs font-medium"
                >
                  <Sparkles className="h-3 w-3" />
                  AI-Powered Healthcare Assistant
                </Badge>
              </div>
              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
                  Your clinic's smartest{" "}
                  <span className="text-primary">AI secretary</span>
                </h1>
                <p className="text-muted-foreground max-w-xl text-lg leading-relaxed text-balance sm:text-xl">
                  Automate appointment scheduling, patient communications, and
                  administrative tasks. Save 15+ hours per week and focus on
                  what matters most—patient care.
                </p>
              </div>
              {/* CTA Buttons */}
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button size="lg" className="group text-base font-semibold">
                  Start Free Trial
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent text-base font-semibold"
                >
                  Watch Demo
                </Button>
              </div>
              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div>
                  <div className="text-foreground text-3xl font-bold">15+</div>
                  <div className="text-muted-foreground text-sm">
                    Hours saved weekly
                  </div>
                </div>
                <div>
                  <div className="text-foreground text-3xl font-bold">98%</div>
                  <div className="text-muted-foreground text-sm">
                    Accuracy rate
                  </div>
                </div>
                <div>
                  <div className="text-foreground text-3xl font-bold">
                    2.5k+
                  </div>
                  <div className="text-muted-foreground text-sm">
                    Clinics trust us
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Right Content */}
            <motion.div
              initial={{ x: 200, opacity: 0, rotate: 10 }}
              animate={{ x: 0, opacity: 1, rotate: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative hidden items-center justify-center lg:flex lg:h-[600px]"
            >
              <div className="relative w-full max-w-lg">
                <img
                  src={HeroImage}
                  alt="AI Assistant helping clinic secretary"
                  className="h-auto w-full drop-shadow"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        id="features"
        className="bg-muted/30 py-16 lg:py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge variant="secondary" className="mb-4">
              Features
            </Badge>
            <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Everything you need to run your clinic efficiently
            </h2>
            <p className="text-muted-foreground text-lg text-balance">
              Powerful AI automation that integrates seamlessly with your
              existing workflow
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-border/50 p-6 transition-shadow hover:shadow-lg">
              <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <Calendar className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-foreground mb-2 text-xl font-semibold">
                Smart Scheduling
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatically manage appointments, send reminders, and handle
                rescheduling requests 24/7.
              </p>
            </Card>

            <Card className="border-border/50 p-6 transition-shadow hover:shadow-lg">
              <div className="bg-accent/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <MessageSquare className="text-accent h-6 w-6" />
              </div>
              <h3 className="text-foreground mb-2 text-xl font-semibold">
                Patient Communication
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Handle patient inquiries via SMS, email, and chat with
                intelligent, context-aware responses.
              </p>
            </Card>

            <Card className="border-border/50 p-6 transition-shadow hover:shadow-lg">
              <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <Phone className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-foreground mb-2 text-xl font-semibold">
                Call Management
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Screen calls, take messages, and route urgent matters to the
                right person instantly.
              </p>
            </Card>

            <Card className="border-border/50 p-6 transition-shadow hover:shadow-lg">
              <div className="bg-accent/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <FileText className="text-accent h-6 w-6" />
              </div>
              <h3 className="text-foreground mb-2 text-xl font-semibold">
                Document Processing
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Organize patient records, insurance forms, and referrals with
                AI-powered categorization.
              </p>
            </Card>

            <Card className="border-border/50 p-6 transition-shadow hover:shadow-lg">
              <div className="bg-primary/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <Clock className="text-primary h-6 w-6" />
              </div>
              <h3 className="text-foreground mb-2 text-xl font-semibold">
                Time Optimization
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Reduce no-shows by 40% with intelligent reminder sequences and
                confirmation tracking.
              </p>
            </Card>

            <Card className="border-border/50 p-6 transition-shadow hover:shadow-lg">
              <div className="bg-accent/10 mb-4 flex h-12 w-12 items-center justify-center rounded-lg">
                <BarChart3 className="text-accent h-6 w-6" />
              </div>
              <h3 className="text-foreground mb-2 text-xl font-semibold">
                Analytics & Insights
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Track appointment trends, patient satisfaction, and operational
                efficiency in real-time.
              </p>
            </Card>
          </div>
        </div>
      </motion.section>

      {/* Benefits Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        id="why-aleia"
        className="py-16 lg:py-16"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="space-y-6">
              <Badge variant="secondary">Why ALEIA</Badge>
              <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
                Built specifically for healthcare professionals
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Unlike generic virtual assistants, ALEIA understands medical
                terminology, HIPAA compliance, and the unique workflows of
                healthcare practices.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 h-6 w-6 flex-shrink-0" />
                  <div>
                    <div className="text-foreground mb-1 font-semibold">
                      HIPAA Compliant
                    </div>
                    <div className="text-muted-foreground">
                      Enterprise-grade security for patient data protection
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 h-6 w-6 flex-shrink-0" />
                  <div>
                    <div className="text-foreground mb-1 font-semibold">
                      Easy Integration
                    </div>
                    <div className="text-muted-foreground">
                      Works with your existing EHR and practice management
                      software
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 h-6 w-6 flex-shrink-0" />
                  <div>
                    <div className="text-foreground mb-1 font-semibold">
                      24/7 Availability
                    </div>
                    <div className="text-muted-foreground">
                      Never miss a patient inquiry, even after hours
                    </div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle2 className="text-primary mt-0.5 h-6 w-6 flex-shrink-0" />
                  <div>
                    <div className="text-foreground mb-1 font-semibold">
                      Multilingual Support
                    </div>
                    <div className="text-muted-foreground">
                      Communicate with patients in their preferred language
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <Card className="border-border/50 p-8">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary/10 flex h-12 w-12 items-center justify-center rounded-full">
                      <Users className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <div className="text-foreground font-semibold">
                        Dr. Sarah Mitchell
                      </div>
                      <div className="text-muted-foreground text-sm">
                        Family Medicine Clinic
                      </div>
                    </div>
                  </div>
                  <blockquote className="text-foreground text-lg leading-relaxed">
                    "ALEIA has transformed our practice. We've reduced
                    administrative overhead by 60% and our patients love the
                    instant responses. It's like having three extra staff
                    members."
                  </blockquote>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="fill-primary h-5 w-5"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="bg-secondary text-secondary-foreground py-16 lg:py-24"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
              Ready to transform your clinic?
            </h2>
            <p className="text-secondary-foreground/80 text-lg text-balance">
              Join thousands of healthcare professionals who trust ALEIA to
              handle their administrative tasks. Start your free 14-day trial
              today—no credit card required.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                size="lg"
                variant="secondary"
                className="bg-background text-foreground hover:bg-background/90 text-base font-semibold"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent text-base font-semibold"
              >
                Schedule a Demo
              </Button>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="border-border/40 border-t py-12"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg">
                  <Calendar className="text-primary-foreground h-5 w-5" />
                </div>
                <span className="text-lg font-semibold">
                  ALE<span className="text-primary">IA</span>
                </span>
              </div>
              <p className="text-muted-foreground text-sm">
                AI-powered clinic management for modern healthcare
                professionals.
              </p>
            </div>
            <div>
              <h4 className="text-foreground mb-4 font-semibold">Product</h4>
              <ul className="text-muted-foreground space-y-2 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Pricing
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Security
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-foreground transition-colors"
                  >
                    Integrations
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-border/40 text-muted-foreground border-t pt-8 text-center text-sm">
            © 2025 ALEIA. All rights reserved.
          </div>
        </div>
      </motion.footer>
    </div>
  );
}

export default LandingPage;
