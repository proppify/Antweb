import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// Utility function to combine class names
const cn = (...classes) => classes.filter(Boolean).join(' ');
import {
  ArrowRight, Bot, Brain, CheckCircle, Code, Database, ExternalLink,
  Headphones, MessageSquare, Monitor, Rocket, Shield, ShoppingCart,
  Sparkles, Target, Workflow, Moon, Sun, BarChart3, Play, Users
} from "lucide-react";

export default function Index() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  // ----------------- DATA -----------------
  const features = [
    { icon: Workflow, title: "Visual Agent Flows", description: "Design agent behaviors and hand-offs in minutes." },
    { icon: Database, title: "Multi-source Knowledge", description: "Blend files, URLs, and structured data safely." },
    { icon: Brain, title: "Long-term Memory", description: "Recall context across sessions for better answers." },
    { icon: Code, title: "Embeddable Widget", description: "Drop into your site/app with a single snippet." },
    { icon: BarChart3, title: "Analytics", description: "Understand usage, outcomes, and latency at a glance." },
    { icon: Shield, title: "Security", description: "Auth, audit, and controls for serious teams." },
  ];

  const steps = [
    { icon: Target, title: "Pick a Template", desc: "Start from support, sales, or internal assistants." },
    { icon: Database, title: "Connect Data", desc: "Upload docs or wire APIs in a click." },
    { icon: MessageSquare, title: "Shape Dialogue", desc: "Tone, guardrails, tools, and goals." },
    { icon: Rocket, title: "Deploy", desc: "Embed anywhere and iterate live." },
  ];

  const useCases = [
    { id: "support", title: "Customer Support", desc: "Automate tier-1 and triage handoff.", icon: Headphones },
    { id: "leads", title: "Lead Qualification", desc: "Capture, score, and route leads.", icon: Target },
    { id: "automation", title: "Internal Automation", desc: "IT tickets, HR FAQs, SOP copilots.", icon: Workflow },
    { id: "ecommerce", title: "E-commerce", desc: "Guided shopping and order help.", icon: ShoppingCart },
    { id: "education", title: "Education", desc: "Tutors, assistants, and labs.", icon: Brain },
  ] as const;

  // ----------------- BACKGROUND BLOBS -----------------
  const blobs = useMemo(
    () => [
      { className: "left-[-10%] top-[-10%]", size: "h-[28rem] w-[28rem]" },
      { className: "right-[-10%] top-10", size: "h-[20rem] w-[20rem]" },
      { className: "left-1/2 bottom-[-15%] -translate-x-1/2", size: "h-[32rem] w-[32rem]" },
    ],
    []
  );

  return (
    <div className={cn("min-h-screen bg-background text-foreground", darkMode && "dark")}>
      <Header darkMode={darkMode} onToggle={() => setDarkMode((v) => !v)} />

      {/* HERO */}
      <section className="relative overflow-hidden pt-28 md:pt-36 pb-10 md:pb-16">
        {/* Glow blobs */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          {blobs.map((b, i) => (
            <motion.div
              key={i}
              className={cn("absolute blur-3xl opacity-20", b.className)}
              style={{
                background:
                  "radial-gradient(closest-side, rgba(79,70,229,0.3), rgba(79,70,229,0.0))",
              }}
              initial={{ scale: 0.8, opacity: 0.1 }}
              animate={{ scale: 1, opacity: 0.2 }}
              transition={{ duration: 1.2, delay: i * 0.1 }}
            >
              <div className={cn(b.size)} />
            </motion.div>
          ))}
          {/* grid overlay */}
          <div className="absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_20%,white,transparent)]">
            <GridBG />
          </div>
        </div>

        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full ring-1 ring-indigo-600/20 bg-indigo-600/10 px-4 py-1.5 mb-6"
          >
            <Sparkles className="h-4 w-4 text-indigo-600" />
            <span className="text-sm text-indigo-700 dark:text-indigo-300 font-medium">New • Agentic flow designer</span>
          </motion.div>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
          >
            Build AI Agents that{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-indigo-400 bg-clip-text text-transparent">
              work like teams
            </span>
          </motion.h1>

          <motion.p
            className="mx-auto mt-6 max-w-3xl text-lg md:text-2xl text-muted-foreground"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            Design flows, connect knowledge, add tools, and deploy in minutes—no code required.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.25 }}
          >
            <Button
              size="lg"
              className="rounded-xl px-8 py-6 bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-semibold"
              onClick={() => window.analytics?.track?.("cta_try_now")}
            >
              Try Ant Free <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="rounded-xl px-8 py-6 text-lg font-semibold"
              onClick={() => document.getElementById("how-it-works")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Play className="mr-2 h-5 w-5" /> See How It Works
            </Button>
          </motion.div>

          {/* HERO MEDIA */}
          <motion.div
            className="mx-auto mt-12 md:mt-16 max-w-6xl"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <GlassPanel className="p-2">
              <div className="aspect-[16/9] w-full rounded-[1.2rem] bg-gradient-to-br from-indigo-600/10 to-indigo-400/5 grid place-items-center">
                <Monitor className="h-16 w-16 text-indigo-600" />
                <span className="sr-only">Product preview</span>
              </div>
            </GlassPanel>
          </motion.div>

          {/* SOCIAL PROOF */}
          <motion.div
            className="mt-12 md:mt-16 text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
          >
            <p className="text-sm mb-6">Trusted by modern teams</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              <LogoStub />
              <LogoStub />
              <LogoStub />
              <LogoStub />
            </div>
          </motion.div>
        </div>
      </section>

      {/* QUICK PRODUCT STRIP */}
      <Section className="py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { title: "Agent Flows", icon: Workflow, text: "Orchestrate multi-step agents." },
            { title: "Knowledge", icon: Database, text: "Ground with files, URLs & APIs." },
            { title: "Widget", icon: Code, text: "Embed anywhere with one snippet." },
          ].map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
            >
              <Card className="overflow-hidden border group hover:shadow-lg transition-all duration-300">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 group-hover:bg-indigo-600/20 transition-colors">
                      <s.icon className="h-6 w-6 text-indigo-600" />
                    </span>
                    <CardTitle className="text-lg">{s.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-base">{s.text}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section id="how-it-works" title="How it works" subtitle="From idea to fully-deployed agents" className="py-20 md:py-24 bg-muted/30">
        <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="text-center group"
            >
              <div className="relative mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600/10 group-hover:bg-indigo-600/20 transition-all duration-300 group-hover:scale-110">
                <s.icon className="h-8 w-8 text-indigo-600" />
                <Badge className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-xs">{i + 1}</Badge>
              </div>
              <h3 className="font-bold text-lg mb-2 group-hover:text-indigo-600 transition-colors">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FEATURES */}
      <Section title="Everything you need" subtitle="A complete toolkit for agentic apps" className="py-20 md:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: i * 0.04 }}
            >
              <Card className="group relative border overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-indigo-600/5 to-transparent" />
                <CardHeader className="pb-3 relative">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600/10 group-hover:bg-indigo-600/20 transition-colors">
                    <f.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-indigo-600 transition-colors">{f.title}</CardTitle>
                  <CardDescription className="text-base">{f.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* USE CASES */}
      <Section title="Use cases" subtitle="Powerful outcomes, real teams" className="py-20 md:py-24 bg-muted/30">
        <Tabs defaultValue="support" className="max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-12 bg-muted/60 p-2 rounded-2xl h-auto">
            {useCases.map((u) => (
              <TabsTrigger
                key={u.id}
                value={u.id}
                className="text-xs md:text-sm rounded-xl data-[state=active]:bg-indigo-600 data-[state=active]:text-white px-3 py-2.5 font-medium"
              >
                <u.icon className="h-4 w-4 mr-1 md:mr-2" />
                <span className="hidden sm:inline">{u.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {useCases.map((u) => (
            <TabsContent key={u.id} value={u.id}>
              <Card className="border bg-background/80 backdrop-blur shadow-lg">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600/10">
                    <u.icon className="h-8 w-8 text-indigo-600" />
                  </div>
                  <CardTitle className="text-2xl md:text-3xl">{u.title}</CardTitle>
                  <CardDescription className="text-lg md:text-xl mt-3">{u.desc}</CardDescription>
                </CardHeader>
                <CardContent className="text-center pb-8">
                  <Button size="lg" className="rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-3 text-base font-semibold">
                    Try Demo <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </Section>

      {/* WHY ANT */}
      <Section title='Why "Ant"?' subtitle="Agents that collaborate like teams" className="py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <ul className="space-y-6">
              {["Modular Intelligence", "Seamless Collaboration", "Infinite Scalability", "Collective Intelligence"].map(
                (x, i) => (
                  <motion.li
                    key={x}
                    initial={{ opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-center gap-4"
                  >
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg font-medium">{x}</span>
                  </motion.li>
                )
              )}
            </ul>
          </div>
          <GlassPanel className="p-8">
            <div className="h-64 md:h-80 rounded-[1.2rem] grid place-items-center bg-gradient-to-br from-indigo-600/10 to-indigo-400/5">
              <div className="text-center">
                <Users className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                <p className="text-xl font-semibold">AI Agents Working Together</p>
              </div>
            </div>
          </GlassPanel>
        </div>
      </Section>

      {/* CTA */}
      <section className="relative py-20 md:py-24">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 [mask-image:radial-gradient(60%_70%_at_50%_50%,white,transparent)]">
          <GridBG />
        </div>
        <div className="container mx-auto px-4">
          <Card className="overflow-hidden border shadow-xl max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/10 to-indigo-400/5" />
            <div className="relative p-8 md:p-16 text-center">
              <h2 className="text-3xl md:text-5xl font-bold mb-4">Ready to launch your agents?</h2>
              <p className="text-lg md:text-xl text-muted-foreground mb-8">
                Start free. No credit card. Deploy to your site in minutes.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="px-8 py-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-semibold">
                  Start for Free <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="px-8 py-6 rounded-xl text-lg font-semibold">
                  Book a Demo
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ----------------- UI HELPERS ----------------- */

function Header({ darkMode, onToggle }: { darkMode: boolean; onToggle: () => void }) {
  return (
    <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-indigo-600 grid place-items-center text-white font-bold text-lg group-hover:scale-105 transition-transform">
            A
          </div>
          <span className="font-bold text-2xl">Ant</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how-it-works" className="text-sm font-medium hover:text-indigo-600 transition-colors">How it works</a>
          <a href="#features" className="text-sm font-medium hover:text-indigo-600 transition-colors">Features</a>
          <a href="#pricing" className="text-sm font-medium hover:text-indigo-600 transition-colors">Pricing</a>
          <a href="#contact" className="text-sm font-medium hover:text-indigo-600 transition-colors">Contact</a>
        </nav>
        <div className="flex items-center gap-3">
          <Button variant="ghost" size="icon" onClick={onToggle} className="rounded-full hover:scale-105 transition-transform">
            {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle dark mode</span>
          </Button>
          <Button variant="outline" size="sm" className="rounded-lg font-medium">Sign in</Button>
        </div>
      </div>
    </header>
  );
}

function Section({
  id, title, subtitle, children, className = ""
}: React.PropsWithChildren<{ id?: string; title?: string; subtitle?: string; className?: string }>) {
  return (
    <section id={id} className={className}>
      <div className="container mx-auto px-4">
        {(title || subtitle) && (
          <div className="mb-12 text-center">
            {title && <h2 className="text-3xl md:text-5xl font-bold mb-4">{title}</h2>}
            {subtitle && <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

function GlassPanel({ children, className = "" }: React.PropsWithChildren<{ className?: string }>) {
  return (
    <div className={`rounded-2xl border border-border bg-background/70 backdrop-blur-sm shadow-xl ${className}`}>
      {children}
    </div>
  );
}

function GridBG() {
  return (
    <div
      className="absolute inset-0 opacity-30"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(79,70,229,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(79,70,229,0.1) 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }}
    />
  );
}

function LogoStub() {
  return (
    <div className="h-6 w-24 rounded-md bg-muted/60" aria-hidden />
  );
}

function Footer() {
  return (
    <footer id="contact" className="bg-muted/40 py-16 mt-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-indigo-600 grid place-items-center text-white font-bold text-lg">A</div>
              <span className="font-bold text-2xl">Ant</span>
            </div>
            <p className="text-muted-foreground text-base leading-relaxed">Build Smart AI Agents That Work Like Teams</p>
          </div>
          <FooterCol title="Features" items={["Agent Templates","Visual Flow Designer","Multi-source KB","Analytics"]} />
          <FooterCol title="Company" items={["About Us","Partner with Us","Careers","Press"]} />
          <FooterCol title="Contact" items={["Support","Terms","Privacy","support@theant.space"]} />
        </div>
        <div className="mt-12 border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Ant. All rights reserved. Building the future of AI collaboration.</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="font-bold text-lg mb-6">{title}</h3>
      <ul className="space-y-3 text-muted-foreground">
        {items.map((x) => (
          <li key={x}>
            <a href="#" className="hover:text-indigo-600 transition-colors text-sm">{x}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}